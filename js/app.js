/* ============================================================
 * 备考助手 主逻辑（SPA，无框架，localStorage 持久化）
 * ============================================================ */

const EXAM_NAMES = { cet4: 'CET-4', cet6: 'CET-6', ky1: '考研英一', ky2: '考研英二' };
const LEVEL_NAMES = { 1: '基础', 2: '进阶', 3: '冲刺' };
const STORE_KEY = 'kaobao_state_v1';

/* ---------- 状态 ---------- */
const defaultState = {
  exam: 'cet4',
  goalDate: '',
  daily: { read: 1, trans: 1, writ: 0, listen: 3, words: 10 },
  history: {},      // {'2026-08-29': {readDone, readCorrect, readTotal, transDone, writDone, listenDone, wordsDone}}
  wrongBook: [],    // {id, articleId, qIndex, userAns, correct, time}
  vocab: {},        // {word: {added, box, next}}
  done: {},         // 题目完成标记: {readingDone: {articleId: true}, transDone: {id: true}, writDone:{id:true}}
};

function loadState() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) return Object.assign(JSON.parse(JSON.stringify(defaultState)), JSON.parse(raw));
  } catch (e) { /* ignore */ }
  return JSON.parse(JSON.stringify(defaultState));
}
let S = loadState();
function save() { localStorage.setItem(STORE_KEY, JSON.stringify(S)); }

/* ---------- 题库管理：内置题库 + 自定义（导入）题库 ---------- */
const BANK_KEY = 'kaobao_bank_v1';
const BANK_SECTIONS = ['articles', 'translations', 'writings', 'listenings', 'vocab'];

function mergeBank(bank) {
  let n = 0;
  BANK_SECTIONS.forEach(k => {
    if (!Array.isArray(bank[k])) return;
    bank[k].forEach(item => {
      const key = (k === 'vocab') ? 'word' : 'id';
      if (!item || !item[key]) return;
      const idx = DB[k].findIndex(x => x[key] === item[key]);
      if (idx >= 0) DB[k][idx] = item; else DB[k].push(item);
      n++;
    });
  });
  return n;
}
function loadCustomBank() {
  try {
    const raw = localStorage.getItem(BANK_KEY);
    if (raw) return mergeBank(JSON.parse(raw));
  } catch (e) { /* 题库文件损坏则忽略 */ }
  return 0;
}
function saveCustomBank(bank) { localStorage.setItem(BANK_KEY, JSON.stringify(bank)); }
function clearCustomBank() { localStorage.removeItem(BANK_KEY); }
function customBankSize() {
  try {
    const raw = localStorage.getItem(BANK_KEY);
    if (!raw) return 0;
    return BANK_SECTIONS.reduce((s, k) => s + (Array.isArray(JSON.parse(raw)[k]) ? JSON.parse(raw)[k].length : 0), 0);
  } catch (e) { return 0; }
}
function bankTemplate() {
  return {
    articles: [{
      id: 'my-r1', exam: 'cet4', level: 2, levelName: '进阶',
      title: '示例文章标题', topic: '话题', source: '来源',
      paragraphs: [{ en: 'English paragraph...', zh: '中文译文...' }],
      longSentences: [{
        text: 'Long sentence here.',
        structure: [{ role: '主句', part: '...', explain: '...' }],
        note: '拆解提示'
      }],
      questions: [{
        q: '题目？', options: { A: '..', B: '..', C: '..', D: '..' }, answer: 'B', locate: 1,
        analysis: { A: '干扰项分析', C: '干扰项分析', D: '干扰项分析' }
      }]
    }],
    translations: [{
      id: 'my-t1', exam: 'cet4', type: 'cn2en', label: 'CET-4 段落翻译',
      topic: '话题', source: '原文', reference: '参考译文',
      keywords: ['关键词1', '关键词2'],
      commonErrors: ['常见错误提示']
    }],
    writings: [{
      id: 'my-w1', genre: '议论文', exam: 'cet4', label: '标签',
      topic: '题目', prompt: '写作要求', framework: ['框架1'], patterns: ['句型1'],
      wordRange: [120, 180]
    }],
    listenings: [{
      id: 'my-l1', exam: 'cet4', label: '标签', title: '标题',
      sentences: [{ en: 'Sentence.', zh: '译文。' }],
      blanks: [{ text: 'Sentence with {{word}}.', answer: 'word', hint: '提示' }]
    }],
    vocab: [{ word: 'example', pos: 'n.', meaning: '例子', exam: 'cet4', example: 'An example sentence.' }]
  };
}

function today() { return new Date().toISOString().slice(0, 10); }
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function hash(str) { let h = 0; for (let i = 0; i < str.length; i++) { h = (h * 31 + str.charCodeAt(i)) | 0; } return Math.abs(h); }

function rec(key, delta) {
  const d = today();
  if (!S.history[d]) S.history[d] = { readDone: 0, readCorrect: 0, readTotal: 0, transDone: 0, writDone: 0, listenDone: 0, listenQuiz: 0, listenQuizTotal: 0, wordsDone: 0 };
  S.history[d][key] = (S.history[d][key] || 0) + delta;
  save(); renderNavBadges();
}

/* ---------- 每日任务 ---------- */
function dailyTasks() {
  const d = S.daily;
  return [
    { key: 'readDone', goal: d.read, label: `阅读 ${d.read} 篇`, unit: '篇' },
    { key: 'transDone', goal: d.trans, label: `翻译 ${d.trans} 题`, unit: '题' },
    { key: 'writDone', goal: d.writ, label: `写作 ${d.writ} 篇`, unit: '篇' },
    { key: 'listenDone', goal: d.listen, label: `精听 ${d.listen} 句`, unit: '句' },
    { key: 'wordsDone', goal: d.words, label: `复习生词 ${d.words} 个`, unit: '个' },
  ];
}
function taskProgress() {
  const h = S.history[today()] || {};
  return dailyTasks().map(t => ({ ...t, done: Math.min(h[t.key] || 0, t.goal), total: t.goal }));
}
function dailyPush() {
  const pool = DB.articles.filter(a => a.exam === S.exam);
  if (!pool.length) return DB.articles[0];
  return pool[hash(today() + S.exam) % pool.length];
}

/* ---------- 生词本（Leitner 简化版） ---------- */
function dueWords() {
  const t = today();
  return Object.keys(S.vocab).filter(w => (S.vocab[w].next || '') <= t);
}
function addWord(word) {
  if (!S.vocab[word]) S.vocab[word] = { added: today(), box: 1, next: today() };
  save();
}
function removeWord(word) { delete S.vocab[word]; save(); }
function reviewWord(word, known) {
  const v = S.vocab[word];
  if (!v) return;
  if (known) { v.box = Math.min(v.box + 1, 5); } else { v.box = 1; }
  const gaps = [1, 2, 4, 7, 15];
  const dt = new Date(); dt.setDate(dt.getDate() + gaps[v.box - 1]);
  v.next = dt.toISOString().slice(0, 10);
  rec('wordsDone', 1); save();
}

/* ============================================================
 * 视图渲染
 * ============================================================ */
const app = document.getElementById('app');

const VIEWS = {};
function go(name, param) { location.hash = '#' + name + (param ? '/' + param : ''); }
function parseHash() { const p = (location.hash || '#home').slice(1).split('/'); return { view: p[0] || 'home', param: p[1] || '' }; }

function route() {
  const { view, param } = parseHash();
  if (view !== 'article' && document.body.classList.contains('reading-mode')) {
    document.body.classList.remove('reading-mode');
  }
  document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('active', a.dataset.view === view));
  (VIEWS[view] || VIEWS.home)(param);
  window.scrollTo(0, 0);
  rmUpdateFloat();
}
window.addEventListener('hashchange', route);

/* ---------- 首页 ---------- */
VIEWS.home = function () {
  const push = dailyPush();
  const tasks = taskProgress();
  const due = dueWords();
  const wrongCount = S.wrongBook.length;
  const daysLeft = S.goalDate ? Math.ceil((new Date(S.goalDate) - new Date()) / 86400000) : null;

  app.innerHTML = `
    <div class="hero">
      <div>
        <h1>今日备考 · ${EXAM_NAMES[S.exam]}</h1>
        <p class="sub">${daysLeft != null ? `距目标日期 <b>${esc(S.goalDate)}</b> 还有 <b class="accent">${daysLeft}</b> 天 · ` : ''}${today()}</p>
      </div>
      <div class="hero-right">
        ${due.length ? `<a class="pill warn" href="#review">🔔 生词复习提醒：${due.length} 个到期</a>` : `<span class="pill ok">✓ 生词复习已清空</span>`}
        ${wrongCount ? `<a class="pill warn" href="#wrong">📕 错题待重做：${wrongCount} 题</a>` : `<span class="pill ok">✓ 错题本已清空</span>`}
      </div>
    </div>

    <div class="card">
      <h2>✅ 今日任务</h2>
      <div class="task-grid">
        ${tasks.map(t => `
          <div class="task ${t.done >= t.total ? 'done' : ''}">
            <div class="task-label">${t.label}</div>
            <div class="bar"><div class="bar-fill" style="width:${t.total ? Math.round(t.done / t.total * 100) : 100}%"></div></div>
            <div class="task-num">${t.done}/${t.total}</div>
          </div>`).join('')}
      </div>
      ${tasks.every(t => t.total === 0 || t.done >= t.total) ? '<p class="ok-msg">🎉 今日任务已全部完成，可以收工了！</p>' : ''}
    </div>

    <div class="card">
      <h2>📨 每日推送阅读</h2>
      <p class="muted">根据你选择的考试（${EXAM_NAMES[S.exam]}）自动匹配难度文章，文末附参考译文</p>
      <div class="art-headline">
        <div>
          <span class="tag">${LEVEL_NAMES[push.level]}</span> <b>${esc(push.title)}</b>
          <span class="muted"> · ${esc(push.topic)} · ${esc(push.source)}</span>
        </div>
        <button class="btn" onclick="go('article','${push.id}')">开始阅读 →</button>
      </div>
    </div>

    <div class="quick-grid">
      <a class="quick" href="#reading">📖 阅读练习</a>
      <a class="quick" href="#trans">🔤 翻译训练</a>
      <a class="quick" href="#writing">✍️ 写作批改</a>
      <a class="quick" href="#listening">🎧 听力精听</a>
    </div>`;
};

