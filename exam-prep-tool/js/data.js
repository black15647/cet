/* ============================================================
 * 备考助手 mock 数据层
 * exam 标识: cet4 / cet6 / ky1(考研英一) / ky2(考研英二)
 * level: 1 基础 / 2 进阶 / 3 冲刺
 * ============================================================ */

const DB = {};

/* ---------------- 阅读文章库 ---------------- */
DB.articles = [
  {
    id: 'r1', exam: 'cet4', level: 1, levelName: '基础',
    title: 'The Return of the Bicycle in Big Cities',
    topic: '社会生活',
    source: '模拟真题 · CET-4',
    paragraphs: [
      { en: "In recent years, big cities around the world have witnessed a surprising revival of the bicycle. Once seen as an outdated means of transport, cycling is now promoted by governments as a cheap, healthy and environmentally friendly way to travel.", zh: "近年来，世界各大城市见证了自行车的惊人复兴。自行车曾被视为过时的交通工具，如今却被政府作为廉价、健康且环保的出行方式加以推广。" },
      { en: "To encourage cycling, many cities have built dedicated bike lanes and launched shared-bike programs. Citizens can rent a bicycle with a smartphone app and leave it almost anywhere after use. This flexibility has made short trips far more convenient than before.", zh: "为了鼓励骑行，许多城市修建了专用自行车道并发起共享单车项目。市民可以用手机应用租一辆自行车，用完后几乎可以停放在任何地方。这种灵活性使短途出行比以往方便得多。" },
      { en: "However, the rapid growth of shared bikes has also caused problems. Bicycles are often parked in a disorderly way, blocking sidewalks and even roads. Critics argue that companies should be responsible for managing their fleets, while users should be educated to park properly.", zh: "然而，共享单车的快速增长也带来了问题。自行车常常乱停乱放，堵塞人行道甚至马路。批评者认为，企业应当负责管理自己的车队，同时应教育用户规范停车。" }
    ],
    longSentences: [
      {
        text: "Once seen as an outdated means of transport, cycling is now promoted by governments as a cheap, healthy and environmentally friendly way to travel.",
        structure: [
          { role: '过去分词短语（状语）', part: 'Once seen as an outdated means of transport', explain: '相当于 Once cycling was seen as...，作让步/背景状语' },
          { role: '主语', part: 'cycling', explain: '动名词作主语' },
          { role: '谓语（被动）', part: 'is now promoted by governments', explain: '一般现在时被动语态，now 为时间状语' },
          { role: 'as 引导的补足语', part: 'as a cheap, healthy and environmentally friendly way to travel', explain: 'promote...as... 固定搭配，三个并列形容词修饰 way' }
        ],
        note: '本句难点在于分词短语前置 + 被动语态 + as 结构叠加，拆掉分词短语后主干为 cycling is promoted as a way。'
      }
    ],
    questions: [
      {
        q: 'What change has happened to bicycles in big cities?',
        options: { A: 'They have been replaced by cars.', B: 'They have become popular again.', C: 'They are banned in city centers.', D: 'They are only used for sports.' },
        answer: 'B',
        locate: 1,
        analysis: { A: '首段说自行车"复兴"，并未被汽车取代，属无中生有。', C: '文中没有任何"禁止"信息，属于主观臆断。', D: '"only used for sports" 过于绝对，且原文强调的是交通工具属性。' }
      },
      {
        q: 'According to Paragraph 2, shared-bike programs make short trips ______.',
        options: { A: 'more expensive', B: 'slower', C: 'more convenient', D: 'less flexible' },
        answer: 'C',
        locate: 2,
        analysis: { A: '原文强调 cheap，与 expensive 相反。', B: '原文未提速度变慢，属无中生有。', D: '原文恰恰说 flexibility 使出行更方便，与选项相反。' }
      },
      {
        q: 'What do critics suggest about shared bikes?',
        options: { A: 'Companies should manage their fleets.', B: 'Shared bikes should be banned.', C: 'Users should buy their own bikes.', D: 'Cities should stop building bike lanes.' },
        answer: 'A',
        locate: 3,
        analysis: { B: '批评者只是指出问题并提建议，未要求全面禁止，属过度推断。', C: '原文与"用户自购自行车"无关。', D: '第二段肯定了自行车道的作用，第三段也未否定，属曲解文意。' }
      }
    ]
  },
  {
    id: 'r2', exam: 'cet4', level: 2, levelName: '进阶',
    title: 'Sleep and Learning: Why All-Nighters Backfire',
    topic: '健康科学',
    source: '模拟真题 · CET-4',
    paragraphs: [
      { en: "Many students believe that staying up all night before an exam is the best way to memorize more facts. Recent research on sleep and memory, however, suggests the opposite: sleep is not a break from learning, but an essential part of it.", zh: "许多学生认为考前通宵是记住更多知识点的最好办法。然而，关于睡眠与记忆的最新研究给出了相反的结论：睡眠不是学习的暂停，而是学习不可缺少的一部分。" },
      { en: "During deep sleep, the brain replays what it has learned during the day and transfers fragile short-term memories into long-term storage. Without this process, much of the material studied at night simply fades away before morning.", zh: "在深度睡眠期间，大脑会重放白天学到的内容，把脆弱的短期记忆转入长期存储。没有这一过程，夜间学习的许多内容在早晨到来之前就已淡忘。" },
      { en: "Researchers therefore advise students to plan review sessions several days ahead and to protect their sleeping hours. In the long run, a well-rested brain learns faster and performs more steadily than an exhausted one.", zh: "因此，研究人员建议学生提前几天安排复习，并保证睡眠时间。长远来看，休息充分的大脑比疲惫的大脑学得更快、发挥更稳定。" }
    ],
    longSentences: [
      {
        text: "During deep sleep, the brain replays what it has learned during the day and transfers fragile short-term memories into long-term storage.",
        structure: [
          { role: '时间状语', part: 'During deep sleep', explain: '介词短语作状语' },
          { role: '主语 + 并列谓语', part: 'the brain replays ... and transfers ...', explain: '一个主语带两个并列谓语动词' },
          { role: '宾语从句', part: 'what it has learned during the day', explain: 'what 引导名词性从句作 replays 的宾语' },
          { role: '并列谓语 2 的宾语', part: 'fragile short-term memories', explain: '形容词堆叠修饰 memories' }
        ],
        note: '抓并列谓语是关键：replays what... and transfers... into...，两个动作共享主语 the brain。'
      }
    ],
    questions: [
      {
        q: 'What do recent studies show about sleep and memory?',
        options: { A: 'Sleep helps turn short-term memories into long-term ones.', B: 'Sleep prevents people from memorizing facts.', C: 'All-nighters improve exam performance.', D: 'Memory only forms during the day.' },
        answer: 'A',
        locate: 2,
        analysis: { B: '与原文"睡眠是学习的一部分"相反，属反向干扰。', C: '原文明确说通宵适得其反（backfire）。', D: '原文强调夜间睡眠中记忆被巩固，并非只在白天形成。' }
      },
      {
        q: 'The word "fragile" in Paragraph 2 is closest in meaning to ______.',
        options: { A: 'easily broken', B: 'highly complex', C: 'recently discovered', D: 'completely new' },
        answer: 'A',
        locate: 2,
        analysis: { B: '原文没有讨论记忆的复杂度。', C: '与"recent"无关，fragile 不指"新近发现"。', D: 'new 与 fragile 语义无关，属形近干扰。' }
      },
      {
        q: 'What do researchers recommend?',
        options: { A: 'Reviewing everything in one night.', B: 'Starting review early and sleeping well.', C: 'Drinking coffee instead of sleeping.', D: 'Studying right after waking up.' },
        answer: 'B',
        locate: 3,
        analysis: { A: '与"提前几天安排复习"的建议相反。', C: '原文完全未提咖啡。', D: '"醒后立刻学习"无文本依据。' }
      }
    ]
  },
  {
    id: 'r3', exam: 'cet6', level: 2, levelName: '进阶',
    title: 'The Hidden Cost of Fast Fashion',
    topic: '环境经济',
    source: '模拟真题 · CET-6',
    paragraphs: [
      { en: "Fast fashion—cheap clothes produced rapidly in response to the latest trends—has transformed the way people dress. Garments that once lasted for years are now worn a handful of times and discarded, as consumers chase styles that may fall out of fashion within weeks.", zh: "快时尚——为紧跟最新潮流而快速生产的廉价服装——改变了人们的着装方式。曾经能穿多年的衣服，如今穿几次就被丢弃，因为消费者追逐的可能几周内就过时的款式。" },
      { en: "The environmental toll is staggering. The fashion industry consumes vast quantities of water, discharges chemical dyes into rivers, and generates millions of tonnes of textile waste annually. Few of the synthetic fibres it relies on can be recycled economically at scale.", zh: "其环境代价触目惊心。时尚业消耗大量水资源，把化学染料排入河流，每年产生数百万吨纺织废料。它所依赖的合成纤维几乎没有多少能以经济的方式规模化回收。" },
      { en: "Some governments are responding with extended producer responsibility schemes, which make brands pay for the collection and recycling of the clothes they sell. Whether such measures can restrain a business model built on rapid consumption, however, remains an open question.", zh: "一些政府正以生产者责任延伸制度作出回应，该制度要求品牌为自己售出的服装的回收和处理付费。然而，这类措施能否约束一个建立在快速消费之上的商业模式，仍是未知数。" }
    ],
    longSentences: [
      {
        text: "Whether such measures can restrain a business model built on rapid consumption, however, remains an open question.",
        structure: [
          { role: '主语从句', part: 'Whether such measures can restrain a business model built on rapid consumption', explain: 'whether 引导的主语从句作整句主语' },
          { role: '插入语', part: 'however', explain: '副词插入，表转折，阅读时可先跳过' },
          { role: '谓语 + 表语', part: 'remains an open question', explain: 'remain 系动词 + 名词表语' },
          { role: '过去分词后置定语', part: 'built on rapid consumption', explain: '修饰 business model，相当于 which is built on...' }
        ],
        note: '长难句套路：主语从句 + 插入语。先删掉 however，找到 remains，主干即" Whether... remains an open question"。'
      }
    ],
    questions: [
      {
        q: 'What is a major environmental problem caused by fast fashion according to the passage?',
        options: { A: 'Water pollution from chemical dyes.', B: 'Shortage of cotton supply.', C: 'Rising prices of clothes.', D: 'Loss of traditional crafts.' },
        answer: 'A',
        locate: 2,
        analysis: { B: '原文谈的是水耗与废水，未提棉花短缺。', C: '快时尚衣服是"cheap"，与涨价相反。', D: '传统手艺失传无文本依据。' }
      },
      {
        q: 'What does "extended producer responsibility" require brands to do?',
        options: { A: 'Design clothes that never go out of fashion.', B: 'Pay for collecting and recycling what they sell.', C: 'Stop using synthetic fibres entirely.', D: 'Open factories in developing countries.' },
        answer: 'B',
        locate: 3,
        analysis: { A: '与快时尚模式相悖，原文未要求改变设计理念。', C: '原文说合成纤维难回收，但未要求完全停用，属过度推断。', D: '"在发展中国家开厂"无文本依据。' }
      },
      {
        q: 'The author\'s attitude toward current countermeasures is ______.',
        options: { A: 'fully confident', B: 'indifferent', C: 'cautiously reserved', D: 'strongly opposed' },
        answer: 'C',
        locate: 3,
        analysis: { A: '末句 "remains an open question" 表明作者并未完全相信。', B: '作者专门讨论措施，谈不上冷漠。', D: '作者客观陈述，并未强烈反对。' }
      }
    ]
  },
  {
    id: 'r4', exam: 'cet6', level: 3, levelName: '拔高',
    title: 'Artificial Intelligence and the Future of White-Collar Work',
    topic: '科技与社会',
    source: '模拟真题 · CET-6',
    paragraphs: [
      { en: "For decades, automation was expected to displace manual labourers first. The rapid progress of large language models has inverted that assumption: drafting contracts, writing reports and answering customer queries—tasks once considered the preserve of educated professionals—are now among the most readily automated.", zh: "几十年来，人们一直预期自动化将首先取代体力劳动者。大语言模型的迅猛进展颠倒了这一假设：起草合同、撰写报告、回复客户咨询——这些曾被视作受过教育的专业人士专属领地的任务——如今最容易被自动化。" },
      { en: "Economists caution that automation rarely eliminates occupations wholesale; it redefines them. When machines take over routine components of a job, human workers tend to concentrate on judgment, negotiation and accountability—the parts that are hardest to specify in code.", zh: "经济学家提醒，自动化很少把职业整体消灭，而是重新定义它。当机器接管一份工作中的常规部分，人类工作者会转向判断、谈判与担责——这些最难用代码明确规定的部分。" },
      { en: "The real challenge, then, may not be mass unemployment but distribution: who captures the productivity gains that AI creates. If the benefits flow overwhelmingly to the owners of capital, public support for the technology could erode, however impressive its capabilities become.", zh: "因此，真正的挑战或许不是大规模失业，而是分配问题：AI 创造的生产率红利由谁获取。如果收益绝大部分流向资本所有者，那么无论技术能力多么惊人，公众对它的支持都可能被侵蚀。" }
    ],
    longSentences: [
      {
        text: "Drafting contracts, writing reports and answering customer queries—tasks once considered the preserve of educated professionals—are now among the most readily automated.",
        structure: [
          { role: '三个并列动名词（主语）', part: 'Drafting contracts, writing reports and answering customer queries', explain: '动名词短语并列作主语' },
          { role: '同位语 + 插入结构', part: '—tasks once considered the preserve of educated professionals—', explain: '破折号插入的同位语，解释前面三个动名词；once considered 为过去分词缩略定语' },
          { role: '谓语 + 表语', part: 'are now among the most readily automated', explain: '系表结构，among 表示"属于……之列"' }
        ],
        note: '读破折号插入语时先跳过，主干是 Drafting..., writing... and answering... are among the most readily automated。'
      }
    ],
    questions: [
      {
        q: 'How has the progress of large language models changed assumptions about automation?',
        options: { A: 'It shows manual labour is hardest to automate.', B: 'It suggests white-collar tasks can be automated early.', C: 'It proves machines cannot handle language.', D: 'It confirms professionals will never be replaced.' },
        answer: 'B',
        locate: 1,
        analysis: { A: '原文说假设被"颠倒"，即脑力任务先被自动化，A 与此相反。', C: '大语言模型恰恰在处理语言方面进展迅猛。', D: '原文说这些任务"最容易被自动化"，D 过于绝对。' }
      },
      {
        q: 'According to economists, when machines take over routine work, humans tend to focus on ______.',
        options: { A: 'judgment, negotiation and accountability', B: 'faster typing and filing', C: 'designing new software', D: 'reducing labour costs' },
        answer: 'A',
        locate: 2,
        analysis: { B: '打字归档恰是"常规部分"，会被机器接管。', C: '"设计新软件"无文本依据。', D: '降低人力成本是企业视角，非原文所说的人类聚焦点。' }
      },
      {
        q: 'What is the author\'s main concern in the last paragraph?',
        options: { A: 'AI will definitely cause mass unemployment.', B: 'The gains from AI may be unfairly distributed.', C: 'AI technology is developing too slowly.', D: 'Governments should ban large language models.' },
        answer: 'B',
        locate: 3,
        analysis: { A: '作者明确说"真正的挑战或许不是大规模失业"。', C: '作者认可其能力惊人，与"发展太慢"相反。', D: '作者讨论的是分配，并未主张禁止技术。' }
      }
    ]
  },
  {
    id: 'r5', exam: 'ky1', level: 3, levelName: '拔高',
    title: 'The Paradox of Choice in the Digital Marketplace (考研英语一)',
    topic: '心理与消费',
    source: '模拟真题 · 考研英语一 Text 风格',
    paragraphs: [
      { en: "It is widely assumed that giving consumers more options can only make them better off. Yet a growing body of evidence suggests that an overabundance of choice may paradoxically diminish welfare: confronted with shelves of virtually identical products, shoppers procrastinate, second-guess their selections and, having finally decided, remain haunted by the alternatives forgone.", zh: "人们普遍认为给消费者更多选择只会让他们更受益。然而越来越多的证据表明，选择过剩可能适得其反地降低福祉：面对货架上几乎毫无差别的商品，购物者一拖再拖、反复怀疑自己的选择，而一旦最终决定，仍被放弃的备选项所萦绕。" },
      { en: "Digital marketplaces have amplified this paradox to an unprecedented degree. Algorithmic recommendation, ostensibly a remedy, may in fact deepen it: by ranking products according to past behaviour, platforms confirm existing preferences rather than expand them, so that the illusion of infinite variety conceals a narrowing of genuine alternatives.", zh: "数字市场把这一悖论放大到了前所未有的程度。算法推荐表面上是一剂良方，实际上可能使其加深：平台按照既往行为对商品排序，强化既有偏好而非拓宽偏好，以至于无限多样的幻觉掩盖了真实备选空间的收窄。" },
      { en: "The lesson is not that choice should be abolished but that its architecture matters. Just as a well-edited anthology guides readers through an overwhelming literary tradition, thoughtfully designed defaults and curated categories can convert abundance from a burden into an asset.", zh: "启示不在于应废除选择，而在于选择的结构至关重要。正如一部精心编选的文集能引导读者穿越浩瀚的文学传统，经过深思熟虑设计的默认项与策展式分类，能把充裕从负担转化为资产。" }
    ],
    longSentences: [
      {
        text: "Confronted with shelves of virtually identical products, shoppers procrastinate, second-guess their selections and, having finally decided, remain haunted by the alternatives forgone.",
        structure: [
          { role: '过去分词短语（状语）', part: 'Confronted with shelves of virtually identical products', explain: '表被动/条件意味的状语，逻辑主语是 shoppers' },
          { role: '主语 + 三个并列谓语', part: 'shoppers procrastinate, second-guess ... and ... remain haunted', explain: '并列谓语用逗号+and 连接，注意第三个谓语前插入分词短语' },
          { role: '插入的时间状语', part: 'having finally decided', explain: '完成式分词，表先于主句动作发生' },
          { role: '过去分词后置定语', part: 'the alternatives forgone', explain: 'forgone 后置修饰 alternatives，= alternatives that have been forgone' }
        ],
        note: '考研典型句式：分词状语 + 并列谓语 + 插入分词。去掉插入成分，主干是 shoppers procrastinate, second-guess... and remain haunted...' 
      }
    ],
    questions: [
      {
        q: 'According to Paragraph 1, an overabundance of choice may ______.',
        options: { A: 'raise the quality of decisions', B: 'leave decision-makers dissatisfied', C: 'eliminate hesitation among shoppers', D: 'simplify the process of comparison' },
        answer: 'B',
        locate: 1,
        analysis: { A: '原文说"diminish welfare"，与提高决策质量相反。', C: '原文说 shoppers procrastinate，是拖延而非消除犹豫。', D: '选项几乎相同导致比较更难，与 simplify 相反。' }
      },
      {
        q: 'The author suggests that algorithmic recommendation ______.',
        options: { A: 'expands consumers\' genuine alternatives', B: 'solves the paradox of choice effectively', C: 'may reinforce existing preferences rather than broaden them', D: 'has no influence on shopping behaviour' },
        answer: 'C',
        locate: 2,
        analysis: { A: '与原文"conceals a narrowing of genuine alternatives"相反。', B: '原文说它"may in fact deepen it"，并未解决问题。', D: '原文强调其对行为影响深远，D 与文意相反。' }
      },
      {
        q: 'The "well-edited anthology" is mentioned to illustrate that ______.',
        options: { A: 'literature is too abundant for readers', B: 'good structure turns abundance into an advantage', C: 'publishers should reduce the number of books', D: 'defaults should be avoided in design' },
        answer: 'B',
        locate: 3,
        analysis: { A: '文集只是类比手段，重点不在文学本身。', C: '作者未主张减少书籍数量，而是主张好的结构。', D: '作者恰恰赞许 thoughtfully designed defaults，D 与之相反。' }
      }
    ]
  },
  {
    id: 'r6', exam: 'ky2', level: 2, levelName: '进阶',
    title: 'Small Firms and the Green Transition (考研英语二)',
    topic: '企业与管理',
    source: '模拟真题 · 考研英语二 Text 风格',
    paragraphs: [
      { en: "When governments announce climate targets, attention usually turns to energy giants and multinational manufacturers. Yet small and medium-sized enterprises, which account for the majority of businesses in most economies, collectively exert an environmental impact that is anything but negligible.", zh: "当政府宣布气候目标时，注意力通常转向能源巨头和跨国制造企业。然而，占大多数经济体企业总数大头的中小企业，对环境造成的总体影响绝非可以忽略。" },
      { en: "The obstacle for such firms is rarely unwillingness; it is capacity. A corner bakery cannot hire a sustainability officer or navigate hundreds of pages of reporting rules. Well-designed public support—simple standards, accessible advice and modest subsidies—therefore matters more than ever-tightening penalties.", zh: "这类企业的障碍很少是意愿问题，而是能力问题。街角面包店请不起可持续发展专员，也读不懂数百页的报告规则。因此，设计良好的公共支持——简明的标准、易获取的指导、适度的补贴——比不断加码的惩罚更重要。" },
      { en: "Early programmes point in that direction. In several regions, vouchers let small firms buy external energy audits, and the results are encouraging: participants typically cut energy bills within a year, suggesting that green practice and competitiveness can advance hand in hand.", zh: "一些早期项目正指向这一方向。在若干地区，代金券让小企业可以购买外部能源审计服务，结果令人鼓舞：参与企业通常在一年内降低能耗账单，这表明绿色实践与竞争力可以携手并进。" }
    ],
    longSentences: [
      {
        text: "Well-designed public support—simple standards, accessible advice and modest subsidies—therefore matters more than ever-tightening penalties.",
        structure: [
          { role: '主语', part: 'Well-designed public support', explain: '复合形容词修饰的名词短语作主语' },
          { role: '同位语（插入）', part: '—simple standards, accessible advice and modest subsidies—', explain: '破折号内三项并列，具体解释 support 的内容' },
          { role: '状语', part: 'therefore', explain: '承接上文的推理副词' },
          { role: '谓语 + 比较结构', part: 'matters more than ever-tightening penalties', explain: 'matter 为动词；比较级 more than 连接两个比较对象' }
        ],
        note: '英语二长难句相对友好：跳过破折号同位语，主干即 public support matters more than penalties。'
      }
    ],
    questions: [
      {
        q: 'What is identified as the main obstacle for small firms in going green?',
        options: { A: 'Lack of willingness to change.', B: 'Limited capacity in expertise and resources.', C: 'Excessive government subsidies.', D: 'Strong competition from energy giants.' },
        answer: 'B',
        locate: 2,
        analysis: { A: '原文明确说"rarely unwillingness"，与 A 相反。', C: '原文认为补贴还不够、需要适度支持，而非"过多"。', D: '原文未将小企业困境归因于巨头竞争。' }
      },
      {
        q: 'The word "vouchers" in Paragraph 3 most probably means ______.',
        options: { A: 'certificates that can be used to pay for services', B: 'rules that firms must obey', C: 'heavy fines for polluting firms', D: 'awards given to green products' },
        answer: 'A',
        locate: 3,
        analysis: { B: 'vouchers 是支持工具而非强制规则。', C: '与第二段"惩罚不如支持重要"的基调相反。', D: '不是荣誉奖励，而是可用于购买服务的凭证。' }
      },
      {
        q: 'What can be inferred from the last paragraph?',
        options: { A: 'Green practice may go together with profitability.', B: 'Energy audits are useless for small firms.', C: 'Small firms refuse to join early programmes.', D: 'Energy bills have risen sharply in recent years.' },
        answer: 'A',
        locate: 3,
        basis: '末段末句明确指出 green practice and competitiveness can advance hand in hand（绿色实践与竞争力可以携手并进），A 是其同义改写。',
        analysis: { B: '与原文「结果令人鼓舞」矛盾，原文说参与者确实降低了能耗账单，审计并非无用。', C: '原文说参与企业通常一年内降低了账单，说明有企业参与，C 与文意相反。', D: '原文只说参与企业降低了账单，并未说总体电价上涨，属无中生有。' }
      }
    ]
  }
  ,
  {
    id: 'r7', exam: 'cet4', level: 1, levelName: '基础',
    title: 'Why Students Should Keep a Handwritten Diary',
    topic: '教育心理',
    source: '模拟真题 · CET-4',
    paragraphs: [
      { en: "In an age when almost everything is typed on a screen, keeping a handwritten diary may seem unnecessary. Yet teachers and psychologists have long argued that writing by hand does something for the brain that typing cannot fully replace.", zh: "在几乎所有东西都在屏幕上打字的时代，手写日记似乎已无必要。然而教师和心理学家早就主张，手写对大脑的作用无法被打字完全取代。" },
      { en: "When we write by hand, the movement required to form each letter slows us down and forces us to process information more deeply. Studies suggest that students who take notes by hand often remember more than those who type, even when the typed notes are more complete.", zh: "手写时，构成每个字母所需的动作让我们慢下来，迫使我们更深入地处理信息。研究表明，手写笔记的学生往往比打字的学生记得更多，即便后者笔记更完整。" },
      { en: "A diary also provides something that social media rarely does: a private space for honest reflection. Looking back at entries from a year ago, many people are surprised to discover how much they have changed.", zh: "日记还提供了社交媒体很少给予的东西：一个坦诚反省的私人空间。回看一年前的记录，许多人会惊讶地发现自己变化之大。" }
    ],
    longSentences: [
      {
        text: "Studies suggest that students who take notes by hand often remember more than those who type, even when the typed notes are more complete.",
        structure: [
          { role: '主句', part: 'Studies suggest that...', explain: 'suggest 后接 that 宾语从句' },
          { role: '定语从句', part: 'who take notes by hand', explain: '修饰 students' },
          { role: '比较结构', part: 'remember more than those who type', explain: 'more than 比较，those 代指 students' },
          { role: '让步状语从句', part: 'even when the typed notes are more complete', explain: 'even when 引导让步，表"即使"' }
        ],
        note: '层层嵌套：suggest → that 从句 → who 定语从句 → more than 比较 → even when 让步。先抓 suggest that，再逐层剥离。'
      }
    ],
    questions: [
      {
        q: 'What advantage does handwriting have according to the passage?',
        options: { A: 'It is faster than typing.', B: 'It helps people process information more deeply.', C: 'It produces longer notes.', D: 'It is preferred by all teachers.' },
        answer: 'B',
        locate: 2,
        analysis: { A: '原文说手写"slows us down"，并非更快。', C: '原文明确说打字笔记"more complete"（更完整），与 C 相反。', D: '"all teachers"过于绝对，文中只说教师和心理学家主张手写有用。' }
      },
      {
        q: 'The diary is described as valuable mainly because it ______.',
        options: { A: 'can be shared online easily', B: 'offers a private space for reflection', C: 'is required by schools', D: 'helps students improve handwriting' },
        answer: 'B',
        locate: 3,
        analysis: { A: '原文强调日记是"private space"，与社交媒体的分享属性相反。', C: '文中未提学校要求。', D: '练字只是附带效果，非原文强调的核心价值。' }
      }
    ]
  },
  {
    id: 'r8', exam: 'cet4', level: 2, levelName: '进阶',
    title: 'Urban Green Spaces and Mental Health',
    topic: '城市环境',
    source: '模拟真题 · CET-4',
    paragraphs: [
      { en: "City dwellers often accept noise, traffic and crowded streets as the price of convenience. What is less often discussed is the psychological cost of living without easy access to green space.", zh: "城市居民常把噪音、车流和拥挤街道当作便利的代价接受下来。较少被讨论的，是缺乏便利绿色空间所带来的心理代价。" },
      { en: "A growing number of studies link regular contact with parks and trees to lower levels of stress and anxiety. Researchers believe that natural settings restore attention, which is constantly drained by the demands of urban life.", zh: "越来越多的研究把经常接触公园和树木与更低的压力和焦虑水平联系起来。研究者认为，自然环境能恢复注意力，而注意力在都市生活中被不断消耗。" },
      { en: "Not every city can afford large new parks. Planting street trees, opening school playgrounds after hours and turning empty lots into community gardens are relatively cheap measures that produce measurable benefits.", zh: "并非每个城市都负担得起新建大型公园。种行道树、课后开放学校操场、把空地改造成社区花园，是相对廉价的措施，却能产生可衡量的效益。" }
    ],
    longSentences: [
      {
        text: "Researchers believe that natural settings restore attention, which is constantly drained by the demands of urban life.",
        structure: [
          { role: '主句', part: 'Researchers believe that...', explain: 'believe 后接 that 宾语从句' },
          { role: '宾语从句', part: 'natural settings restore attention', explain: '主语 + 谓语 + 宾语，结构完整' },
          { role: '非限定性定语从句', part: 'which is constantly drained by the demands of urban life', explain: 'which 指代 attention；被动语态' }
        ],
        note: '非限定性定语从句常是干扰项高发区：which 指代的是紧邻的 attention，而不是 natural settings。'
      }
    ],
    questions: [
      {
        q: 'What does the passage say about the effect of green space?',
        options: { A: 'It reduces stress and anxiety.', B: 'It eliminates urban noise.', C: 'It makes cities richer.', D: 'It replaces medical treatment.' },
        answer: 'A',
        locate: 2,
        analysis: { B: '噪音是城市生活的问题之一，原文未说绿地能消除噪音。', C: '经济财富未讨论，属无中生有。', D: '"替代医疗"属过度推断，原文只说降低压力焦虑。' }
      },
      {
        q: 'For cities that cannot build large parks, the author suggests ______.',
        options: { A: 'moving people to the countryside', B: 'low-cost measures such as street trees', C: 'closing school playgrounds', D: 'waiting for more research' },
        answer: 'B',
        locate: 3,
        analysis: { A: '迁移人口无文本依据。', C: '原文说"opening school playgrounds after hours"（课后开放），而非关闭。', D: '原文已给出可立刻采取的措施，不是等研究。' }
      }
    ]
  },
  {
    id: 'r9', exam: 'cet6', level: 2, levelName: '进阶',
    title: 'The Economics of Attention',
    topic: '传媒经济',
    source: '模拟真题 · CET-6',
    paragraphs: [
      { en: "For most of the twentieth century, media companies sold content and charged readers or viewers directly. The internet disrupted this arrangement, and many publishers turned to advertising—a model in which the product being sold is not the article but the reader's attention.", zh: "二十世纪的大部分时间里，媒体公司出售内容，直接向读者或观众收费。互联网打乱了这一格局，许多出版商转向广告——在这种模式下，被出售的产品不是文章，而是读者的注意力。" },
      { en: "Because attention is finite, platforms compete fiercely to capture and hold it. Algorithms are optimised for engagement, which often means amplifying content that provokes strong emotions, since outrage and surprise reliably outperform careful analysis.", zh: "由于注意力是有限的，平台激烈竞争以捕获并留住它。算法被优化为追求参与度，这往往意味着放大引发强烈情绪的内容，因为愤怒和惊讶总是比严谨分析更能获得互动。" },
      { en: "Critics warn that this incentive structure corrodes public discourse. Defenders reply that publishers have always catered to audiences, and that the solution lies not in abandoning the market but in making readers more demanding.", zh: "批评者警告，这种激励机制会侵蚀公共讨论。辩护者回应说，出版商一向迎合受众，出路不在于抛弃市场，而在于让读者变得更有要求。" }
    ],
    longSentences: [
      {
        text: "Algorithms are optimised for engagement, which often means amplifying content that provokes strong emotions, since outrage and surprise reliably outperform careful analysis.",
        structure: [
          { role: '主句（被动）', part: 'Algorithms are optimised for engagement', explain: '被动语态，动作执行者被隐去' },
          { role: '非限定性定语从句', part: 'which often means amplifying content...', explain: 'which 指代前面整句内容' },
          { role: '定语从句', part: 'that provokes strong emotions', explain: '修饰 content' },
          { role: '原因状语从句', part: 'since outrage and surprise reliably outperform careful analysis', explain: 'since 表"因为"，解释前文' }
        ],
        note: '四层结构：主句 → which 从句 → that 从句 → since 从句。定位时抓住 since 表原因，答案常在原因部分。'
      }
    ],
    questions: [
      {
        q: 'What is the product sold under the advertising model?',
        options: { A: 'The news article.', B: "The reader's attention.", C: 'The printing press.', D: 'The subscription fee.' },
        answer: 'B',
        locate: 1,
        analysis: { A: '原文明确说"不是文章"，A 是典型反向干扰。', C: '印刷机与商业模式无关。', D: '订阅费属于旧的收费模式，不是广告模式的产物。' }
      },
      {
        q: 'Why do algorithms favour emotional content?',
        options: { A: 'It is cheaper to produce.', B: 'It attracts more engagement than careful analysis.', C: 'It is required by law.', D: 'It is easier to translate.' },
        answer: 'B',
        locate: 2,
        analysis: { A: '生产成本原文未提。', C: '法律要求无文本依据。', D: '翻译难度与内容推荐无关。' }
      },
      {
        q: 'How do defenders of the market respond to critics?',
        options: { A: 'By demanding stricter regulation.', B: 'By arguing publishers should ignore audiences.', C: 'By saying the real fix is a more demanding readership.', D: 'By denying that algorithms exist.' },
        answer: 'C',
        locate: 3,
        analysis: { A: '加强监管更接近批评者的方案，非辩护者立场。', B: '与原文"出版商一向迎合受众"相反。', D: '辩护者并未否认算法存在。' }
      }
    ]
  },
  {
    id: 'r10', exam: 'cet6', level: 3, levelName: '拔高',
    title: 'Rethinking the Four-Day Week',
    topic: '劳动与管理',
    source: '模拟真题 · CET-6',
    paragraphs: [
      { en: "The five-day working week is so familiar that it seems natural, yet it is a historical accident rather than an economic necessity. Trials of a four-day week, in which employees keep full pay while working eighty per cent of their hours, have produced results that surprise even their advocates.", zh: "五天工作制如此司空见惯，以至于显得天经地义，但它其实是历史的偶然，而非经济上的必然。四天工作制的试验——员工在只工作 80% 工时的同时保留全额薪酬——产生的结果连倡导者都感到意外。" },
      { en: "In most reported trials, output has held steady and, in several cases, risen. The mechanism appears to be straightforward: shorter weeks force firms to eliminate meetings and procedures that had accumulated without anyone asking whether they were useful.", zh: "在多数已报告的试验中，产出保持稳定，部分案例中甚至有所提高。其机制似乎很直接：更短的工时迫使企业砍掉那些无人质疑是否有用而日积月累下来的会议与流程。" },
      { en: "Sceptics point out that the trials involve self-selected companies with enthusiastic managers, and results may not generalise. It is also unclear whether the gains would survive an economic downturn, when demand is weak and pressure to cut costs intensifies.", zh: "怀疑者指出，这些试验涉及的是自选参与、管理者热情高涨的公司，结果未必具有普适性。同样不清楚的是，在经济下行、需求疲软、降本压力加剧时，这些收益能否维持。" }
    ],
    longSentences: [
      {
        text: "Shorter weeks force firms to eliminate meetings and procedures that had accumulated without anyone asking whether they were useful.",
        structure: [
          { role: '主句', part: 'Shorter weeks force firms to eliminate meetings and procedures', explain: 'force sb to do sth 结构' },
          { role: '定语从句', part: 'that had accumulated', explain: '修饰 meetings and procedures，过去完成时表"此前已积累"' },
          { role: '介词短语（伴随）', part: 'without anyone asking whether they were useful', explain: 'without + 复合结构' },
          { role: '宾语从句', part: 'whether they were useful', explain: 'asking 的宾语从句' }
        ],
        note: '抓住 force... to eliminate... 主干，再把 that 从句和 without 结构剥离，句子就短了一半。'
      }
    ],
    questions: [
      {
        q: 'What feature of the four-day week trials is highlighted in Paragraph 1?',
        options: { A: 'Workers accept a pay cut.', B: 'Workers keep full pay while working fewer hours.', C: 'Firms hire more staff.', D: 'Offices close on Mondays only.' },
        answer: 'B',
        locate: 1,
        analysis: { A: '原文明确说"keep full pay"，与减薪相反。', C: '招聘人数未提及。', D: '具体休哪天原文未规定，属无中生有。' }
      },
      {
        q: 'According to Paragraph 2, why can shorter hours raise output?',
        options: { A: 'Employees work faster under pressure.', B: 'Firms are forced to remove useless meetings and procedures.', C: 'Customers place more orders.', D: 'Managers supervise more closely.' },
        answer: 'B',
        locate: 2,
        analysis: { A: '"在压力下加快"是常识推测，原文给出的是机制解释。', C: '客户订单非原文讨论对象。', D: '更严密的监管与原文"砍掉流程"方向相反。' }
      },
      {
        q: 'What concern do sceptics raise?',
        options: { A: 'The trials may not apply to all companies.', B: 'Employees dislike shorter weeks.', C: 'The trials are illegal.', D: 'Output always falls in downturns.' },
        answer: 'A',
        locate: 3,
        analysis: { B: '员工态度原文未提，且试验中员工多为获益方。', C: '合法性问题无文本依据。', D: '"always"过于绝对，原文只是说"不清楚收益能否维持"。' }
      }
    ]
  },
  {
    id: 'r11', exam: 'ky1', level: 3, levelName: '拔高',
    title: 'On the Ethics of Nudge Policies (考研英语一)',
    topic: '政治哲学',
    source: '模拟真题 · 考研英语一 Text 风格',
    paragraphs: [
      { en: "Governments increasingly shape behaviour not by banning or taxing, but by designing the contexts in which choices are made. Because citizens rarely deliberate over every decision, the way options are presented—defaults, orderings, wordings—can sway outcomes more powerfully than explicit rules.", zh: "政府越来越多地不是通过禁止或征税，而是通过设计选择发生的情境来塑造行为。由于公民很少对每个决定都深思熟虑，选项的呈现方式——默认项、排序、措辞——对结果的影响可能比明确的规则更有力。" },
      { en: "Defenders call this a nudge and insist it preserves freedom of choice, since every option remains available. Critics retort that the very language of preserving choice obscures the question of who decides: the official who arranges the menu, or the citizen who selects from it.", zh: "辩护者称之为助推，并坚称它保留了选择自由，因为每个选项依然可选。批评者反驳说，保留选择这套说法本身就掩盖了由谁决定的问题：是安排菜单的官员，还是从中挑选的公民。" },
      { en: "The dispute cannot be settled by appealing to outcomes alone, for a policy may be effective and yet illegitimate. What is needed is transparency about the purposes nudges serve and the evidence on which they rest, so that citizens can judge not merely whether they are influenced, but whether they are influenced for reasons they endorse.", zh: "这场争论无法仅靠诉诸结果来平息，因为一项政策可能有效却缺乏正当性。我们需要的是关于助推所服务的目的及其所依据证据的透明，这样公民才能判断的不仅是自己是否受到影响，更是自己是否因为认可的理由而受到影响。" }
    ],
    longSentences: [
      {
        text: "Critics retort that the very language of preserving choice obscures the question of who decides: the official who arranges the menu, or the citizen who selects from it.",
        structure: [
          { role: '主句', part: 'Critics retort that...', explain: 'retort 后接 that 宾语从句' },
          { role: '强调用法', part: 'the very language of preserving choice', explain: 'very 在此强调"正是这个/本身就"' },
          { role: '宾语从句谓语', part: 'obscures the question of who decides', explain: 'of + who 从句，解释 question 的内容' },
          { role: '冒号后的选择结构', part: 'the official who arranges the menu, or the citizen who selects from it', explain: '两个 who 定语从句分别修饰 official / citizen' }
        ],
        note: '考研高频写法：retort that + very 强调 + 冒号列举。the very 常考，含义是"正是/本身就"。'
      }
    ],
    questions: [
      {
        q: 'What is the main characteristic of nudge policies as described in Paragraph 1?',
        options: { A: 'They rely on bans and heavy taxes.', B: 'They influence behaviour by shaping how options are presented.', C: 'They eliminate freedom of choice.', D: 'They apply only to economic decisions.' },
        answer: 'B',
        locate: 1,
        analysis: { A: '原文明确否定 banning or taxing，A 是反向干扰。', C: '助推恰恰保留选择自由，C 与文意相反。', D: '"only to economic decisions"范围限定错误，原文未作此限制。' }
      },
      {
        q: 'Critics argue that the idea of preserving choice ______.',
        options: { A: 'proves nudges are always legitimate', B: 'hides the question of who actually decides', C: 'makes policies impossible to design', D: 'is supported by all governments' },
        answer: 'B',
        locate: 2,
        analysis: { A: '"always legitimate"与批评者立场完全相反。', C: '批评者并未说政策无法设计。', D: '"所有政府"无文本依据且过于绝对。' }
      },
      {
        q: 'The author concludes that nudge policies require ______.',
        options: { A: 'a complete ban on behavioural science', B: 'transparency about purposes and evidence', C: 'higher taxes on unhealthy goods', D: 'longer working hours for officials' },
        answer: 'B',
        locate: 3,
        analysis: { A: '作者主张透明而非禁止行为科学。', C: '征税是第一段中被对比的旧手段，非结论。', D: '官员工时与论题无关，属无关干扰。' }
      }
    ]
  },
  {
    id: 'r12', exam: 'ky1', level: 3, levelName: '拔高',
    title: 'The Myth of the Lone Genius (考研英语一)',
    topic: '科学社会学',
    source: '模拟真题 · 考研英语一 Text 风格',
    paragraphs: [
      { en: "Popular accounts of science favour a particular plot: a solitary figure, working in obscurity, suddenly perceives what had eluded everyone else. It is a seductive story, not least because it absolves institutions of responsibility for the conditions under which discovery actually occurs.", zh: "大众对科学的叙述偏好一种特定情节：一位孤独的人物，默默无闻地工作，突然看清了所有人都没能看清的东西。这是个诱人的故事，尤其因为它免除了机构对发现实际发生所需条件的责任。" },
      { en: "Historical research tells a different tale. Breakthroughs typically emerge from dense networks in which ideas circulate, are criticised and recombined long before any single name is attached to them. What looks like a flash of individual insight is usually the visible tip of a collective process.", zh: "历史研究讲述的却是另一个版本。突破通常诞生于密集的网络之中：思想在其中流通、被批评、被重新组合，远在某个名字与之绑定之前。看似个人灵光一闪的东西，通常只是集体过程露出水面的尖端。" },
      { en: "None of this diminishes genuine brilliance; rather, it relocates it. Recognising the social infrastructure of discovery—funding, laboratories, journals, collaborations—does not make genius less remarkable, but it does make it far harder to sustain the comforting belief that talent alone will suffice.", zh: "这些都不能抹杀真正的才华，而是重新安置了它。承认发现所需的社会基础设施——经费、实验室、期刊、合作——并不会让天才变得不那么出众，却会让我们更难继续抱持仅凭天赋就够了的宽慰信念。" }
    ],
    longSentences: [
      {
        text: "Recognising the social infrastructure of discovery—funding, laboratories, journals, collaborations—does not make genius less remarkable, but it does make it far harder to sustain the comforting belief that talent alone will suffice.",
        structure: [
          { role: '主语（动名词）', part: 'Recognising the social infrastructure of discovery', explain: '动名词短语作主语' },
          { role: '插入同位语', part: '—funding, laboratories, journals, collaborations—', explain: '举例说明 infrastructure' },
          { role: '并列谓语', part: 'does not make genius less remarkable, but it does make it harder to sustain...', explain: 'not...but... 并列，后半用 does 强调' },
          { role: '同位语从句', part: 'that talent alone will suffice', explain: '解释 belief 的内容，that 不作成分' }
        ],
        note: '末段长句典型：动名词主语 + 破折号插入 + not...but 并列 + 同位语从句。考研常以 belief/fact/idea + that 同位语从句设考点。'
      }
    ],
    questions: [
      {
        q: 'The author suggests that the lone genius story is popular partly because it ______.',
        options: { A: 'is supported by historical research', B: 'frees institutions from responsibility', C: 'explains how funding works', D: 'was invented by scientists themselves' },
        answer: 'B',
        locate: 1,
        analysis: { A: '与第二段"历史研究讲述另一个版本"相反。', C: '经费是第三段才谈的社会基础设施，非该故事流行的原因。', D: '故事的发明者原文未提。' }
      },
      {
        q: 'According to Paragraph 2, breakthroughs usually ______.',
        options: { A: 'come from dense networks of circulating ideas', B: 'occur without any prior criticism', C: 'are immediately credited to one person', D: 'happen only in isolation' },
        answer: 'A',
        locate: 2,
        analysis: { B: '原文说思想被批评，B 与之相反。', C: '原文说名字绑定发生得远晚于思想流通，C 相反。', D: '"only in isolation"是作者反对的观点，非事实。' }
      },
      {
        q: 'What is the author attitude toward the belief that talent alone will suffice?',
        options: { A: 'Strongly supportive.', B: 'Neutral and detached.', C: 'Critical — it is comforting but inadequate.', D: 'Confused and uncertain.' },
        answer: 'C',
        locate: 3,
        analysis: { A: '作者明确指出社会基础设施不可或缺，故不支持该信念。', B: '作者态度鲜明（"令人宽慰的信念"含批评意味），并非中立。', D: '作者立场清晰，不存在困惑。' }
      }
    ]
  },
  {
    id: 'r13', exam: 'ky2', level: 2, levelName: '进阶',
    title: 'Remote Work and Middle Managers (考研英语二)',
    topic: '企业管理',
    source: '模拟真题 · 考研英语二 Text 风格',
    paragraphs: [
      { en: "Remote work has largely delivered what employees wanted: less commuting, greater flexibility and, for many, a better balance between work and family. The benefits for organisations have been more ambiguous, and nowhere is this clearer than among middle managers.", zh: "远程工作在很大程度上兑现了员工想要的东西：更少通勤、更大灵活性，对许多人而言还有工作与家庭之间更好的平衡。对组织而言收益则更为模糊，而这一点在中层管理者身上体现得最为明显。" },
      { en: "Their role has traditionally depended on visibility—walking the floor, reading the room, spotting problems early. When teams are distributed, these informal signals disappear, and managers are left relying on scheduled check-ins that often feel like surveillance rather than support.", zh: "他们的角色历来依赖在场——巡视办公区、察言观色、及早发现问题。当团队分散各地，这些非正式信号就消失了，管理者只能依赖定期沟通，而这往往让人感觉是监视而非支持。" },
      { en: "Companies that have adapted best have redefined the job rather than tried to recreate the office online. They train managers to set clear outcome-based goals, then give teams latitude over how those goals are met—an approach that requires trust, and therefore the willingness to tolerate a degree of uncertainty.", zh: "适应得最好的公司重新定义了这份工作，而不是试图把办公室搬到线上。它们培训管理者设定清晰的基于结果的目标，然后让团队自行决定达成方式——这一方案需要信任，因而也需要容忍一定程度不确定性的意愿。" }
    ],
    longSentences: [
      {
        text: "They train managers to set clear outcome-based goals, then give teams latitude over how those goals are met—an approach that requires trust, and therefore the willingness to tolerate a degree of uncertainty.",
        structure: [
          { role: '并列谓语', part: 'They train managers to set..., then give teams latitude over...', explain: '一个主语 they 带 train 与 give 两个谓语' },
          { role: '介词宾语从句', part: 'how those goals are met', explain: 'over + how 从句，说明 latitude 的范围' },
          { role: '破折号总结语', part: 'an approach that requires trust...', explain: '同位概括前面整句做法；that 从句修饰 approach' },
          { role: '递进并列', part: 'and therefore the willingness to tolerate...', explain: 'therefore 表因果递进' }
        ],
        note: '英语二长句套路：并列谓语 + 破折号总结性同位语。末段往往是出题重点。'
      }
    ],
    questions: [
      {
        q: 'What problem do middle managers face under remote work?',
        options: { A: 'They lose informal signals used to spot problems.', B: 'They have to commute further.', C: 'They are no longer needed.', D: 'They must work longer hours.' },
        answer: 'A',
        locate: 2,
        analysis: { B: '通勤减少是员工收益，非管理者问题。', C: '原文说角色需要被重新定义，而非取消。', D: '工时未讨论。' }
      },
      {
        q: 'How have the most successful companies responded?',
        options: { A: 'By forcing everyone back to the office.', B: 'By redefining the manager role around outcomes.', C: 'By removing all scheduled meetings.', D: 'By cutting managers salaries.' },
        answer: 'B',
        locate: 3,
        analysis: { A: '原文说不再试图把办公室搬到线上，A 与之相悖。', C: '取消所有会议属过度推断。', D: '薪资问题无文本依据。' }
      }
    ]
  },
  {
    id: 'r14', exam: 'ky2', level: 3, levelName: '拔高',
    title: 'Why Consumers Distrust Green Claims (考研英语二)',
    topic: '市场营销',
    source: '模拟真题 · 考研英语二 Text 风格',
    paragraphs: [
      { en: "Surveys consistently show that shoppers say they prefer sustainable products, yet sales figures tell a more complicated story. This gap between stated intention and actual behaviour is often attributed to price, but research suggests that distrust plays an equally large part.", zh: "调查一再显示，购物者声称自己更偏好可持续产品，然而销售数据讲述的故事更为复杂。这种言行落差常被归因于价格，但研究表明，不信任起了同样重要的作用。" },
      { en: "Years of vague labelling have left consumers sceptical. Terms such as eco-friendly or natural carry no standardised meaning, and when shoppers cannot verify a claim, they tend to discount it entirely. In effect, the credibility of genuinely sustainable firms is being spent by those who overstate their achievements.", zh: "多年含糊的标签让消费者变得怀疑。环保、天然这类说法没有统一定义，而当购物者无法核实一项声明时，他们往往干脆不予采信。结果是，真正做可持续的企业，其信誉正在被夸大其词者透支。" },
      { en: "The remedy is unglamorous but effective: specific, verifiable numbers, ideally audited by an independent body. Firms that publish measurable targets—and report honestly when they miss them—tend to earn the kind of trust that advertising budgets cannot buy.", zh: "补救办法并不花哨但很有效：具体、可核查的数字，最好由独立机构审计。公布可衡量目标——并在未达标时诚实报告——的企业，往往能赢得广告预算买不到的那种信任。" }
    ],
    longSentences: [
      {
        text: "In effect, the credibility of genuinely sustainable firms is being spent by those who overstate their achievements.",
        structure: [
          { role: '插入语', part: 'In effect', explain: '意为"实际上/结果是"，阅读时可先跳过' },
          { role: '主语 + 被动谓语', part: 'the credibility ... is being spent', explain: '现在进行时被动；spend 此处取"透支/消耗"义' },
          { role: '后置定语', part: 'of genuinely sustainable firms', explain: 'of 短语修饰 credibility' },
          { role: 'by + 定语从句', part: 'by those who overstate their achievements', explain: '被动句的动作执行者' }
        ],
        note: '难点在于被动 + spend 的引申义（透支信誉）。拆成主动更好懂：夸大其词者正在透支诚信企业的信誉。'
      }
    ],
    questions: [
      {
        q: 'According to Paragraph 1, why do consumers often avoid sustainable products?',
        options: { A: 'They dislike the packaging.', B: 'They distrust green claims as much as they are deterred by price.', C: 'They cannot find any such products.', D: 'They prefer imported goods.' },
        answer: 'B',
        locate: 1,
        analysis: { A: '包装未讨论。', C: '原文讨论的是不买，而非买不到。', D: '进口商品与论题无关。' }
      },
      {
        q: 'What has been the effect of vague labelling?',
        options: { A: 'It has made consumers sceptical of green claims.', B: 'It has lowered production costs.', C: 'It has standardised industry terms.', D: 'It has increased advertising budgets.' },
        answer: 'A',
        locate: 2,
        analysis: { B: '生产成本未提。', C: '原文说这些术语没有统一定义，C 相反。', D: '广告预算在第三段被提及，但非含糊标签的后果。' }
      },
      {
        q: 'What remedy does the author recommend?',
        options: { A: 'Banning all environmental advertising.', B: 'Publishing specific, independently audited figures.', C: 'Raising prices to signal quality.', D: 'Reducing the number of products on sale.' },
        answer: 'B',
        locate: 3,
        analysis: { A: '作者主张更透明的披露，而非禁止广告。', C: '提价与建立信任无关，甚至可能加剧问题。', D: '减少产品数量无文本依据。' }
      }
    ]
  }
];

