/* ============================================================
 * 扩充题库（第二批 · 阅读）
 *
 * 字段沿用既有结构，并新增：
 *   tags        —— 知识点标签，便于按考点检索与查重
 *   basis       —— 正确答案的依据说明（与 analysis 的干扰项分析互补）
 *   verified    —— 'mock' = 自编模拟；'multi'/'single' = 真题及其验证状态
 *
 * 本批 6 篇均为自编模拟题，命题风格、篇幅与难度对齐 2023–2024 年
 * 相应考试的真题（CET-4 约 300 词、CET-6 约 400 词、考研约 450 词），
 * 不冒充真题，source 字段已明确标注。
 * ============================================================ */

const BANK_2 = {
  articles: [
    {
      id: 'r15', exam: 'cet4', level: 1, levelName: '基础',
      tags: ['主旨大意', '细节理解', '推理判断', '词义猜测'],
      verified: 'mock',
      source: '自编模拟 · CET-4 命题风格（篇幅与难度对齐 2023–2024 真题）',
      title: 'Making Time Work for You',
      topic: '校园生活 · 时间管理',
      paragraphs: [
        { en: "Almost every first-year student complains about the same thing: there are not enough hours in the day. Lectures, assignments, club activities and part-time jobs compete for attention, and the weekend disappears before it really begins. Yet the problem is rarely a shortage of time. Most students have roughly the same 168 hours each week; what differs is how deliberately those hours are arranged.", zh: '几乎所有大一新生都在抱怨同一件事：一天的时间不够用。上课、作业、社团活动和兼职互相争夺注意力，周末还没真正开始就没了。然而问题很少是时间不够。大多数学生每周都拥有大致相同的 168 小时，不同的是这些时间安排得有多用心。' },
        { en: "The most effective planning takes place before the week starts. Spending twenty minutes on Sunday evening listing the week's fixed commitments—classes, meetings, shifts—reveals how much time is actually left. Large assignments should then be broken down into smaller steps and assigned to specific days. A task written in a calendar is far more likely to be finished than one kept in memory, because it no longer competes for mental space.", zh: '最有效的规划在新一周开始前完成。周日晚上花二十分钟把本周的固定安排——上课、会议、值班——列出来，就能看出实际还剩多少时间。然后把大作业拆成若干小步骤，分配到具体的日子。写进日历的任务比记在脑子里的更可能被完成，因为它不再占用心理空间。' },
        { en: "Equally important is the courage to leave gaps. Many beginners fill every hour in the hope of appearing productive, but an over-packed schedule leaves no room for the unexpected and often leads to burnout. Rest is not the opposite of work; it is what makes sustained work possible. Students who protect their sleep and allow themselves short breaks generally accomplish more than those who grind without pause.", zh: '同样重要的，是有留出空档的勇气。许多新手把每个小时都填满，希望显得高效，但排得过满的计划没有应对意外的余地，往往导致倦怠。休息不是工作的对立面，而是让持续工作成为可能的前提。那些保证睡眠、允许自己短暂休息的学生，往往比不停埋头苦干的人完成得更多。' }
      ],
      longSentences: [
        {
          text: "A task written in a calendar is far more likely to be finished than one kept in memory, because it no longer competes for mental space.",
          structure: [
            { role: '主语（含后置定语）', part: 'A task written in a calendar', explain: 'written in a calendar 是过去分词短语作后置定语，修饰 task' },
            { role: '比较结构', part: 'is far more likely to be finished than one kept in memory', explain: 'more...than... 比较级；one 代指 task，避免重复' },
            { role: '原因状语从句', part: 'because it no longer competes for mental space', explain: 'because 引导，解释为何写下来更容易完成' }
          ],
          note: '抓比较级 more likely...than...，再补出 one 的指代（等于 task），句子主干即「A task is more likely to be finished than one kept in memory」。'
        }
      ],
      questions: [
        {
          q: 'What is the main idea of the passage?',
          options: { A: 'Students nowadays have far too much work to handle.', B: 'Good time management depends on planning rather than finding extra hours.', C: 'A part-time job is the main cause of students\' stress.', D: 'Weekends should be reserved entirely for rest.' },
          answer: 'B',
          locate: 1,
          tags: ['主旨大意'],
          basis: '第 1 段末两句点题——问题很少是时间不够，关键是这些时间安排得有多用心；第 2、3 段分别讲如何规划与为何要留白，全文围绕「规划时间」展开。',
          analysis: { A: '原文说问题很少是时间不够，A 与主旨相反，且只涉及现象未触及解法。', C: '兼职只是第 1 段列举的时间竞争项之一，非主要原因，属以偏概全。', D: '第 3 段主张留出空档和保证睡眠，并未说周末应完全用于休息，属过度推断。' }
        },
        {
          q: 'According to Paragraph 2, students are advised to ______.',
          options: { A: 'memorise their weekly schedule instead of writing it down', B: 'plan the week before it begins', C: 'finish large assignments in one sitting', D: 'avoid taking part-time jobs' },
          answer: 'B',
          locate: 2,
          tags: ['细节理解'],
          basis: '第 2 段首句明确说最有效的规划在新一周开始前完成，并具体建议在周日晚上列出固定安排。',
          analysis: { A: '原文恰恰相反：写进日历的任务比记在脑子里的更容易完成。', C: '原文建议把大作业拆成小步骤并分配到具体日子，而非一次性完成。', D: '兼职只是第 1 段列举项，全文从未建议放弃兼职，属无中生有。' }
        },
        {
          q: 'What can be inferred about an over-packed schedule?',
          options: { A: 'It helps students handle unexpected events better.', B: 'It is the only way to appear productive.', C: 'It may reduce long-term productivity.', D: 'It is recommended for first-year students.' },
          answer: 'C',
          locate: 3,
          tags: ['推理判断'],
          basis: '第 3 段说排满的计划没有应对意外的余地，往往导致倦怠；末句对比指出会休息的学生完成得更多，可推出排满反而降低长期产出。',
          analysis: { A: '与原文「没有应对意外的余地」直接矛盾，属反向干扰。', B: '原文只说新手希望显得高效，并未肯定这是唯一途径，绝对化表述。', D: '作者明确不赞成排满，与推荐给新生相反。' }
        },
        {
          q: 'The word "burnout" in Paragraph 3 is closest in meaning to ______.',
          options: { A: 'a state of complete exhaustion', B: 'a sudden burst of energy', C: 'a strong sense of achievement', D: 'a careful plan for the future' },
          answer: 'A',
          locate: 3,
          tags: ['词义猜测'],
          basis: '前文说排满计划没有应对意外的余地，后文紧接着讲休息的必要性与保证睡眠，可推知 burnout 是过度消耗后的疲惫状态。',
          analysis: { B: '与语境相反，burnout 中的 out 暗示耗尽而非迸发。', C: '成就感与「导致倦怠」的负面语境不符。', D: '「周密的计划」是第 2 段的话题，与本句语义无关，属跨段干扰。' }
        }
      ]
    },

    {
      id: 'r16', exam: 'cet4', level: 1, levelName: '基础',
      tags: ['细节理解', '细节理解', '词义猜测', '主旨大意'],
      verified: 'mock',
      source: '自编模拟 · CET-4 命题风格（篇幅与难度对齐 2023–2024 真题）',
      title: 'How Many Steps Do You Really Need?',
      topic: '健康生活 · 运动',
      paragraphs: [
        { en: "For decades, 10,000 steps has been presented as the daily target for a healthy life. Few people know where the number came from. It first appeared in Japan in the 1960s, not in a medical journal, but in a marketing campaign for a pedometer called Manpo-kei, which literally means the 10,000-step meter. The figure was catchy rather than scientific.", zh: '几十年来，日行一万步一直被当作健康生活的每日目标。很少有人知道这个数字的来历。它最早出现在 20 世纪 60 年代的日本，不是出自医学期刊，而是一款名为「万步计」的计步器的营销活动，字面意思就是万步测量器。这个数字朗朗上口，但并不科学。' },
        { en: "Recent studies have begun to test the claim rather than repeat it. Researchers following large groups of adults found that mortality risk fell steadily as daily steps increased, but the curve flattened somewhere between 7,000 and 8,000 steps. Beyond that point, the additional benefit became marginal. For older adults, even 4,000 to 5,000 steps a day was associated with measurably better health than a largely sedentary life.", zh: '近期研究开始检验而非重复这一说法。追踪大量成年人的研究者发现，随着每日步数增加，死亡风险稳步下降，但这条曲线在 7000 到 8000 步之间趋于平坦。超过这一点，额外收益变得微乎其微。对老年人而言，即便每天只走 4000 到 5000 步，健康状况也明显优于基本久坐的生活方式。' },
        { en: "None of this means that walking is overrated. On the contrary, it remains one of the cheapest and most accessible forms of exercise. What the evidence suggests is that the magic number matters less than the habit itself. A person who walks 6,000 steps every day is probably better off than one who marches 10,000 steps twice a week and sits for the rest of it. Consistency, it turns out, beats intensity.", zh: '这些都不意味着步行被高估了。恰恰相反，它仍是最廉价、最易获得的运动形式之一。证据表明，重要的是习惯本身，而非那个神奇数字。一个每天走 6000 步的人，可能比一周两次走满 10000 步、其余时间久坐的人更健康。结果表明，坚持胜过强度。' }
      ],
      longSentences: [
        {
          text: "Researchers following large groups of adults found that mortality risk fell steadily as daily steps increased, but the curve flattened somewhere between 7,000 and 8,000 steps.",
          structure: [
            { role: '主语（含后置定语）', part: 'Researchers following large groups of adults', explain: 'following... 为现在分词短语作后置定语，修饰 Researchers' },
            { role: '谓语 + 宾语从句', part: 'found that mortality risk fell steadily', explain: 'that 引导宾语从句' },
            { role: '时间状语从句', part: 'as daily steps increased', explain: 'as 表示「随着……」' },
            { role: '转折并列分句', part: 'but the curve flattened somewhere between 7,000 and 8,000 steps', explain: 'but 连接第二个并列分句，语义重心在转折之后' }
          ],
          note: 'CET 常见套路：转折之后才是重点。本句的重心是「曲线在 7000–8000 步之间变平」，即收益递减。'
        }
      ],
      questions: [
        {
          q: 'According to Paragraph 1, the 10,000-step target originated from ______.',
          options: { A: 'a medical journal in Japan', B: 'a marketing campaign for a pedometer', C: 'a government health guideline', D: 'a long-term clinical experiment' },
          answer: 'B',
          locate: 1,
          tags: ['细节理解'],
          basis: '第 1 段明确说这个数字不是出自医学期刊，而是一款名为 Manpo-kei 的计步器的营销活动。',
          analysis: { A: '原文用 not in a medical journal 直接否定，A 是典型的反向干扰，取自原文词语但语义相反。', C: '政府健康指南全文未提及。', D: '长期临床实验是第 2 段的内容，且时间上远晚于 1960 年代，属张冠李戴。' }
        },
        {
          q: 'What did recent studies find about daily step counts?',
          options: { A: 'The health benefit keeps growing without any limit.', B: 'The benefit levels off at around 7,000–8,000 steps.', C: 'Fewer than 4,000 steps brings no benefit at all.', D: '10,000 steps is the minimum requirement for older adults.' },
          answer: 'B',
          locate: 2,
          tags: ['细节理解'],
          basis: '第 2 段说曲线在 7000 到 8000 步之间趋于平坦，即收益在此之后递减。',
          analysis: { A: '与「曲线变平、额外收益微乎其微」直接矛盾。', C: '原文明确说老年人每天 4000–5000 步也明显优于久坐，C 与之相反。', D: '原文说老年人 4000–5000 步即有可测量的收益，10000 步并非最低要求，属数字干扰。' }
        },
        {
          q: 'The word "marginal" in Paragraph 2 is closest in meaning to ______.',
          options: { A: 'essential', B: 'slight and additional', C: 'immediate', D: 'surprising' },
          answer: 'B',
          locate: 2,
          tags: ['词义猜测'],
          basis: '前句说曲线趋于平坦，因此超过这一点的收益应是微小的、额外的，marginal 取「边际的、微小的」义。',
          analysis: { A: '必不可少的与「收益递减」的语境相反。', C: 'immediate 强调时间上的立即，原文讨论的是收益大小而非快慢。', D: 'surprising 带情感色彩，原文为客观数据陈述，无意外含义。' }
        },
        {
          q: 'Which of the following best expresses the author\'s view?',
          options: { A: 'Walking is overrated and should be replaced by other exercise.', B: 'Hitting an exact step target is the key to good health.', C: 'Regular moderate walking matters more than chasing a big number.', D: 'Older adults should avoid walking long distances.' },
          answer: 'C',
          locate: 3,
          tags: ['主旨大意'],
          basis: '末段指出重要的是习惯本身而非那个神奇数字，并以「坚持胜过强度」作结，C 是同义概括。',
          analysis: { A: '原文用 On the contrary 明确否定了步行被高估的说法。', B: '与「神奇数字没那么重要」相反，属核心观点上的反向干扰。', D: '原文说老年人即使步数较少也有收益，未建议其避免长距离行走。' }
        }
      ]
    },

    {
      id: 'r17', exam: 'cet6', level: 2, levelName: '进阶',
      tags: ['推理判断', '细节理解', '观点态度', '词义猜测'],
      verified: 'mock',
      source: '自编模拟 · CET-6 命题风格（篇幅与难度对齐 2023–2024 真题）',
      title: 'What Online Learning Revealed About Attention',
      topic: '教育科技 · 在线学习',
      paragraphs: [
        { en: "When universities moved their courses online, many observers predicted a revolution in access: anyone with a connection could study at a top institution. In one narrow sense the prediction came true. Enrolment in online programmes soared. What did not follow was completion. Large open courses routinely retain fewer than ten per cent of the students who register, and the gap between signing up and finishing has proved remarkably stubborn.", zh: '当大学把课程搬到线上时，许多观察者预言这将带来一场入学机会的革命：只要有网络，任何人都能在顶尖学府学习。从狭义上看这一预言成真了，在线项目的报名人数激增。但随之而来的并不是完成率。大型开放课程通常只能留住不到 10% 的注册学生，而报名与学完之间的鸿沟已被证明异常顽固。' },
        { en: "The reason is not that the material is too hard. It is that a screen asks for a kind of self-direction that most environments do not train. In a classroom, the presence of other people supplies a quiet pressure to keep going; at home, the same lecture competes with notifications, laundry and the refrigerator. Researchers describe this as an environment problem rather than a motivation problem: learners are rarely lazy, but they are frequently interrupted.", zh: '原因不在于材料太难，而在于屏幕要求一种大多数环境并未培养过的自我管理能力。在教室里，他人的存在提供了一种安静的压力推动你继续；而在家，同样的课程要与消息通知、待洗衣物和冰箱竞争。研究者将其描述为环境问题而非动力问题：学习者很少懒惰，但他们经常被中断。' },
        { en: "Some institutions have responded by redesigning rather than merely recording. Short segments with a question after every few minutes restore the rhythm of a live class. Weekly live sessions, even optional ones, give students a reason to keep pace. The lesson is not that online learning fails, but that it fails when it imitates a lecture hall instead of respecting the medium it actually uses.", zh: '一些院校的应对方式是重新设计课程，而不只是录像。每隔几分钟插入问题的短片段恢复了直播课堂的节奏；每周一次的直播课，即便是可选的，也给了学生跟上进度的理由。启示不在于在线学习失败了，而在于当它模仿讲堂、却不尊重自己真正使用的媒介时，它才会失败。' }
      ],
      longSentences: [
        {
          text: "The lesson is not that online learning fails, but that it fails when it imitates a lecture hall instead of respecting the medium it actually uses.",
          structure: [
            { role: '主句', part: 'The lesson is not that..., but that...', explain: 'not that...but that... 连接两个表语从句，重心在 but 之后' },
            { role: '第二个表语从句', part: 'it fails when it imitates a lecture hall instead of respecting the medium it actually uses', explain: '内含 when 时间状语从句与 instead of 对比结构' },
            { role: '定语从句', part: 'it actually uses', explain: '省略了关系代词 that/which，修饰 the medium' }
          ],
          note: '结尾长句常是主旨所在。not that...but that... 结构中，真正的观点永远在 but 之后。'
        }
      ],
      questions: [
        {
          q: 'What can be inferred from the completion rates mentioned in Paragraph 1?',
          options: { A: 'Online courses are generally harder than campus courses.', B: 'Easy access to enrolment does not guarantee that students finish.', C: 'Most students register for online courses by accident.', D: 'Universities have stopped offering large open courses.' },
          answer: 'B',
          locate: 1,
          tags: ['推理判断'],
          basis: '第 1 段指出报名人数激增，但大规模开放课程通常只能留住不到 10% 的注册者，可推出「容易报名不等于能学完」。',
          analysis: { A: '第 2 段首句明确否定「材料太难」这一解释，A 与原文直接冲突。', C: '原文未讨论注册动机，偶然注册属无中生有。', D: '第 3 段说院校正在重新设计课程而非停办，D 与事实相反。' }
        },
        {
          q: 'According to Paragraph 2, why do learners struggle with online courses?',
          options: { A: 'The course materials are poorly designed.', B: 'They lack the motivation to study.', C: 'Their home environment constantly interrupts them.', D: 'They miss the social life of the campus.' },
          answer: 'C',
          locate: 2,
          tags: ['细节理解'],
          basis: '第 2 段将其定性为环境问题而非动力问题，并举例说明在家的课程要与通知、家务等竞争，学习者经常被中断。',
          analysis: { A: '材料设计是第 3 段才提出的改进方向，且第 2 段明确说原因不是材料太难。', B: '原文直接否定了动力不足的说法，指出学习者很少懒惰。', D: '校园社交生活全文未提及，属凭常识设置的无关干扰。' }
        },
        {
          q: 'The author\'s attitude toward online learning is ______.',
          options: { A: 'strongly negative', B: 'uncritically enthusiastic', C: 'balanced but conditional', D: 'completely indifferent' },
          answer: 'C',
          locate: 3,
          tags: ['观点态度'],
          basis: '末段既指出重新设计后确有可行路径，又指出模仿讲堂就会失败，立场是有条件地认可。',
          analysis: { A: '作者给出了有效改进方案并说启示不在于在线学习失败了，态度并非否定。', B: '作者大量篇幅讨论完成率低与注意力困境，并非一味追捧。', D: '作者全程提出具体判断与建议，谈不上冷漠。' }
        },
        {
          q: 'The word "stubborn" in Paragraph 1 most probably means ______.',
          options: { A: 'easy to ignore', B: 'difficult to remove', C: 'quickly changing', D: 'widely praised' },
          answer: 'B',
          locate: 1,
          tags: ['词义猜测'],
          basis: '该词修饰报名与学完之间的鸿沟，且前文说完成率长期低于 10%，说明这道鸿沟难以消除。',
          analysis: { A: '完成率低已是显著问题，不可能容易忽视。', C: '与长期低于 10% 的稳定状态相反。', D: '广受称赞与负面语境不符。' }
        }
      ]
    },

    {
      id: 'r18', exam: 'cet6', level: 2, levelName: '进阶',
      tags: ['主旨大意', '细节理解', '推理判断', '词义猜测'],
      verified: 'mock',
      source: '自编模拟 · CET-6 命题风格（篇幅与难度对齐 2023–2024 真题）',
      title: 'The Quiet Return of the Skilled Trades',
      topic: '就业市场 · 职业教育',
      paragraphs: [
        { en: "For a generation, young people in many countries were told the same story: go to university, or be left behind. The advice produced a familiar result. Graduate numbers climbed, while the trades that keep societies running—electricians, plumbers, welders, technicians—fell short of demand. In several economies, employers now report vacancies they struggle to fill for months, and the average age of a skilled tradesperson is rising fast.", zh: '整整一代人，在许多国家都被灌输同一个说法：上大学，否则就会被甩在后面。这一建议带来了熟悉的结果。大学毕业生数量攀升，而维持社会运转的技术工种——电工、水管工、焊工、技术员——却供不应求。在一些经济体，雇主报告的职位空缺数月难以填补，技术工人的平均年龄正在快速上升。' },
        { en: "Several forces are at work. The prejudice against manual work is only the most visible one; it discouraged students who would have thrived in such careers. Funding is the second: vocational training lost support even as universities expanded. Demography compounds both. In countries with ageing populations, experienced tradespeople are retiring faster than apprentices can replace them, and the gap widens each year.", zh: '有多重因素在起作用。对体力劳动的偏见只是最显眼的一个，它劝退了本可在这些职业中大放异彩的学生。第二个因素是投入：在大学扩张的同时，职业培训却失去了支持。人口结构则使前两者雪上加霜。在人口老龄化的国家，经验丰富的技术工人退休速度快于学徒补充的速度，缺口逐年扩大。' },
        { en: "The market has begun to correct itself. Wages for licensed trades have risen faster than those of many entry-level office jobs, and the premium is no longer limited to wealthy countries. More importantly, the stigma is softening as career-changers with degrees move into the trades and speak publicly about the appeal of work that produces something visible. Whether policy will follow the market, however, remains uncertain.", zh: '市场已开始自我修正。持证技术工种的薪资涨幅超过了许多入门级办公室工作，而且这一溢价不再局限于富裕国家。更重要的是，随着拥有学位的转行者进入技术行业，并公开谈论「做出看得见的东西」这一工作的吸引力，偏见正在软化。然而，政策是否会跟上市场的步伐，仍不确定。' }
      ],
      longSentences: [
        {
          text: "In countries with ageing populations, experienced tradespeople are retiring faster than apprentices can replace them, and the gap widens each year.",
          structure: [
            { role: '状语', part: 'In countries with ageing populations', explain: '介词短语作范围状语，with 短语修饰 countries' },
            { role: '并列分句一', part: 'experienced tradespeople are retiring faster than apprentices can replace them', explain: '含 faster than 比较状语从句' },
            { role: '并列分句二', part: 'the gap widens each year', explain: 'and 连接的第二个结果性分句' }
          ],
          note: 'faster than 比较的是退休速度与补充速度，读懂这一层才能理解缺口为何扩大。'
        }
      ],
      questions: [
        {
          q: 'What is the passage mainly about?',
          options: { A: 'The falling quality of university education.', B: 'The shortage of skilled trades and the forces behind it.', C: 'The advantages of studying abroad.', D: 'How to choose a university major.' },
          answer: 'B',
          locate: 1,
          tags: ['主旨大意'],
          basis: '第 1 段提出技术工种供不应求的现象，第 2 段分析三重成因，第 3 段讲市场自我修正，全文主线即短缺及其成因。',
          analysis: { A: '大学教育质量全文未评价，只提到大学扩张与毕业生数量增加。', C: '出国留学与本文无关。', D: '选专业建议属实用性推断，原文并未给出此类指导，属脱离文本。' }
        },
        {
          q: 'According to Paragraph 2, which of the following contributes to the shortage?',
          options: { A: 'A rise in university tuition fees.', B: 'Reduced support for vocational training.', C: 'A fall in the retirement age.', D: 'Growing interest in manual work among graduates.' },
          answer: 'B',
          locate: 2,
          tags: ['细节理解'],
          basis: '第 2 段明确列出第二个因素：在大学扩张的同时，职业培训却失去了支持。',
          analysis: { A: '学费全文未提及，属凭常识设置的无关干扰。', C: '原文说人口老龄化导致退休人数多，并未说退休年龄下调。', D: '拥有学位者转行进入技术行业是第 3 段的现象，是缓解短缺的因素而非成因，属因果倒置。' }
        },
        {
          q: 'What does the rise in wages for licensed trades suggest?',
          options: { A: 'Market forces are responding to the shortage.', B: 'Office jobs will disappear completely.', C: 'Training costs have fallen sharply.', D: 'The prejudice against manual work has vanished.' },
          answer: 'A',
          locate: 3,
          tags: ['推理判断'],
          basis: '第 3 段首句点明市场已开始自我修正，薪资上涨紧随其后作为例证，可推出涨薪是市场对短缺的反应。',
          analysis: { B: '过于绝对，原文只说技工薪资涨幅超过部分入门级办公室工作。', C: '培训成本全文未讨论。', D: '原文说偏见正在软化而非已消失，程度被夸大。' }
        },
        {
          q: 'The word "stigma" in Paragraph 3 is closest in meaning to ______.',
          options: { A: 'a mark of disgrace', B: 'a sign of honour', C: 'a legal requirement', D: 'a technical skill' },
          answer: 'A',
          locate: 3,
          tags: ['词义猜测'],
          basis: '该词回指第 2 段「对体力劳动的偏见」，且第 3 段说它正在软化，故 stigma 意为污名、耻辱的标记。',
          analysis: { B: '与偏见语义相反。', C: '法律要求与偏见软化的上下文无关。', D: '技术技能是全文另一话题，与本词所在句无关，属相邻话题干扰。' }
        }
      ]
    },

    {
      id: 'r19', exam: 'ky1', level: 3, levelName: '拔高',
      tags: ['主旨大意', '细节理解', '推理判断', '词义猜测'],
      verified: 'mock',
      source: '自编模拟 · 考研英语一 Text 风格（篇幅与难度对齐近年真题）',
      title: 'The Seductive Arithmetic of Carbon Offsetting (考研英语一)',
      topic: '环境政策 · 气候治理',
      paragraphs: [
        { en: "Few instruments have been embraced by corporations as eagerly as carbon offsetting. The proposition is elegantly simple: emissions that cannot be eliminated at source may be balanced by preventing or absorbing an equivalent quantity elsewhere, so that a company can declare itself carbon neutral without altering how it operates. Airlines sell tickets described as offset; technology firms promise neutral data centres. The arithmetic is comforting precisely because it asks nothing of the underlying business model.", zh: '很少有工具像碳抵消这样被企业热切拥抱。其主张简洁优雅：无法在源头消除的排放，可以通过在别处避免或吸收等量排放来抵消，于是企业无需改变自身运营方式，便可宣布实现碳中和。航空公司出售被称作已抵消的机票；科技公司承诺中和数据中心。这套算术之所以令人安心，恰恰在于它对底层商业模式毫无要求。' },
        { en: "The difficulty is that the equivalence it presumes is exceptionally hard to demonstrate. A tonne of carbon saved by preserving a forest is not obviously the same as a tonne not emitted by a factory, for the counterfactual—what would have happened to that forest anyway—can never be observed, only modelled. Nor is permanence assured: a forest protected today may burn tomorrow, releasing in an afternoon what took decades to accumulate. Critics have long argued that offsetting functions less as a substitute for reduction than as a licence to postpone it.", zh: '困难在于，它所预设的等量关系极难证实。通过保护森林而节省的一吨碳，与工厂未排放的一吨碳是否等价并不显然，因为反事实——那片森林本来会发生什么——永远无法被观测，只能被建模。永久性同样没有保障：今天受保护的森林明天可能被烧毁，一个下午就释放掉数十年才积累下来的碳。批评者早就指出，抵消与其说是减排的替代品，不如说是推迟减排的许可证。' },
        { en: "None of which makes offsetting worthless. Some emissions are genuinely hard to eliminate, and a credible offset market can channel money towards projects that would otherwise lack funding. What follows, however, is a strict ordering: reduce first, offset only what remains, and treat the offset as a temporary bridge rather than a permanent solution. The uncomfortable implication is that genuine neutrality cannot be purchased at the margin; it has to be engineered into the process that produces the emissions in the first place.", zh: '这些都不意味着碳抵消毫无价值。有些排放确实难以消除，一个可信的抵消市场可以把资金引向原本缺乏经费的项目。然而由此得出的是一种严格的次序：先减排，只为剩余部分做抵消，并把抵消当作临时桥梁而非常久方案。令人不安的推论是：真正的碳中和无法在边缘处购买获得，它必须被设计进那个最初产生排放的流程之中。' }
      ],
      longSentences: [
        {
          text: "A tonne of carbon saved by preserving a forest is not obviously the same as a tonne not emitted by a factory, for the counterfactual—what would have happened to that forest anyway—can never be observed, only modelled.",
          structure: [
            { role: '主句（比较结构）', part: 'A tonne ... is not obviously the same as a tonne ...', explain: 'the same as 比较结构，两个 tonne 分别带后置定语' },
            { role: '后置定语一（被动）', part: 'saved by preserving a forest', explain: '修饰第一个 tonne' },
            { role: '后置定语二（否定被动）', part: 'not emitted by a factory', explain: '修饰第二个 tonne，注意 not 的位置' },
            { role: '原因状语从句', part: 'for the counterfactual ... can never be observed, only modelled', explain: 'for 此处表因为；破折号内为 counterfactual 的同位解释' }
          ],
          note: '考研一典型句式：比较 + 双重后置定语 + for 引导原因 + 破折号同位语。破折号内的 what 从句是理解 counterfactual（反事实）的关键。'
        }
      ],
      questions: [
        {
          q: 'What is the main idea of the passage?',
          options: { A: 'Carbon offsetting should be abandoned as a failure.', B: 'Offsetting is useful only after genuine reductions have been made.', C: 'Airlines and technology firms lead the fight against climate change.', D: 'Forest preservation is the most reliable way to absorb carbon.' },
          answer: 'B',
          locate: 3,
          tags: ['主旨大意'],
          basis: '末段给出严格的次序：先减排，只为剩余部分抵消，视抵消为临时桥梁；这正是全文的结论性观点。',
          analysis: { A: '末段明确说这些都不意味着碳抵消毫无价值，作者主张限定用途而非废弃，属过度推断。', C: '航空公司与科技公司是首段举例，且带轻微讽刺意味，非全文主题。', D: '森林保护在文中被用作永久性存疑的反例，与最可靠相反。' }
        },
        {
          q: 'According to Paragraph 2, what is a major problem with carbon offsetting?',
          options: { A: 'The equivalence it assumes is difficult to verify.', B: 'It has been banned by most governments.', C: 'It is far more expensive than cutting emissions.', D: 'Forests absorb far less carbon than factories emit.' },
          answer: 'A',
          locate: 2,
          tags: ['细节理解'],
          basis: '第 2 段首句即主题句：它所预设的等量关系极难证实，随后用反事实无法观测加以说明。',
          analysis: { B: '政府禁令全文未提及。', C: '成本对比并非第 2 段讨论的问题，属无中生有。', D: '原文未比较森林吸收量与工厂排放量，只说两者的等价性难以证明，属偷换概念。' }
        },
        {
          q: 'It can be inferred from the last paragraph that genuine carbon neutrality ______.',
          options: { A: 'can be achieved simply by buying enough offsets', B: 'requires changing how emissions are produced', C: 'is impossible for most companies to reach', D: 'depends mainly on the credibility of offset markets' },
          answer: 'B',
          locate: 3,
          tags: ['推理判断'],
          basis: '末句说真正的碳中和不可以在边缘处购买获得，必须被设计进最初产生排放的流程之中，即需改变生产方式。',
          analysis: { A: '与原文 cannot be purchased 直接矛盾，属反向干扰。', C: '过于绝对，原文说令人不安但并未断言不可能。', D: '可信的抵消市场是末段提到的局部价值，非实现碳中和的主要依靠，属以偏概全。' }
        },
        {
          q: 'The word "counterfactual" in Paragraph 2 refers to ______.',
          options: { A: 'a scientific measurement of carbon', B: 'what would have happened otherwise', C: 'the total emissions of a factory', D: 'a legal agreement between companies' },
          answer: 'B',
          locate: 2,
          tags: ['词义猜测'],
          basis: '破折号后紧接同位解释——那片森林本来会发生什么，这正是 counterfactual 的含义。',
          analysis: { A: '碳的科学测量与无法观测、只能建模的描述不符。', C: '工厂排放总量是本句比较的一方，不是 counterfactual 所指。', D: '企业间法律协议全文未涉及。' }
        }
      ]
    },

    {
      id: 'r20', exam: 'ky2', level: 3, levelName: '拔高',
      tags: ['细节理解', '推理判断', '主旨大意', '词义猜测'],
      verified: 'mock',
      source: '自编模拟 · 考研英语二 Text 风格（篇幅与难度对齐近年真题）',
      title: 'Why Small Brands Are Beating the Giants (考研英语二)',
      topic: '商业管理 · 品牌竞争',
      paragraphs: [
        { en: "For most of the twentieth century, scale was the decisive advantage in consumer goods. Large firms could buy advertising that rivals could not match, negotiate shelf space that newcomers could not afford, and spread fixed costs across millions of units. That logic is now weakening. In category after category—coffee, cosmetics, pet food—small brands launched within the past decade are taking share from incumbents that once seemed unassailable.", zh: '在二十世纪的大部分时间里，规模是消费品行业决定性的优势。大企业可以投放竞争对手无法匹敌的广告，拿下新来者负担不起的货架位置，并把固定成本分摊到数百万件产品上。这一逻辑如今正在弱化。在一个又一个品类——咖啡、化妆品、宠物食品——过去十年里创立的小品牌，正在从一度看似不可撼动的老牌企业手中夺取份额。' },
        { en: "Three changes explain the shift. Social media has collapsed the cost of reaching a niche audience: a brand with a modest budget can now find its first thousand customers directly, rather than buying television slots in the hope that some will be interested. Contract manufacturing has done the same for production, allowing a founder to launch a product without owning a factory. Underlying both is a change in taste—many consumers, particularly younger ones, read a smaller brand's specificity as a signal of authenticity that a mass brand struggles to fake.", zh: '三重变化解释了这一转变。社交媒体大幅降低了触达小众受众的成本：预算有限的小品牌如今可以直接找到最初的一千名顾客，而不必购买电视时段、寄望于其中有人感兴趣。合同代工在生产端起到了同样的作用，让创业者无需拥有工厂就能推出产品。支撑这两者的是口味的变化——许多消费者，尤其是年轻消费者，把小品牌的独特性解读为真实的信号，而大众品牌很难伪造这一点。' },
        { en: "Incumbents are not passive. Many have responded by acquiring the very brands that threaten them, paying premiums that reflect not current sales but the cost of rebuilding such relationships in-house. Others have launched internal incubators designed to mimic a start-up's speed. Both strategies carry a risk: the qualities that made a small brand attractive—its agility, its distinctive voice—are precisely those most easily lost once it is absorbed into a large organisation.", zh: '老牌企业并未坐以待毙。许多企业的应对方式是收购那些威胁到自己的品牌，所支付的溢价反映的不是当前销售额，而是在内部重建这类关系的成本。另一些则设立了内部孵化器，试图模仿初创企业的速度。两种策略都带有风险：让小品牌具备吸引力的那些特质——敏捷性、独特的声音——恰恰是在被大组织吸收后最容易丧失的东西。' }
      ],
      longSentences: [
        {
          text: "Many consumers, particularly younger ones, read a smaller brand's specificity as a signal of authenticity that a mass brand struggles to fake.",
          structure: [
            { role: '主语 + 插入语', part: 'Many consumers, particularly younger ones', explain: 'particularly younger ones 为插入的同位补充' },
            { role: '谓语', part: 'read ... as ...', explain: 'read A as B 意为把 A 解读为 B，并非阅读' },
            { role: '宾语', part: "a smaller brand's specificity", explain: 'read 的直接宾语' },
            { role: '定语从句', part: 'that a mass brand struggles to fake', explain: '修饰 a signal of authenticity，that 作 fake 的宾语' }
          ],
          note: '英语二常见熟词僻义考点：read...as... 在此意为解读为，不是阅读。'
        }
      ],
      questions: [
        {
          q: 'According to Paragraph 2, which factor has helped small brands grow?',
          options: { A: 'Lower costs of reaching customers and making products.', B: 'Government subsidies for new businesses.', C: 'The decline of social media advertising.', D: 'The disappearance of contract manufacturers.' },
          answer: 'A',
          locate: 2,
          tags: ['细节理解'],
          basis: '第 2 段说社交媒体大幅降低了触达小众受众的成本，合同代工让创业者无需拥有工厂就能推出产品，两者分别对应获客与生产成本的下降。',
          analysis: { B: '政府补贴全文未提及。', C: '原文说社交媒体降低了触达成本、帮助了小品牌，与衰落相反。', D: '合同代工是被当作助力因素提出的，与消失相反，属反向干扰。' }
        },
        {
          q: 'What can be inferred about incumbents\' acquisitions of small brands?',
          options: { A: 'They are usually cheap and low-risk.', B: 'They reflect the difficulty of building such brands in-house.', C: 'They have been abandoned by most large firms.', D: 'They guarantee that the acquired brand keeps its appeal.' },
          answer: 'B',
          locate: 3,
          tags: ['推理判断'],
          basis: '第 3 段说支付的溢价反映的不是当前销售额，而是在内部重建这类关系的成本，可推知收购反映出内部自建之难。',
          analysis: { A: '原文明确说支付的是溢价且两种策略都带有风险。', C: '原文说许多企业采取收购策略，与大多数已放弃相反。', D: '末句恰恰指出收购后最容易丧失的正是那些让它有吸引力的特质，D 与之矛盾。' }
        },
        {
          q: 'Which of the following best summarises the passage?',
          options: { A: 'Scale no longer guarantees success as small brands gain ground.', B: 'Large firms should stop acquiring their competitors.', C: 'Younger consumers dislike all mass brands.', D: 'Contract manufacturing has replaced traditional factories.' },
          answer: 'A',
          locate: 1,
          tags: ['主旨大意'],
          basis: '首段指出规模优势的逻辑正在弱化、小品牌正在夺取份额，中间分析成因，末段讲大企业应对，A 是对全文主线的概括。',
          analysis: { B: '收购只是末段提到的应对方式之一，作者并未主张停止收购，属过度推断。', C: '过于绝对，原文只说年轻消费者偏好小品牌的独特性。', D: '合同代工是助力因素之一，并未取代传统工厂，属夸大事实。' }
        },
        {
          q: 'The word "agility" in the last paragraph is closest in meaning to ______.',
          options: { A: 'the ability to move and adapt quickly', B: 'the size of a company\'s budget', C: 'the number of employees', D: 'the quality of a product' },
          answer: 'A',
          locate: 3,
          tags: ['词义猜测'],
          basis: '该词与独特的声音并列，都是小品牌被收购后易丧失的特质，且前文提到大企业在模仿初创企业的速度，故 agility 指快速反应与适应的能力。',
          analysis: { B: '预算规模与被收购后易丧失的特质不符。', C: '员工人数并非小品牌相对大企业的优势。', D: '产品质量全文未作为小品牌的核心优势讨论。' }
        }
      ]
    }
  ]
};