/* ---------- 阅读 ---------- */
let readingFilter = { level: 0 };

VIEWS.reading = function () {
  let list = DB.articles.filter(a => a.exam === S.exam);
  if (readingFilter.level) list = list.filter(a => a.level === readingFilter.level);
  const doneMap = S.done.readingDone || {};

  app.innerHTML = `
    <div class="page-head">
      <h1>📖 阅读练习 · ${EXAM_NAMES[S.exam]}</h1>
      <div class="filters">
        <button class="chip ${readingFilter.level === 0 ? 'on' : ''}" onclick="setLevel(0)">全部难度</button>
        <button class="chip ${readingFilter.level === 1 ? 'on' : ''}" onclick="setLevel(1)">基础</button>
        <button class="chip ${readingFilter.level === 2 ? 'on' : ''}" onclick="setLevel(2)">进阶</button>
        <button class="chip ${readingFilter.level === 3 ? 'on' : ''}" onclick="setLevel(3)">冲刺</button>
      </div>
    </div>
    <p class="muted">共 ${list.length} 篇。点击文章进入：支持计时训练、长难句拆解（点击句首带 🔍 标记的句子）、题干定位与干扰项分析。</p>
    <div class="list">
      ${list.map(a => `
        <div class="list-item">
          <div>
            <span class="tag lv${a.level}">${LEVEL_NAMES[a.level]}</span>
            ${doneMap[a.id] ? '<span class="tag ok">已练习</span>' : ''}
            <b>${esc(a.title)}</b>
            <div class="muted">${esc(a.topic)} · ${a.questions.length} 题 · 考点：${(a.tags || []).map(esc).join('、') || '—'}</div>
            <div class="muted">${esc(a.source)}</div>
          </div>
          <button class="btn" onclick="go('article','${a.id}')">进入</button>
        </div>`).join('') || '<p class="muted">该难度暂无文章，请切换考试类型或在设置中更换考试。</p>'}
    </div>`;
};
function setLevel(l) { readingFilter.level = l; VIEWS.reading(); }

/* ---------- 文章详情（计时/长难句/答题） ---------- */
let timer = { sec: 0, handle: null };

VIEWS.article = function (id) {
  const a = DB.articles.find(x => x.id === id);
  if (!a) return go('reading');
  clearInterval(timer.handle); timer.sec = 0;
  for (const k of Object.keys(answers)) delete answers[k];

  app.innerHTML = `
    <a class="back" href="#reading">← 返回阅读列表</a>
    <div class="page-head">
      <h1>${esc(a.title)}</h1>
      <div class="filters">
        <button class="btn small ghost" onclick="enterReadingMode()">进入纯阅读（F）</button>
        <span class="muted" style="padding:6px 4px">${esc(a.source)} · <span id="timer" class="timer">00:00</span></span>
        <button class="btn small ghost" onclick="clearInterval(timer.handle)">停止计时</button>
      </div>
    </div>

    <div class="card article">
      ${a.paragraphs.map((p, i) => `
        <div class="para" id="para-${i}">
          <span class="para-no">¶${i + 1}</span>
          <p>${highlightLong(p.en, a)}</p>
          <details class="zh"><summary>参考译文</summary><p>${esc(p.zh)}</p></details>
        </div>`).join('')}
    </div>

    <div id="sentence-panel"></div>

    <div class="card q-card">
      <h2>题目 · 共 ${a.questions.length} 题</h2>
      <div id="q-area">
        ${a.questions.map((q, qi) => renderQuestion(a, qi)).join('')}
      </div>
      <button class="btn" id="submit-btn" disabled onclick="submitReading()">提交全部答案</button>
      <div id="result-box"></div>
    </div>`;
  startTimer();
};