/* ---------------- 翻译题库 ---------------- */
DB.translations = [
  {
    id: 't1', exam: 'cet4', type: 'cn2en', label: 'CET-4 段落翻译',
    topic: '中国传统文化 · 剪纸',
    source: '近年来，越来越多的人开始关注中国剪纸艺术。剪纸是用剪刀或刻刀在纸上创作图案的传统民间艺术，已有超过一千五百年的历史。它常被用于装饰门窗，以表达人们对美好生活的祝愿。逢年过节，红色的剪纸作品给千家万户增添了喜庆的气氛。如今，剪纸已被列入联合国教科文组织非物质文化遗产名录。',
    reference: "In recent years, an increasing number of people have paid attention to the art of Chinese paper-cutting. Paper-cutting, a traditional folk art of creating patterns on paper with scissors or knives, has a history of more than 1,500 years. It is often used to decorate doors and windows to express people's wishes for a better life. During festivals, red paper-cutting works add a joyful atmosphere to thousands of households. Today, paper-cutting has been inscribed on the UNESCO Intangible Cultural Heritage list.",
    keywords: ['an increasing number of', 'traditional folk art', 'more than 1,500 years', 'decorate', 'wishes for a better life', 'festivals', 'Intangible Cultural Heritage'],
    commonErrors: [
      '“剪纸”译法不统一：全文应统一为 paper-cutting，不要时而 paper cutting 时而 cutting paper。',
      '“逢年过节”常见误译为 when years and festivals come；正确表达为 during festivals 或 on festive occasions。',
      '“被列入名录”要用被动语态：has been inscribed/listed on...，不要写成 has listed。',
      '“增添喜庆气氛”建议用 add a joyful/festive atmosphere to，注意介词 to。'
    ]
  },
  {
    id: 't2', exam: 'cet6', type: 'cn2en', label: 'CET-6 段落翻译',
    topic: '社会发展 · 高铁',
    source: '中国高速铁路的发展令世界瞩目。自2008年第一条高铁线路开通以来，中国已建成世界上规模最大的高铁网络。高铁不仅大大缩短了城市之间的旅行时间，还促进了沿线地区的经济发展。越来越多的人选择高铁出行，因为它安全、快捷、舒适。可以预见，高铁将继续在中国经济社会发展中发挥重要作用。',
    reference: 'The development of China\'s high-speed railway has attracted worldwide attention. Since the first high-speed railway line opened in 2008, China has built the largest high-speed rail network in the world. High-speed rail has not only greatly shortened the travel time between cities, but also promoted the economic development of regions along the lines. A growing number of people choose to travel by high-speed rail because it is safe, fast and comfortable. It is predictable that high-speed rail will continue to play an important role in China\'s economic and social development.',
    keywords: ['worldwide attention', 'Since', 'largest ... network', 'not only ... but also', 'shortened the travel time', 'a growing number of', 'play an important role'],
    commonErrors: [
      '“令世界瞩目”可译为 attract worldwide attention / attract global attention，不要逐字译为 make the world look up。',
      '“自……以来”搭配完成时：Since 2008, China has built...，主句不能用一般过去时。',
      '“不仅……还……”注意 not only...but also 的并列结构前后成分要对称。',
      '“可以预见”可用 It is predictable that... / It can be expected that...，避免中式 In the future we can predict。'
    ]
  },
  {
    id: 't3', exam: 'ky1', type: 'en2cn', label: '考研英一 长句翻译',
    topic: '社会科学 · 教育',
    source: 'It may be said that the measure of the worth of a social system is the extent to which it allows individuals to develop their potential, and that a system which suppresses individual growth, however efficient it may appear, ultimately undermines the very foundations on which it rests.',
    reference: '可以说，衡量一个社会制度价值的标准，是它在多大程度上允许个人发展自身潜能；而一个压制个人成长的制度，无论表面上多么高效，最终都会动摇其自身赖以存在的根基。',
    keywords: ['衡量……的标准', '在多大程度上', '潜能', '压制', '动摇', '根基'],
    commonErrors: [
      'the measure of the worth... 是嵌套的 of 结构，先拆成“衡量价值的方法→衡量什么价值→社会制度的价值”，不要从左到右硬翻。',
      'the extent to which... 是“介词+which”定语从句，译为“在多大程度上……”，不要译成“范围”。',
      'however efficient it may appear 是让步插入语，译成“无论表面上多么高效”，注意它修饰的是整个主句。',
      'on which it rests 中 which 指 foundations，rest on 译为“赖以存在/立足于”。'
    ]
  },
  {
    id: 't4', exam: 'ky2', type: 'en2cn', label: '考研英二 长句翻译',
    topic: '经济管理 · 消费',
    source: 'While consumers today enjoy an unprecedented variety of goods at lower prices, the true cost of this abundance is often hidden from view, buried in environmental damage, exploitative labour conditions and the gradual erosion of local communities.',
    reference: '尽管如今的消费者能以更低的价格享受种类空前的商品，但这种丰裕的真实代价往往被隐藏起来：它深藏于环境破坏、剥削性的劳动条件以及地方社区逐渐被侵蚀之中。',
    keywords: ['尽管', '空前', '代价', '隐藏', '环境破坏', '劳动条件', '侵蚀'],
    commonErrors: [
      'While 引导让步状语从句，译为“尽管/虽然”，不要译成“当……时候”。',
      'is often hidden from view 用了被动，中文习惯转主动：“往往被隐藏/我们往往看不到”。',
      'buried in... 是过去分词短语，补充说明 the true cost，翻译时可用冒号或“深藏于”衔接。',
      'erosion 本义“侵蚀”，指社区时译“（社区纽带/活力的）逐渐流失、被侵蚀”更通顺。'
    ]
  }
];

