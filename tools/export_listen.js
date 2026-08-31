/* 导出听力语料与配音元数据为 JSON，供 Python 音频生成脚本读取。
 * 用法：node tools/export_listen.js
 * 输出：tools/_listen_export.json（中间产物，可随时重新生成）
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const FILES = [
  'js/listening_meta.js',
  'js/data.js',
  'js/realexam.js',
  'js/bank2.js',
  'js/bank3.js',
  'js/bank4.js'
];

const ctx = vm.createContext({ console, window: {} });
for (const f of FILES) {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) continue;
  vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f });
}

const DB = vm.runInContext('DB', ctx);
const META = vm.runInContext('window.LISTEN_META', ctx);

const listenings = DB.listenings.map(l => ({
  id: l.id,
  exam: l.exam,
  label: l.label || '',
  title: l.title,
  sentences: l.sentences.map(s => s.en),
  questions: (l.questions || []).map(q => ({
    q: q.q,
    options: q.options,
    answer: q.answer
  }))
}));

const out = { exportedAt: new Date().toISOString(), meta: META, listenings };
fs.writeFileSync(path.join(__dirname, '_listen_export.json'), JSON.stringify(out, null, 1), 'utf8');

console.log('已导出 ' + listenings.length + ' 篇听力，共 ' +
  listenings.reduce((a, l) => a + l.sentences.length, 0) + ' 句');