function escapeRegExp(s) { return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

/* 长难句高亮：大小写不敏感匹配。
   原因：longSentences 中的句子常以大写开头，而它在正文中可能位于句中
   （如冒号后）而小写开头，严格匹配会导致拆解入口失效。 */
function highlightLong(text, a) {
  let html = esc(text);
  a.longSentences.forEach((ls, i) => {
    const re = new RegExp(escapeRegExp(esc(ls.text)), 'i');
    if (re.test(html)) {
      html = html.replace(re, m => `<span class="long-sent" title="点击拆解长难句" onclick="showSentence(${i},'${a.id}')">🔍${m}</span>`);
    }
  });
  return html;
}

function showSentence(idx, articleId) {
  const a = DB.articles.find(x => x.id === articleId);
  const ls = a.longSentences[idx];
  const panel = document.getElementById('sentence-panel');
  panel.innerHTML = `
    <div class="card analysis">
      <h2>🔍 长难句拆解</h2>
      <p class="sent">${esc(ls.text)}</p>
      <table class="tbl">
        <tr><th>成分</th><th>对应部分</th><th>说明</th></tr>
        ${ls.structure.map(s => `<tr><td><b>${esc(s.role)}</b></td><td>${esc(s.part)}</td><td>${esc(s.explain)}</td></tr>`).join('')}
      </table>
      <p class="tip">💡 ${esc(ls.note)}</p>
      <button class="btn small" onclick="this.closest('.card').remove()">收起</button>
    </div>`;
  panel.scrollIntoView({ behavior: 'smooth' });
}

function renderQuestion(a, qi) {
  const q = a.questions[qi];
  return `
    <div class="question" id="q-${qi}">
      <p><b>Q${qi + 1}.</b> ${esc(q.q)}</p>
      <div class="opts">
        ${['A', 'B', 'C', 'D'].map(k => `
          <label class="opt" data-q="${qi}" data-k="${k}">
            <input type="radio" name="q${qi}" value="${k}" onchange="pickOpt(${qi},'${k}')">
            <b>${k}.</b> ${esc(q.options[k])}
          </label>`).join('')}
      </div>
      <div class="explain" id="explain-${qi}" style="display:none"></div>
    </div>`;
}

const answers = {};
function pickOpt(qi, k) {
  answers[qi] = k;
  document.querySelectorAll(`.opt[data-q="${qi}"]`).forEach(el => el.classList.remove('picked'));
  document.querySelector(`.opt[data-q="${qi}"][data-k="${k}"]`).classList.add('picked');
  checkAllAnswered();
}
function checkAllAnswered() {
  const a = DB.articles.find(x => x.id === parseHash().param);
  const btn = document.getElementById('submit-btn');
  if (a && btn && Object.keys(answers).length >= a.questions.length) btn.disabled = false;
}

/* 干扰项列表：只取非正确选项，避免把正确项混入"干扰项分析" */
function wrongList(q) {
  return Object.entries(q.analysis || {})
    .filter(([k]) => k !== q.answer)
    .map(([k, v]) => `<li><b>${k}.</b> ${esc(v)}</li>`).join('');
}

function submitReading() {
  const a = DB.articles.find(x => x.id === parseHash().param);
  if (!a) return;
  let correct = 0;
  a.questions.forEach((q, qi) => {
    const ua = answers[qi];
    const ok = ua === q.answer;
    if (ok) correct++;
    const ex = document.getElementById(`explain-${qi}`);
    ex.style.display = 'block';
    ex.innerHTML = `
      <p class="${ok ? 'ok-msg' : 'err-msg'}">${ok ? '✓ 回答正确' : `✗ 你的答案 ${ua || '未作答'}，正确答案 ${q.answer}`}</p>
      <p>📍 <b>题干定位：</b>第 ${q.locate} 段 <a href="javascript:void(0)" onclick="flashPara(${q.locate - 1})">[高亮定位段]</a>${(q.tags && q.tags.length) ? `　🏷 ${q.tags.map(esc).join(' / ')}` : ''}</p>
      ${q.basis ? `<p><b>✅ 正确依据：</b>${esc(q.basis)}</p>` : ''}
      ${wrongList(q) ? (ok
        ? `<details><summary>🚫 干扰项分析（答对也建议看）</summary><ul>${wrongList(q)}</ul></details>`
        : `<p><b>🚫 干扰项分析：</b></p><ul>${wrongList(q)}</ul>`) : ''}`;
    document.getElementById(`q-${qi}`).classList.add(ok ? 'right' : 'wrong');
    if (!ok) {
      S.wrongBook.push({ articleId: a.id, qIndex: qi, userAns: ua || '-', correct: q.answer, time: today(), type: 'reading' });
    }
  });
  const total = a.questions.length;
  document.getElementById('result-box').innerHTML = `
    <div class="result ${correct === total ? 'perfect' : ''}">
      <b>本次成绩：${correct} / ${total}</b>
      <span class="muted">用时 ${fmtTime(timer.sec)} · 错题已自动加入错题本</span>
    </div>`;
  S.done.readingDone = S.done.readingDone || {};
  S.done.readingDone[a.id] = true;
  rec('readDone', 1); rec('readTotal', total); rec('readCorrect', correct); save();
  const sb = document.getElementById('submit-btn');
  if (sb) sb.disabled = true;
}
function flashPara(i) {
  const p = document.getElementById('para-' + i);
  if (!p) return;
  p.classList.add('flash'); p.scrollIntoView({ behavior: 'smooth', block: 'center' });
  setTimeout(() => p.classList.remove('flash'), 1600);
}
function fmtTime(s) { return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }
function startTimer() {
  timer.sec = 0;
  clearInterval(timer.handle);
  timer.handle = setInterval(() => {
    timer.sec++;
    const el = document.getElementById('timer');
    if (el) el.textContent = fmtTime(timer.sec); else clearInterval(timer.handle);
  }, 1000);
}

/* ---------- 真题标记 ---------- */
function realBadge(it) {
  if (!it.real) return '<span class="tag">模拟题</span>';
  const v = it.verified === 'multi'
    ? '<span class="tag ok">真题 · 多源已核对</span>'
    : '<span class="tag lv2">真题 · 单源待核对</span>';
  return `${v}<span class="tag">${it.year}年${it.month}月 · 第${it.set}套</span>`;
}
function sourceLinks(it) {
  if (!it.sourceUrls || !it.sourceUrls.length) return '';
  return `<p class="muted">出处：${it.sourceUrls.map(u => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(new URL(u).hostname)}</a>`).join(' · ')}</p>`;
}

/* ---------- 翻译 ---------- */
VIEWS.trans = function (id) {
  if (id) return transDetail(id);
  const isCet = S.exam === 'cet4' || S.exam === 'cet6';
  const list = DB.translations.filter(t => (isCet ? t.type === 'cn2en' : t.type === 'en2cn'));
  const realN = list.filter(t => t.real).length;
  app.innerHTML = `
    <div class="page-head"><h1>🔤 翻译训练 · ${EXAM_NAMES[S.exam]}</h1></div>
    <p class="muted">${isCet ? 'CET 题型：段落翻译（中文 → 英文），提交后按关键表达覆盖度评分' : '考研题型：长句翻译（英文 → 中文），提交后按关键采分点覆盖度评分'}
      　共 ${list.length} 题，其中真题 ${realN} 题。</p>
    <div class="list">
      ${list.map(t => `
        <div class="list-item">
          <div>
            ${realBadge(t)}
            ${S.done.transDone && S.done.transDone[t.id] ? '<span class="tag ok">已练习</span>' : ''}
            <b>${esc(t.topic)}</b>
            <div class="muted">${esc(t.source.slice(0, 60))}…</div>
          </div>
          <button class="btn" onclick="go('trans','${t.id}')">开始</button>
        </div>`).join('')}
    </div>`;
};

function transDetail(id) {
  const t = DB.translations.find(x => x.id === id);
  if (!t) return go('trans');
  app.innerHTML = `
    <a class="back" href="#trans">← 返回翻译列表</a>
    <div class="page-head"><h1>${esc(t.label)}：${esc(t.topic)}</h1></div>
    <div class="card">
      ${t.real ? `<p>${realBadge(t)}</p>${sourceLinks(t)}
      <p class="muted">说明：CET/考研官方不公布历年真题与标准译文，下方参考译文为公开机构版本，不同机构措辞会有差异。</p>` : ''}
      <h2>${t.type === 'cn2en' ? '原文（中文）' : '原文（英文）'}</h2>
      <p class="src">${esc(t.source)}</p>
      <h2>你的译文</h2>
      <textarea id="trans-input" rows="7" placeholder="在此输入你的译文……"></textarea>
      <button class="btn" onclick="gradeTrans('${t.id}')">提交评分</button>
      <div id="trans-result"></div>
    </div>`;
}

function gradeTrans(id) {
  const t = DB.translations.find(x => x.id === id);
  const ans = document.getElementById('trans-input').value.trim();
  const box = document.getElementById('trans-result');
  if (!ans) { box.innerHTML = '<p class="err-msg">请先输入译文再提交。</p>'; return; }

  // 评分：关键表达覆盖度 + 长度合理性
  const low = ans.toLowerCase();
  const hit = t.keywords.filter(k => low.includes(k.toLowerCase()));
  const cov = hit.length / t.keywords.length;
  const refLen = t.reference.split(/\s+/).length;
  const myLen = ans.split(/\s+/).length;
  const ratio = myLen / refLen;
  let score = Math.round(35 + 60 * cov);
  let lenTip = '';
  if (t.type === 'cn2en') {
    if (ratio < 0.55) { score -= 12; lenTip = '⚠️ 你的译文明显偏短，可能存在漏译。'; }
    else if (ratio > 1.7) { score -= 8; lenTip = '⚠️ 你的译文明显偏长，可能存在冗余或加译。'; }
  }
  score = Math.max(20, Math.min(100, score));

  const missed = t.keywords.filter(k => !hit.includes(k));
  box.innerHTML = `
    <div class="score-line"><span class="score ${score >= 80 ? 'hi' : score >= 60 ? 'mid' : 'lo'}">${score}</span>
      <span class="muted">关键表达覆盖 ${hit.length}/${t.keywords.length}</span></div>
    ${lenTip ? `<p class="err-msg">${lenTip}</p>` : ''}
    ${missed.length ? `<p><b>⚠️ 未覆盖的关键表达：</b>${missed.map(esc).join('；')}</p>` : '<p class="ok-msg">✓ 关键表达全部覆盖，很棒！</p>'}
    <h3>📝 常见错误提示</h3>
    <ul>${t.commonErrors.map(e => `<li>${esc(e)}</li>`).join('')}</ul>
    <h3>✅ 参考译文（请逐句校对）</h3>
    <p class="ref">${esc(t.reference)}</p>`;
  S.done.transDone = S.done.transDone || {};
  S.done.transDone[t.id] = true;
  rec('transDone', 1); save();
}

/* ---------- 写作 ---------- */
VIEWS.writing = function (id) {
  if (id) return writingDetail(id);
  const list = DB.writings;
  app.innerHTML = `
    <div class="page-head"><h1>✍️ 写作训练与批改</h1></div>
    <p class="muted">覆盖议论文、图表作文、应用文。先看写作框架与常用句型，再动笔；提交后从<b>语法、衔接、词汇升级</b>三个维度给出批改反馈。</p>
    <div class="list">
      ${list.map(w => `
        <div class="list-item">
          <div>
            <span class="tag">${esc(w.genre)}</span>${realBadge(w)}
            <b> ${esc(w.label)}</b>
            <div class="muted">${esc(w.topic)}</div>
          </div>
          <button class="btn" onclick="go('writing','${w.id}')">进入</button>
        </div>`).join('')}
    </div>`;
};

function writingDetail(id) {
  const w = DB.writings.find(x => x.id === id);
  if (!w) return go('writing');
  app.innerHTML = `
    <a class="back" href="#writing">← 返回写作列表</a>
    <div class="page-head"><h1>${esc(w.label)}</h1></div>
    <div class="card">
      ${w.real ? `<p>${realBadge(w)}</p>${sourceLinks(w)}` : ''}
      <h2>题目</h2>
      <p class="src">${esc(w.prompt)}</p>
      <details open><summary><b>🏗️ 写作框架</b></summary>
        <ol>${w.framework.map(f => `<li>${esc(f)}</li>`).join('')}</ol></details>
      <details><summary><b>💬 常用句型</b></summary>
        <ul>${w.patterns.map(p => `<li>${esc(p)}</li>`).join('')}</ul></details>
    </div>
    <div class="card">
      <h2>你的作文（建议 ${w.wordRange[0]}–${w.wordRange[1]} 词）</h2>
      <textarea id="essay-input" rows="12" placeholder="在此输入你的作文……"></textarea>
      <div class="muted" id="wc">0 词</div>
      <button class="btn" onclick="gradeEssay('${w.id}')">提交批改</button>
      <div id="essay-result"></div>
    </div>`;
  const ta = document.getElementById('essay-input');
  ta.addEventListener('input', () => {
    const n = ta.value.trim() ? ta.value.trim().split(/\s+/).length : 0;
    document.getElementById('wc').textContent = n + ' 词' + (n < w.wordRange[0] || n > w.wordRange[1] ? `（超出建议范围 ${w.wordRange[0]}–${w.wordRange[1]}）` : '（符合建议范围）');
  });
}

function gradeEssay(id) {
  const w = DB.writings.find(x => x.id === id);
  const text = document.getElementById('essay-input').value.trim();
  const box = document.getElementById('essay-result');
  if (!text) { box.innerHTML = '<p class="err-msg">请先输入作文再提交。</p>'; return; }
  const low = text.toLowerCase();
  const words = low.replace(/[^a-z'\s]/g, ' ').split(/\s+/).filter(Boolean);

  /* 维度一：语法 */
  const grammarIssues = DB.grammarRules.filter(r => r.test.test(text)).map(r => `<li><b>${r.name}</b>：${r.tip}</li>`);
  const sentences = text.split(/[.!?]+/).map(s => s.trim()).filter(s => s.split(/\s+/).length > 2);
  const avgLen = sentences.length ? Math.round(words.length / sentences.length) : words.length;
  if (avgLen > 32) grammarIssues.push('<li><b>句子过长</b>：平均句长约 ' + avgLen + ' 词，长句过多易出错，建议长短句结合。</li>');
  if (avgLen < 8 && sentences.length > 3) grammarIssues.push('<li><b>句子过碎</b>：平均句长仅 ' + avgLen + ' 词，建议用连接词合并短句。</li>');

  /* 维度二：衔接 */
  const usedLinkers = DB.linkers.filter(l => low.includes(l));
  const linkerScore = usedLinkers.length;
  const cohesion = `
    <p>检测到衔接词 <b>${linkerScore}</b> 个：${usedLinkers.length ? usedLinkers.map(l => '<code>' + esc(l) + '</code>').join('、') : '（无）'}</p>
    ${linkerScore >= 4 ? '<p class="ok-msg">✓ 衔接手段使用充分，逻辑链条清晰。</p>' :
      linkerScore >= 2 ? '<p class="warn-msg">⚠️ 衔接词偏少。建议在第 2、3 段增加 furthermore / however / as a result 等逻辑连接。</p>' :
        '<p class="err-msg">✗ 几乎没有衔接词，段落之间会显得跳跃。请加入 first / moreover / therefore / in conclusion 等逻辑标记。</p>'}`;

  /* 维度三：词汇升级 */
  const upgrades = [];
  Object.entries(DB.upgradeMap).forEach(([basic, adv]) => {
    if (basic.includes(' ')) { if (low.includes(basic)) upgrades.push([basic, adv]); }
    else {
      const n = words.filter(x => x === basic).length;
      if (n > 0) upgrades.push([basic + (n > 1 ? ` ×${n}` : ''), adv]);
    }
  });
  upgrades.sort((a, b) => b[0].length - a[0].length);
  const rich = words.length ? (new Set(words).size / words.length) : 0;
  const vocabHtml = `
    ${upgrades.length ? `<p>以下基础词汇建议升级：</p><ul>${upgrades.slice(0, 10).map(([b, a]) => `<li><code>${esc(b)}</code> → <b>${esc(a)}</b></li>`).join('')}</ul>` : '<p class="ok-msg">✓ 未检测到明显的基础低级词汇，词汇表现良好。</p>'}
    <p class="muted">词汇丰富度（去重比例）：${Math.round(rich * 100)}% ${rich > 0.55 ? '（优秀）' : rich > 0.4 ? '（良好，可再提升）' : '（偏低，注意替换重复用词）'}</p>`;

  box.innerHTML = `
    <h2>📋 批改反馈</h2>
    <div class="grade-grid">
      <div class="grade-item"><h3>1️⃣ 语法</h3>
        ${grammarIssues.length ? `<ul>${grammarIssues.join('')}</ul>` : '<p class="ok-msg">✓ 未检出明显语法问题。</p>'}</div>
      <div class="grade-item"><h3>2️⃣ 衔接</h3>${cohesion}</div>
      <div class="grade-item"><h3>3️⃣ 词汇升级</h3>${vocabHtml}</div>
    </div>
    <p class="muted">字数：${words.length} 词（建议 ${w.wordRange[0]}–${w.wordRange[1]} 词）。三维度反馈基于规则匹配，最终请以人工精读为准。</p>`;
  S.done.writDone = S.done.writDone || {};
  S.done.writDone[w.id] = true;
  rec('writDone', 1); save();
}

/* ---------- 听力（考试级配音） ---------- */
let listenState = { rate: 1.0, gap: 5000 };
let AMAN = null;         // audio/manifest.json：null=未加载，false=不可用
let audioEl = null;
let playSeq = 0;         // 连读序号，自增用于中断上一次连读

/* 取某篇听力的配音配置；缺失时按标题关键字推断题型 */
function listenMetaOf(id) {
  const M = window.LISTEN_META;
  const it = DB.listenings.find(x => x.id === id) || {};
  const conf = (M && M.ITEMS && M.ITEMS[id]) || null;
  let type = 'passage';
  if (conf) {
    type = conf.type;
  } else {
    const t = (it.label || '') + (it.title || '');
    if (/对话|conversation/i.test(t)) type = 'conversation';
    else if (/讲座|lecture/i.test(t)) type = 'lecture';
    else if (/新闻|news/i.test(t)) type = 'news';
  }
  const cfg = (M && M.TYPES && M.TYPES[type]) ||
    { label: '短文听力', wpm: 130, gap: 650, voice: 'F_TALK', mode: 'single' };
  return { type, conf, cfg };
}

/* 异步加载音频索引；取不到时置为 false，界面自动回退浏览器语音合成 */
async function loadAudioManifest() {
  if (AMAN !== null) return AMAN;
  try {
    const r = await fetch('audio/manifest.json', { cache: 'no-store' });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    AMAN = await r.json();
  } catch (e) {
    AMAN = false;
  }
  return AMAN;
}

/* 复用同一个 audio 元素，避免多次点击产生重叠播放 */
function getAudioEl() {
  if (!audioEl) {
    audioEl = new Audio();
    audioEl.preload = 'auto';
  }
  return audioEl;
}

/* 播放音频文件；若音频缺失或解码失败，自动回退到浏览器语音合成 */
function playAudioFile(rel, fallbackText, onEnd) {
  const el = getAudioEl();
  let done = false;
  const finish = () => { if (!done) { done = true; if (onEnd) onEnd(); } };
  el.onended = finish;
  el.onerror = () => { speak(fallbackText, listenState.rate, onEnd); };
  el.src = rel;
  el.playbackRate = listenState.rate;
  const p = el.play();
  if (p && p.catch) p.catch(() => { if (!done) speak(fallbackText, listenState.rate, onEnd); });
}

/* 停止一切播放（音频 + 语音合成 + 连读队列） */
function listenStopAll() {
  playSeq++;
  const el = getAudioEl();
  el.pause();
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  document.querySelectorAll('.sent-row').forEach(r => r.classList.remove('playing'));
}

VIEWS.listening = function (id) {
  if (id) return listeningDetail(id);
  const list = DB.listenings;
  app.innerHTML = `
    <div class="page-head"><h1>🎧 听力精听</h1></div>
    <p class="muted">考试级 AI 配音（微软 Neural 声线），按题型自动匹配声线、语速与停顿——新闻 145wpm、短文 130wpm、对话 135wpm、讲座 150wpm，并附带官方 Directions 指令。流程：播放指令 → 全文连读 → 逐句精听 → 听写填空 → 全文对照。</p>
    <div class="list">
      ${list.map(l => {
        const m = listenMetaOf(l.id);
        return `
        <div class="list-item">
          <div>${realBadge(l)}<b> ${esc(l.title)}</b>
            <div class="muted"><span class="tag">${esc(m.cfg.label)}</span> ${m.cfg.wpm}wpm · ${l.sentences.length} 句${l.questions && l.questions.length ? ' · ' + l.questions.length + ' 道选择题' : ''} · 含 ${l.blanks.length} 个听写填空</div></div>
          <button class="btn" onclick="go('listening','${l.id}')">进入</button>
        </div>`;
      }).join('')}
    </div>`;
};

function listeningDetail(id) {
  const l = DB.listenings.find(x => x.id === id);
  if (!l) return go('listening');
  const m = listenMetaOf(id);
  const spkSeq = (m.conf && m.conf.speakers) || 'F';
  app.innerHTML = `
    <a class="back" href="#listening">← 返回听力列表</a>
    <div class="page-head"><h1>${esc(l.title)}</h1></div>
    <div class="card">
      ${l.real ? `<p>${realBadge(l)}</p>${sourceLinks(l)}
      <p class="muted">语料为真题原文，配音为 AI 合成（非考场原音）；中文译文为辅助理解所加。</p>` : ''}
      <p><span class="tag">${esc(m.cfg.label)}</span>
        <span class="muted">${esc(voiceDescOf(m.cfg.voice))} · 目标语速 ${m.cfg.wpm}wpm${m.cfg.mode === 'dialog' ? ' · 男女声交替' : ''}</span></p>
      <div class="listen-ctrl">
        <button class="btn" onclick="playDirections('${l.id}')">📢 播放考试指令</button>
        <button class="btn primary" onclick="playAll('${l.id}',0)">▶ 全文连读</button>
        ${l.questions && l.questions.length ? `<button class="btn" onclick="playExam('${l.id}')">🎯 考试模式</button>` : ''}
        <button class="btn ghost" onclick="listenStopAll()">■ 停止</button>
      </div>
      <div id="play-status" class="muted"></div>
      <div class="rate-line">🔊 语速
        <input type="range" min="0.5" max="1.5" step="0.1" value="${listenState.rate}" id="rate" oninput="setPlayRate(this.value);document.getElementById('rate-val').textContent=(+this.value).toFixed(1)+'x'">
        <b id="rate-val">${listenState.rate.toFixed(1)}x</b>
      </div>
      <div class="rate-line">⏸ 句间停顿
        <select id="gap" onchange="listenState.gap=+this.value">
          <option value="0">不停顿</option>
          <option value="3000">3 秒（快速）</option>
          <option value="5000" selected>5 秒（推荐）</option>
          <option value="15000">15 秒（真实考试）</option>
        </select>
      </div>
      <div id="sent-list">
        ${l.sentences.map((s, i) => {
          const spk = spkOf(spkSeq, i);
          return `
          <div class="sent-row" id="s-${i}">
            <button class="btn small play" onclick="playSent('${l.id}',${i})">▶ 播放</button>
            <span class="spk ${spk === 'F' ? 'f' : 'm'}" title="${spk === 'F' ? '女声' : '男声'}">${spk === 'F' ? '👩' : '👨'}</span>
            <button class="btn small ghost" onclick="revealSent(${i})">显示原文/译文</button>
            <button class="btn small ghost" onclick="listenDone('${l.id}',${i})">✓ 本句精听完成</button>
            <div class="sent-text" id="st-${i}" style="display:none">
              <p>${esc(s.en)}</p><p class="muted">${esc(s.zh)}</p>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>
    ${l.questions && l.questions.length ? `
    <div class="card">
      <h2>📝 听力理解（${l.questions.length} 题）</h2>
      <p class="muted">与正式考试同题型。建议先点「📢 播放考试指令」再点「▶ 全文连读」，模拟考场只放一遍；提交后查看正确依据与每个干扰项错在哪。</p>
      ${l.questions.map((q, qi) => `
        <div class="lq-block" id="lq-block-${qi}">
          <p><b>${qi + 1}. ${esc(q.q)}</b>
            <button class="btn small ghost" onclick="playQuestion('${l.id}',${qi})">▶ 听题目与选项</button></p>
          <div class="opts">
            ${['A', 'B', 'C', 'D'].map(k => `
              <label class="opt" data-lq="${qi}" data-k="${k}">
                <input type="radio" name="lq${qi}" value="${k}" onchange="pickListenOpt(${qi},'${k}')">
                <b>${k}.</b> ${esc(q.options[k])}
              </label>`).join('')}
          </div>
          <div class="lq-result" id="lqr-${qi}"></div>
        </div>`).join('')}
      <button class="btn" onclick="checkListenQuestions('${l.id}')">提交答案</button>
      <div id="lq-total"></div>
    </div>` : ''}
    <div class="card">
      <h2>✏️ 听写填空</h2>
      <p class="muted">先播放对应句子，再填入你听到的单词。</p>
      ${l.blanks.map((b, i) => `
        <div class="blank-row">
          <span class="blank-text">${esc(b.text).replace(/\{\{(\w+)\}\}/g, `<input class="blank" id="blank-${i}" size="10" placeholder="填空 ${i + 1}">`)}</span>
          <span class="muted">提示：${esc(b.hint)}</span>
        </div>`).join('')}
      <button class="btn" onclick="checkBlanks('${l.id}')">检查答案</button>
      <div id="blank-result"></div>
    </div>
    <div class="card">
      <h2>📄 全文对照</h2>
      <details><summary>展开全文与译文</summary>
        ${l.sentences.map(s => `<p>${esc(s.en)}</p><p class="muted">${esc(s.zh)}</p><hr>`).join('')}
      </details>
    </div>`;
}

function speak(text, rate, onend) {
  if (!('speechSynthesis' in window)) { alert('当前浏览器不支持语音合成，请使用 Chrome / Edge。'); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US'; u.rate = rate;
  const vs = speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
  if (vs.length) u.voice = vs.find(v => /Google US|Microsoft/i.test(v.name)) || vs[0];
  if (onend) u.onend = onend;
  speechSynthesis.speak(u);
}
/* 取第 i 句的说话人，用于男女声切换 */
function spkOf(seq, i) {
  if (!seq) return 'F';
  if (seq.length === 1) return seq[0];
  return seq[i % seq.length];
}

function voiceDescOf(vkey) {
  const M = window.LISTEN_META;
  const v = (M && M.VOICES && M.VOICES[vkey]) || {};
  return v.desc || 'AI 配音';
}

/* 变速：直接改 audio 的 playbackRate，浏览器会保持音高自然 */
function setPlayRate(v) {
  listenState.rate = +v;
  getAudioEl().playbackRate = listenState.rate;
}

function setPlayStatus(t) {
  const el = document.getElementById('play-status');
  if (el) el.textContent = t || '';
}

/* 播放单句：优先用预生成的考试级音频，缺失时回退浏览器语音合成 */
let sentToken = 0;
function playSent(id, i) {
  const l = DB.listenings.find(x => x.id === id);
  if (!l) return;
  const tk = ++sentToken;
  listenStopAll();
  const row = document.getElementById('s-' + i);
  if (row) row.classList.add('playing');
  loadAudioManifest().then(man => {
    if (tk !== sentToken) return;
    const e = man && man.items ? man.items[id] : null;
    const rec = e && e.sentences && e.sentences[i];
    if (rec && rec.f) playAudioFile(rec.f, l.sentences[i].en);
    else speak(l.sentences[i].en, listenState.rate);
  });
}

/* 播放本篇的官方考试指令（Directions） */
async function playDirections(id) {
  const man = await loadAudioManifest();
  const e = man && man.items ? man.items[id] : null;
  listenStopAll();
  if (e && e.dir) {
    setPlayStatus('正在播放考试指令 …');
    playAudioFile(e.dir, e.dirText || '', () => setPlayStatus('指令播放完毕，可开始做题'));
    return;
  }
  const conf = listenMetaOf(id).conf || {};
  const dtext = (window.LISTEN_META.DIRECTIONS || {})[conf.dir] || '';
  if (!dtext) { setPlayStatus('本篇未配置考试指令'); return; }
  setPlayStatus('正在播放考试指令（浏览器合成）…');
  speak(dtext, Math.max(0.8, listenState.rate - 0.15),
    () => setPlayStatus('指令播放完毕，可开始做题'));
}

/* 全文连读：按考场节奏逐句播放，句间按所选停顿等待 */
async function playAll(id, startIdx) {
  const l = DB.listenings.find(x => x.id === id);
  if (!l) return;
  const man = await loadAudioManifest();
  const e = man && man.items ? man.items[id] : null;
  listenStopAll();
  const my = ++playSeq;
  let i = startIdx || 0;
  const step = () => {
    if (my !== playSeq) return;
    if (i >= l.sentences.length) {
      setPlayStatus('✅ 本篇播放完毕');
      document.querySelectorAll('.sent-row').forEach(r => r.classList.remove('playing'));
      rec('listenDone', 1);
      save();
      return;
    }
    const idx = i++;
    document.querySelectorAll('.sent-row').forEach(r => r.classList.remove('playing'));
    const row = document.getElementById('s-' + idx);
    if (row) row.classList.add('playing');
    setPlayStatus('播放中：第 ' + (idx + 1) + ' / ' + l.sentences.length + ' 句');
    const next = () => {
      if (my !== playSeq) return;
      const gap = listenState.gap;
      if (gap > 0) setTimeout(step, gap / listenState.rate);
      else step();
    };
    const rec2 = e && e.sentences && e.sentences[idx];
    if (rec2 && rec2.f) playAudioFile(rec2.f, l.sentences[idx].en, next);
    else speak(l.sentences[idx].en, listenState.rate, next);
  };
  step();
}

/* 单题播放：题目与选项一起念出（还原真实考场"听题作答"） */
async function playQuestion(id, qi) {
  const man = await loadAudioManifest();
  const e = man && man.items ? man.items[id] : null;
  listenStopAll();
  const qs = e && e.questions;
  const l = DB.listenings.find(x => x.id === id);
  const q = l && l.questions && l.questions[qi];
  if (!q) return;
  const rec = qs && qs[qi];
  if (rec && rec.q) {
    setPlayStatus('正在播放第 ' + (qi + 1) + ' 题（题目与选项）…');
    playAudioFile(rec.q, rec.qText || '', () => setPlayStatus(''));
  } else {
    const fb = 'Question ' + (qi + 1) + '. ' + q.q + ' ' +
      ['A', 'B', 'C', 'D'].map(k => k + ', ' + q.options[k] + '.').join(' ');
    setPlayStatus('正在播放第 ' + (qi + 1) + ' 题（浏览器合成）…');
    speak(fb, listenState.rate, () => setPlayStatus(''));
  }
}

/* 考试模式：指令 → 篇目标识 → 正文连读 → 题组引导 → 逐题听题作答（只放一遍） */
let examToken = 0;
async function playExam(id) {
  const l = DB.listenings.find(x => x.id === id);
  if (!l || !l.questions || !l.questions.length) return;
  const man = await loadAudioManifest();
  const e = man && man.items ? man.items[id] : null;
  listenStopAll();
  const my = ++examToken;
  const qa = (e && e.questions) || [];
  const think = 8000; // 每题听完后给的思考时间（毫秒）

  const playThen = (rel, fb, cb) => {
    if (my !== examToken) return;
    if (rel) playAudioFile(rel, fb, () => { if (my === examToken) cb(); });
    else speak(fb, listenState.rate, () => { if (my === examToken) cb(); });
  };

  const finishExam = () => {
    if (my !== examToken) return;
    setPlayStatus('✅ 考试音频播放完毕，请提交答案');
    rec('listenDone', 1); save();
  };

  const runQuestion = (qi) => {
    if (my !== examToken) return;
    const block = document.getElementById('lq-block-' + qi);
    if (block) { block.classList.add('exam-active'); block.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
    setPlayStatus('第 ' + (qi + 1) + ' 题：听题并作答');
    const rec = qa[qi];
    const rel = rec && rec.q;
    const fb = rec ? rec.qText : ('Question ' + (qi + 1) + '. ' + l.questions[qi].q);
    playThen(rel, fb, () => {
      if (my !== examToken) return;
      setPlayStatus('第 ' + (qi + 1) + ' 题：请作答（' + Math.round(think / 1000) + ' 秒后进入下一题）');
      setTimeout(() => {
        if (my !== examToken) return;
        if (block) block.classList.remove('exam-active');
        if (qi + 1 < qa.length) runQuestion(qi + 1);
        else finishExam();
      }, think);
    });
  };

  const startBody = () => {
    if (my !== examToken) return;
    let i = 0;
    const step = () => {
      if (my !== examToken) return;
      if (i >= l.sentences.length) {
        if (e && e.qintro) playThen(e.qintro, '', () => runQuestion(0));
        else runQuestion(0);
        return;
      }
      const idx = i++;
      const row = document.getElementById('s-' + idx);
      if (row) row.classList.add('playing');
      const rec2 = e && e.sentences && e.sentences[idx];
      const goNext = () => {
        if (my !== examToken) return;
        if (row) row.classList.remove('playing');
        if (listenState.gap > 0) setTimeout(step, listenState.gap / listenState.rate);
        else step();
      };
      if (rec2 && rec2.f) playAudioFile(rec2.f, l.sentences[idx].en, goNext);
      else speak(l.sentences[idx].en, listenState.rate, goNext);
    };
    step();
  };

  setPlayStatus('🎯 考试模式：只放一遍，请于音频播放时作答');
  if (e && e.dir) {
    playThen(e.dir, e.dirText || '', () => {
      if (my !== examToken) return;
      if (e.intro) playThen(e.intro, '', () => startBody());
      else startBody();
    });
  } else {
    const conf = listenMetaOf(id).conf || {};
    const dtext = (window.LISTEN_META.DIRECTIONS || {})[conf.dir] || '';
    playThen(null, dtext, () => {
      if (my !== examToken) return;
      if (e && e.intro) playThen(e.intro, '', () => startBody());
      else startBody();
    });
  }
}
function revealSent(i) { document.getElementById('st-' + i).style.display = 'block'; }
function listenDone(id, i) { document.getElementById('s-' + i).classList.add('listened'); rec('listenDone', 1); }
function checkBlanks(id) {
  const l = DB.listenings.find(x => x.id === id);
  let right = 0; const wrong = [];
  l.blanks.forEach((b, i) => {
    const v = (document.getElementById('blank-' + i).value || '').trim().toLowerCase();
    if (v === b.answer.toLowerCase()) right++; else wrong.push({ i, b, v });
  });
  document.getElementById('blank-result').innerHTML = `
    <p class="${right === l.blanks.length ? 'ok-msg' : 'err-msg'}">结果：${right} / ${l.blanks.length} 正确</p>
    ${wrong.map(w => `<p>第 ${w.i + 1} 空：你填 <b>${esc(w.v || '（空）')}</b>，正确答案 <b>${esc(w.b.answer)}</b>（${esc(w.b.hint)}）</p>`).join('')}`;
  save();
}

/* 听力选择题：高亮当前所选 */
function pickListenOpt(qi, k) {
  document.querySelectorAll('.opt[data-lq="' + qi + '"]').forEach(function (el) {
    el.classList.remove('picked');
  });
  const el = document.querySelector('.opt[data-lq="' + qi + '"][data-k="' + k + '"]');
  if (el) el.classList.add('picked');
}

/* 听力选择题判分：给出正确依据，并逐项说明干扰项错在哪 */
function checkListenQuestions(id) {
  const l = DB.listenings.find(x => x.id === id);
  if (!l || !l.questions || !l.questions.length) return;
  let right = 0;
  l.questions.forEach(function (q, qi) {
    const picked = document.querySelector('input[name="lq' + qi + '"]:checked');
    const v = picked ? picked.value : null;
    const ok = v === q.answer;
    if (ok) right++;
    const box = document.getElementById('lqr-' + qi);
    if (!box) return;
    const head = ok ? '✅ 回答正确'
      : '❌ 你选 ' + esc(v || '未作答') + '，正确答案 <b>' + q.answer + '</b>';
    const ana = Object.keys(q.analysis).map(function (k) {
      return '<p class="muted"><b>' + k + '</b> 错在哪：' + esc(q.analysis[k]) + '</p>';
    }).join('');
    box.innerHTML = '<p class="' + (ok ? 'ok-msg' : 'err-msg') + '">' + head + '</p>' +
      '<p class="muted"><b>正确依据：</b>' + esc(q.basis) + '</p>' + ana;
    document.querySelectorAll('.opt[data-lq="' + qi + '"]').forEach(function (el) {
      el.classList.remove('picked');
      if (el.dataset.k === q.answer) el.classList.add('right');
      else if (el.dataset.k === v) el.classList.add('wrong');
    });
  });
  const total = l.questions.length;
  document.getElementById('lq-total').innerHTML =
    '<p class="' + (right === total ? 'ok-msg' : 'err-msg') + '">结果：' +
    right + ' / ' + total + ' 正确</p>';
  rec('listenQuiz', right);
  rec('listenQuizTotal', total);
  save();
}

/* ---------- 词汇 / 生词本 ---------- */
VIEWS.vocab = function () {
  const due = dueWords();
  app.innerHTML = `
    <div class="page-head">
      <h1>📚 词汇与生词本</h1>
      <span class="muted">生词本共 ${Object.keys(S.vocab).length} 词 · 今日到期 ${due.length} 个</span>
    </div>
    ${due.length ? `
      <div class="card">
        <h2>🔔 今日到期复习（${due.length}）</h2>
        <p class="muted">先回忆词义，再点击"认识 / 不认识"。认识的词间隔拉长（1→2→4→7→15 天），不认识的词回到第 1 阶段。</p>
        <div class="list">${due.map(w => {
    const info = DB.vocab.find(v => v.word === w) || {};
    return `
            <div class="list-item" id="w-${esc(w)}">
              <div>
                <b>${esc(w)}</b> <span class="muted">${esc(info.pos || '')} ${esc(info.meaning || '（自定义生词）')}</span>
                <div class="muted">${esc(info.example || '')}</div>
              </div>
              <div>
                <button class="btn small" onclick="doReview('${esc(w)}',1)">认识</button>
                <button class="btn small ghost" onclick="doReview('${esc(w)}',0)">不认识</button>
              </div>
            </div>`; }).join('')}</div>
      </div>` : '<p class="ok-msg card">✓ 今日生词复习已全部完成！</p>'}

    <div class="card">
      <h2>词库（${EXAM_NAMES[S.exam]} 优先）</h2>
      <div class="list">
        ${DB.vocab.slice().sort((a, b) => (b.exam === S.exam) - (a.exam === S.exam)).map(v => `
          <div class="list-item">
            <div>
              <b>${esc(v.word)}</b> <span class="muted">${esc(v.pos)} ${esc(v.meaning)}</span>
              <span class="tag ${v.exam === S.exam ? 'on' : ''}">${EXAM_NAMES[v.exam]}</span>
              <div class="muted">${esc(v.example)}</div>
            </div>
            ${S.vocab[v.word]
      ? `<button class="btn small ghost" onclick="removeWord('${esc(v.word)}');VIEWS.vocab()">移出生词本</button>`
      : `<button class="btn small" onclick="addWord('${esc(v.word)}');VIEWS.vocab()">＋ 加入生词本</button>`}
          </div>`).join('')}
      </div>
    </div>`;
};
function doReview(word, known) { reviewWord(word, known); VIEWS.vocab(); }

/* ---------- 错题本 ---------- */
VIEWS.wrong = function () {
  if (!S.wrongBook.length) {
    app.innerHTML = `<div class="page-head"><h1>📕 错题本</h1></div><p class="ok-msg card">✓ 错题本是空的，继续保持！</p>`;
    return;
  }
  app.innerHTML = `
    <div class="page-head">
      <h1>📕 错题本（${S.wrongBook.length}）</h1>
      <button class="btn small ghost" onclick="clearWrong()">清空错题本</button>
    </div>
    <div class="list">
      ${S.wrongBook.map((w, i) => {
    const a = DB.articles.find(x => x.id === w.articleId);
    const q = a && a.questions[w.qIndex];
    if (!q) return '';
    return `
          <div class="card">
            <p class="muted">${esc(a.title)} · ${esc(w.time)}</p>
            <p><b>Q${w.qIndex + 1}.</b> ${esc(q.q)}</p>
            <p class="err-msg">你的答案：${esc(w.userAns)} · 正确答案：<b>${q.answer}</b></p>
            <details><summary>重做本题</summary>
              <div class="opts">
                ${['A', 'B', 'C', 'D'].map(k => `
                  <label class="opt"><input type="radio" name="rw${i}" value="${k}" onchange="redoWrong(${i},'${k}')">
                  <b>${k}.</b> ${esc(q.options[k])}</label>`).join('')}
              </div>
              <div id="redo-${i}"></div>
            </details>
            <details open><summary>干扰项分析</summary>
              <ul>${Object.entries(q.analysis).filter(([k]) => k !== q.answer).map(([k, v]) => `<li><b>${k}.</b> ${esc(v)}</li>`).join('')}</ul></details>
          </div>`;
  }).join('')}
    </div>`;
};
function redoWrong(i, k) {
  const w = S.wrongBook[i];
  const ok = k === w.correct;
  document.getElementById('redo-' + i).innerHTML = ok
    ? '<p class="ok-msg">✓ 正确！可从错题本移除。</p><button class="btn small" onclick="S.wrongBook.splice(' + i + ',1);save();VIEWS.wrong()">移除该错题</button>'
    : '<p class="err-msg">✗ 仍不正确，正确答案是 ' + w.correct + '，请重读干扰项分析。</p>';
  save();
}
function clearWrong() {
  if (confirm('确定清空全部错题记录？此操作不可恢复。')) { S.wrongBook = []; save(); VIEWS.wrong(); }
}

/* ---------- 统计与周报 ---------- */
VIEWS.stats = function () {
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    days.push({ key, label: key.slice(5), h: S.history[key] || {} });
  }
  const sum = days.reduce((acc, d) => {
    acc.read += d.h.readDone || 0;
    acc.trans += d.h.transDone || 0;
    acc.writ += d.h.writDone || 0;
    acc.listen += d.h.listenDone || 0;
    acc.words += d.h.wordsDone || 0;
    const t = d.h.readTotal || 0, c = d.h.readCorrect || 0;
    acc.qTotal += t; acc.qCorrect += c;
    return acc;
  }, { read: 0, trans: 0, writ: 0, listen: 0, words: 0, qTotal: 0, qCorrect: 0 });
  const acc = sum.qTotal ? Math.round(sum.qCorrect / sum.qTotal * 100) : 0;
  const maxV = Math.max(1, ...days.map(d => (d.h.readDone || 0) + (d.h.transDone || 0) + (d.h.writDone || 0) + (d.h.listenDone || 0) + (d.h.wordsDone || 0)));

  const t = S.history[today()] || {};
  app.innerHTML = `
    <div class="page-head"><h1>📊 学习数据与周报</h1></div>
    <div class="stat-grid">
      <div class="stat"><b>${(t.readDone || 0)}</b><span>今日阅读(篇)</span></div>
      <div class="stat"><b>${t.readTotal ? Math.round((t.readCorrect / t.readTotal) * 100) + '%' : '—'}</b><span>今日阅读正确率</span></div>
      <div class="stat"><b>${(t.transDone || 0)}</b><span>今日翻译(题)</span></div>
      <div class="stat"><b>${(t.writDone || 0)}</b><span>今日写作(篇)</span></div>
      <div class="stat"><b>${(t.listenDone || 0)}</b><span>今日精听(句)</span></div>
      <div class="stat"><b>${(t.wordsDone || 0)}</b><span>今日复习生词</span></div>
    </div>

    <div class="card">
      <h2>近 7 天任务完成量</h2>
      <div class="chart">
        ${days.map(d => {
    const v = (d.h.readDone || 0) + (d.h.transDone || 0) + (d.h.writDone || 0) + (d.h.listenDone || 0) + (d.h.wordsDone || 0);
    return `<div class="col"><div class="col-bar" style="height:${Math.round(v / maxV * 120)}px" title="${v} 项">${v || ''}</div><span>${d.label}</span></div>`;
  }).join('')}
      </div>
    </div>

    <div class="card">
      <h2>📄 本周周报</h2>
      <table class="tbl">
        <tr><th>项目</th><th>近 7 天累计</th></tr>
        <tr><td>阅读练习</td><td>${sum.read} 篇</td></tr>
        <tr><td>阅读题目正确率</td><td>${sum.qTotal ? acc + '%（' + sum.qCorrect + '/' + sum.qTotal + '）' : '—'}</td></tr>
        <tr><td>翻译训练</td><td>${sum.trans} 题</td></tr>
        <tr><td>写作训练</td><td>${sum.writ} 篇</td></tr>
        <tr><td>听力精听</td><td>${sum.listen} 句</td></tr>
        <tr><td>生词复习</td><td>${sum.words} 个</td></tr>
        <tr><td>当前生词本存量</td><td>${Object.keys(S.vocab).length} 个</td></tr>
        <tr><td>错题本存量</td><td>${S.wrongBook.length} 题</td></tr>
      </table>
      <p class="muted">💡 建议每周日查看周报：若阅读正确率低于 60%，优先回顾错题本的干扰项分析；若精听量不足，适当调高每日听力任务。</p>
    </div>`;
};

/* ---------- 设置 ---------- */
VIEWS.settings = function () {
  app.innerHTML = `
    <div class="page-head"><h1>⚙️ 备考设置</h1></div>
    <div class="card">
      <h2>考试类型</h2>
      <div class="filters">
        ${Object.entries(EXAM_NAMES).map(([k, v]) => `<button class="chip ${S.exam === k ? 'on' : ''}" onclick="setExam('${k}')">${v}</button>`).join('')}
      </div>
      <p class="muted">切换后：每日推送、阅读/翻译题库筛选、词库排序将随之变化。</p>
    </div>
    <div class="card">
      <h2>备考周期</h2>
      <label>目标考试日期：
        <input type="date" id="goal" value="${esc(S.goalDate)}" onchange="S.goalDate=this.value;save();VIEWS.settings()">
      </label>
      ${S.goalDate ? `<p class="muted">距目标日期还有 <b>${Math.ceil((new Date(S.goalDate) - new Date()) / 86400000)}</b> 天</p>` : ''}
    </div>
    <div class="card">
      <h2>每日任务量</h2>
      ${[['read', '阅读（篇）', 0, 5], ['trans', '翻译（题）', 0, 5], ['writ', '写作（篇）', 0, 3], ['listen', '精听（句）', 0, 20], ['words', '生词复习（个）', 0, 30]].map(([k, label, min, max]) => `
        <label class="num-row">${label}
          <input type="number" min="${min}" max="${max}" value="${S.daily[k]}" onchange="S.daily.${k}=Math.max(${min},Math.min(${max},+this.value||0));save()">
        </label>`).join('')}
    </div>
    <div class="card">
      <h2>📥 题库导入（可用你自己手上的真题）</h2>
      <p class="muted">当前自定义题库：<b>${customBankSize()}</b> 条（已合并进内置题库生效）。导入后按 id 覆盖同 id 条目，新增条目直接追加。</p>
      <div class="file-row">
        <input type="file" id="bank-file" accept=".json,application/json" onchange="importBankFile(this)">
        <button class="btn ghost" onclick="downloadTemplate()">下载题库模板（含字段说明）</button>
      </div>
      <p class="muted">也可以直接粘贴 JSON：</p>
      <textarea id="bank-text" rows="7" placeholder='例如：{"articles":[{...}],"vocab":[{...}]}'></textarea>
      <div style="margin-top:10px">
        <button class="btn" onclick="importBankText()">导入粘贴的 JSON</button>
        <button class="btn ghost" onclick="exportBank()">导出当前自定义题库</button>
        <button class="btn ghost danger" onclick="doClearBank()">清空自定义题库</button>
      </div>
      <div id="bank-msg"></div>
      <details><summary><b>字段说明（怎么把真题转成 JSON）</b></summary>
        <table class="tbl">
          <tr><th>模块</th><th>必填字段</th></tr>
          <tr><td>articles（阅读）</td><td>id, exam(cet4/cet6/ky1/ky2), level(1/2/3), levelName, title, topic, source, paragraphs[{en,zh}], longSentences[{text,structure[{role,part,explain}],note}], questions[{q,options{A-D},answer,locate,analysis}]</td></tr>
          <tr><td>translations（翻译）</td><td>id, exam, type(cn2en/en2cn), label, topic, source, reference, keywords[], commonErrors[]</td></tr>
          <tr><td>writings（写作）</td><td>id, genre, exam, label, topic, prompt, framework[], patterns[], wordRange[min,max]</td></tr>
          <tr><td>listenings（听力）</td><td>id, exam, label, title, sentences[{en,zh}], blanks[{text(用 {{答案}} 标记空),answer,hint}]</td></tr>
          <tr><td>vocab（词汇）</td><td>word, pos, meaning, exam, example</td></tr>
        </table>
        <p class="muted">最简单的方式：把你的真题文本发给我，我按这个格式转好给你，你导入即可。</p>
      </details>
    </div>

    <div class="card">
      <h2>数据管理</h2>
      <button class="btn ghost" onclick="exportData()">导出学习数据（JSON）</button>
      <button class="btn ghost danger" onclick="resetData()">清空全部学习数据</button>
    </div>`;
};

/* ---------- 题库导入/导出 ---------- */
function bankMsg(html, isErr) {
  const el = document.getElementById('bank-msg');
  if (el) el.innerHTML = `<p class="${isErr ? 'err-msg' : 'ok-msg'}">${html}</p>`;
}
function applyBank(bank) {
  let n;
  try { n = mergeBank(bank); } catch (e) { return bankMsg('❌ 合并失败：' + e.message, true); }
  if (!n) return bankMsg('❌ 未识别到有效条目，请检查 JSON 是否符合模板字段。', true);
  try {
    const raw = localStorage.getItem(BANK_KEY);
    const old = raw ? JSON.parse(raw) : {};
    const merged = {};
    BANK_SECTIONS.forEach(k => {
      const a = Array.isArray(old[k]) ? old[k] : [];
      const b = Array.isArray(bank[k]) ? bank[k] : [];
      const key = (k === 'vocab') ? 'word' : 'id';
      const map = {};
      a.concat(b).forEach(it => { if (it && it[key]) map[it[key]] = it; });
      merged[k] = Object.values(map);
    });
    saveCustomBank(merged);
  } catch (e) { return bankMsg('❌ 保存失败：' + e.message, true); }
  bankMsg(`✅ 已导入并合并 <b>${n}</b> 条题库内容，刷新后即时生效。当前自定义题库共 ${customBankSize()} 条。`);
}
function importBankText() {
  const txt = (document.getElementById('bank-text').value || '').trim();
  if (!txt) return bankMsg('❌ 请先粘贴 JSON 内容。', true);
  let bank;
  try { bank = JSON.parse(txt); } catch (e) { return bankMsg('❌ JSON 格式错误：' + e.message, true); }
  applyBank(bank);
}
function importBankFile(input) {
  const f = input.files && input.files[0];
  if (!f) return;
  const fr = new FileReader();
  fr.onload = () => {
    let bank;
    try { bank = JSON.parse(fr.result); } catch (e) { return bankMsg('❌ 文件不是合法 JSON：' + e.message, true); }
    applyBank(bank);
  };
  fr.readAsText(f, 'utf-8');
}
function downloadTemplate() {
  const blob = new Blob([JSON.stringify(bankTemplate(), null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = '题库模板.json'; a.click();
}
function exportBank() {
  const raw = localStorage.getItem(BANK_KEY);
  if (!raw) return bankMsg('❌ 当前没有自定义题库可导出。', true);
  const blob = new Blob([raw], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = '自定义题库-' + today() + '.json'; a.click();
}
function doClearBank() {
  if (confirm('确定清空自定义题库？内置题库不受影响。')) { clearCustomBank(); bankMsg('✅ 自定义题库已清空，刷新页面后仅保留内置题库。'); }
}
function setExam(e) { S.exam = e; save(); VIEWS.settings(); }
function exportData() {
  const blob = new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'kaobao-backup-' + today() + '.json'; a.click();
}
function resetData() {
  if (confirm('确定清空全部学习数据（错题、生词、统计）？此操作不可恢复。')) {
    localStorage.removeItem(STORE_KEY); S = loadState(); VIEWS.settings(); renderNavBadges();
  }
}

/* ---------- 导航徽标 ---------- */
function renderNavBadges() {
  const due = dueWords().length;
  const el = document.getElementById('nav-due');
  if (el) { el.textContent = due || ''; el.style.display = due ? 'inline-block' : 'none'; }
}

/* ============================================================
 * 纯阅读模式（沉浸阅读）
 * 开关：文章页顶部按钮 / 右下浮动按钮 / 快捷键 F（进入）Esc（退出）
 * 可调：字号（+ / -）、行间距（L）、日间夜间（D）
 * 位置：进入与退出均锚定当前正在阅读的段落，保持阅读进度
 * 偏好：字号、行距、主题持久化到 localStorage
 * ============================================================ */
const RM_KEY = 'kaobao_reader_v1';
const RM_DEFAULTS = { size: 17, lh: 1.75, theme: 'light' };
let RM = (function () {
  try {
    const raw = localStorage.getItem(RM_KEY);
    if (raw) return Object.assign({}, RM_DEFAULTS, JSON.parse(raw));
  } catch (e) { /* 损坏则用默认值 */ }
  return Object.assign({}, RM_DEFAULTS);
})();
function rmSave() { localStorage.setItem(RM_KEY, JSON.stringify(RM)); }
function rmApply() {
  const r = document.documentElement.style;
  r.setProperty('--reading-size', RM.size + 'px');
  r.setProperty('--reading-lh', String(RM.lh));
  document.body.classList.toggle('theme-dark', RM.theme === 'dark');
  const t = document.getElementById('theme-toggle');
  if (t) t.textContent = RM.theme === 'dark' ? '日间' : '夜间';
}
const LH_STEPS = [1.5, 1.75, 2.0];
function rmLineHeight() {
  const i = LH_STEPS.indexOf(RM.lh);
  RM.lh = LH_STEPS[(i + 1) % LH_STEPS.length];
  rmSave(); rmApply();
}
function rmAdjust(delta) {
  RM.size = Math.max(14, Math.min(28, RM.size + delta));
  rmSave(); rmApply();
}
function rmToggleTheme() {
  RM.theme = RM.theme === 'dark' ? 'light' : 'dark';
  rmSave(); rmApply();
}
function rmIsReadingPage() { return parseHash().view === 'article'; }
function rmVisiblePara() {
  const paras = document.querySelectorAll('.article .para');
  if (!paras.length) return null;
  const vh = window.innerHeight || document.documentElement.clientHeight;
  for (const p of paras) {
    const b = p.getBoundingClientRect();
    if (b.bottom > vh * 0.25) return p;
  }
  return paras[paras.length - 1];
}
function rmUpdateFloat() {
  const f = document.getElementById('rm-float');
  if (!f) return;
  f.classList.toggle('show', rmIsReadingPage() && !document.body.classList.contains('reading-mode'));
}
function enterReadingMode() {
  if (!rmIsReadingPage()) return;
  const anchor = rmVisiblePara();
  const anchorId = anchor ? anchor.id : null;
  const offset = anchor ? anchor.getBoundingClientRect().top : 0;
  document.body.classList.add('reading-mode');
  rmRestoreAnchor(anchorId, offset);
  rmUpdateFloat();
}
function exitReadingMode() {
  if (!document.body.classList.contains('reading-mode')) return;
  const anchor = rmVisiblePara();
  const anchorId = anchor ? anchor.id : null;
  const offset = anchor ? anchor.getBoundingClientRect().top : 0;
  document.body.classList.remove('reading-mode');
  rmRestoreAnchor(anchorId, offset);
  rmUpdateFloat();
}
function rmRestoreAnchor(id, offset) {
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  const y = window.scrollY + el.getBoundingClientRect().top - offset;
  window.scrollTo(0, Math.max(0, y));
}
function rmToggle() {
  document.body.classList.contains('reading-mode') ? exitReadingMode() : enterReadingMode();
}
document.addEventListener('keydown', function (e) {
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  const k = e.key.toLowerCase();
  const inRM = document.body.classList.contains('reading-mode');
  if (k === 'escape') { if (inRM) exitReadingMode(); return; }
  if (k === 'f') {
    if (rmIsReadingPage()) { e.preventDefault(); rmToggle(); }
    else if (inRM) { e.preventDefault(); exitReadingMode(); }
    return;
  }
  if (k === '+' || k === '=') { e.preventDefault(); rmAdjust(1); return; }
  if (k === '-') { e.preventDefault(); rmAdjust(-1); return; }
  if (k === 'l') { e.preventDefault(); rmLineHeight(); return; }
  if (k === 'd') { e.preventDefault(); rmToggleTheme(); return; }
});

/* ---------- 扩展题库：分批存放，合并进运行时 DB ---------- */
function mergeBankSection(bank, keys) {
  if (!bank) return 0;
  let n = 0;
  keys.forEach(k => {
    (bank[k] || []).forEach(item => {
      if (!DB[k].some(x => x.id === item.id)) { DB[k].push(item); n++; }
    });
  });
  return n;
}

/* ---------- 真题库：与模拟题分开存放，合并进运行时 DB ---------- */
function mergeRealExam() {
  return mergeBankSection(typeof REAL_EXAM !== 'undefined' ? REAL_EXAM : null,
    ['translations', 'writings', 'listenings']);
}
/* 第二批：阅读扩充（自编模拟，带知识点标签与正确依据） */
function mergeBank2() {
  return mergeBankSection(typeof BANK_2 !== 'undefined' ? BANK_2 : null, ['articles']);
}

/* ---------- 为历史题目补全知识点标签 ----------
   早期批次的题目未写 tags，此处按题干特征推断，用于按考点检索与分布统计。
   规则命中优先级从具体到宽泛，命中即止。 */
function inferTag(q) {
  const s = String(q || '').toLowerCase();
  if (/closest in meaning|most probably means|refers to|the word ".{1,25}" /.test(s)) return '词义猜测';
  if (/attitude|tone of/.test(s)) return '观点态度';
  if (/main idea|mainly about|best title|best summaris|best expresses the author/.test(s)) return '主旨大意';
  if (/infer|imply|suggest|can be learned|what follows/.test(s)) return '推理判断';
  if (/according to|the passage says|what do we learn|which of the following is true/.test(s)) return '细节理解';
  return '细节理解';
}
function ensureTags() {
  DB.articles.forEach(a => {
    if (!a.verified) a.verified = 'mock';
    if (!a.tags) a.tags = [];
    (a.questions || []).forEach(q => {
      if (!q.tags) q.tags = [inferTag(q.q)];
    });
    // 文章级标签汇总（去重）
    const set = [];
    (a.questions || []).forEach(q => (q.tags || []).forEach(t => { if (!set.includes(t)) set.push(t); }));
    a.tags = set.length ? set : a.tags;
  });
}

/* ---------- 启动 ---------- */
VIEWS.review = VIEWS.vocab; // #review 兼容
const _customCount = loadCustomBank();   // 合并自定义（导入）题库
const _realCount = mergeRealExam();      // 合并真题库
const _bank2Count = mergeBank2();        // 合并第二批扩充（阅读）
ensureTags();                            // 为历史题目补全知识点标签
rmApply();
renderNavBadges();
route();