/* ---------------- 写作题库 ---------------- */
DB.writings = [
  {
    id: 'w1', genre: '议论文', exam: 'cet4', label: 'CET-4/6 议论文',
    topic: 'Should college students take part-time jobs?',
    prompt: 'Directions: For this part, you are allowed 30 minutes to write an essay on whether college students should take part-time jobs. You should write at least 120 words but no more than 180 words.',
    framework: [
      '第1段（引出话题+亮明观点）：用现象或问题引入，末句给出明确立场（I firmly believe that...）。',
      '第2段（论证主体）：2 个分论点，每个分论点 = 主题句 + 解释 + 例证（For instance...）。可用 On the one hand / On the other hand 或 Firstly / Furthermore 组织。',
      '第3段（让步+结论）：先承认对方观点的合理性（Admittedly...），再重申己方立场并给出建议。'
    ],
    patterns: [
      '开头：Nowadays, there is a heated discussion about whether... / With the rapid development of..., ... has become a common phenomenon.',
      '亮观点：From my perspective, ... / I am firmly convinced that...',
      '举例：Take ... as an example. / A case in point is that...',
      '让步：Admittedly, ... However, this does not mean that...',
      '结尾：In conclusion, ... / Only by doing... can we...'
    ],
    wordRange: [120, 180]
  },
  {
    id: 'w2', genre: '图表作文', exam: 'ky2', label: '考研英二 图表作文',
    topic: 'Changes in the Number of Online Shoppers (2018-2025)',
    prompt: 'Directions: Write an essay based on the chart below, which shows the number of online shoppers in China from 2018 to 2025 (in millions): 2018: 420, 2020: 630, 2022: 780, 2025: 920 (estimated). You should 1) interpret the chart, and 2) give your comments. You should write about 150 words on the ANSWER SHEET.',
    framework: [
      '第1段（描述图表）：用 2-3 句概括总体趋势 + 引用关键数据（As is vividly shown in the chart, ... rose steadily from ... to ...）。',
      '第2段（分析原因）：给出 2 个主要原因，用 The reasons for this trend are as follows / Several factors contribute to... 引出，逐条分析。',
      '第3段（预测/建议）：预测未来趋势（It can be predicted that...），或给出理性建议。'
    ],
    patterns: [
      '描述图表：As is shown in the chart, ... / The number of ... witnessed a steady increase from A to B.',
      '数据表达：increase by 45%, reach a peak of..., account for...%',
      '原因分析：This trend can be attributed to the following factors. / What lies behind the phenomenon is...',
      '预测：It is safe to predict that... / The coming years will witness a further rise in...'
    ],
    wordRange: [140, 170]
  },
  {
    id: 'w3', genre: '应用文', exam: 'cet6', label: 'CET-4/6 应用文（建议信）',
    topic: 'A Letter Suggesting Improvements to the Campus Library',
    prompt: 'Directions: Suppose you are a student who often uses the university library. Write a letter to the librarian to 1) point out one or two problems, and 2) make suggestions. You should write about 100 words on the ANSWER SHEET. Do not sign your own name at the end; use "Li Ming" instead.',
    framework: [
      '称呼：Dear Sir or Madam, / Dear Librarian,',
      '第1段：自我介绍 + 写信目的（I am writing to put forward some suggestions regarding...）。',
      '第2段：具体问题 + 对应建议（First... Second...），建议要可操作。',
      '第3段：礼貌收尾 + 期待回复（I would appreciate it if... / Thank you for your time.）',
      '落款：Yours sincerely, Li Ming'
    ],
    patterns: [
      '目的：I am writing to express my concern about... / to make a few practical suggestions.',
      '指出问题：What troubles students most is that... / It often happens that...',
      '提出建议：It would be advisable to... / I would like to suggest that... (should) ...',
      '致谢收尾：I would appreciate it if you could take my suggestions into consideration.'
    ],
    wordRange: [90, 130]
  }
];

