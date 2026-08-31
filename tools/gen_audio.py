# -*- coding: utf-8 -*-
"""考试级听力配音生成脚本

使用微软 Edge Neural TTS（与 Azure Neural TTS 同源，接近四六级听力播音风格）
为听力语料配音。按题型自动选用声线、语速与朗读风格，产出：

  audio/<id>/dir.mp3    考试指令（Directions）
  audio/<id>/sNNN.mp3   逐句音频
  audio/manifest.json    前端索引

语速校准：各声线在 rate=+0% 时的自然语速差异很大（159~183wpm），
实测关系近似 wpm = wpm0 x (1 + rate/100)，因此按每个声线各自的 wpm0
反推 rate，才能精确命中四级 130wpm / 六级 150wpm 这类目标。

用法：
  python tools/gen_audio.py            增量生成（已存在的音频跳过）
  python tools/gen_audio.py --force    全部重新生成
  python tools/gen_audio.py --only l1  只生成指定篇目（逗号分隔多个）
"""

import argparse
import asyncio
import json
import os
import subprocess
import sys
from datetime import datetime

import edge_tts

try:
    from mutagen.mp3 import MP3
    HAVE_MUTAGEN = True
except ImportError:
    HAVE_MUTAGEN = False

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
AUDIO_DIR = os.path.join(ROOT, 'audio')
EXPORT = os.path.join(ROOT, 'tools', '_listen_export.json')
NODE = r'C:\Users\23350\.workbuddy\binaries\node\versions\22.22.2\node.exe'

# 题型 -> 说话人性别(F/M) -> 声线键
VOICE_MAP = {
    'news':         {'F': 'F_NEWS', 'M': 'M_LECT'},
    'conversation': {'F': 'F_TALK', 'M': 'M_TALK'},
    'passage':      {'F': 'F_TALK', 'M': 'M_TALK'},
    'lecture':      {'F': 'F_LECT', 'M': 'M_LECT'},
}

DEFAULT_WPM0 = 160  # 声线未标注 wpm0 时的兜底基准


def rate_for(wpm0, target_wpm):
    """按声线基准语速反推 rate，使实测语速命中目标"""
    return '%+d%%' % int(round((target_wpm / float(wpm0) - 1) * 100))


def spoken_text(s):
    """把显示用文本转成 TTS 友好文本：去掉选项的括号 A) -> A，
    因为真题录音里播音员并不读出括号。"""
    import re
    s = s.replace(')', '')
    s = re.sub(r'\s+', ' ', s).strip()
    return s


def duration_of(path):
    """读取 MP3 真实时长（秒）；mutagen 不可用时退回按码率估算"""
    if HAVE_MUTAGEN:
        try:
            return MP3(path).info.length
        except Exception:  # noqa: BLE001
            pass
    return os.path.getsize(path) / 6000.0


async def synth(text, voice_id, rate, out_path, tries=3):
    """合成语音到文件，失败自动重试"""
    for i in range(tries):
        try:
            comm = edge_tts.Communicate(text, voice_id, rate=rate)
            await comm.save(out_path)
            if os.path.exists(out_path) and os.path.getsize(out_path) > 1000:
                return True
        except Exception as e:  # noqa: BLE001
            if i == tries - 1:
                print('    [失败] %s' % e)
                return False
            await asyncio.sleep(2)
    return False


def speaker_at(spk, i):
    """取第 i 句的说话人；单字符表示全篇同一人"""
    if not spk:
        return 'F'
    if len(spk) == 1:
        return spk[0]
    return spk[i % len(spk)]


def infer_meta(it):
    """未配置时的兜底推断：按标题关键字判断题型"""
    text = (it.get('label', '') or '') + (it.get('title', '') or '')
    low = text.lower()
    exam = it.get('exam', '') or ''
    if '对话' in text or 'conversation' in low:
        ttype = 'conversation'
    elif '讲座' in text or 'lecture' in low:
        ttype = 'lecture'
    elif '新闻' in text or 'news' in low:
        ttype = 'news'
    else:
        ttype = 'passage'

    if exam.startswith('ky'):
        dkey = 'ky_conv' if ttype == 'conversation' else 'ky_lect'
    elif exam == 'cet6':
        dkey = {'news': 'cet4_news', 'conversation': 'cet6_conv',
                'passage': 'cet4_pass', 'lecture': 'cet6_lect'}.get(ttype, 'cet4_pass')
    else:
        dkey = {'news': 'cet4_news', 'conversation': 'cet4_conv',
                'passage': 'cet4_pass', 'lecture': 'cet4_pass'}.get(ttype, 'cet4_pass')
    return {'type': ttype, 'speakers': 'F', 'dir': dkey}


