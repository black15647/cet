/* ============================================================
 * 活书（Living Book）数据层
 *
 * 设计说明：
 *   1. 书 = 章节 + 分块（block），块类型：text/callout/list/paras/quiz/
 *      cloze/trans/flashcards/link。渲染逻辑在 app.js 的 VIEWS.book。
 *   2. 内容不复制：块通过 from 引用已有数据（DB.writings / DB.cloze /
 *      DB.articles / DB.translations / DB.vocab），运行时解析，
 *      题库更新后书自动跟随，单一事实源。
 *   3. 进度存 localStorage（S.books），与学习数据一起导出/导入。
 *   4. 新增一本书只需在 BOOK_DEFS 里加一条定义，无需改渲染逻辑。
 * ============================================================ */

const BOOK_DEFS = [
  {
    id: 'book-cet4-2024-12-1',
    title: '四级真题精读 · 2024年12月 第1套',
    desc: '把一套完整真题重构成"活书"：写作审题 → 选词填空 → 两篇仔细阅读（逐题即时判分）→ 汉译英。内容全部来自已双源核验的真题库。',
    cover: '📘',
    exam: 'cet4',
    chapters: [
      {
        title: '如何用这本书',
        blocks: [
          { type: 'callout', icon: '💡', title: '活书的用法',
            text: '像读一本可交互的教材一样从前往后读：阅读章节里的选择题点选项即时判分，答错标红并给出正确答案；每章末点「标记本章已读」记录进度，下次打开从上次读到的章节继续。' },
          { type: 'callout', icon: '📌', title: '内容来源',
            text: '本套题（2024年12月四级第1套）的文章、题干、选项逐字来自开源真题仓库 0609x/CET46-Resources 的文本版真题 PDF，答案经 PDF 内置答案表与懒笔记双源核对一致。没有编造，没有改写。' },
          { type: 'callout', icon: '🎯', title: '建议用时',
            text: '整卷精读约 60–90 分钟：写作审题 10 分钟、选词填空 15 分钟、仔细阅读两篇各 20 分钟、翻译 20 分钟。也可以只读某一章，进度独立记录。' },
        ],
      },
      {
        title: 'Part I 写作 · 快递服务业',
        blocks: [
          { type: 'text', from: { writing: 'wr-2024-12-cet4-1' }, part: 'prompt', title: '真题题目' },
          { type: 'list', from: { writing: 'wr-2024-12-cet4-1' }, part: 'framework', title: '写作框架' },
          { type: 'list', from: { writing: 'wr-2024-12-cet4-1' }, part: 'patterns', title: '可用句型' },
          { type: 'link', text: '去写作模块提交这篇作文 →', href: '#writing/wr-2024-12-cet4-1' },
        ],
      },
      {
        title: 'Part III Section A · 选词填空',
        blocks: [
          { type: 'cloze', from: { cloze: 'cz-2024-12-cet4-1' } },
          { type: 'link', text: '去选词填空模块作答并计分 →', href: '#cloze/cz-2024-12-cet4-1' },
        ],
      },
      {
        title: 'Section C · Passage One 人与自然',
        blocks: [
          { type: 'paras', from: { reading: 'rd-2024-12-cet4-1p1' } },
          { type: 'quiz', from: { reading: 'rd-2024-12-cet4-1p1' } },
        ],
      },
      {
        title: 'Section C · Passage Two 女性工程师',
        blocks: [
          { type: 'paras', from: { reading: 'rd-2024-12-cet4-1p2' } },
          { type: 'quiz', from: { reading: 'rd-2024-12-cet4-1p2' } },
        ],
      },
      {
        title: 'Part IV 汉译英 · 环境保护',
        blocks: [
          { type: 'trans', from: { trans: 'tr-2024-12-cet4-1' } },
          { type: 'link', text: '去翻译模块提交你的译文 →', href: '#trans/tr-2024-12-cet4-1' },
        ],
      },
    ],
  },
  {
    id: 'book-cet4-vocab',
    title: '四级核心词汇 · 闪卡速刷',
    desc: '内置 60 个四级核心词做成翻卡：先自己回想词义，点卡片看答案，不认识的词一键加入生词本走间隔复习。',
    cover: '🎴',
    exam: 'cet4',
    chapters: [
      { title: '第一批（1–20 词）', blocks: [{ type: 'flashcards', from: { vocabExam: 'cet4' }, range: [0, 20] }] },
      { title: '第二批（21–40 词）', blocks: [{ type: 'flashcards', from: { vocabExam: 'cet4' }, range: [20, 40] }] },
      { title: '第三批（41–60 词）', blocks: [{ type: 'flashcards', from: { vocabExam: 'cet4' }, range: [40, 60] }] },
    ],
  },
];

/* ---------- 数据解析（运行时从 DB 取，保证单一事实源） ---------- */
function bkFind(section, id) {
  return (DB[section] || []).find(x => x.id === id) || null;
}
function bkBook(id) { return BOOK_DEFS.find(b => b.id === id) || null; }

/* ---------- 进度（存 S.books） ---------- */
function bkState(bid) {
  if (!S.books) S.books = {};
  if (!S.books[bid]) S.books[bid] = { readChaps: [], quiz: {}, fc: {} };
  return S.books[bid];
}
function bkProgress(book) {
  const st = bkState(book.id);
  return { done: st.readChaps.length, total: book.chapters.length };
}