/* ---------------- 听力语料库 ---------------- */
DB.listenings = [
  {
    id: 'l1', exam: 'cet4', label: 'CET-4 短文听力 · Campus Life',
    title: 'A New Study Corner in the Library',
    sentences: [
      { en: "Good morning, everyone. I would like to introduce the new study corner on the third floor of the library.", zh: "大家早上好。我想介绍一下图书馆三楼的新学习角。" },
      { en: "This area is designed for group discussions, so you may talk freely there without disturbing others.", zh: "这个区域是为小组讨论设计的，所以你们可以在那里自由交谈而不打扰别人。" },
      { en: "The quiet reading rooms remain on the second floor, where silence must be kept at all times.", zh: "安静的阅览室仍在二楼，那里必须始终保持安静。" },
      { en: "To book the study corner, simply scan the code on the door and choose an available time slot.", zh: "要预约学习角，只需扫描门上的二维码并选择一个可用的时段。" },
      { en: "Each group may use the space for up to two hours per day.", zh: "每个小组每天最多可使用该空间两小时。" },
      { en: "If you have any questions, please ask the staff at the front desk.", zh: "如有任何问题，请咨询前台工作人员。" }
    ],
    blanks: [
      { text: "This area is designed for {{group}} discussions, so you may talk freely there.", answer: 'group', hint: 'n. 小组' },
      { text: "To book the study corner, simply {{scan}} the code on the door.", answer: 'scan', hint: 'v. 扫描' },
      { text: "Each group may use the space for up to two {{hours}} per day.", answer: 'hours', hint: 'n. 小时' }
    ]
  },
  {
    id: 'l2', exam: 'cet6', label: 'CET-6 短文听力 · Science',
    title: 'Why Octopuses Are So Intelligent',
    sentences: [
      { en: "Octopuses are widely regarded as the most intelligent of all invertebrates.", zh: "章鱼被广泛认为是所有无脊椎动物中最聪明的。" },
      { en: "Unlike humans, two thirds of an octopus's neurons are located in its arms, not in its brain.", zh: "与人类不同，章鱼三分之二的神经元位于腕足而非大脑。" },
      { en: "This means each arm can solve problems and react to the environment independently.", zh: "这意味着每条腕足都能独立解决问题并对环境作出反应。" },
      { en: "In laboratories, octopuses have learned to open jars, navigate mazes and even recognize individual keepers.", zh: "在实验室里，章鱼学会了开罐子、走迷宫，甚至能认出各自的饲养员。" },
      { en: "Some researchers believe their intelligence evolved because catching prey in complex environments requires flexible thinking.", zh: "一些研究者认为，它们的智力之所以演化出来，是因为在复杂环境中捕捉猎物需要灵活的思维。" },
      { en: "Understanding octopuses may even shed light on how intelligence can arise in a form of life very different from our own.", zh: "理解章鱼甚至可能揭示智能如何在与我们截然不同的生命形式中出现。" }
    ],
    blanks: [
      { text: "Octopuses are widely regarded as the most {{intelligent}} of all invertebrates.", answer: 'intelligent', hint: 'adj. 聪明的' },
      { text: "Two thirds of an octopus's {{neurons}} are located in its arms.", answer: 'neurons', hint: 'n. 神经元' },
      { text: "Their intelligence may have {{evolved}} because catching prey requires flexible thinking.", answer: 'evolved', hint: 'v. 演化' }
    ]
  }
];

