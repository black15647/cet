/* ============================================================
 * 题库质量校验脚本（Node 运行，不参与页面加载）
 *
 * 用法：
 *   node tools/check.js
 *
 * 校验项：
 *   1. 结构完整性：必填字段、选项数量、答案合法性
 *   2. 答案唯一性：四个选项内容互不重复，正确答案必须在选项内
 *   3. 定位有效性：locate 指向的段落必须存在
 *   4. 长难句可定位：longSentences.text 必须能在正文段落中找到（否则拆解入口失效）
 *   5. 解析完整性：每题必须有 basis（正确依据）与 analysis（干扰项分析）
 *   6. 与已有题库重复度：题干两两相似度检测
 *   7. 分布统计：难度层级、考试类型、考点标签
 * ============================================================ */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = { console };
vm.createContext(ctx);
['js/data.js', 'js/realexam.js', 'js/bank2.js', 'js/bank3.js', 'js/bank4.js'].forEach(f => {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
});

/* 注意：const 声明属于词法环境，不会挂到 contextObject 上，
   必须用 runInContext 取值（直接 ctx.DB 会得到 undefined）。 */
const DB = vm.runInContext('DB', ctx);
const problems = [];
const warns = [];
const P = (m) => problems.push(m);
const W = (m) => warns.push(m);

/* 词形还原式的极简归一化，用于相似度比较 */
function norm(s) {
  return String(s || '').toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
}
function words(s) { return new Set(norm(s).split(' ').filter(w => w.length > 3)); }
function jaccard(a, b) {
  const A = words(a), B = words(b);
  if (!A.size || !B.size) return 0;
  let inter = 0; A.forEach(w => { if (B.has(w)) inter++; });
  return inter / (A.size + B.size - inter);
}

console.log('='.repeat(64));
console.log('题库质量校验');
console.log('='.repeat(64));

/* ---------- 合并扩展题库（与运行时 mergeBank2 / mergeRealExam 一致） ---------- */
vm.runInContext(`
  (function () {
    function merge(bank, keys) {
      if (!bank) return;
      keys.forEach(function (k) {
        (bank[k] || []).forEach(function (it) {
          if (!DB[k].some(function (x) { return x.id === it.id; })) DB[k].push(it);
        });
      });
    }
    merge(typeof REAL_EXAM !== 'undefined' ? REAL_EXAM : null, ['translations','writings','listenings']);
    merge(typeof BANK_2 !== 'undefined' ? BANK_2 : null, ['articles']);
  })();
`, ctx);

/* ---------- 0. 标签推断（与运行时 ensureTags 保持一致） ---------- */
function inferTag(q) {
  const s = String(q || '').toLowerCase();
  if (/closest in meaning|most probably means|refers to|the word ".{1,25}" /.test(s)) return '词义猜测';
  if (/attitude|tone of/.test(s)) return '观点态度';
  if (/main idea|mainly about|best title|best summaris|best expresses the author/.test(s)) return '主旨大意';
  if (/infer|imply|suggest|can be learned|what follows/.test(s)) return '推理判断';
  if (/according to|the passage says|what do we learn|which of the following is true/.test(s)) return '细节理解';
  return '细节理解';
}
DB.articles.forEach(a => {
  if (!a.verified) a.verified = 'mock';
  (a.questions || []).forEach(q => { if (!q.tags) q.tags = [inferTag(q.q)]; });
  const set = [];
  (a.questions || []).forEach(q => (q.tags || []).forEach(t => { if (!set.includes(t)) set.push(t); }));
  if (!a.tags || !a.tags.length) a.tags = set;
});