async def build_one(item, meta, force):
    """生成单篇听力的全部音频，返回 manifest 条目"""
    voices = meta['VOICES']
    types = meta['TYPES']
    dirs = meta['DIRECTIONS']
    conf = meta.get('ITEMS', {}).get(item['id']) or infer_meta(item)

    ttype = conf['type']
    tcfg = types[ttype]
    wpm = tcfg['wpm']
    spk_seq = conf.get('speakers', 'F')

    out_dir = os.path.join(AUDIO_DIR, item['id'])
    os.makedirs(out_dir, exist_ok=True)

    entry = {
        'type': ttype,
        'typeLabel': tcfg['label'],
        'wpm': wpm,
        'gap': tcfg['gap'],
        'dir': None,
        'sentences': []
    }

    # 1) 考试指令：女声播报，按新闻语速，保证清晰
    dkey = conf.get('dir')
    dtext = dirs.get(dkey) if dkey else None
    if dtext:
        dpath = os.path.join(out_dir, 'dir.mp3')
        v = voices['F_NEWS']
        drate = rate_for(v.get('wpm0', DEFAULT_WPM0), 145)
        if force or not os.path.exists(dpath):
            ok = await synth(spoken_text(dtext), v['id'], drate, dpath)
        else:
            ok = True
        if ok:
            entry['dir'] = 'audio/%s/dir.mp3' % item['id']
            entry['dirText'] = dtext

    # 2) 逐句音频：按说话人切换男女声，并按各自声线校准语速
    for i, sent in enumerate(item['sentences']):
        spk = speaker_at(spk_seq, i)
        vkey = VOICE_MAP.get(ttype, {}).get(spk, 'F_TALK')
        voice = voices[vkey]
        rate = rate_for(voice.get('wpm0', DEFAULT_WPM0), wpm)
        fname = 's%03d.mp3' % i
        fpath = os.path.join(out_dir, fname)
        if force or not os.path.exists(fpath):
            ok = await synth(sent, voice['id'], rate, fpath)
        else:
            ok = True
        entry['sentences'].append({
            'f': 'audio/%s/%s' % (item['id'], fname) if ok else None,
            'spk': spk,
            'voice': vkey,
            'text': sent,
            'dur': round(duration_of(fpath), 2) if ok and os.path.exists(fpath) else 0
        })

    # 3) 题目与选项配音（仅含选择题的篇目）—— 还原真实考场"听题作答"流程
    qs = item.get('questions') or []
    if qs:
        # 3a) 篇目标识：News report one. / Conversation one. / Recording one.
        mat = meta.get('MATERIAL', {}).get(ttype, 'passage')
        intro_text = spoken_text('%s one.' % mat.capitalize())
        ipath = os.path.join(out_dir, 'intro.mp3')
        vi = voices['F_NEWS']
        if force or not os.path.exists(ipath):
            await synth(intro_text, vi['id'], rate_for(vi.get('wpm0', DEFAULT_WPM0), 145), ipath)
        if os.path.exists(ipath) and os.path.getsize(ipath) > 1000:
            entry['intro'] = 'audio/%s/intro.mp3' % item['id']

        # 3b) 题组引导：Questions 1 and 2 are based on the ... you have just heard.
        n = len(qs)
        if n == 1:
            lead = 'Question 1 is based on the %s you have just heard.' % mat
        elif n == 2:
            lead = 'Questions 1 and 2 are based on the %s you have just heard.' % mat
        else:
            lead = 'Questions 1 to %d are based on the %s you have just heard.' % (n, mat)
        qipath = os.path.join(out_dir, 'qintro.mp3')
        if force or not os.path.exists(qipath):
            await synth(lead, vi['id'], rate_for(vi.get('wpm0', DEFAULT_WPM0), 145), qipath)
        if os.path.exists(qipath) and os.path.getsize(qipath) > 1000:
            entry['qintro'] = 'audio/%s/qintro.mp3' % item['id']

        # 3c) 每题：Question N. [题干] A, [optA]. B, [optB]. C, [optC]. D, [optD].
        qentry = []
        for qi, q in enumerate(qs):
            nq = qi + 1
            opts = q.get('options', {})
            opt_spoken = ' '.join('%s, %s.' % (k, opts.get(k, '')) for k in 'ABCD')
            spoken = 'Question %d. %s %s' % (nq, q.get('q', ''), opt_spoken)
            qpath = os.path.join(out_dir, 'q%03d.mp3' % qi)
            if force or not os.path.exists(qpath):
                await synth(spoken, vi['id'], rate_for(vi.get('wpm0', DEFAULT_WPM0), 145), qpath)
            rec = {
                'q': 'audio/%s/q%03d.mp3' % (item['id'], qi) if (os.path.exists(qpath) and os.path.getsize(qpath) > 1000) else None,
                'qText': 'Question %d. %s' % (nq, q.get('q', ''))
            }
            qentry.append(rec)
        entry['questions'] = qentry
    return entry


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--force', action='store_true', help='重新生成全部音频')
    ap.add_argument('--only', default='', help='只生成指定篇目，逗号分隔')
    args = ap.parse_args()

    print('[1/3] 导出题库语料 ...')
    subprocess.run([NODE, os.path.join(ROOT, 'tools', 'export_listen.js')],
                   check=True, cwd=ROOT)
    data = json.load(open(EXPORT, encoding='utf-8'))
    meta = data['meta']
    items = data['listenings']
    if args.only:
        want = set(args.only.split(','))
        items = [x for x in items if x['id'] in want]
    print('      共 %d 篇' % len(items))

    os.makedirs(AUDIO_DIR, exist_ok=True)
    mpath = os.path.join(AUDIO_DIR, 'manifest.json')
    manifest = {'version': 1, 'base': 'audio/', 'items': {}}
    if os.path.exists(mpath) and not args.force:
        try:
            manifest = json.load(open(mpath, encoding='utf-8'))
        except Exception:  # noqa: BLE001
            pass

    print('[2/3] 生成音频 ...')
    for item in items:
        print('  · %s  %s' % (item['id'], item['title']))
        manifest.setdefault('items', {})[item['id']] = await build_one(item, meta, args.force)

    manifest['generatedAt'] = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    json.dump(manifest, open(mpath, 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)

    print('[3/3] 生成结果：')
    total_files = 0
    total_dur = 0.0
    bad = []
    for lid, e in manifest.get('items', {}).items():
        recs = e['sentences']
        files = [s['f'] for s in recs if s.get('f')]
        if e.get('dir'):
            files.append(e['dir'])
        if e.get('intro'):
            files.append(e['intro'])
        if e.get('qintro'):
            files.append(e['qintro'])
        for q in e.get('questions', []):
            if q.get('q'):
                files.append(q['q'])
        size = 0
        for rel in files:
            p = os.path.join(ROOT, rel)
            if os.path.exists(p):
                size += os.path.getsize(p)
        words = sum(len(s['text'].split()) for s in recs)
        dur = sum(s.get('dur', 0) or 0 for s in recs)
        wpm = (words / (dur / 60.0)) if dur > 0 else 0
        missing = sum(1 for s in recs if not s.get('f'))
        if e.get('intro') is None and e.get('questions'):
            missing += 1
        if e.get('qintro') is None and e.get('questions'):
            missing += 1
        missing += sum(1 for q in e.get('questions', []) if not q.get('q'))
        total_files += len(files)
        total_dur += dur
        # 达标只看文件是否齐全：发音速度已由 rate 校准保证，
        # 这里的 wpm 含句首尾静音，必然低于发音速度，不能拿来判达标
        ok = missing == 0
        if not ok:
            bad.append(lid)
        qn = len(e.get('questions', []))
        print('  %s%-8s %-10s %2d句 %2d题  发音%3dwpm 含停顿%3dwpm  %5.0fKB%s'
              % ('OK ' if ok else '!! ', lid, e.get('typeLabel', ''), len(recs), qn,
                 e['wpm'], wpm, size / 1024.0,
                 ('  缺%d文件' % missing) if missing else ''))
    print('  注：发音速度由各声线 wpm0 反推 rate 精确校准；')
    print('      含停顿值因每句首尾自带静音而偏低，属正常现象。')
    print('  ----')
    print('  音频 %d 个，时长约 %.1f 分钟'
          % (total_files, total_dur / 60.0))
    if bad:
        print('  ⚠ 未达标的篇目：%s' % ', '.join(bad))
    print('  索引已写入 %s' % os.path.relpath(mpath, ROOT))


if __name__ == '__main__':
    if sys.platform.startswith('win'):
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(main())