/* ---------------- 词汇库 ---------------- */
DB.vocab = [
  { word: 'sustainable', pos: 'adj.', meaning: '可持续的', exam: 'cet6', example: 'Sustainable development requires a balance between economy and environment.' },
  { word: 'exert', pos: 'v.', meaning: '施加（影响/压力）', exam: 'cet6', example: 'Small firms collectively exert a huge environmental impact.' },
  { word: 'negligible', pos: 'adj.', meaning: '可忽略不计的', exam: 'ky1', example: 'The impact is anything but negligible.' },
  { word: 'diminish', pos: 'v.', meaning: '减少；削弱', exam: 'ky1', example: 'An overabundance of choice may diminish welfare.' },
  { word: 'ostensibly', pos: 'adv.', meaning: '表面上地', exam: 'ky1', example: 'Algorithmic recommendation, ostensibly a remedy, may deepen the problem.' },
  { word: 'procrastinate', pos: 'v.', meaning: '拖延', exam: 'ky1', example: 'Shoppers confronted with too many options procrastinate.' },
  { word: 'accountability', pos: 'n.', meaning: '责任；问责', exam: 'cet6', example: 'Humans concentrate on judgment, negotiation and accountability.' },
  { word: 'staggering', pos: 'adj.', meaning: '惊人的，触目惊心的', exam: 'cet6', example: 'The environmental toll is staggering.' },
  { word: 'discard', pos: 'v.', meaning: '丢弃', exam: 'cet4', example: 'Garments are worn a few times and discarded.' },
  { word: 'dedicated', pos: 'adj.', meaning: '专用的', exam: 'cet4', example: 'Cities have built dedicated bike lanes.' },
  { word: 'memorize', pos: 'v.', meaning: '记住，背诵', exam: 'cet4', example: 'Students try to memorize more facts before exams.' },
  { word: 'fragile', pos: 'adj.', meaning: '脆弱的，易碎的', exam: 'cet4', example: 'It transfers fragile short-term memories into long-term storage.' },
  { word: 'inscribe', pos: 'v.', meaning: '铭刻；正式列入', exam: 'cet4', example: 'Paper-cutting has been inscribed on the UNESCO list.' },
  { word: 'shorten', pos: 'v.', meaning: '缩短', exam: 'cet4', example: 'High-speed rail has greatly shortened the travel time.' },
  { word: 'voucher', pos: 'n.', meaning: '代金券，凭证', exam: 'ky2', example: 'Vouchers let small firms buy external energy audits.' },
  { word: 'audit', pos: 'n./v.', meaning: '审计；审查', exam: 'ky2', example: 'Participants buy external energy audits.' },
  { word: 'subsidy', pos: 'n.', meaning: '补贴', exam: 'ky2', example: 'Modest subsidies matter more than ever-tightening penalties.' },
  { word: 'invertebrate', pos: 'n.', meaning: '无脊椎动物', exam: 'cet6', example: 'Octopuses are the most intelligent of all invertebrates.' },
  { word: 'navigate', pos: 'v.', meaning: '导航；成功处理（难题）', exam: 'cet6', example: 'Octopuses have learned to navigate mazes.' },
  { word: 'shed light on', pos: 'phr.', meaning: '阐明，使……更清楚', exam: 'ky1', example: 'It may shed light on how intelligence arises.' }
];

