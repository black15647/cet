/* ============================================================
 * 真题数据层（与 data.js 的模拟题严格分开）
 *
 * 字段说明：
 *   real: true            —— 标记为真题（区别于模拟题）
 *   year / month / set    —— 年份 / 月份 / 第几套
 *   sourceUrls            —— 出处链接（可回溯核查）
 *   verified              —— 验证状态：
 *       'multi'  = 两个及以上独立来源内容一致（可信度高）
 *       'single' = 仅单一来源，未能交叉验证（请自行核对）
 *
 * 注意：
 *   1. 本文件只收录能从公开网络检索到、且经过比对的内容，不补全、不推测。
 *   2. CET/考研英语官方不公布历年真题全文，因此"参考译文"为各机构版本，
 *      不同机构措辞会有差异，非官方标准答案。
 *   3. commonErrors 为基于该题考点的批改提示，属于分析性内容，非真题原文。
 * ============================================================ */

const REAL_EXAM = {
  meta: {
    updated: '2026-08-31',
    note: '真题数据来自公开网络检索并经多源比对，出处见各条 sourceUrls。缺失年份与科目见 README「真题覆盖与缺口」一节。2026-08-31 新增：考研 2026 英语一/二 写作(4) + 阅读理解(8篇40题)；CET-4/6 2024-06 选词填空(cloze, 2套) + 仔细阅读(4篇40题，并入 articles)。阅读/选词填空答案由文意推导，verified:single，待官方答案核对。翻译(en2cn)参考译文懒笔记未提供，待补带译文来源。',
  },

  /* ---------------- 翻译真题 ---------------- */
  translations: [
    {
      id: 'tr-2023-12-cet4-1', real: true, exam: 'cet4', type: 'cn2en',
      label: 'CET-4 段落翻译真题', year: 2023, month: 12, set: 1,
      topic: '健康饮食（2023年12月 · 第1套）',
      source: '中国政府十分重视人民的健康饮食(diet)。通过大力提倡健康饮食，人们对合理营养增进健康的重要性有了更加深刻的认识。「吃得安全、吃得营养、吃得健康」是人民对美好生活的基本需要，是提升人民幸福感的必然要求，也为食品产业的发展提供了新机遇。目前,各级政府都在采取多种举措确保人民饮食健康，推进健康中国的建设。',
      reference: 'The Chinese government attaches great importance to the people\'s healthy diet. By vigorously advocating a healthy diet, people have gained a deeper understanding of the importance of reasonable nutrition for improving health. "Eating safely, nutritiously and healthily" is a basic need for people to pursue a better life, an inevitable requirement for enhancing people\'s happiness, and also provides new opportunities for the development of the food industry. Currently, governments at all levels are taking various measures to ensure a healthy diet for the people and promote the construction of a healthy China.',
      keywords: ['attaches great importance to', 'vigorously advocating', 'a deeper understanding of', 'reasonable nutrition', 'an inevitable requirement', 'governments at all levels', 'promote the construction of'],
      commonErrors: [
        '「重视」高频表达 attach great importance to，注意 to 是介词，后接名词或动名词。',
        '「吃得安全、吃得营养、吃得健康」三个并列动名词，务必保持结构对称：eating safely, nutritiously and healthily。',
        '「必然要求」译为 an inevitable requirement，不要写成 must requirement。',
        '「各级政府」是 governments at all levels，复数不要漏 s。',
        '「推进……建设」用 promote the construction of，注意 construction 前要加 the。'
      ],
      sourceUrls: [
        'https://www.hqwx.com/web_news/html/2023-12/17028626006221.html',
        'https://cet4-6.xdf.cn/'
      ],
      verified: 'multi'
    },
    {
      id: 'tr-2023-12-cet4-2', real: true, exam: 'cet4', type: 'cn2en',
      label: 'CET-4 段落翻译真题', year: 2023, month: 12, set: 2,
      topic: '饮食变化（2023年12月 · 第2套）',
      source: '改革开放以来，中国人的饮食(diet)发生了显著变化。过去由于经济落后，食品种类有限、数量不足，人们仅仅满足于吃得饱。如今中国经济快速发展，食品不仅更加丰富多样，质量也大幅提高。随着生活水平不断提升，人们对饮食的要求越来越高，更加注重吃得营养健康。因此，目前市场上推出的低脂、低糖、有机食品受到人们的普遍欢迎。',
      reference: 'Since the reform and opening-up, remarkable changes have taken place in Chinese people\'s diet. In the past, due to the backward economy, food was limited in variety and insufficient in quantity, and people were merely satisfied with having enough to eat. Today, with the rapid development of China\'s economy, food is not only more diverse but also much higher in quality. With the continuous improvement of living standards, people have increasingly higher requirements for their diet and pay more attention to eating nutritiously and healthily. Therefore, the low-fat, low-sugar and organic foods currently available on the market have gained great popularity among people.',
      keywords: ['Since the reform and opening-up', 'remarkable changes have taken place', 'due to the backward economy', 'limited in variety', 'the continuous improvement of living standards', 'low-fat, low-sugar and organic foods', 'gained great popularity'],
      commonErrors: [
        '「改革开放以来」用 Since the reform and opening-up，主句用现在完成时，这是必考点。',
        '「种类有限、数量不足」建议处理为 limited in variety and insufficient in quantity，保持介词结构对称。',
        '「吃得饱」是 have enough to eat / be full，不要直译成 eat full。',
        '「低脂、低糖、有机」三个复合形容词连用时用连字符：low-fat, low-sugar and organic。',
        '「受到普遍欢迎」可用 gain great popularity among 或 be widely welcomed，注意主谓一致（foods 复数）。'
      ],
      sourceUrls: [
        'https://www.hqwx.com/web_news/html/2023-12/17028626006221.html',
        'https://cet4-6.xdf.cn/'
      ],
      verified: 'multi'
    },
    {
      id: 'tr-2023-12-cet4-3', real: true, exam: 'cet4', type: 'cn2en',
      label: 'CET-4 段落翻译真题', year: 2023, month: 12, set: 3,
      topic: '物流与饮食（2023年12月 · 第3套）',
      source: '改革开放以来，中国人民生活水平不断提高，这在人们的饮食(diet)变化上得到充分体现。如今，人们不再满足于吃得饱，而是追求吃得更加安全、更加营养、更加健康，食物也愈来愈丰富多样，不再限于本地的农产品。物流业(logistics industry)的发展使人们很容易品尝到全国各地的特产。毫无疑问，食品质量与饮食结构的改善为增进人们健康提供了有力的保障。',
      reference: 'Since the reform and opening up, the living standard of the Chinese people has been continuously improving, which is fully reflected in the change in people\'s diet. Today, people are no longer satisfied with having enough to eat, but are seeking safer, more nutritious and healthier food. Food is becoming increasingly diverse as well, no longer limited to local produce. The development of the logistics industry has made it easy for people to taste specialties from all over the country. There is no doubt that the improvement of food quality and dietary structure provides a strong guarantee for enhancing people\'s health.',
      keywords: ['has been continuously improving', 'is fully reflected in', 'no longer satisfied with', 'seeking safer, more nutritious and healthier', 'the logistics industry', 'specialties from all over the country', 'There is no doubt that', 'a strong guarantee for'],
      commonErrors: [
        '「这在……得到充分体现」用 which is fully reflected in...，非限定性定语从句，which 指代前面整句话。',
        '「不再满足于」是 no longer satisfied with，注意 no longer 的位置在 be 动词之后。',
        '「更加安全、更加营养、更加健康」用比较级并列：safer, more nutritious and healthier，注意 nutritious 是多音节词要加 more。',
        '「特产」译为 specialties 或 local specialties，不要写成 special products。',
        '「毫无疑问」There is no doubt that...，that 引导同位语从句，that 不能省略。'
      ],
      sourceUrls: [
        'https://cet4-6.xdf.cn/202312/13552872.html',
        'https://www.hqwx.com/web_news/html/2023-12/17028626006221.html',
        'https://www.hqwx.com/web_news/html/2023-12/17030369794366.html'
      ],
      verified: 'multi'
    },
    {
      id: 'tr-2023-12-cet6-1', real: true, exam: 'cet6', type: 'cn2en',
      label: 'CET-6 段落翻译真题', year: 2023, month: 12, set: 1,
      topic: '老龄化社会（2023年12月 · 六级第1套）',
      source: '随着经济与社会的发展，中国人口结构发生了显著变化，逐渐步入老龄化社会。中国老年人口将继续增加，人口老龄化趋势将更加明显。为了应对人口老龄化带来的种种挑战，国家正积极采取措施，加大对养老的支持。通过改革社会保障制度，政府不断增加社会保障经费，逐步扩大社会保障覆盖范围，使更多老年人受益。政府还鼓励各种社会团体为老年人提供服务。在政府和社会团体的共同努力下，老年人将生活得更加幸福。',
      reference: 'With the development of economy and society, significant changes have taken place in China\'s population structure, and the country is gradually transitioning into an aging society. China\'s elderly population will continue to increase, and the trend of population aging will become more obvious. To cope with the various challenges brought about by population aging, the country is actively taking measures to strengthen support for elderly care. By reforming the social security system, the government has continuously increased social security funds and gradually expanded the coverage of social security to benefit more elderly people. The government also encourages various social organizations to provide services for the elderly. With the joint efforts of the government and social organizations, the elderly will live a happier life.',
      keywords: ['significant changes have taken place', 'transitioning into an aging society', 'the trend of population aging', 'cope with the various challenges', 'social security system', 'expanded the coverage of', 'joint efforts'],
      commonErrors: [
        '「老龄化社会」标准表达是 aging society（美式）或 ageing society（英式），不要写成 old society。',
        '「应对挑战」用 cope with / address the challenges，注意 cope 后接 with。',
        '「加大对养老的支持」宜译为 strengthen support for elderly care，elderly care 是「养老」的规范说法。',
        '「扩大覆盖范围」expand the coverage of，coverage 不可数，不加 s。',
        '「在……共同努力下」with the joint efforts of，注意 efforts 用复数。'
      ],
      sourceUrls: ['https://cet4-6.xdf.cn/'],
      verified: 'single'
    },
    {
      id: 'tr-2024-06-cet4-1', real: true, exam: 'cet4', type: 'cn2en',
      label: 'CET-4 段落翻译真题', year: 2024, month: 6, set: 1,
      topic: '农历（2024年6月 · 第1套）',
      source: '农历(the lunar calendar)起源于数千年前的中国，根据太阳和月亮的运行规律制定。长期以来农历在农业生产和人们日常生活中发挥着重要作用。古人依据农历记录日期、安排农活，以便最有效地利用自然资源和气候条件，提高农作物的产量和质量。中国的春节、中秋节等传统节日的日期都基于农历。农历是中国传统文化的重要组成部分，当今依然广为使用。',
      reference: 'The lunar calendar, which originated in China thousands of years ago, was formulated according to the movements of the sun and the moon. For a long time, the lunar calendar has played a very important role in agricultural production and people\'s daily life. Ancient Chinese people recorded dates and arranged farm work according to the lunar calendar, so as to make the best use of natural resources and climatic conditions and improve the yield and quality of crops. The dates of traditional Chinese festivals such as the Spring Festival and the Mid-Autumn Festival are all based on the lunar calendar. The lunar calendar is an important part of traditional Chinese culture and is still widely used today.',
      keywords: ['The lunar calendar', 'originated in', 'according to the movements of', 'played a very important role in', 'make the best use of', 'the yield and quality of crops', 'are all based on', 'is still widely used'],
      commonErrors: [
        '「农历」固定译法 the lunar calendar，题干已给出提示词，务必沿用不要自创。',
        '「根据……制定」用 be formulated according to，也可用 be set by，注意被动语态。',
        '「以便」表目的，用 so as to / in order to，后接动词原形。',
        '「提高产量和质量」improve the yield and quality，yield 表示"产量"比 production 更准确。',
        '「基于」be based on，注意 festivals 是复数，谓语用 are。'
      ],
      sourceUrls: ['https://www.talk915.com/web/article-details/829'],
      verified: 'single'
    }
  ],

  /* ---------------- 写作真题 ---------------- */
  writings: [
    {
      id: 'wr-2024-06-cet4-1', real: true, exam: 'cet4', genre: '议论文',
      label: 'CET-4 议论文真题', year: 2024, month: 6, set: 1,
      topic: '大学图书馆是否应该向公众开放（2024年6月 · 第1套）',
      prompt: 'Directions: Suppose your university is seeking students\' opinions on whether university libraries should be open to the public. You are now to write an essay to express your view. You will have 30 minutes for the task. You should write at least 120 words but no more than 180 words.',
      framework: [
        '第1段：交代背景（校方征求意见）+ 亮明你的立场。',
        '第2段：2 个理由展开，每个理由 = 主题句 + 解释 + 例证；若持反对立场，可从资源有限、秩序管理切入。',
        '第3段：简要让步（承认对方有一定道理）+ 重申立场或给出折中建议（如限定开放时段）。'
      ],
      patterns: [
        '背景引入：In the modern era, there is a heated debate regarding whether...',
        '亮明立场：In my view, ... / From my perspective, ...',
        '理由一：Above all, ... serving as ..., is supposed to ...',
        '理由二：Furthermore, ...',
        '让步收尾：Admittedly, ... However, ... / In conclusion, the merits of such a practice outweigh the demerits.'
      ],
      wordRange: [120, 180],
      sourceUrls: [
        'https://www.talk915.com/web/article-details/829',
        'https://cet4-6.xdf.cn/202406/13800927.html'
      ],
      verified: 'multi'
    },
    {
      id: 'wr-2024-06-cet4-2', real: true, exam: 'cet4', genre: '议论文',
      label: 'CET-4 议论文真题', year: 2024, month: 6, set: 2,
      topic: '大学食堂是否应该向公众开放（2024年6月 · 第2套）',
      prompt: 'Directions: Suppose your university is seeking students\' opinions on whether university canteens should be open to the public. You are now to write an essay to express your view. You will have 30 minutes for the task. You should write at least 120 words but no more than 180 words.',
      framework: [
        '第1段：点明争议 + 立场（此题可持辩证立场：有好处也有隐患，需配套措施）。',
        '第2段：先写优点（提升学校声誉、促进社区关系、增加收入），用 First / Second 分层。',
        '第3段：再写隐患（高峰时段拥挤、影响学生就餐、成本上升），最后给出折中建议。'
      ],
      patterns: [
        '争议引入：Some believe that it will do us more good than harm, while others argue that it will pose a threat to...',
        '优点一：First, it allows the public to enjoy the diverse and delicious food offered by...',
        '优点二：Second, it can also generate additional revenue for...',
        '转折隐患：However, there are also potential drawbacks to consider.',
        '建议收尾：Therefore, universities should implement measures such as designated public hours.'
      ],
      wordRange: [120, 180],
      sourceUrls: [
        'https://cet4-6.xdf.cn/202406/13800927.html',
        'https://www.talk915.com/web/article-details/829'
      ],
      verified: 'multi'
    },
    {
      id: 'wr-2024-06-cet4-3', real: true, exam: 'cet4', genre: '议论文',
      label: 'CET-4 议论文真题', year: 2024, month: 6, set: 3,
      topic: '大学体育设施是否应该向公众开放（2024年6月 · 第3套）',
      prompt: 'Directions: Suppose your university is seeking students\' opinions on whether university sports facilities should be open to the public. You are now to write an essay to express your view. You will have 30 minutes for the task. You should write at least 120 words but no more than 180 words.',
      framework: [
        '第1段：背景（疫情后公众健身需求上升）+ 亮明立场。',
        '第2段：展开 2 个理由（提升全民健康水平、降低医疗支出 / 提高设施利用率、增加维护经费）。',
        '第3段：回应可能的顾虑（安全管理），给出配套措施（预约制、分时开放），再重申立场。'
      ],
      patterns: [
        '背景引入：After the epidemic, there is a heated debate regarding whether...',
        '理由一：First, it has dramatically improved the health level of the whole society.',
        '具体展开：People can exercise on the playground to invigorate health, reduce the risk of heart disease, and lower the odds of obesity.',
        '回应顾虑：Admittedly, security concerns cannot be ignored.',
        '措施收尾：Therefore, a reservation system and designated visiting hours should be introduced.'
      ],
      wordRange: [120, 180],
      sourceUrls: [
        'https://cet4-6.xdf.cn/202406/13800929.html',
        'https://www.talk915.com/web/article-details/829'
      ],
      verified: 'multi'
    },
    {
      id: 'wr-2026-ky1-a', real: true, exam: 'ky1', genre: '书信',
      label: '考研英语一 写作真题', year: 2026, month: 6, set: 1,
      topic: '回信：关于中国家庭的手写家书（2026英一 Part A）',
      prompt: `Directions: Read the following email from your friend Paul and write him a reply.\n\nHi Li Ming,\nI was really moved by the Chinese families' handwritten letters you posted yesterday. They are priceless! Could you please tell me a bit more about them? And are they currently on public display somewhere? I'm very keen to see them in person. Thanks.\n\nYours,\nPaul\n\nYou should write about 100 words on the ANSWER SHEET. Do not use your own name in the email; use "Li Ming" instead. (10 points)`,
      framework: [
        '第1段：礼貌回应 Paul 的感动，点明这些家书的来源与意义（如祖辈留下的手写信）。',
        '第2段：补充家书背景（写给谁、记录了什么），并说明目前是否公开展出（如某图书馆/纪念馆特展）。',
        '第3段：表达欢迎他来参观的意愿，给出获取信息的途径，礼貌收尾。'
      ],
      patterns: [
        'Opening: I was so glad to know that you were moved by...',
        'Background: These letters were written by my grandfather to his family, recording...',
        'Closing: You are most welcome to visit... Please let me know if you need more details.'
      ],
      wordRange: [100, 100],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-one/'],
      verified: 'single'
    },
    {
      id: 'wr-2026-ky1-b', real: true, exam: 'ky1', genre: '图表作文',
      label: '考研英语一 写作真题', year: 2026, month: 6, set: 1,
      topic: '图表作文（2026英一 Part B）',
      prompt: `Directions: Write an essay based on the charts below. In your essay, you should\n1) describe the charts briefly,\n2) interpret the charts, and\n3) give your comments.\n\nWrite your answer in 160-200 words on the ANSWER SHEET. (20 points)`,
      framework: [
        '第1段：简要描述图表数据与趋势（挑最显著变化，勿堆砌全部数字）。',
        '第2段：解读原因（经济、政策、社会观念等），2 个分论点。',
        '第3段：给出个人评论/建议/展望，回扣主题。'
      ],
      patterns: [
        'Describe: As is shown in the charts, ... witnessed a marked rise from ... to ...',
        'Interpret: The underlying reason lies in ...',
        'Comment: From my perspective, this trend is expected to ...'
      ],
      wordRange: [160, 200],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-one/'],
      verified: 'single'
    },
    {
      id: 'wr-2026-ky2-a', real: true, exam: 'ky2', genre: '书信',
      label: '考研英语二 写作真题', year: 2026, month: 6, set: 1,
      topic: '回信：关于 Jack 分享的中国家庭旅行视频（2026英二 Part A）',
      prompt: `Directions: Suppose your friend Jack has shared with you a video of his family's travel in China. Write an email to tell him\n1) how you feel about the video, and\n2) your wish to learn more about their travel.\n\nWrite your answer in about 100 words on the ANSWER SHEET. Do not use your own name in the email. Use "Li Ming" instead. (10 points)`,
      framework: [
        '第1段：感谢分享，表达对视频的喜爱（画面/文化/亲切感）。',
        '第2段：具体夸一处亮点（某座城市、美食、人情味），并说明想了解更多（路线/故事/小贴士）。',
        '第3段：期待回复，礼貌收尾。'
      ],
      patterns: [
        'Thanks: Thank you so much for sharing the video of your family\'s trip to China!',
        'Praise: I was particularly impressed by ...',
        'Wish: I would love to hear more about ...'
      ],
      wordRange: [100, 100],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-two/'],
      verified: 'single'
    },
    {
      id: 'wr-2026-ky2-b', real: true, exam: 'ky2', genre: '图表作文',
      label: '考研英语二 写作真题', year: 2026, month: 6, set: 1,
      topic: '图表作文（2026英二 Part B）',
      prompt: `Directions: Write an essay based on the chart below. In your essay, you should\n1) describe and interpret the chart, and\n2) give your comments.\n\nWrite your answer in about 150 words on the ANSWER SHEET. (15 points)`,
      framework: [
        '第1段：描述图表核心数据与变化。',
        '第2段：解读背后原因或反映的现象。',
        '第3段：给出评论/建议。'
      ],
      patterns: [
        'Describe: The chart reveals that ...',
        'Interpret: This shift can be attributed to ...',
        'Comment: In conclusion, it is advisable to ...'
      ],
      wordRange: [150, 150],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-two/'],
      verified: 'single'
    }
  ],

  /* ---------------- 听力真题（逐句精听语料） ---------------- */
  listenings: [
    {
      id: 'lr-2024-06-cet4-1', real: true, exam: 'cet4',
      label: 'CET-4 听力真题 · 逐句精听', year: 2024, month: 6, set: 1,
      title: '2024年6月四级听力（第1套）· 新闻与短文选段',
      sentences: [
        { en: 'Six people had to move away from their home to another place after a fire broke out in a building on Main Street Saturday, officials said.', zh: '官方表示，周六主街一栋建筑发生火灾后，六名居民不得不搬离住所。' },
        { en: 'Firefighters responded to the three story building shortly after 1 p.m. for a reported structure fire.', zh: '下午一点过不久，消防员接报赶往这栋三层建筑扑救。' },
        { en: 'Crews encountered heavy smoke coming from the second floor when they arrived.', zh: '消防人员到场时发现二楼冒出浓烟。' },
        { en: 'A team of about 25 firefighters then spent about 25 minutes extinguishing the flames.', zh: '约 25 名消防员随后花了约 25 分钟扑灭大火。' },
        { en: 'Due to smoke and heat damage, the four apartments were declared uninhabitable.', zh: '由于烟熏和高温损毁，这四套公寓被宣布不适合居住。' },
        { en: 'A new study has cast doubt on historic research, suggesting that the season or month of someone\'s birth is associated with an increased risk of certain mental health conditions.', zh: '一项新研究对既往研究提出质疑，该研究暗示出生季节或月份可能与某些心理健康疾病风险升高有关。' },
        { en: 'The study looks at symptoms of anxiety and depression among more than 70,000 older adults in Europe.', zh: '该研究考察了欧洲七万多名老年人的焦虑与抑郁症状。' },
        { en: 'Overall, the new study found no significant relationship between participants\' month of birth and symptoms of depression or anxiety.', zh: '总体而言，这项新研究发现受试者的出生月份与抑郁或焦虑症状之间没有显著关联。' },
        { en: 'Genetic researchers in China have made a clone of a star police dog. The clone was born in a laboratory in Beijing in December.', zh: '中国基因研究人员克隆了一只明星警犬，克隆犬于 12 月在北京的实验室出生。' },
        { en: 'The mother dog helped solve multiple murders and many other crimes.', zh: '这只母犬曾协助侦破多起凶杀案及许多其他案件。' },
        { en: 'It could mean a huge reduction in the training time for police dogs, which usually takes about five years.', zh: '这可能意味着警犬训练时间的大幅缩短，而通常需要约五年。' },
        { en: 'However, this goal is not yet possible due to the current costs of the technology.', zh: '然而，受限于当前技术成本，这一目标尚无法实现。' },
        { en: 'Supporters call it wild camping. Opponents call it illegal camping.', zh: '支持者称之为野营，反对者称之为非法露营。' },
        { en: 'What both sides accept is that there has been a boom in the past few months.', zh: '双方都认同的是，过去几个月露营人数激增。' },
        { en: 'In part, this reflects the fact that official campsites have been wholly or partially closed, or are overflowing.', zh: '这部分反映出官方营地已全部或部分关闭，或者人满为患。' },
        { en: 'Camping in public parks has now been banned for August and the early part of September because campers dump litter and human waste.', zh: '由于露营者乱扔垃圾和排泄物，公园露营在八月和九月初已被禁止。' },
        { en: 'It would be common sense for people to use small tents and leave no trace of their visit.', zh: '使用小型帐篷、离营时不留痕迹，这是常识。' },
        { en: 'The Amazon River Dolphin is a giant among its species. It can measure up to 2 meters long and weigh around 204 kilograms.', zh: '亚马逊河豚是同类中的巨兽，体长可达 2 米，体重约 204 公斤。' },
        { en: 'Although born gray, males of the species are easily identified as they enter adulthood by a decisive pink shade.', zh: '虽然出生时是灰色，但雄性个体进入成年后会呈现明显的粉色，很容易辨认。' },
        { en: 'Their unusual coloring is believed to be the result of scar tissue from dolphin fights.', zh: '人们认为这种异常体色源自海豚打斗留下的疤痕组织。' },
        { en: 'The deeper the pink, the more attractive the males are believed to be.', zh: '据信粉色越深，雄性越具吸引力。' }
      ],
      blanks: [
        { text: 'Six people had to move away from their home after a fire {{broke}} out in a building.', answer: 'broke', hint: 'v. 爆发（break out 过去式）' },
        { text: 'The four apartments were declared {{uninhabitable}} due to smoke and heat damage.', answer: 'uninhabitable', hint: 'adj. 不适合居住的' },
        { text: 'The new study found no {{significant}} relationship between birth month and depression.', answer: 'significant', hint: 'adj. 显著的' },
        { text: 'Camping in public parks has now been {{banned}} for August.', answer: 'banned', hint: 'v. 禁止（被动）' },
        { text: 'The Amazon River Dolphin can measure up to 2 meters long and {{weigh}} around 204 kilograms.', answer: 'weigh', hint: 'v. 重达' }
      ],
      sourceUrls: ['https://www.talk915.com/web/article-details/829'],
      verified: 'single'
    }
  ],

  /* ---------------- 选词填空 / 完形（CET 词汇理解 Section A）----------------
   * 格式：passage 中 {{NN}} 为空格（题号 26-35），wordBank 为 15 选 10 词库，
   * answers 为逐空正确答案（由文意推导，verified:'single'，待官方答案核对）。
   * POS 为语法词性标注（分析性内容，非真题原文）。 */
  cloze: [
    {
      id: 'cz-2024-06-cet4-1', real: true, exam: 'cet4', year: 2024, month: 6, set: 1,
      label: 'CET-4 选词填空真题', title: '词汇理解 · 2024年6月四级（第1套）',
      source: '真题 · 2024-06 CET-4 第1套 Section A', topic: '运动与情绪健康',
      directions: 'In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on Answer Sheet 2 with a single line through the centre. You may not use any of the words in the bank more than once.',
      passage: `It's well known that physical exercise is beneficial not just to physical health but also to mental health. Yet whereas most countries have {{26}}, evidence-backed guidelines on the type and intensity of exercise {{27}} for various physical health benefits, such guidelines do not yet exist for exercise and mood. This is {{28}} due to a lack of necessary evidence. However, a new systematic review brings us usefully up-to-date on the current findings in this area.

Before {{29}} into some of the key take-aways, an important {{30}} made in the review is between aerobic exercise and anaerobic. The former {{31}} such things as walking, jogging and cycling and means exercising in such a way that your body is able to use oxygen to burn fat for energy. In contrast, anaerobic exercise—such as lifting heavy weights—is of such {{32}} intensity that your body does not have time to use oxygen to create energy and so instead it breaks down glucose(葡萄糖) in your blood or muscles.

Beginning first with the influence of exercise intensity on the mood benefits of aerobic exercise, the researchers, led by John Chan at Shenzhen University, found {{33}} results from 19 relevant studies. Some favoured higher intensity, others low, while seven studies found that intensity made no {{34}} to mood benefits.

In relation to the intensity of anaerobic exercise, however, the results were far clearer—the optimum(最佳选择) for improving mood is {{35}} intensity, perhaps because low intensity is too dull while high intensity is too unpleasant.`,
      wordBank: [
        { letter: 'A', word: 'constitutes', pos: 'v.' },
        { letter: 'B', word: 'contradictory', pos: 'adj.' },
        { letter: 'C', word: 'decision', pos: 'n.' },
        { letter: 'D', word: 'detailed', pos: 'adj.' },
        { letter: 'E', word: 'difference', pos: 'n.' },
        { letter: 'F', word: 'dipping', pos: 'v.' },
        { letter: 'G', word: 'distinction', pos: 'n.' },
        { letter: 'H', word: 'falling', pos: 'v.' },
        { letter: 'I', word: 'involves', pos: 'v.' },
        { letter: 'J', word: 'moderate', pos: 'adj.' },
        { letter: 'K', word: 'notified', pos: 'v.' },
        { letter: 'L', word: 'partly', pos: 'adv.' },
        { letter: 'M', word: 'required', pos: 'adj.' },
        { letter: 'N', word: 'traditionally', pos: 'adv.' },
        { letter: 'O', word: 'vigorous', pos: 'adj.' }
      ],
      answers: { '26': 'D', '27': 'M', '28': 'L', '29': 'F', '30': 'G', '31': 'I', '32': 'O', '33': 'B', '34': 'E', '35': 'J' },
      sourceUrls: ['https://english-exam.lazynote.cn/cet4/paper/2024-06-1/'],
      verified: 'single'
    },
    {
      id: 'cz-2024-06-cet6-1', real: true, exam: 'cet6', year: 2024, month: 6, set: 1,
      label: 'CET-6 选词填空真题', title: '词汇理解 · 2024年6月六级（第1套）',
      source: '真题 · 2024-06 CET-6 第1套 Section A', topic: '古典音乐与身心健康',
      directions: 'In this section, there is a passage with ten blanks. You are required to select one word for each blank from a list of choices given in a word bank following the passage. Read the passage through carefully before making your choices. Each choice in the bank is identified by a letter. Please mark the corresponding letter for each item on Answer Sheet 2 with a single line through the centre. You may not use any of the words in the bank more than once.',
      passage: `It's quite remarkable how different genres of music can spark unique feelings, emotions, and memories. Studies have shown that music can reduce stress and anxiety before surgeries and we are all attracted toward our own unique life soundtrack.

If you're looking to {{26}} stress, you might want to give classical music a try.

The sounds of classical music produce a calming effect letting {{27}} pleasure-inducing dopamine(多巴胺) in the brain that helps control attention, learning and emotional responses. It can also turn down the body's stress response, resulting in an overall happier mood. It turns out a pleasant mood can lead to {{28}} in a person's thinking.

Although there are many great {{29}} of classical music like Bach, Beethoven and Handel, none of these artists' music seems to have the same health effects as Mozart's does. According to researchers, listening to Mozart can increase brain wave activity and improve {{30}} function. Another study found that the distinctive features of Mozart's music trigger parts of the brain that are responsible for high-level mental functions. Even maternity {{31}} use Mozart to help newborn babies adapt to life outside of the mother's belly.

It has been found that listening to classical music {{32}} reduces a person's blood pressure. Researchers believe that the calming sounds of classical music may help your heart {{33}} from stress. Classical music can also be a great tool to help people who have trouble sleeping. One study found that students who had trouble sleeping slept better while they were listening to classical music.

Whether classical music is something that you listen to on a regular basis or not, it wouldn't {{34}} to take time out of your day to listen to music that you find {{35}}. You will be surprised at how good it makes you feel and the potentially positive change in your health.`,
      wordBank: [
        { letter: 'A', word: 'alleviate', pos: 'v.' },
        { letter: 'B', word: 'clarity', pos: 'n.' },
        { letter: 'C', word: 'cognitive', pos: 'adj.' },
        { letter: 'D', word: 'composers', pos: 'n.' },
        { letter: 'E', word: 'hurt', pos: 'v.' },
        { letter: 'F', word: 'inhibiting', pos: 'v.' },
        { letter: 'G', word: 'interrogation', pos: 'n.' },
        { letter: 'H', word: 'intrinsically', pos: 'adv.' },
        { letter: 'I', word: 'loose', pos: 'v.' },
        { letter: 'J', word: 'majestic', pos: 'adj.' },
        { letter: 'K', word: 'mandatory', pos: 'adj.' },
        { letter: 'L', word: 'recover', pos: 'v.' },
        { letter: 'M', word: 'significantly', pos: 'adv.' },
        { letter: 'N', word: 'soothing', pos: 'adj.' },
        { letter: 'O', word: 'wards', pos: 'n.' }
      ],
      answers: { '26': 'A', '27': 'I', '28': 'B', '29': 'D', '30': 'C', '31': 'O', '32': 'M', '33': 'L', '34': 'E', '35': 'N' },
      sourceUrls: ['https://english-exam.lazynote.cn/cet6/paper/2024-06-1/'],
      verified: 'single'
    }
  ],

  /* ---------------- 考研阅读理解真题 ----------------
   * 题面/选项/文章均来自懒笔记详情页（真实真题，非编造）。
   * 答案(answer)由逐题通读文章推导得出，verified 标记为 'single'，
   * 属解析版答案，建议以张剑黄皮书/新东方官方答案交叉核对。
   * 真题官方不公布参考译文，故 paragraphs[].zh 留空（前端已做"无译文"兜底）。 */
  readings: [
    {
      id: 'rd-2026-ky1-t1', real: true, exam: 'ky1', year: 2026, set: 1, level: 3, levelName: '真题',
      title: 'Donkeys: Tracing Domestication to East Africa', topic: '阅读 Text 1',
      source: '真题 · 2026 考研英语一',
      paragraphs: [
        { en: "For thousands of years, donkeys have been critical for propelling human civilizations forward. They've helped pull wheeled vehicles, carry travelers and move goods across the world. But where and when these animals first became intertwined with humans has been a mystery. Now, researchers have used genomes of over 200 donkeys to trace their domestication back to a single event around 7,000 years ago in East Africa — about 3,000 years before humans tamed horses. The team published their findings in the journal Science this month.", zh: '' },
        { en: '"Through their DNA, the animals are telling their history themselves," co-author Samantha Brooks, an equine researcher at the University of Florida, says in a statement. "We usually only get the human\'s side of history through written accounts, but of course written history does not always record exactly how something happened. Looking at these DNA sequences, we get a biological testimony to the environment these animals lived in and the experiences they survived."', zh: '' },
        { en: "The researchers examined 207 genomes from modern donkeys living in 31 countries across the globe. They also looked at genomes from 15 wild equids and 31 earlier donkeys that lived between about 4,000 and 100 years ago. The team reconstructed the animals' evolutionary tree and used computer models to pinpoint the domestication event when herders in Kenya and the Horn of Africa tamed wild asses. They then traced how the animals spread across the rest of the continent into Europe and Asia about 2,500 years later.", zh: '' },
        { en: "Though it's still unclear why the original domestication happened, Science News' Freda Kreier reports that the event coincided with the Sahara growing larger and drier. \"Donkeys are champions when it comes to carrying stuff and are good at crossing deserts,\" co-author Ludovic Orlando, an evolutionary biologist at Paul Sabatier University in France, tells the publication. Prehistoric humans may have tamed donkeys to help navigate the expanding Sahara.", zh: '' },
        { en: "Researchers say these findings could help put donkeys in the spotlight. The animals could benefit from more research: Currently, there are no published genomes from donkeys located south of the Equator in Africa. But understanding where the animals were first domesticated could guide archaeologists to a narrow region to search for insights about the original tamed donkeys.", zh: '' },
        { en: "Not only does understanding the equines' genetic makeup help reveal their contribution to human history, but it also might improve their management in the future, as climate change alters the planet's environment, write the authors.", zh: '' }
      ],
      questions: [
        { q: 'What can be learned about donkeys from Paragraph 1?', options: { A: 'They seemed mysterious to human ancestors.', B: 'They underwent multiple domestication events.', C: 'They were tamed at an earlier time than horses.', D: 'They were vividly portrayed by ancient travelers.' }, answer: 'C', locate: 1 },
        { q: 'What message is conveyed in Brooks\' statement?', options: { A: 'The earliest habitats of donkeys are hardly traceable.', B: 'It is increasingly easy to read donkeys\' DNA sequences.', C: 'Written accounts contain vital clues for donkey research.', D: 'Genetic analysis offers insight into the history of donkeys.' }, answer: 'D', locate: 2 },
        { q: 'In their study, the researchers investigated how donkeys ____', options: { A: 'dispersed widely in the world.', B: 'survived with the help of herders.', C: 'developed certain behavioral traits.', D: 'adapted to the changing environment.' }, answer: 'A', locate: 3 },
        { q: 'As to why the original domestication of donkeys happened, Orlando ____', options: { A: 'challenges conventional ideas.', B: 'provides a possible explanation.', C: 'calls for evidence from the Sahara.', D: 'holds a different view from Kreier.' }, answer: 'B', locate: 4 },
        { q: 'The authors think that their research could help with ____', options: { A: 'greater protection of wildlife.', B: 'better management of donkeys.', C: 'recovering early types of donkeys.', D: 'raising awareness of climate change.' }, answer: 'B', locate: 6 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-one/'],
      verified: 'single'
    },
    {
      id: 'rd-2026-ky1-t2', real: true, exam: 'ky1', year: 2026, set: 1, level: 3, levelName: '真题',
      title: 'Hollywood\'s Decline and the Fight to Keep Production in L.A.', topic: '阅读 Text 2',
      source: '真题 · 2026 考研英语一',
      paragraphs: [
        { en: "There's no business like show business — but in Los Angeles, it feels like there's no business at all.", zh: '' },
        { en: "If that sounds melodramatic, consider this: The Art Directors Guild, a labor union representing about 3,000 film workers, has suspended a training program and issued a statement explaining that \"we cannot in good conscience encourage you to pursue our profession.\" This is a reaction to Hollywood's decline, which is reaching a critical point for the industry and Southern California.", zh: '' },
        { en: "Production has been slipping away from Hollywood since the 1950s, but the effects have never been more apparent than at present. Other regions in the United States, Canada and Europe have steadily increased incentives to attract TV shows and movies, leaving California in the dust. Georgia offers up to 30% in transferable tax credits on film and TV production costs, plus an additional 10% increase on the base tax credit if the project includes a Georgia promotional logo.", zh: '' },
        { en: 'Even as California lost a huge volume of production to other locations, there was still plenty of film production taking place in Los Angeles before this year. We were kept afloat by "peak TV", the glut of content that was required by the explosion of streaming services.', zh: '' },
        { en: "But 2022 was the peak of peak TV. Back then platforms such as Netflix, Amazon and Apple TV hemorrhaged billions of dollars to generate content to attract new subscribers, resulting in 633 scripted series being released that year. As the streamers' emphasis changed from subscriber growth to profitability, prices for the services went up and the number of new shows went down to 481 released in 2023, with the number expected to dip into the 300s within a few years.", zh: '' },
        { en: "If productions in Southern California dip below a critical level for too long, the industry's essential talent will drift away along with enormous sums of revenue. Persuading studios to film here would become much more challenging if we couldn't offer a deep bench of local film workers, on-screen talent and local businesses that support the entertainment industry.", zh: '' },
        { en: "That's why the California Film Commission and its Los Angeles counterpart, Film LA, now should act, before it's too late. These agencies and other government bodies should dramatically improve incentives to keep our current shows and attract new productions to Los Angeles. Let's go on with the show…and make sure the show doesn't go on without us.", zh: '' }
      ],
      questions: [
        { q: "The Art Directors Guild's statement reveals ____", options: { A: "people's reduced interest in film.", B: "film workers' nostalgia for the past.", C: 'the appeal of Southern California.', D: 'the gloomy situation of Hollywood.' }, answer: 'D', locate: 2 },
        { q: 'The example of Georgia is used to illustrate the efforts to ____', options: { A: 'lure production with tax incentives.', B: 'drive improvements in film facilities.', C: 'stimulate competition among states.', D: 'collect funds for film and TV making.' }, answer: 'A', locate: 3 },
        { q: 'Peak TV passed its peak as ____', options: { A: 'streamers lost their technical advantages.', B: 'streamers changed their strategic priorities.', C: 'subscribers grew wary of large platforms.', D: 'subscribers were unhappy with new shows.' }, answer: 'B', locate: 5 },
        { q: 'According to Paragraph 6, California\'s entertainment industry might face ____', options: { A: 'a decline in product quality.', B: 'a demand for foreign talent.', C: 'a brain drain to other places.', D: 'a dramatic rise in labor costs.' }, answer: 'C', locate: 6 },
        { q: 'The author concludes the text by emphasizing that California should strive to ____', options: { A: 'maintain its position in the industry.', B: 'attract more investment than it had.', C: 'pursue a higher standard of production.', D: 'strengthen coordination with other states.' }, answer: 'A', locate: 7 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-one/'],
      verified: 'single'
    },
    {
      id: 'rd-2026-ky1-t3', real: true, exam: 'ky1', year: 2026, set: 1, level: 3, levelName: '真题',
      title: 'The Art of Listening: Radio Then and Now', topic: '阅读 Text 3',
      source: '真题 · 2026 考研英语一',
      paragraphs: [
        { en: 'The pioneers of wireless saw it as a gift to all the people. Sir John Reith said that it would end "isolation of the spirit" and rejoiced: "It does not matter how many thousands may be listening, there is always enough for others…the genius and the fool, the wealthy and the poor listen simultaneously."', zh: '' },
        { en: 'Between two great wars this technological innovation built a new kind of national consciousness. Opening this week, a book and exhibition curated by Beatty Rubens at the Bodleian in Oxford records how radio changed everyday life from 1922 to 1939. She draws on letters, diaries and fiction, and a 1939 field notebook of verbatim audience research by Winifred Gill.', zh: '' },
        { en: 'There\'s fun in testimonies of people enjoying the sheer newness. A cartoon mocks a group failing to converse because they\'re all in headphones. People report that broadcast music made workmen whistle new tunes. A woman says there have been fewer street fights since the arrival of the wireless but also less stopping and "talking on the brush handle".', zh: '' },
        { en: 'By and large the wireless was welcome. I loved the man from the Thirties research who found that wireless suddenly offered "a lot of variety…things I thought I\'d never be interested in…ice hockey perhaps". True: for more than 80 pre-digital years, linear speech broadcasting brought the gift of serendipity, random enlivening of a car journey or dull manual task. In my own book about radio I recorded how, on one drive: "I caught up with the news, learnt some 17th-century history, and was startlingly educated by an unpretentious programme on the history of the stethoscope."', zh: '' },
        { en: "But radio's enriching serendipity is ebbing. With multiple networks and countless podcasts, a smartphone user selects what to hear and when. And while it is wonderful to take a walk with anything in your headphones, infinite choice encourages us to shrink into niche interests and sympathetic beliefs.", zh: '' },
        { en: 'A hundred years on from Marconi and Reith, is the art of mere listening endangered? Some will say the audiobook boom revives it, though I suppose you can then worry about the decline of reading. But inventions shape all of us and it is worth noticing when techno-social habits do change, and asking whether to control them a bit or shield the youngest. Whatever we do, innovation will happen. Today we fret about the isolating culture of smartphone-staring and selfie-vanity, but already in 1939 there was that lady regretting how, when all her street got wirelesses, it lost the neighbourly habit of "talking on the brush handle". It\'s enough to make a person put down the smartphone and go out front with a yard broom.', zh: '' }
      ],
      questions: [
        { q: 'What can be learnt about wireless from Sir John Reith?', options: { A: 'It was accessible to everyone.', B: 'It improved interpersonal relations.', C: 'It was a miracle of human ingenuity.', D: 'It led to a new era of isolating culture.' }, answer: 'A', locate: 1 },
        { q: 'What is the theme of the exhibition at the Bodleian in Oxford?', options: { A: 'The impact of radio on its early audience.', B: 'The role of radio in public music education.', C: 'The innovation process of radio technology.', D: 'The eminent pioneers in radio broadcasting.' }, answer: 'A', locate: 2 },
        { q: 'It is indicated in Paragraph 4 that ____', options: { A: 'the research on radio used to be inadequate.', B: 'the charm of radio remains in the digital age.', C: 'radio listeners could make unexpected gains.', D: 'radio shows have changed little over the years.' }, answer: 'C', locate: 4 },
        { q: 'The expression "talking on the brush handle" in Paragraphs 3 and 6 refers to the act of ____', options: { A: 'making a loud noise.', B: 'having a casual chat.', C: 'starting a trivial quarrel.', D: 'humming a popular song.' }, answer: 'B', locate: 3 },
        { q: 'In the last paragraph, the author intends to express the opinion that ____', options: { A: 'technology should be aimed at benefiting humans.', B: 'actions should be taken to revive the art of listening.', C: 'adolescents should form healthy social media habits.', D: 'people should adopt a sensible attitude to innovations.' }, answer: 'D', locate: 6 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-one/'],
      verified: 'single'
    },
    {
      id: 'rd-2026-ky1-t4', real: true, exam: 'ky1', year: 2026, set: 1, level: 3, levelName: '真题',
      title: 'Prescribed Burns and the Ecology of Wildfire', topic: '阅读 Text 4',
      source: '真题 · 2026 考研英语一',
      paragraphs: [
        { en: 'When Tom Swetnam joined the U.S. Forest Service in the 1970s, his mandate was to "put everything out," he recalled. But when Swetnam enrolled in graduate school at the University of Arizona\'s Laboratory of Tree-Ring Research, he was surprised to find a record of repeated blazes dating back hundreds of years before European colonists arrived on the continent. Some of the trees he analyzed bore more than 20 fire scars among their rings.', zh: '' },
        { en: "The fact that fires happened so often meant they couldn't have been severe enough to kill most trees. Instead, a growing body of research showed that frequent, low-severity fires made many ecosystems healthier. They rid the forest of dead and sick trees, reducing competition and curbing the spread of disease. Because flammable material couldn't build up on the landscape, blazes tended to move slowly and peter out when they reached the footprints of previous burns.", zh: '' },
        { en: "In 2022, Swetnam and other scientists teamed up to compile a database of fire-scarred trees from across the continent. Their North American tree-ring fire-scar network (NAFSN) provided the basis for a study published last month. In the study, the researchers compared the historical fire cadence with the wildfires recorded over the past few decades, and uncovered a striking shortfall. The NAFSN sites experienced less than a quarter of the number of fires that would have been expected without fire suppression.", zh: '' },
        { en: 'This deficit is a testament to the effectiveness of modern firefighting, said Kelly Martin, a past president of the International Association of Wildland Fire. "Yet the combined consequences of suppression and climate change have eroded humanity\'s ability to suppress fires, particularly those that ignite under the most dangerous weather conditions."', zh: '' },
        { en: "To prevent entire ecosystems from going up in smoke, Martin said, people must bring healthy fire back to places that need it. At Yosemite National Park, Martin oversaw the use of what is known as prescribed burns to make the landscape more resilient. These fires were carefully planned and intentionally ignited during periods when weather kept the blazes easy to control, and helped eliminate some of the fuel that had built up around the important park's facilities. Research shows that these prescribed burns make subsequent wildfires less severe, even if later fires happen under the most dangerous weather conditions.", zh: '' },
        { en: 'Yet even as scientists and public officials increasingly agree on the need for more fires in our forests, climate change is making this tactic more challenging, experts said. "It\'s a double-edged sword because wildfires are getting more severe and larger under climate change and we need this work even more, but then the work gets more challenging," said Susan Prichard, a fire ecologist at the University of Washington.', zh: '' }
      ],
      questions: [
        { q: 'According to Paragraph 1, Swetnam was surprised by ____', options: { A: 'the scarcity of tree-ring research in the U.S.', B: 'the firefighting measures in ancient Europe.', C: 'the forest management practices in the 1970s.', D: 'the number of wildfires in precolonial times.' }, answer: 'D', locate: 1 },
        { q: 'Paragraph 2 mainly focuses on ____', options: { A: 'the causes of previous burns.', B: 'the treatment of diseased trees.', C: 'the benefits of low-severity fires.', D: 'the importance of forest ecosystems.' }, answer: 'C', locate: 2 },
        { q: 'What did the study find about the wildfires over the past few decades?', options: { A: 'Their intensity has vastly fluctuated.', B: 'Their frequency has markedly decreased.', C: 'Their threats have been underestimated.', D: 'Their records have been misinterpreted.' }, answer: 'B', locate: 3 },
        { q: 'What can be inferred about modern firefighting?', options: { A: 'Its workforce needs more training.', B: 'Its effectiveness is questioned by the public.', C: 'It may render traditional tactics useless.', D: 'It may make severe fires harder to put out.' }, answer: 'D', locate: 4 },
        { q: 'Both Martin and Prichard would agree that ____', options: { A: 'it is challenging to predict large wildfires.', B: 'it is urgent to assess the use of planned fires.', C: 'it is necessary to introduce prescribed burns.', D: 'it is rewarding to double fire detection efforts.' }, answer: 'C', locate: 6 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-one/'],
      verified: 'single'
    },
    {
      id: 'rd-2026-ky2-t1', real: true, exam: 'ky2', year: 2026, set: 1, level: 3, levelName: '真题',
      title: 'The Quiet Value of Public Libraries', topic: '阅读 Text 1',
      source: '真题 · 2026 考研英语二',
      paragraphs: [
        { en: "Ask people about public libraries and a certain image springs to mind: dusty, old-fashioned, the sort of place you enjoyed as a child but, rather like a British seaside town, would you go there now? And anyway — aren't they all closing?", zh: '' },
        { en: 'The reality is startlingly different, as I discovered when the culture department commissioned me to conduct an independent review of English public libraries, published yesterday. As I visited libraries up and down the country, I was surprised to learn there are more than twice the number of libraries (2,892) as there are branches of McDonald\'s.', zh: '' },
        { en: 'Enter any one of them and you will find a hive of activity. While books are, and should always be, at the heart of any library, a multitude of other services are offered: employment advice, language classes or digital access and support.', zh: '' },
        { en: 'There are libraries with business and intellectual property centres, which can help business owners and entrepreneurs. Many have nurses on site to carry out basic health checks, with a link to the GP\'s surgery. There are libraries where young people can borrow a Fifa-standard football free.', zh: '' },
        { en: "In return for all of this, you'll be asked for precisely nothing. There will be no charge and you will never be asked to justify or explain yourself; you will simply be welcomed in, offered help if you need it, and left alone if you do not. There is no other institution, public or private, that can say the same. Yet still our libraries are often overlooked and underappreciated. There is an overall decline in visits and many are struggling as local authorities come under continued financial pressure.", zh: '' },
        { en: 'The number of libraries that have closed since 2010 is disputed. An annual survey by the Chartered Institute of Public Finance and Accountancy puts it at nearly 800 across the UK; official statistics held by the Arts Council record 230 in England. It is, of course, 230 libraries too many. So if we are to protect our libraries for future generations, we must raise awareness of them and the work they do.', zh: '' },
        { en: "The review recommends a national branding campaign to give libraries a stronger physical presence, the reintroduction of a scheme to enable members to use their card in any library in the country, and automatic memberships for children. If we don't use them, we will end up losing them. And for those who haven't been to a library for some time, they may be surprised by what they find.", zh: '' }
      ],
      questions: [
        { q: 'What was the author commissioned to do about English public libraries?', options: { A: 'Document their valuable traditions.', B: 'Make a plan for their expansions.', C: 'Obtain reader opinions on them.', D: 'Look into their current situation.' }, answer: 'D', locate: 2 },
        { q: 'According to Paragraphs 3&4, the author finds that libraries ____', options: { A: 'boast desirable book collections.', B: 'keep detailed visitor records.', C: 'perform diversified functions.', D: 'attract mostly young readers.' }, answer: 'C', locate: 3 },
        { q: 'It is implied in Paragraph 5 that libraries should ____', options: { A: 'be given greater attention.', B: 'impose stricter visit limits.', C: 'work with private institutions.', D: 'get their equipment upgraded.' }, answer: 'A', locate: 5 },
        { q: 'The statistics mentioned in Paragraph 6 show ____', options: { A: 'the crisis faced by libraries.', B: 'the advancement of libraries.', C: 'the contributions of libraries.', D: 'the flaws existing in libraries.' }, answer: 'A', locate: 6 },
        { q: 'Which of the following is suggested for libraries in the last paragraph?', options: { A: 'Inviting public feedback.', B: 'Seeking adequate funding.', C: 'Improving user convenience.', D: 'Offering lifetime memberships.' }, answer: 'C', locate: 7 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-two/'],
      verified: 'single'
    },
    {
      id: 'rd-2026-ky2-t2', real: true, exam: 'ky2', year: 2026, set: 1, level: 3, levelName: '真题',
      title: 'Talking to AI at Work: Comfort and Risk', topic: '阅读 Text 2',
      source: '真题 · 2026 考研英语二',
      paragraphs: [
        { en: "According to our research, around one in five workers in the UK talk to AI like a friend, looking for guidance on personal and professional problems. Our data shows that engaging with AI like this can leave us feeling heard and less isolated. But, with this newfound connection, many of us share sensitive, sometimes highly confidential information, even though over a third of people don't realise that AI platforms may not be very good at keeping our secrets…secret.", zh: '' },
        { en: 'For businesses, the implications are worrying. Consider Microsoft Copilot, for example. It gains Microsoft broad rights to the data inputted or outputted by any user — rights to use this data in any way it sees fit; it can even share it with third parties. This means that any sensitive business information could potentially be exposed to the world. Employers are taking note and taking action. According to our research, 25% have decided to either outright ban AI or regulate its use within their organisations. But even with these policies in place, some employees choose to break the rules. They have their reasons — around 63% of them report that using AI increases their productivity, and some even feel AI offers more help than their human colleagues.', zh: '' },
        { en: 'The situation presents a delicate balance between leveraging AI for its productivity gains and risking confidential data exposure. Employers need to manage AI tools with the same level of care as any other form of data sharing or storage. There\'s also a knowledge gap that needs to be addressed — 40% of individuals surveyed are unsure about who retains ownership over the content produced by AI. By instilling best practices in AI engagement and creating policies that evolve with the technology, businesses can positively shift the AI landscape.', zh: '' },
        { en: "With AI's potential to simplify our professional lives, do the admin and enhance the work experience, it's up to us to navigate its usage cautiously so it supports us without compromising our privacy. There's no need to back away from progress, as long as we're equipped with the knowledge and tools to make sure AI remains a friend. And this is where the challenge lies. There are so many products out there, being promoted with huge advertising and marketing budgets, that it's easy to fall victim. But by building a culture of digital responsibility within our businesses, we can create a future where AI can help us without spilling the beans.", zh: '' }
      ],
      questions: [
        { q: 'According to Paragraph 1, workers\' engagement with AI can ____', options: { A: 'facilitate their career progress.', B: 'give them emotional support.', C: 'help maintain their motivation.', D: 'improve workplace communication.' }, answer: 'B', locate: 1 },
        { q: 'Microsoft Copilot is cited to show that the use of AI may ____', options: { A: 'pose a threat to businesses.', B: 'generate unnecessary data.', C: 'promote business cooperation.', D: 'encourage information sharing.' }, answer: 'A', locate: 2 },
        { q: 'Some employees choose to break the rules on AI due to ____', options: { A: 'easy access to AI products.', B: 'the desire to stay well-informed.', C: 'its significant role in their work.', D: 'the need to compete with others.' }, answer: 'C', locate: 2 },
        { q: 'To positively shift the AI landscape, businesses should ____', options: { A: 'increase the transparency of their data sources.', B: 'prioritise the quality of AI-produced content.', C: 'include employee perspectives in their rules.', D: 'adjust their management to AI development.' }, answer: 'D', locate: 3 },
        { q: 'According to the last paragraph, we may easily fall victim to AI as we ____', options: { A: 'have a limited understanding of it.', B: 'underestimate its economic costs.', C: 'tend to overemphasise its power.', D: 'are excessively exposed to it.' }, answer: 'A', locate: 4 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-two/'],
      verified: 'single'
    },
    {
      id: 'rd-2026-ky2-t3', real: true, exam: 'ky2', year: 2026, set: 1, level: 3, levelName: '真题',
      title: 'Italy\'s High-Speed Rail: Popular Yet Disrupted', topic: '阅读 Text 3',
      source: '真题 · 2026 考研英语二',
      paragraphs: [
        { en: 'Since the 2008 launch of the high-speed rail network between Rome and Milan, trains have become the preferred means of travel across Italy for locals and tourists alike. Fast trains can cover the 500km between the two cities in three hours. The network also connects Naples, Bologna, Florence and Turin. In many cases, it is the best option — in terms of travel time and cost — for both leisure and business travellers.', zh: '' },
        { en: 'This is why the recent severe delays caused by numerous maintenance works have thrown the rail industry into chaos at a time when most people head on holiday, which matters for business in a country where tourism accounts for 10 percent of GDP.', zh: '' },
        { en: 'Disruptions have become increasingly frequent with train delays now a fixture in Italian media coverage. Ferrovie dello Stato Italiane, the publicly controlled group that owns train operator Trenitalia and the national train network RFI, said 23 percent of all high-speed trains it operated were late in 2023.', zh: '' },
        { en: 'The huge improvements in Italy\'s obsolete infrastructure partly explained the disruption, said Ferrovie. RFI, the network operator, is the single largest European recovery fund beneficiary with planned investments of €24bn by 2026. Ferrovie will invest a total of €124bn in infrastructure over the next 10 years.', zh: '' },
        { en: 'But lack of capacity is another problem. Transport economist Andrea Giuricin said the planned investments would bring improvements but disruptions in the meantime were inevitable. "We have a mixed system, there is no spare capacity and as soon as there\'s a hiccup on the line, the situation becomes highly complex," he said. A mixed system means that high-speed trains must travel on the regular tracks on certain routes or when passing through large cities. If there\'s congestion or, for example, a local train breaks down, the entire high-speed network is affected.', zh: '' },
        { en: 'One of the most important changes the upgrades will bring is the segregation of the high-speed line from the regular one in certain urban centres through the construction of underground rail links.', zh: '' },
        { en: 'Improvements will also come from the high-density technology and satellite signalling that RFI has been investing in for years, say experts. It will allow for a reduction of the distance between high-speed trains travelling on the same line at any given time, which should mean a significant increase in capacity and traffic fluidity, according to Giuricin.', zh: '' }
      ],
      questions: [
        { q: 'According to the first two paragraphs, the high-speed rail network in Italy ____', options: { A: 'is seen by tourists as outdated.', B: 'is a popular option for travelling.', C: 'is inadequately utilised by locals.', D: 'is an example of good maintenance.' }, answer: 'B', locate: 2 },
        { q: 'Ferrovie is quoted in Paragraph 3 to show ____', options: { A: 'the common occurrence of train delays.', B: 'the value of the Italian train network.', C: 'the wide media coverage of trains.', D: 'the high efficiency of Trenitalia.' }, answer: 'A', locate: 3 },
        { q: 'Which of the following is one cause of the disruptions in the network?', options: { A: 'Complex train schedules.', B: 'Shortage of investments.', C: 'Its limited capacity.', D: 'Its massive scale.' }, answer: 'C', locate: 5 },
        { q: 'It can be learned that the mixed system ____', options: { A: 'provides a wide choice of routes.', B: 'requires extra operational spending.', C: 'increases the level of travel comfort.', D: 'puts the high-speed network in trouble.' }, answer: 'D', locate: 5 },
        { q: 'Improvements to the Italian train network will include ____', options: { A: 'reconstructing the regular train lines.', B: 'shortening high-speed train intervals.', C: 'building more stations in urban centres.', D: 'enhancing the safety of high-speed trains.' }, answer: 'B', locate: 7 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-two/'],
      verified: 'single'
    },
    {
      id: 'rd-2026-ky2-t4', real: true, exam: 'ky2', year: 2026, set: 1, level: 3, levelName: '真题',
      title: 'Chicago\'s Street Festivals: Community Support at Stake', topic: '阅读 Text 4',
      source: '真题 · 2026 考研英语二',
      paragraphs: [
        { en: 'In 2023, Chicago lost one of its most beloved street festivals. The Silver Room Block Party, staged by Hyde Park community leader Eric Williams, announced it would not return in 2024. What began as a small neighborhood gathering blossomed into a massive cultural event, welcoming tens of thousands of people each year over nearly two decades before abruptly shutting down.', zh: '' },
        { en: 'Williams pointed to rising production costs and declining attendee donations as primary reasons the Silver Room Block Party could not continue, highlighting a reality that all street festival organizers face right now. The cost of producing a street festival in Chicago has skyrocketed. Security, entertainment, portable restrooms, insurance and even basics such as fencing and staffing have all become significantly more expensive. At the same time, donations at festival gates have dropped dramatically.', zh: '' },
        { en: "Chicago's summer festivals are about more than just entertainment; they are economic engines that directly benefit the neighborhoods they're in and the city of Chicago as a whole. Street festivals drive foot traffic to local businesses and foster the kind of cultural vibrancy that makes our city special.", zh: '' },
        { en: "We often hear people ask why we solicit donations at our entry points, especially when the city's largest festivals like the Chicago Jazz Festival do not request donations. The fact is, unlike those large, city-produced music festivals, your neighborhood street festivals receive no city funding and rely on a combination of sponsorships, vendor fees and gate donations to cover their costs.", zh: '' },
        { en: 'Wicker Park Fest has long been one of Chicago\'s most anticipated summer festivals, drawing upward of 70,000 attendees for a full weekend of live indie music, local art, small business vendors and, most importantly, community connection. In 2024, Wicker Park Fest saw record-breaking attendance. Despite the turnout, gate donations reached their lowest point in our history. This year, we\'ve been forced to scale back the footprint of the fest. We are eliminating a stage, booking fewer performers and making additional cuts to reduce our costs, all while striving to keep the festival as vibrant as ever, as supportive of local artists and businesses, and as true to Wicker Park\'s unique spirit and reputation as festgoers have come to expect.', zh: '' },
        { en: "This summer, as you enjoy your favorite neighborhood street festival, I hope you'll remember that they exist because of community support. A thriving summer festival season doesn't happen by accident; it happens when we all chip in.", zh: '' }
      ],
      questions: [
        { q: 'It can be learned from Paragraph 1 that the Silver Room Block Party ____', options: { A: 'has been replaced by other festivals.', B: 'has gained great international fame.', C: 'was held in various neighborhoods.', D: 'was an appealing cultural gathering.' }, answer: 'D', locate: 1 },
        { q: 'One reality street festival organizers face is that ____', options: { A: 'they are unable to use the donations wisely.', B: 'they are unable to get sufficient facilities.', C: 'they have to tackle financial difficulties.', D: 'they have to step up security measures.' }, answer: 'C', locate: 2 },
        { q: 'According to Paragraphs 3 and 4, Chicago\'s street festivals ____', options: { A: 'relieve typical urban lifestyles.', B: 'are funded by the government.', C: 'contribute to the local economy.', D: 'are famous for their music shows.' }, answer: 'C', locate: 3 },
        { q: 'It is implied that the organizers of Wicker Park Fest have to ____', options: { A: 'count on amateur artists\' participation.', B: 'reduce the number of performances.', C: 'give up its most prominent feature.', D: 'collaborate with large businesses.' }, answer: 'B', locate: 5 },
        { q: 'The author holds that the future of street festivals depends on ____', options: { A: 'the variety of activities.', B: 'the generosity of attendants.', C: 'the reputation of neighborhoods.', D: 'the management of expenditures.' }, answer: 'B', locate: 6 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/kaoyan/paper/2026-english-two/'],
      verified: 'single'
    },

    /* ---------------- CET-4 仔细阅读真题（Section C）---------------- */
    {
      id: 'rd-2024-06-cet4-1p1', real: true, exam: 'cet4', year: 2024, month: 6, set: 1, level: 3, levelName: '真题',
      title: 'People-Pleasing: A Prison of Others\' Opinions', topic: '心理 / 自我认知',
      source: '真题 · 2024-06 CET-4 第1套 Section C',
      paragraphs: [
        { en: 'Lao Zi once said, "Care about what other people think and you will always be their prisoner."', zh: '' },
        { en: "People-pleasing, or seeking self-worth through others' approval, is unproductive and an exhausting way to go through life. Why do we allow what others think of us to have so much power over how we feel about ourselves? If it's true that you can't please all people all of the time, wouldn't it make sense to stop trying?", zh: '' },
        { en: 'Unfortunately, sense often isn\'t driving our behavior. For social beings who desire love and belonging, wanting to be liked, and caring about the effect we have on others, is healthy and allows us to make connections. However, where we get into trouble is when our self-worth is dependent upon whether we win someone\'s approval or not.', zh: '' },
        { en: "This need to be liked can be traced back to when we were children and were completely dependent on others to take care of us: Small children are not just learning how to walk and communicate, they are also trying to learn how the world works. We learn about who we are and what is expected of us based on interactions with others, so, to a four-year-old, if Mommy or Daddy doesn't like him or her, there is the danger that they will abandon them. We need to understand that when we desperately want someone to approve of us, it's being driven by that little kid part of us that is still terrified of abandonment.", zh: '' },
        { en: 'As you become more capable of providing yourself with the approval you seek, your need for external validation will start to vanish, leaving you stronger, more confident, and yes, happier in your life. Imagine how much time we lose each moment we restrain our authentic selves in an effort to be liked.', zh: '' },
        { en: 'If we base our worth on the opinions of others, we cheat ourselves of the power to shape our experiences and embrace life not only for others but also for ourselves, because ultimately, there is no difference. So embrace the cliché(老话) and love yourself as it\'s highly doubtful that you\'ll regret it.', zh: '' }
      ],
      questions: [
        { q: 'What can we conclude from Lao Zi\'s quotation?', options: { A: 'We should see through other people\'s attempt to make a prisoner of us.', B: 'We can never really please other people even if we try as hard as we can.', C: 'We can never be truly free if taking to heart others\' opinion of us.', D: 'We should care about other people\'s view as much as they care about our own.' }, answer: 'C', locate: 1 },
        { q: 'What will happen if we base our self-worth on other people\'s approval?', options: { A: 'Our desire to be loved will be fulfilled.', B: 'Our life will be unfruitful and exhausting.', C: 'Our identity as social beings will be affected.', D: 'Our sense of self will be sharpened and enhanced.' }, answer: 'B', locate: 2 },
        { q: 'What may account for our need to be liked or approved of?', options: { A: 'Our desperate longing for interactions with others.', B: 'Our understanding of the workings of the world.', C: 'Our knowledge about the pain of abandonment.', D: 'Our early childhood fear of being deserted.' }, answer: 'D', locate: 4 },
        { q: 'What can we do when we become better able to provide ourselves with the desired approval?', options: { A: 'Enjoy a happier life.', B: 'Exercise self-restraint.', C: 'Receive more external validation.', D: 'Strengthen our power of imagination.' }, answer: 'A', locate: 5 },
        { q: 'What does the author advise us to do in the last paragraph?', options: { A: 'Embrace life for ourselves and for others.', B: 'Base our worth on others\' opinions.', C: 'See our experiences as assets.', D: 'Love ourselves as we are.' }, answer: 'D', locate: 6 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/cet4/paper/2024-06-1/'],
      verified: 'single'
    },
    {
      id: 'rd-2024-06-cet4-1p2', real: true, exam: 'cet4', year: 2024, month: 6, set: 1, level: 3, levelName: '真题',
      title: 'Late-in-Life Learning and the Aging Brain', topic: '健康科学 / 大脑',
      source: '真题 · 2024-06 CET-4 第1套 Section C',
      paragraphs: [
        { en: 'Some people have said aging is more a slide into forgetfulness than a journey towards wisdom. However, a growing body of research suggests that late-in-life learning is possible. In reality, education does an aging brain good.', zh: '' },
        { en: "Throughout life, people's brains constantly renovate themselves. In the late 1960s, British brain scientist Geoffrey Raisman spied growth in damaged brain regions of rats through an electron microscope; their brains were forging new connections. This meant brains may change every time a person learns something new.", zh: '' },
        { en: "Of course, that doesn't mean the brain isn't affected by the effects of time. Just as height usually declines over the years, so does brain volume: Humans lose about 4 percent every decade starting in their 40s. But that reduction doesn't necessarily make people think slower; as long as we are alive and functioning, we can alter our brains with new information and experiences.", zh: '' },
        { en: "In fact, scientists now suspect accumulating novel experiences, facts, and skills can keep people's minds more flexible. New pathways can strengthen our ever-changing mental structure, even as the brain shrinks.", zh: '' },
        { en: 'Conventional fixes like word puzzles and brain-training apps can contribute to mental durability. Even something as simple as taking a different route to the grocery store or going somewhere new on vacation can keep the brain healthy.', zh: '' },
        { en: 'A desire for new life challenges can further boost brainpower. Research about aging adults who take on new enterprises shows improved function and memory as well as a reduced risk of mental disease. Openness—a characteristic defined by curiosity and a desire for knowledge—may also help folks pass brain tests. Some folks are born with this take-in-the-world attitude, but those who aren\'t as genetically gifted aren\'t necessarily out of luck. While genes can encourage an interest in doing new things, a 2012 study in the journal Psychology and Aging found completing reasoning tasks like puzzles and number games can enhance that desire for novel experiences, which can, in turn, refresh the brain. That\'s why brain scientist Richard Kennedy says "It\'s not that old dogs can\'t learn new tricks. It\'s that maybe old dogs don\'t realize why they should."', zh: '' }
      ],
      questions: [
        { q: 'What do some people think of aging adults?', options: { A: 'Their wisdom grows as time goes by.', B: 'Their memory gradually deteriorates.', C: 'They can benefit from late-in-life learning.', D: 'They are likely to have mental health issues.' }, answer: 'B', locate: 1 },
        { q: 'What can we conclude from Geoffrey Raisman\'s finding?', options: { A: 'Brain damage seriously hinders one\'s learning.', B: 'Brain power weakens slower than we imagine.', C: 'Brains can refresh and improve with learning.', D: 'Brains forge connections under new conditions.' }, answer: 'C', locate: 2 },
        { q: 'What is one thing that helps maintain the health of our brain even as it shrinks?', options: { A: 'Doing daily routines by conventional means.', B: 'Avoiding worrying about our mental durability.', C: 'Imitating old dogs\' way of learning new tricks.', D: 'Approaching everyday tasks in novel ways.' }, answer: 'D', locate: 5 },
        { q: 'What does the author say can contribute to the improvement of brain function?', options: { A: 'Being curious and desiring knowledge.', B: 'Being eager to pass brain tests at an old age.', C: 'Rising to life\'s challenges and avoiding risks.', D: 'Boosting immunity to serious mental diseases.' }, answer: 'A', locate: 6 },
        { q: 'What is the finding of the 2012 study in the journal Psychology and Aging?', options: { A: 'Wishing to solve puzzles enhances one\'s reasoning power.', B: 'Playing number games unexpectedly stimulates one\'s memory.', C: 'Desiring new experiences can help to renovate the brain.', D: 'Learning new tricks should not be confined to old dogs only.' }, answer: 'C', locate: 6 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/cet4/paper/2024-06-1/'],
      verified: 'single'
    },

    /* ---------------- CET-6 仔细阅读真题（Section C）---------------- */
    {
      id: 'rd-2024-06-cet6-1p1', real: true, exam: 'cet6', year: 2024, month: 6, set: 1, level: 3, levelName: '真题',
      title: 'Why Employees Fail to Intervene in Unsafe Situations', topic: '职场安全 / 心理学',
      source: '真题 · 2024-06 CET-6 第1套 Section C',
      paragraphs: [
        { en: 'It is irrefutable that employees know the difference between right and wrong. So why don\'t more employees intervene when they see someone exhibiting at-risk behavior in the workplace?', zh: '' },
        { en: 'There are a number of factors that influence whether people intervene. First, they need to be able to see a risky situation beginning to unfold. Second, the company\'s culture needs to make them feel safe to speak up. And third, they need to have the communication skills to say something effectively.', zh: '' },
        { en: 'This is not strictly a workplace problem; it\'s a growing problem off the job too. Every day people witness things on the street and choose to stand idly by. This is known as the bystander effect—the more people who witness an event, the less likely anyone in that group is to help the victim. The psychology behind this is called diffusion of responsibility. Basically, the larger the crowd, the more people assume that someone else will take care of it—meaning no one effectively intervenes or acts in a moment of need.', zh: '' },
        { en: "This crowd mentality is strong enough for people to evade their known responsibilities. But it's not only frontline workers who don't make safety interventions in the workplace. There are also instances where supervisors do not intervene either.", zh: '' },
        { en: "When a group of employees sees unsafe behavior not being addressed at a leadership level it creates the precedent that this is how these situations should be addressed, thus defining the safety culture for everyone.", zh: '' },
        { en: 'Despite the fact that workers are encouraged to intervene when they observe unsafe operations, this happens less than half of the time. Fear is the ultimate factor in not intervening. There is a fear of penalty, a fear that they\'ll have to do more work if they intervene. Unsuccessful attempts in the past are another strong contributing factor to why people don\'t intervene—they tend to prefer to defer that action to someone else for all future situations.', zh: '' },
        { en: 'On many worksites, competent workers must be appointed. Part of their job is to intervene when workers perform a task without the proper equipment or if the conditions are unsafe. Competent workers are also required to stop work from continuing when there\'s a danger.', zh: '' },
        { en: 'Supervisors also play a critical role. Even if a competent person isn\'t required, supervisors need a broad set of skills to not only identify and alleviate workplace hazards but also build a safety climate within their team that supports intervening and open communication among them.', zh: '' },
        { en: 'Beyond competent workers and supervisors, it\'s important to educate everyone within the organization that they are obliged to intervene if they witness a possible unsafe act, whether you\'re a designated competent person, a supervisor or a frontline worker.', zh: '' }
      ],
      questions: [
        { q: 'What is one of the factors contributing to failure of intervention in face of risky behavior in the workplace?', options: { A: 'Slack supervision style.', B: 'Unfavorable workplace culture.', C: 'Unforeseeable risk.', D: 'Blocked communication.' }, answer: 'B', locate: 2 },
        { q: 'What does the author mean by "diffusion of responsibility" (Para. 3)?', options: { A: 'The more people are around, the more they need to worry about their personal safety.', B: 'The more people who witness an event, the less likely anyone will venture to', C: 'The more people idling around on the street, the more likely they need taking care of.', D: 'The more people are around, the less chance someone will step forward to intervene.' }, answer: 'D', locate: 3 },
        { q: 'What happens when unsafe behavior at the workplace is not addressed by the leaders?', options: { A: 'No one will intervene when they see similar behaviors.', B: 'Everyone will see it as the easiest way to deal with crisis.', C: 'Workers have to take extra caution executing their duties.', D: 'Workers are left to take care of the emergency themselves.' }, answer: 'A', locate: 5 },
        { q: 'What is the ultimate reason workers won\'t act when they see unsafe operations?', options: { A: 'Preference of deferring the action to others.', B: 'Anticipation of leadership intervention.', C: 'Fear of being isolated by coworkers.', D: 'Fear of having to do more work.' }, answer: 'D', locate: 6 },
        { q: 'What is critical to ensuring workplace safety?', options: { A: 'Workers be trained to operate their equipment properly.', B: 'Workers exhibiting at-risk behavior be strictly disciplined.', C: 'Supervisors create a safety environment for timely intervention.', D: 'Supervisors conduct effective communication with frontline workers.' }, answer: 'C', locate: 8 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/cet6/paper/2024-06-1/'],
      verified: 'single'
    },
    {
      id: 'rd-2024-06-cet6-1p2', real: true, exam: 'cet6', year: 2024, month: 6, set: 1, level: 3, levelName: '真题',
      title: 'The Divide Over Nuclear Energy in the Climate Era', topic: '环境 / 能源',
      source: '真题 · 2024-06 CET-6 第1套 Section C',
      paragraphs: [
        { en: 'The term "environmentalist" can mean different things. It used to refer to people trying to protect wildlife and natural ecosystems. In the 21st century, the term has evolved to capture the need to combat human-made climate change.', zh: '' },
        { en: 'The distinction between these two strands of environmentalism is the cause of a split within the scientific community about nuclear energy.', zh: '' },
        { en: "On one side are purists who believe nuclear power isn't worth the risk and the exclusive solution to the climate crisis is renewable energy. The opposing side agrees that renewables are crucial, but says society needs an amount of power available to meet consumers' basic demands when the sun isn't shining and the wind isn't blowing. Nuclear energy, being far cleaner than oil, gas and coal, is a natural option, especially where hydroelectric capacity is limited.", zh: '' },
        { en: "Leon Clarke, who helped author reports for the UN's Intergovernmental Panel on Climate Change, isn't an uncritical supporter of nuclear energy, but says it's a valuable option to have if we're serious about reaching carbon neutrality.", zh: '' },
        { en: '"Core to all of this is the degree to which you think we can actually meet climate goals with 100% renewables," he said. "If you don\'t believe we can do it, and you care about the climate, you are forced to think about something like nuclear."', zh: '' },
        { en: 'The achievability of universal 100% renewability is similarly contentious. Cities such as Burlington, Vermont, have been "100% renewable" for years. But these cities often have small populations, occasionally still rely on fossil fuel energy and have significant renewable resources at their immediate disposal. Meanwhile, countries that manage to run off renewables typically do so thanks to extraordinary hydroelectric capabilities.', zh: '' },
        { en: 'Germany stands as the best case study for a large, industrialized country pushing into green energy. Chancellor Angela Merkel in 2011 announced Energiewende, an energy transition that would phase out nuclear and coal while phasing in renewables. Wind and solar power generation has increased over 400% since 2010, and renewables provided 46% of the country\'s electricity in 2019.', zh: '' },
        { en: "But progress has halted in recent years. The instability of renewables doesn't just mean energy is often not produced at night, but also that solar and wind can overwhelm the grid during the day, forcing utilities to pay customers to use their electricity. Lagging grid infrastructure struggles to transport this overabundance of green energy from Germany's north to its industrial south, meaning many factories still run on coal and gas. The political limit has also been reached in some places, with citizens meeting the construction of new wind turbines with loud protests.", zh: '' },
        { en: "The result is that Germany's greenhouse gas emissions have fallen by around 11.5% since 2010—slower than the EU average of 13.5%.", zh: '' }
      ],
      questions: [
        { q: 'What accounts for the divide within the scientific community about nuclear energy?', options: { A: 'Attention to combating human-made climate change.', B: 'Emphasis on protecting wildlife and natural ecosystems.', C: 'Evolution of the term "green energy" over the last century.', D: 'Adherence to different interpretations of environmentalism.' }, answer: 'D', locate: 2 },
        { q: 'What is the solution to energy shortage proposed by purists\' opponents?', options: { A: 'Relying on renewables firmly and exclusively.', B: 'Using fossil fuel and green energy alternately.', C: 'Opting for nuclear energy when necessary.', D: 'Limiting people\'s non-basic consumption.' }, answer: 'C', locate: 3 },
        { q: 'What point does the author want to make with cities like Burlington as an example?', options: { A: 'It is controversial whether the goal of the whole world\'s exclusive dependence on renewables is attainable.', B: 'It is contentious whether cities with large populations have renewable resources at their immediate disposal.', C: 'It is arguable whether cities that manage to run off renewables have sustainable hydroelectric capabilities.', D: 'It is debatable whether traditional fossil fuel energy can be done away with entirely throughout the world.' }, answer: 'A', locate: 6 },
        { q: 'What do we learn about Germany regarding renewable energy?', options: { A: 'It has increased its wind and solar power generation four times over the last two decades.', B: 'It represents a good example of a major industrialized country promoting green energy.', C: 'It relies on renewable energy to generate more than half of its electricity.', D: 'It has succeeded in reaching the goal of energy transition set by Merkel.' }, answer: 'B', locate: 7 },
        { q: 'What may be one of the reasons for Germany\'s progress having halted in recent years?', options: { A: 'Its grid infrastructure\'s capacity has fallen behind its development of green energy.', B: 'Its overabundance of green energy has forced power plants to suspend operation during daytime.', C: 'Its industrial south is used to running factories on conventional energy supplies.', D: 'Its renewable energy supplies are unstable both at night and during the day.' }, answer: 'A', locate: 8 }
      ],
      sourceUrls: ['https://english-exam.lazynote.cn/cet6/paper/2024-06-1/'],
      verified: 'single'
    }
  ]
};
