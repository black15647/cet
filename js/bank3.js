/* ============================================================
 * 题库扩展批（bank3）
 * 本文件在 data.js / bank2.js 之后、app.js 之前加载，
 * 直接向 DB 各数组 push，不参与任何逻辑改写。
 * ID 统一加前缀避免与内置题库碰撞：
 *   c4 = CET-4, c6 = CET-6, k1 = 考研英一, k2 = 考研英二
 *   r = 阅读, t = 翻译, w = 写作, l = 听力
 * 本批：CET-4（c4r01-08 / c4t01-06 / c4w01-05 / c4l01-05）
 * ============================================================ */
(function () {
  if (typeof DB === 'undefined') return;

  /* ---------------- CET-4 阅读（8 篇） ---------------- */
  DB.articles.push(
    {
      id: 'c4r01', exam: 'cet4', level: 1, levelName: '基础', verified: 'mock',
      title: 'Volunteering in Local Communities',
      topic: '社会生活',
      source: '模拟真题 · CET-4',
      paragraphs: [
        { en: 'Many young people today spend their free time volunteering in local communities. They help at food banks, visit elderly neighbors, or clean up neighborhood parks.', zh: '如今许多年轻人把空闲时间用于参与本地社区的志愿服务。他们在食物银行帮忙、探访年长的邻居，或清理社区公园。' },
        { en: 'Research shows that volunteering benefits not only the receivers but also the volunteers. People who volunteer regularly report lower stress and a stronger sense of belonging.', zh: '研究表明，志愿服务不仅让受助者受益，也让志愿者自身受益。经常做志愿工作的人压力更低，归属感更强。' },
        { en: 'Schools and companies are encouraging this trend. Some universities now give academic credit for community service, while firms offer paid volunteer days.', zh: '学校和企业正在鼓励这一趋势。一些大学现在为社区服务给予学分，而部分公司则提供带薪志愿日。' }
      ],
      longSentences: [
        {
          text: 'Research shows that volunteering benefits not only the receivers but also the volunteers.',
          structure: [
            { role: '主语', part: 'Research', explain: '不可数名词作主语' },
            { role: '谓语', part: 'shows', explain: '一般现在时第三人称单数' },
            { role: '宾语从句', part: 'that volunteering benefits...', explain: 'that 引导名词性从句作 shows 的宾语' },
            { role: '并列宾语', part: 'not only the receivers but also the volunteers', explain: 'not only...but also 连接两个并列宾语' }
          ],
          note: '主干为 Research shows that...；注意 not only A but also B 的并列结构，谓语动词与 B 一致。'
        }
      ],
      questions: [
        {
          q: 'What do many young people do in their free time according to Paragraph 1?',
          options: { A: 'They take extra paid jobs.', B: 'They do volunteer work in communities.', C: 'They travel abroad.', D: 'They study at food banks.' },
          answer: 'B',
          locate: 1,
          basis: '首段首句明确指出年轻人把空闲时间用于本地社区志愿服务（volunteering in local communities）。',
          analysis: { A: '原文未提有偿兼职，属无中生有。', C: 'travel abroad 在文中没有依据。', D: '食物银行是志愿服务地点之一，并非去学习，曲解文意。' }
        },
        {
          q: 'According to research, who gains from volunteering?',
          options: { A: 'Only the people who receive help.', B: 'Only university students.', C: 'Both the receivers and the volunteers.', D: 'The government alone.' },
          answer: 'C',
          locate: 2,
          basis: '第二段明确说志愿服务不仅让受助者（receivers）受益，也让志愿者（volunteers）受益。',
          analysis: { A: '与原文"不仅受助者"相反，漏了志愿者。', B: '志愿者不限于大学生，以偏概全。', D: '原文未提及政府获益。' }
        },
        {
          q: 'How do schools and companies support volunteering?',
          options: { A: 'By giving credit or paid volunteer days.', B: 'By building more parks.', C: 'By forcing students to join.', D: 'By closing food banks.' },
          answer: 'A',
          locate: 3,
          basis: '第三段说大学给社区服务学分、公司提供带薪志愿日，即给予学分或带薪志愿时间。',
          analysis: { B: '建公园不是学校与公司的做法，属张冠李戴。', C: '原文用 encourage，并非强制（force）。', D: '关闭食物银行与鼓励志愿的趋势相反。' }
        }
      ]
    },
    {
      id: 'c4r02', exam: 'cet4', level: 1, levelName: '基础', verified: 'mock',
      title: 'Drinking Water and Your Health',
      topic: '健康生活',
      source: '模拟真题 · CET-4',
      paragraphs: [
        { en: 'Water is the most basic need of the human body, yet many people do not drink enough of it. Doctors suggest about eight glasses a day for an adult.', zh: '水是人体最基本的需求，然而许多人摄入不足。医生建议成年人每天约喝八杯水。' },
        { en: 'Even mild dehydration can affect concentration and mood. A person who feels tired in the afternoon may simply need a glass of water rather than another cup of coffee.', zh: '即便轻度缺水也会影响注意力和情绪。下午感到疲惫的人，可能只需要一杯水，而不是再来一杯咖啡。' },
        { en: 'Carrying a reusable bottle makes it easier to form the habit. Replacing sugary drinks with water also helps control weight and protect teeth.', zh: '随身带一个可重复使用的水瓶，更容易养成喝水的习惯。用水代替含糖饮料还有助于控制体重、保护牙齿。' }
      ],
      longSentences: [
        {
          text: 'A person who feels tired in the afternoon may simply need a glass of water rather than another cup of coffee.',
          structure: [
            { role: '主语', part: 'A person', explain: '中心词 person' },
            { role: '定语从句', part: 'who feels tired in the afternoon', explain: 'who 引导，修饰 a person，说明哪类人' },
            { role: '谓语', part: 'may simply need', explain: '情态动词 + 副词 + 动词原形' },
            { role: '宾语（对比）', part: 'a glass of water rather than another cup of coffee', explain: 'rather than 表取舍，否定后者' }
          ],
          note: '主干 A person may need water rather than coffee；who 从句把 person 限定为"下午犯困的人"。'
        }
      ],
      questions: [
        {
          q: 'What do doctors suggest about daily water intake?',
          options: { A: 'At least eight glasses for adults.', B: 'As little as possible.', C: 'Only before meals.', D: 'More coffee than water.' },
          answer: 'A',
          locate: 1,
          basis: '第一段说医生建议成年人每天约八杯水（about eight glasses a day for an adult）。',
          analysis: { B: '与"许多人喝水不足"的提醒相反。', C: '原文未限定只在饭前喝。', D: '原文主张用水替代咖啡，而非多喝咖啡。' }
        },
        {
          q: 'What may cause afternoon tiredness according to the passage?',
          options: { A: 'Too much sleep.', B: 'Mild dehydration.', C: 'Drinking coffee.', D: 'Reading books.' },
          answer: 'B',
          locate: 2,
          basis: '第二段说下午感到疲惫的人可能只是轻度缺水（mild dehydration），需要的是水。',
          analysis: { A: '原文未提及睡眠过多导致疲惫。', C: '咖啡被说成不如水，并非病因。', D: '读书与疲惫无因果关系。' }
        },
        {
          q: 'What is the benefit of replacing sugary drinks with water?',
          options: { A: 'It costs more money.', B: 'It helps control weight and protect teeth.', C: 'It makes people sleep less.', D: 'It increases sugar intake.' },
          answer: 'B',
          locate: 3,
          basis: '第三段明确说用水代替含糖饮料有助于控制体重、保护牙齿。',
          analysis: { A: '水比含糖饮料更便宜，与原意相反。', C: '原文未提睡眠变化。', D: '替代含糖饮料应是减少糖分摄入。' }
        }
      ]
    },
    {
      id: 'c4r03', exam: 'cet4', level: 2, levelName: '进阶', verified: 'mock',
      title: 'Online Learning Platforms',
      topic: '教育科技',
      source: '模拟真题 · CET-4',
      paragraphs: [
        { en: 'Online learning platforms have made high-quality courses available to anyone with an internet connection. A student in a small town can now learn from teachers at top universities.', zh: '在线学习平台让任何有网络连接的人都能获得高质量的课程。小城镇的学生如今也能跟随顶尖大学的老师学习。' },
        { en: 'However, learning online requires self-discipline that traditional classrooms provide naturally. Without a fixed schedule, some learners put off their study and finish nothing.', zh: '然而，在线学习需要传统课堂天然具备的自律。没有固定课表，一些学习者拖延学业，最终什么也没完成。' },
        { en: 'The most successful users set clear goals and study at the same time each day. Platforms that send reminders and track progress can also raise completion rates.', zh: '最成功的用户会设定清晰目标，并每天在固定时间学习。发送提醒、跟踪进度的平台也能提高完课率。' }
      ],
      longSentences: [
        {
          text: 'Online learning platforms have made high-quality courses available to anyone with an internet connection.',
          structure: [
            { role: '主语', part: 'Online learning platforms', explain: '复合名词作主语' },
            { role: '谓语（使役）', part: 'have made', explain: '现在完成时，make 的过去分词' },
            { role: '宾语', part: 'high-quality courses', explain: 'make 的宾语' },
            { role: '宾语补足语', part: 'available to anyone with an internet connection', explain: 'available 作补语，to anyone 表对象' }
          ],
          note: 'make + 宾语 + 形容词补足语 结构：平台使课程（变）为任何联网者可得。'
        }
      ],
      questions: [
        {
          q: 'What is the main advantage of online learning platforms?',
          options: { A: 'They replace all schools.', B: 'They give anyone with internet access to good courses.', C: 'They are cheaper than books.', D: 'They need no teachers.' },
          answer: 'B',
          locate: 1,
          basis: '第一段说平台让任何有网络连接的人都能获得高质量课程。',
          analysis: { A: '原文只说可跟随名师，未说取代所有学校。', C: '未比较与书的价格。', D: '平台仍有老师授课，非无需老师。' }
        },
        {
          q: 'What problem may online learners face?',
          options: { A: 'Too many classrooms.', B: 'Lack of self-discipline.', C: 'Slow internet only.', D: 'High tuition fees.' },
          answer: 'B',
          locate: 2,
          basis: '第二段说在线学习需要自律，没有课表一些人会拖延。',
          analysis: { A: '在线学习恰恰缺少实体课堂约束。', C: '网络慢非主要问题，重点在自律。', D: '未提高额学费。' }
        },
        {
          q: 'According to the passage, successful learners usually ______.',
          options: { A: 'study without any plan', B: 'set goals and keep a fixed time', C: 'avoid all reminders', D: 'learn only at weekends' },
          answer: 'B',
          locate: 3,
          basis: '第三段说成功用户设定清晰目标并每天固定时间学习。',
          analysis: { A: '与"设定清晰目标"相反。', C: '提醒有助于提高完课率，不应回避。', D: '固定每天而非仅周末。' }
        }
      ]
    },
    {
      id: 'c4r04', exam: 'cet4', level: 2, levelName: '进阶', verified: 'mock',
      title: 'Urban Green Spaces',
      topic: '城市环境',
      source: '模拟真题 · CET-4',
      paragraphs: [
        { en: 'Cities around the world are adding parks, rooftop gardens and tree-lined streets to fight heat and pollution. These green spaces are called the lungs of a city.', zh: '全球城市正在增设公园、屋顶花园和林荫街道，以对抗高温与污染。这些绿色空间被称为城市的肺。' },
        { en: 'Studies find that people living near parks exercise more and report better mental health. Children with green views at school also concentrate better in class.', zh: '研究发现，住在公园附近的人运动更多、心理健康状况更好。校园能看到绿植的孩子在课堂上也更专注。' },
        { en: 'Yet land in big cities is expensive, so planners must be creative. Old rail lines, rooftops and even walls can be turned into small green areas.', zh: '然而大城市土地昂贵，规划者必须富有创意。旧铁路线、屋顶乃至墙面都能改造成小型绿地。' }
      ],
      longSentences: [
        {
          text: 'Cities around the world are adding parks, rooftop gardens and tree-lined streets to fight heat and pollution.',
          structure: [
            { role: '主语', part: 'Cities around the world', explain: '介词短语作定语修饰 cities' },
            { role: '谓语', part: 'are adding', explain: '现在进行时' },
            { role: '并列宾语', part: 'parks, rooftop gardens and tree-lined streets', explain: '三个名词并列' },
            { role: '目的状语', part: 'to fight heat and pollution', explain: '不定式表目的' }
          ],
          note: '主干 Cities are adding A, B and C to fight...；to 不定式为增设绿地的目的。'
        }
      ],
      questions: [
        {
          q: 'Why do cities build more green spaces?',
          options: { A: 'To attract more cars.', B: 'To fight heat and pollution.', C: 'To sell the land.', D: 'To remove all trees.' },
          answer: 'B',
          locate: 1,
          basis: '第一段说城市增设绿地是为了对抗高温与污染（to fight heat and pollution）。',
          analysis: { A: '与减排目标相反。', C: '绿地非为卖地。', D: '是在增种而非移除树木。' }
        },
        {
          q: 'What do studies say about people near parks?',
          options: { A: 'They exercise less.', B: 'They have worse mental health.', C: 'They exercise more and feel better.', D: 'They move away.' },
          answer: 'C',
          locate: 2,
          basis: '第二段说住公园附近的人运动更多、心理健康更好。',
          analysis: { A: '与"运动更多"相反。', B: '与"心理健康更好"相反。', D: '未提搬家。' }
        },
        {
          q: 'What must planners do because land is costly?',
          options: { A: 'Give up green space.', B: 'Be creative with small areas.', C: 'Build only big parks.', D: 'Cut down trees.' },
          answer: 'B',
          locate: 3,
          basis: '第三段说地价高，规划者须有创意，把旧铁路线、屋顶、墙面改造成小绿地。',
          analysis: { A: '并未放弃，而是巧妙利用。', C: '强调小空间利用，非只建大公园。', D: '与增绿方向相反。' }
        }
      ]
    },
    {
      id: 'c4r05', exam: 'cet4', level: 2, levelName: '进阶', verified: 'mock',
      title: 'The Rise of Podcasts',
      topic: '媒体文化',
      source: '模拟真题 · CET-4',
      paragraphs: [
        { en: 'Podcasts are audio programs that people can download and listen to at any time. Unlike radio, they let listeners choose topics and pause whenever they like.', zh: '播客是可供下载、随时收听的音频节目。与广播不同，它让听众自选话题、随时暂停。' },
        { en: 'The format has grown fast because it fits busy lives. Commuters learn a language on the train, and joggers hear the news while running.', zh: '这种形式发展迅猛，因为它契合忙碌的生活。通勤者在地铁上学语言，慢跑者边跑边听新闻。' },
        { en: 'Still, with millions of shows online, finding trustworthy content is not easy. Lists made by teachers or libraries can guide beginners to quality programs.', zh: '不过，网上节目数以百万计，找到可信内容并不容易。由老师或图书馆整理的清单能引导初学者找到优质节目。' }
      ],
      longSentences: [
        {
          text: 'Unlike radio, they let listeners choose topics and pause whenever they like.',
          structure: [
            { role: '比较状语', part: 'Unlike radio', explain: 'unlike 引出对比对象' },
            { role: '主语 + 谓语', part: 'they let listeners', explain: 'let + 宾 + 宾补 结构' },
            { role: '宾语补足语', part: 'choose topics and pause', explain: '省略 to 的不定式并列作补语' },
            { role: '时间状语从句', part: 'whenever they like', explain: 'whenever 引导，修饰 pause' }
          ],
          note: 'let sb do A and do B：让听众选择话题并随时暂停；whenever 表"无论何时"。'
        }
      ],
      questions: [
        {
          q: 'What is a podcast?',
          options: { A: 'A live TV show.', B: 'A downloadable audio program.', C: 'A printed magazine.', D: 'A radio station.' },
          answer: 'B',
          locate: 1,
          basis: '第一段定义播客为可下载、随时收听的音频节目。',
          analysis: { A: '播客是音频非电视直播。', C: '非印刷杂志。', D: '区别于广播，非广播电台。' }
        },
        {
          q: 'Why has the podcast format grown quickly?',
          options: { A: 'It suits busy schedules.', B: 'It replaces all radio.', C: 'It is always free.', D: 'It needs no internet.' },
          answer: 'A',
          locate: 2,
          basis: '第二段说它发展快是因为契合忙碌的生活（fits busy lives）。',
          analysis: { B: '只说不同于广播，未取代。', C: '未提免费。', D: '下载通常需网络。' }
        },
        {
          q: 'How can beginners find good podcasts?',
          options: { A: 'By trusting all online shows.', B: 'Through lists from teachers or libraries.', C: 'By avoiding libraries.', D: 'By random clicking only.' },
          answer: 'B',
          locate: 3,
          basis: '第三段说老师或图书馆整理的清单能引导初学者找到优质节目。',
          analysis: { A: '原文强调内容鱼龙混杂，不可全信。', C: '恰恰建议参考图书馆清单。', D: '随机点击非推荐做法。' }
        }
      ]
    },
    {
      id: 'c4r06', exam: 'cet4', level: 3, levelName: '拔高', verified: 'mock',
      title: 'The Second-hand Economy',
      topic: '消费经济',
      source: '模拟真题 · CET-4',
      paragraphs: [
        { en: 'Selling used goods online has become a normal habit for many shoppers. Phones, clothes and furniture find a second owner instead of being thrown away.', zh: '在网上出售二手物品已成为许多消费者的习惯。手机、衣物和家具找到第二任主人，而非被丢弃。' },
        { en: 'This trend helps the environment by cutting waste and the need for new production. It also saves buyers money and gives sellers some income from idle things.', zh: '这一趋势通过减少废弃物和新生产需求来保护环境。它也为买家省钱，让卖家从闲置物品中获得一些收入。' },
        { en: 'The challenge is trust: buyers worry about hidden damage, and sellers fear late payment. Platforms that inspect goods and hold payment until delivery are solving these problems.', zh: '挑战在于信任：买家担心隐藏瑕疵，卖家害怕拖欠付款。那些验货、并在送达前托管款项的平台正在解决这些问题。' }
      ],
      longSentences: [
        {
          text: 'Platforms that inspect goods and hold payment until delivery are solving these problems.',
          structure: [
            { role: '主语', part: 'Platforms', explain: '中心词' },
            { role: '定语从句', part: 'that inspect goods and hold payment until delivery', explain: 'that 引导，修饰 platforms，说明这类平台的做法' },
            { role: '谓语', part: 'are solving', explain: '现在进行时' },
            { role: '宾语', part: 'these problems', explain: '指代前文的信任难题' }
          ],
          note: '主干 Platforms are solving these problems；that 从句限定是"验货并托管款项"的平台。'
        }
      ],
      questions: [
        {
          q: 'What happens to used phones and clothes in the second-hand economy?',
          options: { A: 'They are always thrown away.', B: 'They get a second owner.', C: 'They become free.', D: 'They are banned online.' },
          answer: 'B',
          locate: 1,
          basis: '第一段说手机、衣物、家具找到第二任主人而非被丢弃。',
          analysis: { A: '与"而非被丢弃"相反。', C: '二手交易仍有价，非免费。', D: '网上二手交易正流行，非被禁。' }
        },
        {
          q: 'How does the second-hand trend help the environment?',
          options: { A: 'By increasing new production.', B: 'By cutting waste and new production.', C: 'By using more packaging.', D: 'By burning old goods.' },
          answer: 'B',
          locate: 2,
          basis: '第二段说该趋势通过减少废弃物和新生产需求来保护环境。',
          analysis: { A: '与"减少新生产"相反。', C: '未提增加包装。', D: '焚烧旧物非文中做法。' }
        },
        {
          q: 'What problem do second-hand platforms face?',
          options: { A: 'Too much trust.', B: 'Lack of buyers.', C: 'Trust between buyers and sellers.', D: 'Free shipping only.' },
          answer: 'C',
          locate: 3,
          basis: '第三段指出挑战在于信任：买家怕瑕疵、卖家怕拖欠。',
          analysis: { A: '问题是信任不足而非过多。', B: '买家不少，难点在信任。', D: '未提及免运费。' }
        }
      ]
    },
    {
      id: 'c4r07', exam: 'cet4', level: 3, levelName: '拔高', verified: 'mock',
      title: 'A Gap Year Before College',
      topic: '教育选择',
      source: '模拟真题 · CET-4',
      paragraphs: [
        { en: 'Some high-school graduates take a gap year to work or travel before university. They say the break helps them grow up and choose a major with care.', zh: '一些高中毕业生在上大学前用间隔年工作 or 旅行。他们说这段空档有助于成熟，并谨慎选择专业。' },
        { en: 'Supporters argue that real-world experience makes study later more meaningful. A student who has worked may value lectures that once seemed boring.', zh: '支持者认为，真实世界的经历让日后的学习更有意义。工作过的学生可能会重视那些曾显得枯燥的课堂。' },
        { en: 'Critics warn that a year off can become a habit of delay. Without a plan, some students lose the habit of study and find it hard to return.', zh: '批评者警告，休学一年可能变成拖延的习惯。没有计划，一些学生会丢掉学习的习惯，难以重返校园。' }
      ],
      longSentences: [
        {
          text: 'A student who has worked may value lectures that once seemed boring.',
          structure: [
            { role: '主语', part: 'A student', explain: '中心词' },
            { role: '定语从句', part: 'who has worked', explain: 'who 引导，修饰 student' },
            { role: '谓语', part: 'may value', explain: '情态动词 + 动词' },
            { role: '定语从句（宾语）', part: 'lectures that once seemed boring', explain: 'that 引导，修饰 lectures' }
          ],
          note: '主干 A student may value lectures；两个 that/who 从句分别限定 student 与 lectures。'
        }
      ],
      questions: [
        {
          q: 'What do some graduates do in a gap year?',
          options: { A: 'Study the same major.', B: 'Work or travel before university.', C: 'Repeat high school.', D: 'Teach at school.' },
          answer: 'B',
          locate: 1,
          basis: '第一段说一些毕业生在上大学前用间隔年工作 or 旅行。',
          analysis: { A: '间隔年在入学前，尚未确定专业。', C: '非重读高中。', D: '未提任教。' }
        },
        {
          q: 'Why do supporters like the gap year?',
          options: { A: 'It makes study more meaningful.', B: 'It avoids all lectures.', C: 'It is always cheap.', D: 'It shortens college.' },
          answer: 'A',
          locate: 2,
          basis: '第二段说支持者认为真实经历让日后学习更有意义。',
          analysis: { B: '非避开课堂，而是更重视。', C: '未提花费。', D: '未说缩短大学。' }
        },
        {
          q: 'What do critics worry about?',
          options: { A: 'Students grow too fast.', B: 'A year off becomes a habit of delay.', C: 'Majors are chosen too early.', D: 'Travel is too safe.' },
          answer: 'B',
          locate: 3,
          basis: '第三段说批评者担心休学一年变成拖延习惯，无计划者难回校园。',
          analysis: { A: '成熟是支持方论点，非批评方担忧。', C: '谨慎选专业是正面，非担忧。', D: '未提旅行安全。' }
        }
      ]
    },
    {
      id: 'c4r08', exam: 'cet4', level: 3, levelName: '拔高', verified: 'mock',
      title: 'Remote Work Is Here to Stay',
      topic: '职场变化',
      source: '模拟真题 · CET-4',
      paragraphs: [
        { en: 'After the pandemic, many companies kept remote work as a regular option. Employees attend meetings by video and send files from home.', zh: '疫情之后，许多公司把远程办公作为常规选项保留下来。员工通过视频参会，在家发送文件。' },
        { en: 'Workers say they save time on commuting and enjoy a flexible day. Employers, however, worry that teamwork and company culture suffer without face-to-face contact.', zh: '员工表示省下通勤时间、享受灵活的一天。但雇主担心，缺少面对面接触会损害协作与公司文化。' },
        { en: 'A common compromise is the hybrid model: in the office two or three days a week, and remote for the rest. Surveys show most staff prefer this balance.', zh: '常见的折中是混合模式：每周到办公室两三天，其余时间远程。调查显示多数员工偏好这种平衡。' }
      ],
      longSentences: [
        {
          text: 'Employers, however, worry that teamwork and company culture suffer without face-to-face contact.',
          structure: [
            { role: '主语', part: 'Employers', explain: '中心词' },
            { role: '插入语', part: 'however', explain: '表转折，阅读时可先跳过' },
            { role: '谓语', part: 'worry', explain: '主句动词' },
            { role: '宾语从句', part: 'that teamwork and company culture suffer without face-to-face contact', explain: 'that 引导，作 worry 的宾语' }
          ],
          note: '主干 Employers worry that...；however 转折引出雇主的顾虑，that 从句说明担忧内容。'
        }
      ],
      questions: [
        {
          q: 'What did many companies do after the pandemic?',
          options: { A: 'Ended remote work.', B: 'Kept remote work as an option.', C: 'Banned video meetings.', D: 'Moved offices home.' },
          answer: 'B',
          locate: 1,
          basis: '第一段说许多公司把远程办公作为常规选项保留。',
          analysis: { A: '与"保留"相反。', C: '视频会议正被使用。', D: '非把办公室搬回家，而是允许远程。' }
        },
        {
          q: 'What do employers worry about?',
          options: { A: 'Too much commuting.', B: 'Weak teamwork and culture without contact.', C: 'High office rent only.', D: 'Late files.' },
          answer: 'B',
          locate: 2,
          basis: '第二段说雇主担心缺少面对面接触会损害协作与公司文化。',
          analysis: { A: '省通勤是员工收益，非雇主担忧。', C: '未提租金。', D: '未提文件延迟。' }
        },
        {
          q: 'What is the hybrid model?',
          options: { A: 'Fully remote forever.', B: 'Office a few days, remote the rest.', C: 'No meetings at all.', D: 'Five days in office.' },
          answer: 'B',
          locate: 3,
          basis: '第三段定义混合模式为每周到办公室两三天、其余远程。',
          analysis: { A: '混合非全远程。', C: '仍有会议。', D: '非五天坐班。' }
        }
      ]
    }
  );

  /* ---------------- CET-4 翻译（6 题，cn2en 段落） ---------------- */
  DB.translations.push(
    {
      id: 'c4t01', exam: 'cet4', type: 'cn2en', label: 'CET-4 段落翻译',
      topic: '中国传统文化 · 茶',
      source: '茶是中国人日常生活中不可或缺的饮品。几千年来，饮茶不仅是一种解渴的方式，更成为一种文化象征。在中国，主人常用茶来招待客人，以表达热情与尊重。如今，随着健康意识的提升，越来越多的人喜欢喝绿茶和花茶。',
      reference: "Tea is an indispensable drink in the daily life of Chinese people. For thousands of years, drinking tea has been not only a way to quench thirst, but also a cultural symbol. In China, hosts often serve tea to guests to show hospitality and respect. Today, with the rise of health awareness, a growing number of people prefer green tea and scented tea.",
      keywords: ['indispensable', 'quench thirst', 'cultural symbol', 'show hospitality and respect', 'health awareness', 'a growing number of', 'scented tea'],
      commonErrors: [
        '“不可或缺”译 indispensable，不要写成 can not be lacked 这类中式表达。',
        '“不仅……更……”用 not only...but also，注意 not only 后接 a way、but also 后接 a cultural symbol，结构对称。',
        '“随着健康意识的提升”用 with the rise of health awareness，避免逐字 with health consciousness rising up。',
        '“花茶”固定译 scented tea，不要写成 flower tea。'
      ]
    },
    {
      id: 'c4t02', exam: 'cet4', type: 'cn2en', label: 'CET-4 段落翻译',
      topic: '社会发展 · 移动支付',
      source: '在中国，移动支付已经成为人们购物和吃饭时最常用的付款方式。无论是大型超市还是街边小摊，顾客只需用手机扫描二维码就能完成支付。这种便捷的体验让许多人出门不再携带现金和银行卡。',
      reference: 'In China, mobile payment has become the most common way for people to pay when shopping and eating. Whether in large supermarkets or at street stalls, customers can finish payment simply by scanning a QR code with their phones. This convenient experience means many people no longer carry cash or bank cards when they go out.',
      keywords: ['mobile payment', 'the most common way', 'street stalls', 'scan a QR code', 'finish payment', 'no longer', 'cash or bank cards'],
      commonErrors: [
        '“移动支付”译 mobile payment，不要写成 phone pay。',
        '“无论是……还是……”用 whether...or...，连接两个并列地点。',
        '“只需扫描二维码”用 simply by scanning a QR code，by 表方式。',
        '“不再携带”用 no longer carry，注意 no longer 位置在动词前。'
      ]
    },
    {
      id: 'c4t03', exam: 'cet4', type: 'cn2en', label: 'CET-4 段落翻译',
      topic: '教育 · 义务教育',
      source: '中国实行九年义务教育，目的是让每一个孩子都能接受基本的教育。在大多数地区，小学和初中的学费由政府承担，家庭不需要支付。这使得更多贫困家庭的孩子有机会走进校园、改变命运。',
      reference: 'China has implemented nine-year compulsory education, with the aim of giving every child access to basic education. In most regions, tuition fees for primary and junior secondary schools are covered by the government, so families do not need to pay. This enables more children from poor families to enter school and change their lives.',
      keywords: ['nine-year compulsory education', 'give access to', 'tuition fees', 'be covered by', 'poor families', 'change their lives'],
      commonErrors: [
        '“九年义务教育”固定译 nine-year compulsory education。',
        '“让……有机会”用 give access to / enable...to，避免 let...have chance 这类松散表达。',
        '“由……承担”用 be covered by the government，注意被动语态。',
        '“改变命运”译 change their lives，比 change destiny 更自然常用。'
      ]
    },
    {
      id: 'c4t04', exam: 'cet4', type: 'cn2en', label: 'CET-4 段落翻译',
      topic: '生态环境 · 垃圾分类',
      source: '近年来，许多城市开始要求居民对生活垃圾进行分类。可回收物、厨余垃圾和其他垃圾必须分开投放。这一举措有助于减少污染，并提高资源的再利用率。公众的环保意识也因此逐步增强。',
      reference: 'In recent years, many cities have begun to require residents to sort household waste. Recyclables, kitchen waste and other waste must be disposed of separately. This measure helps reduce pollution and improves the reuse rate of resources. Public awareness of environmental protection has thus gradually increased.',
      keywords: ['sort household waste', 'recyclables', 'kitchen waste', 'disposed of separately', 'reuse rate', 'environmental protection'],
      commonErrors: [
        '“垃圾分类”译 sort (household) waste，不要写成 garbage classification 虽可接受但 sort 更动词化更活。',
        '“分开投放”用 be disposed of separately，dispose of 为固定搭配。',
        '“再利用率”译 reuse rate，注意 reuse 拼写。',
        '“环保意识”用 awareness of environmental protection，不要漏 of。'
      ]
    },
    {
      id: 'c4t05', exam: 'cet4', type: 'cn2en', label: 'CET-4 段落翻译',
      topic: '科技 · 人工智能',
      source: '人工智能正在改变人们的工作和生活方式。在医疗领域，它可以帮助医生更快地分析影像、发现疾病。在交通领域，自动驾驶技术有望减少交通事故。尽管如此，也有人担心它会影响就业。',
      reference: 'Artificial intelligence is changing the way people work and live. In health care, it can help doctors analyze medical images and detect diseases more quickly. In transport, self-driving technology is expected to reduce traffic accidents. Nevertheless, some people worry that it may affect employment.',
      keywords: ['artificial intelligence', 'medical images', 'detect diseases', 'self-driving', 'is expected to', 'traffic accidents', 'affect employment'],
      commonErrors: [
        '“人工智能”译 artificial intelligence，注意 artificial 拼写。',
        '“帮助医生分析”用 help doctors analyze，help 后接动词原形。',
        '“有望减少”用 is expected to reduce，比 hopes to reduce 客观。',
        '“尽管如此”用 nevertheless / however，引出转折。'
      ]
    },
    {
      id: 'c4t06', exam: 'cet4', type: 'cn2en', label: 'CET-4 段落翻译',
      topic: '节日 · 春节',
      source: '春节是中国最重要的传统节日，通常在农历正月。除夕夜，家人团聚吃年夜饭，并观看春节联欢晚会。孩子们最喜欢收压岁钱，寓意平安与好运。如今，越来越多的人选择旅行过年，但回家团圆的心愿从未改变。',
      reference: 'The Spring Festival is the most important traditional festival in China, usually falling in the first month of the lunar calendar. On New Year\'s Eve, families gather for a reunion dinner and watch the Spring Festival Gala. Children like best to receive lucky money, which stands for peace and good fortune. Today, a growing number of people choose to travel during the festival, but the wish to reunite at home has never changed.',
      keywords: ['the Spring Festival', 'lunar calendar', 'reunion dinner', 'the Spring Festival Gala', 'lucky money', 'stands for', 'good fortune'],
      commonErrors: [
        '“春节”译 the Spring Festival。',
        '“农历正月”用 the first month of the lunar calendar。',
        '“压岁钱”固定译 lucky money（或 red envelope money）。',
        '“寓意”用 stand for / symbolize，which stands for 引导非限定性定语从句。'
      ]
    }
  );

  /* ---------------- CET-4 写作（5 题） ---------------- */
  DB.writings.push(
    {
      id: 'c4w01', genre: '议论文', exam: 'cet4', label: 'CET-4 议论文',
      topic: 'Is it wise to follow fashion blindly?',
      prompt: 'Directions: For this part, you are allowed 30 minutes to write an essay on whether it is wise to follow fashion blindly. You should write at least 120 words but no more than 180 words.',
      framework: [
        '第1段：现象引入 + 立场（盲目追时尚不可取）。',
        '第2段：两个理由——浪费金钱、忽视自身需求；可举买不必要衣物的例子。',
        '第3段：让步（适度打扮无妨）+ 结论（理性消费）。'
      ],
      patterns: [
        '开头：Nowadays, following fashion has become a common phenomenon among young people.',
        '亮观点：From my perspective, chasing fashion blindly is unwise.',
        '理由：To begin with, it wastes money on things we do not need. Furthermore, it makes us ignore our own real needs.',
        '让步：Admittedly, dressing neatly is not a bad thing.',
        '结尾：In conclusion, we should consume rationally instead of following the crowd.'
      ],
      wordRange: [120, 180]
    },
    {
      id: 'c4w02', genre: '应用文', exam: 'cet4', label: 'CET-4 应用文（建议信）',
      topic: 'A Letter Suggesting a Reading Club',
      prompt: 'Directions: Write a letter to your classmate to suggest starting a reading club. You should 1) state the purpose, and 2) describe the plan. Write about 100 words. Do not sign your own name; use "Li Ming".',
      framework: [
        '称呼：Dear Zhang Hua,',
        '第1段：写信目的——提议成立读书会。',
        '第2段：具体计划（每周一次、轮流分享、地点图书馆）。',
        '第3段：期待回复。落款：Yours, Li Ming'
      ],
      patterns: [
        '目的：I am writing to suggest that we start a reading club.',
        '计划：We could meet once a week and take turns to share a book.',
        '地点：The school library would be a quiet place for us.',
        '收尾：I hope you will join me in this plan.'
      ],
      wordRange: [90, 130]
    },
    {
      id: 'c4w03', genre: '议论文', exam: 'cet4', label: 'CET-4 议论文',
      topic: 'Should museums be free to the public?',
      prompt: 'Directions: For this part, you are allowed 30 minutes to write an essay on whether museums should be free to the public. You should write at least 120 words but no more than 180 words.',
      framework: [
        '第1段：引出话题（博物馆免费与否有争议）+ 立场（应免费）。',
        '第2段：理由——普及文化、惠及普通家庭；可对比收费把人挡在门外的弊端。',
        '第3段：让步（运维需资金）+ 建议（政府补贴）。'
      ],
      patterns: [
        '开头：Whether museums should be free is widely discussed.',
        '亮观点：I believe museums ought to be open to the public for free.',
        '理由：Free entry spreads culture and helps ordinary families.',
        '让步：Admittedly, running a museum costs money.',
        '建议：The government should provide more subsidies.'
      ],
      wordRange: [120, 180]
    },
    {
      id: 'c4w04', genre: '图表作文', exam: 'cet4', label: 'CET-4 图表作文',
      topic: 'Student Use of Smartphones on Campus (2021-2025)',
      prompt: 'Directions: Write an essay based on the bar chart below. The chart shows the average daily screen time (hours) of students on campus: 2021: 3.5, 2023: 4.6, 2025: 5.4. You should interpret the chart and give your comments. Write about 120 words.',
      framework: [
        '第1段：概括趋势——屏幕时间逐年上升。',
        '第2段：原因——网课、社交、娱乐增加。',
        '第3段：评论——提醒合理使用、保护视力。'
      ],
      patterns: [
        '描述：As shown in the chart, daily screen time rose from 3.5 to 5.4 hours.',
        '原因：This is mainly because online courses and social apps take more time.',
        '评论：It is wise to use phones in a balanced way and protect our eyes.'
      ],
      wordRange: [110, 160]
    },
    {
      id: 'c4w05', genre: '应用文', exam: 'cet4', label: 'CET-4 应用文（通知）',
      topic: 'A Notice about a Campus Sports Meeting',
      prompt: 'Directions: Write a notice to announce the school sports meeting. You should include the time, place and activities. Write about 100 words. Do not sign your own name; use "The Students\' Union".',
      framework: [
        '标题：NOTICE',
        '第1段：宣布运动会时间地点。',
        '第2段：项目（跑步、跳绳、拔河）+ 报名方式。',
        '第3段：呼吁参与。落款：The Students\' Union'
      ],
      patterns: [
        '宣布：A campus sports meeting will be held next Friday on the playground.',
        '项目：Events include running, rope skipping and tug-of-war.',
        '报名：Those interested may sign up at the office.',
        '呼吁：Everyone is welcome to take part.'
      ],
      wordRange: [90, 130]
    }
  );

  /* ---------------- CET-4 听力（5 篇） ---------------- */
  DB.listenings.push(
    {
      id: 'c4l01', exam: 'cet4', label: 'CET-4 短文听力 · Daily Life',
      title: 'A Healthy Breakfast',
      sentences: [
        { en: 'A healthy breakfast gives you energy for the whole morning.', zh: '一顿健康的早餐为你提供整个上午的能量。' },
        { en: 'Many students skip breakfast because they get up too late.', zh: '许多学生不吃早餐，因为他们起得太晚。' },
        { en: 'A simple meal of eggs, milk and bread is enough to keep you active.', zh: '鸡蛋、牛奶和面包这样简单的餐食，就足以让你保持活力。' },
        { en: 'Try to leave home ten minutes earlier so you have time to eat.', zh: '尽量提前十分钟出门，这样你就有时间吃饭。' },
        { en: 'Your brain works better after a good meal.', zh: '好好吃一顿后，你的大脑运转得更好。' }
      ],
      blanks: [
        { text: 'A healthy breakfast gives you {{energy}} for the whole morning.', answer: 'energy', hint: 'n. 能量' },
        { text: 'Many students {{skip}} breakfast because they get up too late.', answer: 'skip', hint: 'v. 跳过；不吃' },
        { text: 'Your brain works better after a good {{meal}}.', answer: 'meal', hint: 'n. 一餐' }
      ]
    },
    {
      id: 'c4l02', exam: 'cet4', label: 'CET-4 短文听力 · Study',
      title: 'How to Remember New Words',
      sentences: [
        { en: 'Learning new words is easier when you meet them in reading.', zh: '在阅读中遇到生词时，学习它们更容易。' },
        { en: 'Write the word and its example sentence in a small notebook.', zh: '把这个词和它的例句写在一个小笔记本里。' },
        { en: 'Review the list for five minutes before you go to sleep.', zh: '睡前花五分钟复习这张清单。' },
        { en: 'Group similar words together to remember them faster.', zh: '把相似的词归类，能更快记住。' },
        { en: 'In this way, new words become part of your long-term memory.', zh: '这样，新词就会进入你的长期记忆。' }
      ],
      blanks: [
        { text: 'Learning new words is easier when you meet them in {{reading}}.', answer: 'reading', hint: 'n. 阅读' },
        { text: 'Write the word and its {{example}} sentence in a notebook.', answer: 'example', hint: 'n. 例句' },
        { text: 'New words become part of your long-term {{memory}}.', answer: 'memory', hint: 'n. 记忆' }
      ]
    },
    {
      id: 'c4l03', exam: 'cet4', label: 'CET-4 短文听力 · Travel',
      title: 'A Weekend Trip to the Lake',
      sentences: [
        { en: 'We took a bus to the lake early on Saturday morning.', zh: '周六一早我们乘公共汽车去了湖边。' },
        { en: 'The water was so clear that we could see fish swimming.', zh: '湖水清澈，我们能看见鱼在游。' },
        { en: 'Some of us rented bikes and rode along the shore.', zh: '我们中一些人租了自行车，沿湖岸骑行。' },
        { en: 'In the afternoon we had a picnic under a big tree.', zh: '下午我们在一棵大树下野餐。' },
        { en: 'Everyone agreed it was the best trip this month.', zh: '大家都说这是本月最好的一次出游。' }
      ],
      blanks: [
        { text: 'We took a {{bus}} to the lake early on Saturday morning.', answer: 'bus', hint: 'n. 公共汽车' },
        { text: 'The water was so clear that we could see fish {{swimming}}.', answer: 'swimming', hint: 'v. 游泳（现在分词）' },
        { text: 'In the afternoon we had a {{picnic}} under a big tree.', answer: 'picnic', hint: 'n. 野餐' }
      ]
    },
    {
      id: 'c4l04', exam: 'cet4', label: 'CET-4 短文听力 · Environment',
      title: 'Save Electricity at Home',
      sentences: [
        { en: 'Turn off the lights when you leave a room.', zh: '离开房间时关掉灯。' },
        { en: 'Unplug devices that you do not use every day.', zh: '拔掉你每天不用的电器插头。' },
        { en: 'Open the window instead of using the air conditioner.', zh: '开窗，而不是开空调。' },
        { en: 'Small habits like these help lower your bill.', zh: '这样的小习惯有助于降低你的账单。' },
        { en: 'The earth will thank you for saving power.', zh: '地球会感谢你节约用电。' }
      ],
      blanks: [
        { text: 'Turn off the {{lights}} when you leave a room.', answer: 'lights', hint: 'n. 灯（复数）' },
        { text: 'Unplug devices that you do not use every {{day}}.', answer: 'day', hint: 'n. 天' },
        { text: 'Small habits help lower your {{bill}}.', answer: 'bill', hint: 'n. 账单' }
      ]
    },
    {
      id: 'c4l05', exam: 'cet4', label: 'CET-4 短文听力 · Friendship',
      title: 'A Friend in Need',
      sentences: [
        { en: 'Last winter I fell ill and missed two weeks of school.', zh: '去年冬天我生病，缺了两周课。' },
        { en: 'My friend Lisa brought me her notes every evening.', zh: '我的朋友丽莎每天晚上给我送来她的笔记。' },
        { en: 'She also explained the difficult points I could not follow.', zh: '她还讲解了我听不懂的难点。' },
        { en: 'Thanks to her help, I caught up quickly after returning.', zh: '多亏她的帮助，我回来后很快跟上了。' },
        { en: 'A true friend is someone who stays with you in hard times.', zh: '真正的朋友是在困难时陪着你的人。' }
      ],
      blanks: [
        { text: 'Last winter I fell {{ill}} and missed two weeks of school.', answer: 'ill', hint: 'adj. 生病的' },
        { text: 'My friend Lisa brought me her {{notes}} every evening.', answer: 'notes', hint: 'n. 笔记（复数）' },
        { text: 'A true friend stays with you in {{hard}} times.', answer: 'hard', hint: 'adj. 艰难的' }
      ]
    }
  );

})();