/* 词汇升级建议表（写作批改用） */
DB.upgradeMap = {
  'good': 'excellent / beneficial / favorable',
  'bad': 'detrimental / adverse / undesirable',
  'important': 'crucial / essential / vital',
  'very': 'considerably / remarkably（或直接用更强形容词）',
  'a lot of': 'a wealth of / numerous',
  'many': 'numerous / a multitude of',
  'big': 'substantial / considerable',
  'small': 'minimal / marginal',
  'get': 'obtain / acquire / gain',
  'give': 'provide / offer / grant',
  'show': 'demonstrate / indicate / reveal',
  'think': 'argue / maintain / contend',
  'more and more': 'an increasing number of / a growing number of',
  'so': 'therefore / consequently / as a result',
  'but': 'however / nevertheless / whereas',
  'also': 'furthermore / moreover / in addition',
  'thing': 'aspect / factor / element',
  'people': 'individuals / the public / citizens',
  'nowadays': 'in recent years / at present',
  'help': 'facilitate / contribute to / assist'
};

/* 衔接词库（写作批改用） */
DB.linkers = ['however', 'therefore', 'moreover', 'furthermore', 'in addition', 'firstly', 'secondly', 'finally', 'in conclusion', 'for instance', 'for example', 'as a result', 'on the one hand', 'on the other hand', 'admittedly', 'nevertheless', 'consequently', 'in contrast', 'similarly', 'to sum up', 'in summary', 'by contrast', 'what is more', 'meanwhile', 'accordingly', 'thus', 'hence'];