/* ---------- 1-5. 逐篇逐题校验 ---------- */
const allQ = [];
DB.articles.forEach(a => {
  const at = `${a.id}(${a.exam}/L${a.level})`;

  if (!['cet4', 'cet6', 'ky1', 'ky2'].includes(a.exam)) P(`${at} exam 字段非法：${a.exam}`);
  if (![1, 2, 3].includes(a.level)) P(`${at} level 字段非法：${a.level}`);
  if (!a.paragraphs || a.paragraphs.length < 2) P(`${at} 正文段落少于 2 段`);
  if (!a.questions || !a.questions.length) P(`${at} 没有题目`);
  if (!a.verified) W(`${at} 缺少 verified 字段（真题标注 multi/single，模拟标注 mock）`);
  if (!a.tags) W(`${at} 缺少知识点标签 tags`);

  (a.paragraphs || []).forEach((p, i) => {
    if (!p.en || !p.en.trim()) P(`${at} 第 ${i + 1} 段英文为空`);
    if (!p.zh || !p.zh.trim()) P(`${at} 第 ${i + 1} 段译文为空`);
  });

  /* 4. 长难句可定位（大小写不敏感，与运行时 highlightLong 保持一致） */
  (a.longSentences || []).forEach(ls => {
    const hit = (a.paragraphs || []).some(p => p.en.toLowerCase().includes(ls.text.toLowerCase()));
    if (!hit) P(`${at} 长难句无法在正文中匹配，拆解入口将失效：${ls.text.slice(0, 50)}…`);
    if (!ls.structure || ls.structure.length < 2) W(`${at} 长难句成分拆分少于 2 项`);
    if (!ls.note) W(`${at} 长难句缺少 note 提示`);
  });

  /* 逐题校验 */
  (a.questions || []).forEach((q, qi) => {
    const qt = `${at} Q${qi + 1}`;
    const keys = Object.keys(q.options || {});
    if (keys.join('') !== 'ABCD') P(`${qt} 选项不是完整的 A/B/C/D 四项（当前：${keys.join('')}）`);

    /* 2. 答案唯一性 */
    if (!q.options || !q.options[q.answer]) P(`${qt} 正确答案 ${q.answer} 不在选项内`);
    const vals = ['A', 'B', 'C', 'D'].map(k => norm(q.options && q.options[k]));
    for (let i = 0; i < vals.length; i++) {
      for (let j = i + 1; j < vals.length; j++) {
        if (vals[i] && vals[i] === vals[j]) P(`${qt} 选项 ${'ABCD'[i]} 与 ${'ABCD'[j]} 内容重复，答案将不唯一`);
      }
    }

    /* 3. 定位有效性 */
    if (!(q.locate >= 1 && q.locate <= (a.paragraphs || []).length)) {
      P(`${qt} locate=${q.locate} 超出正文段落范围（共 ${(a.paragraphs || []).length} 段）`);
    }

    /* 5. 解析完整性 */
    if (!q.basis) W(`${qt} 缺少 basis（正确答案依据）`);
    if (!q.analysis) { P(`${qt} 缺少 analysis（干扰项分析）`); }
    else {
      const bad = Object.keys(q.analysis).filter(k => k === q.answer);
      if (bad.length) P(`${qt} analysis 中不应包含正确项 ${bad.join(',')} 的分析`);
      const missing = ['A', 'B', 'C', 'D'].filter(k => k !== q.answer && !q.analysis[k]);
      if (missing.length) W(`${qt} 干扰项 ${missing.join(',')} 缺少分析说明`);
    }

    allQ.push({ id: qt, article: a.id, q: q.q, opts: q.options, answer: q.answer });
  });
});

/* ---------- 6. 重复度检测 ----------
   关键点：标准化考试存在大量固定问法（如 What is the main idea、
   The word "X" is closest in meaning to），仅比题干会把不同文章、
   不同考点的题目误判为重复。因此将「题干 + 四个选项」一并纳入比较，
   并对跨文章比较采用更高阈值。 */
function fullText(rec) {
  return [rec.q, rec.opts.A, rec.opts.B, rec.opts.C, rec.opts.D].join(' ');
}
let dupPairs = 0;
for (let i = 0; i < allQ.length; i++) {
  for (let j = i + 1; j < allQ.length; j++) {
    const a = allQ[i], b = allQ[j];
    const s = jaccard(fullText(a), fullText(b));
    const sameArticle = a.article === b.article;
    const hi = sameArticle ? 0.6 : 0.75;   // 同文章内从严，跨文章从宽
    const mid = sameArticle ? 0.45 : 0.6;
    const label = sameArticle ? '同文章内' : '跨文章';
    if (s >= hi) { P(`${label}题干与选项高度雷同（${(s * 100).toFixed(0)}%）：${a.id} ↔ ${b.id}`); dupPairs++; }
    else if (s >= mid) { W(`${label}相似度偏高（${(s * 100).toFixed(0)}%）：${a.id} ↔ ${b.id}`); dupPairs++; }
  }
}

/* ---------- 7. 分布统计 ---------- */
const byLevel = {}, byExam = {}, byTag = {};
DB.articles.forEach(a => {
  byLevel[a.level] = (byLevel[a.level] || 0) + 1;
  byExam[a.exam] = (byExam[a.exam] || 0) + 1;
  (a.tags || []).forEach(t => { byTag[t] = (byTag[t] || 0) + 1; });
});
const total = DB.articles.length;

console.log(`\n阅读文章总数：${total}`);
console.log('\n难度分层：');
[1, 2, 3].forEach(l => {
  const n = byLevel[l] || 0;
  const name = { 1: '基础', 2: '进阶', 3: '拔高' }[l];
  const pct = total ? (n / total * 100).toFixed(0) : 0;
  console.log(`  ${name} (L${l})：${n} 篇  ${pct}%  ${'█'.repeat(Math.round(n / total * 30))}`);
});
console.log('\n考试类型分布：');
Object.entries(byExam).forEach(([k, v]) => console.log(`  ${k}：${v} 篇`));
console.log('\n考点标签分布：');
Object.entries(byTag).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${k}：${v} 题`));

const realArticles = DB.articles.filter(a => a.verified === 'multi' || a.verified === 'single').length;
console.log(`\n真真题阅读：${realArticles} 篇 / 自编模拟：${total - realArticles} 篇`);

/* ---------- 结果 ---------- */
console.log('\n' + '='.repeat(64));
if (problems.length) {
  console.log(`❌ 发现 ${problems.length} 个必须修复的问题：`);
  problems.forEach(p => console.log('   - ' + p));
} else {
  console.log('✅ 结构与质量校验全部通过（答案唯一、定位有效、长难句可匹配、解析完整）');
}
if (warns.length) {
  console.log(`\n⚠️  ${warns.length} 条提示（不影响运行，建议补齐）：`);
  warns.slice(0, 12).forEach(w => console.log('   - ' + w));
  if (warns.length > 12) console.log(`   … 其余 ${warns.length - 12} 条省略`);
}
console.log('='.repeat(64));
process.exit(problems.length ? 1 : 0);
