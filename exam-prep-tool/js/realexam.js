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
    updated: '2026-08-29',
    note: '真题数据来自公开网络检索并经多源比对，出处见各条 sourceUrls。缺失年份与科目见 README「真题覆盖与缺口」一节。',
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
  ]
};