/* 常见语法检查规则（写作批改用） */
DB.grammarRules = [
  { name: 'a/an 用法', test: /\ba\s+[aeiou]\w+/i, tip: '发现 "a + 元音开头单词"（如 a important），元音音素开头的词前应用 an。' },
  { name: '双写空格/重复词', test: /\b(\w+)\s+\1\b/i, tip: '发现疑似重复的单词（如 the the），请删除重复。' },
  { name: '句首小写', test: /(^|[.!?]\s+)([a-z])/, tip: '存在句首字母未大写的情况，注意每个句子开头大写。' },
  { name: '中文标点混入', test: /[，。！？；：、“”‘’（）]/, tip: '作文中混入了中文标点（如 ，。“”），英文写作请全部使用英文标点。' },
  { name: 'I 未大写', test: /\bi\b(?!m)/, tip: '第一人称 "i" 应始终大写为 "I"。' },
  { name: '动词三单疑误 (they is / he are)', test: /\b(they|we|you)\s+(is|was)\b|\b(he|she|it)\s+(are|were)\b/i, tip: '发现疑似主谓不一致（如 they is），请检查主谓一致。' }
];

/* ============================================================
 * 扩展题库（第二批）—— 启动时自动合并进 DB，便于批量维护
 * ============================================================ */

DB.translations.push(
  {
    id: 't5', exam: 'cet4', type: 'cn2en', label: 'CET-4 段落翻译',
    topic: '中国社会 · 移动支付',
    source: '如今，移动支付在中国已经十分普及。无论是在大型商场还是街边小摊，人们只需用手机扫一扫二维码，就能完成付款。移动支付不仅提高了交易效率，还减少了现金的使用。许多外国游客来到中国后，都对这种便捷的支付方式感到惊讶。它正在改变人们的消费习惯，也推动了数字经济的发展。',
    reference: 'Nowadays, mobile payment has become extremely popular in China. Whether in large shopping malls or at street stalls, people can finish paying simply by scanning a QR code with their smartphones. Mobile payment has not only improved the efficiency of transactions, but also reduced the use of cash. Many foreign visitors are surprised by this convenient way of paying after arriving in China. It is changing people\'s consumption habits and promoting the development of the digital economy.',
    keywords: ['mobile payment', 'QR code', 'not only ... but also', 'reduce the use of cash', 'consumption habits', 'digital economy'],
    commonErrors: [
      '“扫一扫二维码”建议译 scan a QR code，二维码标准写法是 QR code（大写），不要写成 scan the two-dimensional code。',
      '“不仅……还……”用 not only...but also，注意 not only 提前时要倒装，但句中位置可保持正常语序。',
      '“移动支付”作主语时谓语用单数（Mobile payment has...），因为它是单数概念。',
      '“数字经济”固定表达 digital economy，不要直译为 number economy。'
    ]
  },
  {
    id: 't6', exam: 'cet6', type: 'cn2en', label: 'CET-6 段落翻译',
    topic: '生态文明 · 三江源',
    source: '三江源地区位于青藏高原腹地，是长江、黄河和澜沧江的发源地，被誉为"中华水塔"。这里平均海拔超过四千米，生态系统极为脆弱。为了保护水源地和野生动植物，中国政府在三江源建立了国家公园。近年来，通过退牧还草、生态移民等措施，当地生态环境明显改善，藏羚羊等珍稀动物的数量稳步增加。',
    reference: 'Located in the hinterland of the Qinghai-Tibet Plateau, the Sanjiangyuan region is the source of the Yangtze River, the Yellow River and the Lancang River, and is known as China\'s Water Tower. With an average altitude of over 4,000 metres, its ecosystem is extremely fragile. To protect the water sources as well as wild animals and plants, the Chinese government has established a national park in Sanjiangyuan. In recent years, thanks to measures such as returning grazing land to grassland and ecological resettlement, the local environment has improved markedly and the population of rare animals such as the Tibetan antelope has been growing steadily.',
    keywords: ['is located in', 'the source of', 'is known as', 'average altitude', 'extremely fragile', 'returning grazing land to grassland', 'ecological resettlement', 'Tibetan antelope'],
    commonErrors: [
      '“发源地”译为 the source of，注意三条河并列时 river 不重复（the Yangtze, the Yellow and the Lancang River）。',
      '“平均海拔”用 average altitude 或 average elevation，介词用 of：with an average altitude of over 4,000 metres。',
      '“退牧还草”属政策类专有表达，可用 returning grazing land to grassland，不必逐字硬译。',
      '“数量增加”：population / number 作主语时，谓语用 has been growing / has increased，注意主谓一致。'
    ]
  },
  {
    id: 't7', exam: 'ky1', type: 'en2cn', label: '考研英一 长句翻译',
    topic: '人文历史 · 科学',
    source: 'What distinguishes the scientific revolution of the seventeenth century from earlier bursts of intellectual energy was not merely the brilliance of individual minds, but the emergence of a community committed to the conviction that knowledge should be tested against the world rather than inherited from authority.',
    reference: '十七世纪科学革命区别于此前种种思想迸发之处，不仅在于个体头脑的卓越，更在于出现了这样一个共同体：它信奉知识应当接受世界的检验，而不是从权威那里继承。',
    keywords: ['区别于', '科学革命', '不仅……更……', '共同体', '信念', '接受检验', '继承', '权威'],
    commonErrors: [
      'What distinguishes A from B was not merely..., but... 是主语从句 + not merely...but... 结构，翻译时用"……之处，不仅在于……更在于……"衔接。',
      'committed to the conviction that... 中 committed 是过去分词作后置定语修饰 community，that 引导 conviction 的同位语从句。',
      'tested against the world 意为"置诸世界加以检验"，不要译成"与世界作对"。',
      'rather than inherited from authority 与 tested 并列，注意补出"被"字：而不是被从权威那里继承。'
    ]
  },
  {
    id: 't8', exam: 'ky2', type: 'en2cn', label: '考研英二 长句翻译',
    topic: '商业模式 · 创新',
    source: 'Companies that once measured success by the size of their workforce are now discovering that a smaller, better-equipped team can often deliver results that a much larger organisation would struggle to match.',
    reference: '曾经以员工规模衡量成功的企业，如今发现：一支规模更小、装备更精良的团队，往往能交付大得多的组织都难以企及的成果。',
    keywords: ['衡量成功', '员工规模', '装备更精良的团队', '交付成果', '难以企及'],
    commonErrors: [
      'that once measured success by... 是定语从句修饰 Companies，译成"曾经以……衡量成功的（企业）"，定语前置。',
      'better-equipped 是复合形容词，意为"装备/配备更好"，指工具与技术，不要译成"更健康"。',
      'deliver results 在此是"产出成果/交付结果"，不要译成"递送"。',
      'would struggle to match 译为"难以匹敌/难以企及"，struggle 表"费力、艰难"。'
    ]
  }
);

DB.writings.push(
  {
    id: 'w4', genre: '议论文', exam: 'cet6', label: 'CET-6 议论文（社会现象）',
    topic: 'Is the popularity of short videos a threat to deep reading?',
    prompt: 'Directions: For this part, you are allowed 30 minutes to write an essay on whether the popularity of short videos poses a threat to deep reading. You should write at least 150 words but no more than 200 words.',
    framework: [
      '第1段：现象描述 + 争议点 + 你的立场（辩证立场最稳：有冲击，但非决定性）。',
      '第2段：先承认短视频确实挤压了深度阅读的时间（碎片化、注意力被稀释）。',
      '第3段：再论证阅读并未消亡，且短视频可成为导读入口；结尾给出建议（主动规划无干扰阅读时间）。'
    ],
    patterns: [
      '现象：With the widespread use of..., ... has aroused growing concern.',
      '部分同意：There is much truth in the claim that..., yet the whole picture is more complicated.',
      '深化论证：What matters is not the medium itself but the way we use it.',
      '建议：It is advisable to set aside a fixed period each day for undistracted reading.',
      '结尾：Only in this way can we enjoy the convenience of ... without sacrificing ...'
    ],
    wordRange: [150, 200]
  },
  {
    id: 'w5', genre: '图表作文', exam: 'ky1', label: '考研英一 图画作文',
    topic: 'The Impact of AI on Employment（图画：机器人与求职者握手）',
    prompt: 'Directions: Write an essay of 160-200 words based on the drawing. In your essay, you should 1) describe the drawing briefly, 2) explain its intended meaning, and 3) give your comments.',
    framework: [
      '第1段（描图）：As is vividly depicted in the drawing,... 开头，2-3 句描述画面细节，末句点题。',
      '第2段（寓意）：Simple as the picture is, the meaning behind it is as deep as the ocean. 展开两层寓意：技术替代焦虑 + 技能升级的必要性。',
      '第3段（评论）：给出你的态度与建议，落到"终身学习/人机协作"上。'
    ],
    patterns: [
      '描图：As is vividly depicted in the cartoon, ... / The caption reads: "..."',
      '点题：The drawing, thought-provoking as it is, intends to tell us that...',
      '寓意：Simple as the picture is, the symbolic meaning is profound.',
      '评论：From my perspective, ... / It is high time that we + 过去式...'
    ],
    wordRange: [160, 200]
  },
  {
    id: 'w6', genre: '应用文', exam: 'ky2', label: '考研英二 通知/告示',
    topic: 'A Notice about a Campus Career Talk',
    prompt: 'Directions: Suppose you are the secretary of the Student Union. Write a notice of about 100 words to inform students about a coming career talk. Do not use your own name; use "Li Ming" instead.',
    framework: [
      '标题：Notice（居中）',
      '正文第1段：交代活动目的 + 时间地点（A career talk, aiming to..., is scheduled to be held at...on...）。',
      '正文第2段：说明内容要点与参与对象（The speaker will share... Students who... are welcome）。',
      '落款：右下角 Student Union / Li Ming + 日期'
    ],
    patterns: [
      '目的：... , aimed at helping students..., will be held...',
      '时间地点：is scheduled for 2:00 p.m. on June 15 in the Lecture Hall',
      '内容：Topics to be covered include...',
      '参与：Those who are interested are welcome to attend. / Please sign up at...'
    ],
    wordRange: [90, 120]
  }
);

DB.listenings.push(
  {
    id: 'l3', exam: 'cet4', label: 'CET-4 短文听力 · 健康',
    title: 'The Benefits of Walking Meetings',
    sentences: [
      { en: "More and more companies are replacing sit-down meetings with walking meetings.", zh: "越来越多的公司正用「步行会议」取代坐下来的会议。" },
      { en: "The idea is simple: instead of sitting around a table, two or three colleagues discuss work while walking outdoors.", zh: "这个想法很简单：两三同事不走会议室，而是边在户外散步边讨论工作。" },
      { en: "Research suggests that walking can increase creative thinking by up to sixty per cent.", zh: "研究表明，步行能把创造性思维提升多达 60%。" },
      { en: "Walking meetings are especially useful for one-to-one discussions and brainstorming.", zh: "步行会议特别适合一对一的讨论和头脑风暴。" },
      { en: "However, they are not suitable for meetings that involve detailed documents or sensitive topics.", zh: "不过，它们并不适合涉及详细文件或敏感话题的会议。" },
      { en: "Experts advise keeping the group small and the route familiar.", zh: "专家建议保持小组规模小、路线熟悉。" }
    ],
    blanks: [
      { text: "Research suggests that walking can increase {{creative}} thinking by up to sixty per cent.", answer: 'creative', hint: 'adj. 创造性的' },
      { text: "Walking meetings are especially useful for one-to-one discussions and {{brainstorming}}.", answer: 'brainstorming', hint: 'n. 头脑风暴' },
      { text: "They are not suitable for meetings that involve detailed {{documents}}.", answer: 'documents', hint: 'n. 文件（复数）' }
    ]
  },
  {
    id: 'l4', exam: 'cet6', label: 'CET-6 讲座听力 · 环境',
    title: 'How Cities Are Adapting to Heatwaves',
    sentences: [
      { en: "Good afternoon. Today I will discuss how cities around the world are adapting to more frequent heatwaves.", zh: "下午好。今天我将讨论世界各地的城市如何适应日益频繁的热浪。" },
      { en: "One major problem is the urban heat island effect, which makes city centres several degrees hotter than surrounding areas.", zh: "一个主要问题是城市热岛效应，它使市中心比周边地区热上好几度。" },
      { en: "Cities are responding by planting trees, painting roofs white and creating green corridors along streets.", zh: "城市的应对措施包括种树、把屋顶刷成白色，以及沿街打造绿色廊道。" },
      { en: "Early warning systems have also been introduced to protect elderly residents during extreme heat.", zh: "还引入了预警系统，在极端高温期间保护老年居民。" },
      { en: "These measures are relatively inexpensive compared with rebuilding infrastructure.", zh: "与重建基础设施相比，这些措施相对廉价。" },
      { en: "In conclusion, adaptation is no longer optional but a necessity for urban planning.", zh: "总之，适应已不再是选做题，而是城市规划的必答题。" }
    ],
    blanks: [
      { text: "One major problem is the urban heat {{island}} effect.", answer: 'island', hint: 'n. 岛' },
      { text: "Cities are painting roofs {{white}} and creating green corridors.", answer: 'white', hint: 'adj. 白色的' },
      { text: "Adaptation is no longer optional but a {{necessity}} for urban planning.", answer: 'necessity', hint: 'n. 必需品/必然' }
    ]
  },
  {
    id: 'l5', exam: 'ky2', label: '考研英语 长对话 · 学术',
    title: 'Choosing a Research Topic',
    sentences: [
      { en: "I have been struggling to choose a topic for my graduation thesis.", zh: "我一直在为毕业论文选题发愁。" },
      { en: "Have you considered starting from the courses you found most interesting last semester?", zh: "你有没有考虑过从上学期最感兴趣的课程入手？" },
      { en: "I enjoyed the course on consumer behaviour, but I am not sure it is practical enough.", zh: "我很喜欢消费者行为那门课，但不确定它是否足够有实操性。" },
      { en: "Practicality matters, but a topic you genuinely care about will keep you motivated for months.", zh: "实操性固然重要，但一个你真正关心的题目能让你保持几个月的动力。" },
      { en: "That makes sense. I could narrow it down to online reviews and purchasing decisions.", zh: "有道理。我可以把它缩小到在线评论与购买决策。" },
      { en: "That is a workable focus. Check whether enough data is available before you commit to it.", zh: "这是个可行的切入点。定题前先确认是否有足够的数据。" }
    ],
    blanks: [
      { text: "I have been struggling to choose a topic for my graduation {{thesis}}.", answer: 'thesis', hint: 'n. 论文' },
      { text: "I could narrow it {{down}} to online reviews and purchasing decisions.", answer: 'down', hint: 'adv. 缩小到' },
      { text: "Check whether enough {{data}} is available before you commit to it.", answer: 'data', hint: 'n. 数据（不可数）' }
    ]
  }
);

DB.vocab.push(
  { word: 'ambiguous', pos: 'adj.', meaning: '模棱两可的', exam: 'cet6', example: 'The benefits for organisations have been more ambiguous.' },
  { word: 'latitude', pos: 'n.', meaning: '自由度；纬度', exam: 'ky2', example: 'Give teams latitude over how goals are met.' },
  { word: 'surveillance', pos: 'n.', meaning: '监视', exam: 'cet6', example: 'Check-ins often feel like surveillance rather than support.' },
  { word: 'credibility', pos: 'n.', meaning: '可信度', exam: 'ky2', example: 'The credibility of sustainable firms is being spent.' },
  { word: 'verify', pos: 'v.', meaning: '核实，验证', exam: 'cet6', example: 'Shoppers cannot verify a claim.' },
  { word: 'sceptical', pos: 'adj.', meaning: '怀疑的', exam: 'cet6', example: 'Consumers have become sceptical.' },
  { word: 'obscure', pos: 'v./adj.', meaning: '掩盖；模糊的', exam: 'ky1', example: 'The language of choice obscures the real question.' },
  { word: 'legitimate', pos: 'adj.', meaning: '正当的，合法的', exam: 'ky1', example: 'A policy may be effective yet illegitimate.' },
  { word: 'endorse', pos: 'v.', meaning: '认可，背书', exam: 'ky1', example: 'Reasons they endorse.' },
  { word: 'elude', pos: 'v.', meaning: '逃避；难倒', exam: 'ky1', example: 'What had eluded everyone else.' },
  { word: 'absolve', pos: 'v.', meaning: '免除（责任）', exam: 'ky1', example: 'It absolves institutions of responsibility.' },
  { word: 'recombine', pos: 'v.', meaning: '重组', exam: 'ky1', example: 'Ideas circulate, are criticised and recombined.' },
  { word: 'incentive', pos: 'n.', meaning: '激励，动机', exam: 'cet6', example: 'This incentive structure corrodes discourse.' },
  { word: 'corrode', pos: 'v.', meaning: '腐蚀，侵蚀', exam: 'cet6', example: 'It corrodes public discourse.' },
  { word: 'outperform', pos: 'v.', meaning: '表现优于', exam: 'cet6', example: 'Outrage outperforms careful analysis.' },
  { word: 'optimise', pos: 'v.', meaning: '优化', exam: 'cet6', example: 'Algorithms are optimised for engagement.' },
  { word: 'finite', pos: 'adj.', meaning: '有限的', exam: 'cet6', example: 'Because attention is finite.' },
  { word: 'advocate', pos: 'n./v.', meaning: '倡导者；主张', exam: 'cet6', example: 'Results surprise even their advocates.' },
  { word: 'generalise', pos: 'v.', meaning: '推广，普遍化', exam: 'cet6', example: 'Results may not generalise.' },
  { word: 'downturn', pos: 'n.', meaning: '衰退', exam: 'cet6', example: 'Survive an economic downturn.' },
  { word: 'restore', pos: 'v.', meaning: '恢复', exam: 'cet4', example: 'Natural settings restore attention.' },
  { word: 'drain', pos: 'v.', meaning: '耗尽，排空', exam: 'cet4', example: 'Attention is constantly drained.' },
  { word: 'measurable', pos: 'adj.', meaning: '可衡量的', exam: 'cet4', example: 'Measures that produce measurable benefits.' },
  { word: 'reflection', pos: 'n.', meaning: '反思；反射', exam: 'cet4', example: 'A private space for honest reflection.' },
  { word: 'entry', pos: 'n.', meaning: '（日记）条目；进入', exam: 'cet4', example: 'Looking back at entries from a year ago.' },
  { word: 'psychological', pos: 'adj.', meaning: '心理的', exam: 'cet4', example: 'The psychological cost of urban life.' },
  { word: 'dwellers', pos: 'n.', meaning: '居民', exam: 'cet4', example: 'City dwellers accept noise and traffic.' },
  { word: 'convenience', pos: 'n.', meaning: '便利', exam: 'cet4', example: 'As the price of convenience.' },
  { word: 'appliance', pos: 'n.', meaning: '器具，家电', exam: 'cet4', example: 'Household appliances consume energy.' },
  { word: 'sustainable', pos: 'adj.', meaning: '可持续的', exam: 'cet4', example: 'Shoppers prefer sustainable products.' },
  { word: 'transaction', pos: 'n.', meaning: '交易', exam: 'cet4', example: 'It improved the efficiency of transactions.' },
  { word: 'consume', pos: 'v.', meaning: '消费，消耗', exam: 'cet4', example: 'The fashion industry consumes vast water.' },
  { word: 'fragile', pos: 'adj.', meaning: '脆弱的', exam: 'cet6', example: 'Its ecosystem is extremely fragile.' },
  { word: 'resettlement', pos: 'n.', meaning: '重新安置', exam: 'cet6', example: 'Ecological resettlement programmes.' },
  { word: 'altitude', pos: 'n.', meaning: '海拔', exam: 'cet6', example: 'An average altitude of over 4,000 metres.' },
  { word: 'distinguish', pos: 'v.', meaning: '区分', exam: 'ky2', example: 'What distinguishes this revolution from earlier ones.' },
  { word: 'commit', pos: 'v.', meaning: '承诺；投入', exam: 'cet6', example: 'A community committed to the conviction.' },
  { word: 'workforce', pos: 'n.', meaning: '劳动力', exam: 'ky2', example: 'Measured success by the size of their workforce.' },
  { word: 'struggle', pos: 'v.', meaning: '艰难地做，挣扎', exam: 'ky2', example: 'A larger organisation would struggle to match.' },
  { word: 'brainstorming', pos: 'n.', meaning: '头脑风暴', exam: 'cet4', example: 'Useful for discussions and brainstorming.' }
);
