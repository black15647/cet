/* 听力扩充第二批：题型覆盖（CET-4 新闻报道 / 长对话，CET-6 讲座讲话）
 *
 * 目的：让听力练习覆盖四六级全部听力题型，并与正式考试的考查形式一致。
 * 与 bank3.js 一样以 IIFE 追加，不改动原题库文件。
 *
 * 新增字段 questions：与正式考试一致的听力选择题
 *   q        题干（英文，与考场一致）
 *   options  A/B/C/D 四个选项
 *   answer   唯一正确答案
 *   basis    正确依据：为什么答案是它（对应原文哪一句）
 *   analysis 干扰项分析：其余每个选项分别错在哪
 *
 * 语速与声线由 js/listening_meta.js 的 ITEMS 配置，经 tools/gen_audio.py 配音。
 */
(function () {
  DB.listenings.push(

    /* ============ CET-4 新闻报道 ============ */

    {
      id: 'c4n01',
      exam: 'cet4',
      label: 'CET-4 新闻听力 · 城建交通',
      title: 'Subway Line 6 Opens Ahead of Schedule',
      sentences: [
        {
          en: 'A new subway line opened in the city on Monday, three months ahead of schedule.',
          zh: '该市一条新的地铁线路于周一开通，比原计划提前了三个月。'
        },
        {
          en: 'Line 6 runs eighteen kilometres from the northern suburbs to the central business district, with twelve stations along the way.',
          zh: '6 号线全长 18 公里，从北郊通往中央商务区，沿途设 12 座车站。'
        },
        {
          en: 'Officials say the line is expected to carry about two hundred thousand passengers a day and cut average travel time by nearly forty per cent.',
          zh: '官方表示，该线路预计日均客运量约 20 万人次，平均通勤时间将缩短近 40%。'
        },
        {
          en: 'The project began in 2021 and cost about three billion dollars, making it the largest transport investment in the history of the city.',
          zh: '该项目于 2021 年启动，耗资约 30 亿美元，是该市历史上规模最大的交通投资。'
        },
        {
          en: 'During the first week, rides will be free so that residents can try the new service.',
          zh: '开通首周免费乘车，以便市民体验新线路。'
        },
        {
          en: 'The transport department added that a further extension to the airport is under construction and should open in two years.',
          zh: '交通部门补充说，通往机场的延伸段正在建设中，预计两年后开通。'
        },
        {
          en: 'Local business owners near the new stations welcome the change, though some residents have complained about the noise during construction.',
          zh: '新车站附近的商户对此表示欢迎，不过也有居民抱怨施工期间的噪音。'
        }
      ],
      questions: [
        {
          q: 'What is the news report mainly about?',
          options: {
            A: 'The delay of a subway project',
            B: 'The opening of a new subway line',
            C: 'A new airport under construction',
            D: 'The city traffic problems'
          },
          answer: 'B',
          basis: '新闻首句即点明主旨：a new subway line opened ... ahead of schedule；后文围绕线路长度、预计客流、延伸段展开，全篇都服务于「新线开通」这一事件。',
          analysis: {
            A: '与原文相反。新闻说的是提前三个月完工（ahead of schedule），不是延期。',
            C: '以偏概全。机场延伸段仍在建设中（under construction），只是附带信息，不是报道主旨。',
            D: '过于宽泛。新闻聚焦新线开通这一具体事件，并非泛谈城市交通问题。'
          }
        },
        {
          q: 'How many passengers is Line 6 expected to carry each day?',
          options: {
            A: 'About 20,000',
            B: 'About 120,000',
            C: 'About 200,000',
            D: 'About 400,000'
          },
          answer: 'C',
          basis: '原文第三句明确给出：about two hundred thousand passengers a day，即约 20 万人次。',
          analysis: {
            A: '数量级错误，把 two hundred thousand（20 万）听成了 twenty thousand（2 万）。',
            B: '细节混淆，twelve 是车站数量（twelve stations），与客运量无关。',
            D: '无中生有，原文未出现该数字。'
          }
        }
      ],
      blanks: [
        {
          text: 'Line 6 runs {{eighteen}} kilometres from the northern suburbs to the central business district.',
          answer: 'eighteen',
          hint: '线路长度，数字'
        },
        {
          text: 'The line is expected to cut average travel time by nearly {{forty}} per cent.',
          answer: 'forty',
          hint: '时间缩短的比例'
        }
      ]
    },

    {
      id: 'c4n02',
      exam: 'cet4',
      label: 'CET-4 新闻听力 · 生态保护',
      title: 'Wild Giant Panda Numbers Rise',
      sentences: [
        {
          en: 'Scientists have recorded a sharp rise in the number of wild giant pandas, according to a report published on Thursday.',
          zh: '根据周四发布的一份报告，科学家记录到野生大熊猫数量显著增长。'
        },
        {
          en: 'The population has grown from 1,110 in the nineteen eighties to more than 1,800 today.',
          zh: '其种群数量已从二十世纪八十年代的 1110 只增长到如今的 1800 多只。'
        },
        {
          en: 'The survey covered more than two thousand square kilometres of forest across three provinces and took nearly four years to complete.',
          zh: '此次调查覆盖三个省份超过两千平方公里的森林，历时近四年完成。'
        },
        {
          en: 'Teams used camera traps and satellite images instead of counting the animals directly, which the report says gives a more reliable result.',
          zh: '调查队使用红外相机和卫星影像，而非直接清点动物数量，报告称这种方法结果更可靠。'
        },
        {
          en: 'Researchers say the increase is largely the result of better forest protection and stricter hunting laws.',
          zh: '研究人员表示，这一增长主要得益于更完善的森林保护和更严格的狩猎法规。'
        },
        {
          en: 'A giant panda national park has also been established, connecting several reserves that were previously separated by roads and farms.',
          zh: '此外还设立了大熊猫国家公园，把此前被公路和农田分割开的若干保护区连成一片。'
        },
        {
          en: 'However, they warned that climate change could damage the bamboo that pandas depend on for food.',
          zh: '不过他们警告说，气候变化可能破坏大熊猫赖以生存的竹子。'
        },
        {
          en: 'The researchers say the next step is to plant bamboo in the corridors between habitats so that isolated groups can meet and breed.',
          zh: '研究人员表示，下一步是在栖息地之间的廊道种植竹子，使彼此隔离的种群能够相遇繁衍。'
        }
      ],
      questions: [
        {
          q: 'What does the report say about wild giant pandas?',
          options: {
            A: 'Their population has increased',
            B: 'They are moving to new forests',
            C: 'Their food supply has improved',
            D: 'They are still in great danger'
          },
          answer: 'A',
          basis: '首句 a sharp rise in the number of wild giant pandas 即为核心信息，第二句用具体数据（1,110 → 1,800）印证数量增长。',
          analysis: {
            B: '无中生有，原文未提及大熊猫迁移到新林区。',
            C: '与结尾相反。气候变化可能破坏竹子（damage the bamboo），食物供应是潜在威胁而非已改善。',
            D: '偷换概念。熊猫仍属濒危，但本报道的重点是数量回升，且这一表述并非报道给出的信息。'
          }
        },
        {
          q: 'What threat do the researchers mention?',
          options: {
            A: 'Illegal hunting',
            B: 'Climate change',
            C: 'Forest fires',
            D: 'Disease'
          },
          answer: 'B',
          basis: '末句明确警告：climate change could damage the bamboo that pandas depend on for food。',
          analysis: {
            A: '时态与逻辑混淆。更严格的狩猎法规（stricter hunting laws）是数量回升的原因，不是当前提到的威胁。',
            C: '无中生有，原文未提及森林火灾。',
            D: '无中生有，原文未提及疾病。'
          }
        }
      ],
      blanks: [
        {
          text: 'The population has grown from 1,110 in the {{nineteen}} eighties to more than 1,800 today.',
          answer: 'nineteen',
          hint: '年代，二十世纪八十年代'
        },
        {
          text: 'The increase is largely the result of better forest protection and stricter hunting {{laws}}.',
          answer: 'laws',
          hint: '更严格的狩猎什么'
        }
      ]
    },

    {
      id: 'c4n03',
      exam: 'cet4',
      label: 'CET-4 新闻听力 · 科技环保',
      title: 'Tech Company to Use Only Renewable Energy',
      sentences: [
        {
          en: 'A technology company announced on Wednesday that it will power all of its data centres with renewable energy by 2030.',
          zh: '一家科技公司于周三宣布，将在 2030 年前让其所有数据中心使用可再生能源供电。'
        },
        {
          en: 'The company says it has already reached sixty per cent and plans to build two large solar farms in the southwest.',
          zh: '该公司表示目前这一比例已达 60%，并计划在西南部建设两座大型太阳能发电场。'
        },
        {
          en: 'Experts say the move could push other technology firms to follow, since data centres use huge amounts of electricity.',
          zh: '专家表示，由于数据中心耗电量巨大，此举可能促使其他科技公司效仿。'
        },
        {
          en: 'The two solar farms are expected to produce about nine hundred megawatts, enough to supply roughly half of the electricity the company needs.',
          zh: '两座太阳能发电场预计装机约 900 兆瓦，足以供应该公司约一半的用电需求。'
        },
        {
          en: 'The remainder will come from wind power under long-term contracts signed with suppliers in the north of the country.',
          zh: '其余部分将通过与北部供应商签订的长期风电合同获得。'
        },
        {
          en: 'The company added that the change will cost about four hundred million dollars but is expected to save money in the long run.',
          zh: '该公司补充道，这一改造将耗资约 4 亿美元，但从长远看有望省钱。'
        },
        {
          en: 'Environmental groups welcomed the announcement but said the target should be brought forward, arguing that 2030 is too late given the pace of climate change.',
          zh: '环保组织对这一宣布表示欢迎，但认为目标日期应该提前，理由是考虑到气候变化的速度，2030 年太晚了。'
        }
      ],
      questions: [
        {
          q: 'What has the company announced?',
          options: {
            A: 'It will close its data centres',
            B: 'It will use only renewable energy by 2030',
            C: 'It will build solar farms this year',
            D: 'It will cut electricity use by half'
          },
          answer: 'B',
          basis: '首句即为公告内容：power all of its data centres with renewable energy by 2030。',
          analysis: {
            A: '无中生有。公司是改造能源供给，不是关闭数据中心。',
            C: '时态与范围混淆。太阳能发电场只是 plans to build（计划建设），原文未说今年建成。',
            D: '偷换概念。原文是改用可再生能源，并未承诺减少一半用电量。'
          }
        },
        {
          q: 'What do experts say about the move?',
          options: {
            A: 'It is too expensive',
            B: 'It may influence other companies',
            C: 'It will reduce electricity use',
            D: 'It should have been done earlier'
          },
          answer: 'B',
          basis: '第三句：the move could push other technology firms to follow，即可能带动其他公司跟进。',
          analysis: {
            A: '与末句相反。虽然前期投入约 4 亿美元，但从长远看是省钱的（save money in the long run）。',
            C: '概念混淆。改用清洁电力不等于减少用电量；原文说数据中心耗电巨大，是在解释此举的影响力。',
            D: '无中生有，专家并未评价行动时机。'
          }
        },
        {
          q: 'What do environmental groups think about the plan?',
          options: {
            A: 'It should be carried out sooner',
            B: 'It is too expensive to be realistic',
            C: 'It will damage the company profits',
            D: 'It sets a bad example for others'
          },
          answer: 'A',
          basis: '末句：environmental groups welcomed the announcement but said the target should be brought forward, arguing that 2030 is too late，即认为目标年份应当提前。',
          analysis: {
            B: '张冠李戴。公司自己说明长期会省钱（save money in the long run），环保组织并未质疑成本可行性。',
            C: '无中生有，环保组织未提及会损害公司利润。',
            D: '与原文相反，环保组织是欢迎这一宣布的（welcomed the announcement）。'
          }
        }
      ],
      blanks: [
        {
          text: 'The company will power all of its data centres with renewable energy by {{2030}}.',
          answer: '2030',
          hint: '目标年份'
        },
        {
          text: 'It has already reached {{sixty}} per cent and plans to build two large solar farms.',
          answer: 'sixty',
          hint: '当前已实现的比例'
        }
      ]
    },

    /* ============ CET-4 长对话 ============ */

    {
      id: 'c4c01',
      exam: 'cet4',
      label: 'CET-4 长对话 · 校园服务',
      title: 'Asking About Library Holiday Hours',
      sentences: [
        {
          en: 'Excuse me, I would like to know the opening hours during the summer holidays.',
          zh: '打扰一下，我想了解一下暑假期间的开放时间。'
        },
        {
          en: 'We are open from nine to five on weekdays, but we close at noon on Saturdays and we are closed on Sundays.',
          zh: '工作日是九点到五点，但周六中午就关门，周日全天闭馆。'
        },
        {
          en: 'That is shorter than I expected. Can I still borrow books on Saturday mornings?',
          zh: '比我想的要短。周六上午还能借书吗？'
        },
        {
          en: 'Yes, borrowing is available whenever we are open. You just need your student card.',
          zh: '可以的，开放时间都能借书。你只需要带上学生证。'
        },
        {
          en: 'Good. How many books can I take out at one time?',
          zh: '好的。我一次能借多少本书？'
        },
        {
          en: 'Undergraduate students may borrow up to eight books for three weeks.',
          zh: '本科生最多可借 8 本书，借期三周。'
        },
        {
          en: 'What if I need them for longer?',
          zh: '如果我需要借更久呢？'
        },
        {
          en: 'You can renew them twice online, but only if nobody else has reserved them.',
          zh: '你可以在网上续借两次，但前提是没有其他读者预约。'
        },
        {
          en: 'I see. And what happens if I return a book late?',
          zh: '明白了。那如果还书晚了会怎样？'
        },
        {
          en: 'There is a fine of fifty cents a day for each book, up to a maximum of ten dollars.',
          zh: '每本书每天罚款 50 美分，上限为 10 美元。'
        },
        {
          en: 'That is reasonable. By the way, does the library lend out laptops during the holidays?',
          zh: '还算合理。顺便问一下，假期期间图书馆外借笔记本电脑吗？'
        },
        {
          en: 'Yes, but only for use inside the building. You can borrow one for four hours at the front desk.',
          zh: '外借，但只能在馆内使用。你可以在前台借一台，时限四小时。'
        },
        {
          en: 'Can I book a group study room as well? We have a presentation next month.',
          zh: '我还能预订小组学习室吗？我们下个月有个展示。'
        },
        {
          en: 'Group rooms can be reserved online up to seven days in advance, and each session is limited to two hours.',
          zh: '小组学习室可在线预订，最多提前七天，每次使用限时两小时。'
        },
        {
          en: 'And are e-books affected by the holiday hours?',
          zh: '那电子书也受假期开放时间影响吗？'
        },
        {
          en: 'No, the digital collection is available twenty-four hours a day, so you can download them at any time.',
          zh: '不受影响，数字资源全天二十四小时开放，你随时都能下载。'
        },
        {
          en: 'That is very helpful. Thank you for your time.',
          zh: '这些信息很有用，谢谢您抽出时间。'
        },
        {
          en: 'You are welcome. Have a good summer.',
          zh: '不客气，祝你暑假愉快。'
        }
      ],
      questions: [
        {
          q: 'What are the library opening hours on Saturdays?',
          options: {
            A: 'From nine to five',
            B: 'From nine to noon',
            C: 'From noon to five',
            D: 'Closed all day'
          },
          answer: 'B',
          basis: '女士说明工作日九点到五点，随后用 but 转折：we close at noon on Saturdays，因此周六为九点到中午。',
          analysis: {
            A: '张冠李戴。九点到五点是工作日（on weekdays）的时间。',
            C: '时间倒置。中午（noon）是停止营业的时间，不是开始营业的时间。',
            D: '与周日混淆。全天闭馆的是周日（closed on Sundays）。'
          }
        },
        {
          q: 'What does the man need in order to borrow books?',
          options: {
            A: 'A completed application form',
            B: 'His student card',
            C: 'A note from his teacher',
            D: 'A cash deposit'
          },
          answer: 'B',
          basis: '第四句明确说明：You just need your student card.',
          analysis: {
            A: '无中生有，对话未提及申请表。',
            C: '无中生有，对话未提及教师证明。',
            D: '无中生有，对话未提及押金。'
          }
        },
        {
          q: 'How long can undergraduate students keep the books?',
          options: {
            A: 'One week',
            B: 'Two weeks',
            C: 'Three weeks',
            D: 'Eight weeks'
          },
          answer: 'C',
          basis: '第六句：Undergraduate students may borrow up to eight books for three weeks，借期为三周。',
          analysis: {
            A: '无中生有。',
            B: '偷换概念。twice（两次）是续借次数，不是借阅周数。',
            D: '数字混淆。eight 是册数上限（up to eight books），不是周数。'
          }
        },
        {
          q: 'What does the woman say about returning books late?',
          options: {
            A: 'Borrowing rights will be stopped',
            B: 'There is a fine for each day',
            C: 'The student must renew the book online',
            D: 'The book has to be replaced'
          },
          answer: 'B',
          basis: '末句：There is a fine of fifty cents a day for each book，即按天计罚。',
          analysis: {
            A: '无中生有。罚款不等于取消借阅资格，对话未提及停用。',
            C: '话题混淆。网上续借是延长借期的办法，与逾期罚款是两回事。',
            D: '无中生有，对话未要求赔书。'
          }
        }
      ],
      blanks: [
        {
          text: 'Undergraduate students may borrow up to {{eight}} books for three weeks.',
          answer: 'eight',
          hint: '可借册数上限'
        },
        {
          text: 'There is a fine of fifty cents a {{day}} for each book.',
          answer: 'day',
          hint: '罚款的计费单位'
        }
      ]
    },

    {
      id: 'c4c02',
      exam: 'cet4',
      label: 'CET-4 长对话 · 兼职求职',
      title: 'Looking for a Part-time Job on Campus',
      sentences: [
        {
          en: 'Good morning. I am looking for a part-time job on campus. Do I need to make an appointment?',
          zh: '早上好。我想找一份校园兼职，需要预约吗？'
        },
        {
          en: 'No, walk-ins are fine. What kind of work are you hoping to find?',
          zh: '不用，直接来就行。你希望找哪类工作？'
        },
        {
          en: 'Something in the library or the student centre, preferably in the evenings.',
          zh: '图书馆或学生中心的工作，最好是晚上的。'
        },
        {
          en: 'We have two positions at the moment. One is shelving books, Monday and Wednesday evenings, six to nine.',
          zh: '目前有两个岗位。一个是整理图书，周一和周三晚上六点到九点。'
        },
        {
          en: 'That sounds possible. What is the other one?',
          zh: '听起来可以。另一个是什么？'
        },
        {
          en: 'It is at the sports centre reception, but it starts at six in the morning, three days a week.',
          zh: '是体育中心的前台，但早上六点就要开始，每周三天。'
        },
        {
          en: 'That is a bit too early for me. Do the jobs pay the same?',
          zh: '那对我来说有点太早了。两份工作报酬一样吗？'
        },
        {
          en: 'The library job pays twelve dollars an hour, and the sports centre pays fourteen because of the early start.',
          zh: '图书馆的岗位时薪 12 美元，体育中心因为要起早，时薪 14 美元。'
        },
        {
          en: 'I see. When can I start if I take the library job?',
          zh: '明白了。如果我选图书馆的工作，什么时候能开始？'
        },
        {
          en: 'Training is next Monday at five, and you would start working the following week.',
          zh: '培训在下周一五点，你在再下一周正式上岗。'
        },
        {
          en: 'What are the requirements for the library position?',
          zh: '图书馆这个岗位有什么要求吗？'
        },
        {
          en: 'No previous experience is needed, but you should be able to lift boxes of books and work quietly for long periods.',
          zh: '不需要以往经验，但你需要能搬运书箱，并能长时间安静工作。'
        },
        {
          en: 'How many hours a week would that be?',
          zh: '那一周要工作多少小时？'
        },
        {
          en: 'Six hours, since it is two evenings of three hours each. You can ask for more after the first month if you want.',
          zh: '六小时，因为是两个晚上、每晚三小时。一个月后如果你愿意，可以申请增加。'
        },
        {
          en: 'And how do I apply? Is there a form?',
          zh: '那我要怎么申请？有表格吗？'
        },
        {
          en: 'Fill in this form and leave it with me today. We usually interview candidates on Friday and let them know by email.',
          zh: '填好这张表，今天交给我就行。我们通常在周五面试，之后用邮件通知结果。'
        },
        {
          en: 'That all sounds fine. I will take the library job, thank you.',
          zh: '听起来都不错。我就选图书馆这个岗位吧，谢谢您。'
        },
        {
          en: 'Good. Do not forget the training next Monday at five.',
          zh: '好的。别忘了下周一五点的培训。'
        }
      ],
      questions: [
        {
          q: 'Why does the woman come to the office?',
          options: {
            A: 'To make an appointment',
            B: 'To look for a part-time job',
            C: 'To ask about library opening hours',
            D: 'To apply for a sports programme'
          },
          answer: 'B',
          basis: '首句直接说明来意：I am looking for a part-time job on campus。',
          analysis: {
            A: '因果倒置。她问是否需要预约（Do I need to make an appointment），而不是专程来预约。',
            C: '地点混淆。图书馆是她希望工作的地点之一，此行目的不是询问开放时间。',
            D: '无中生有。体育中心是岗位地点，对话中并无体育项目报名一事。'
          }
        },
        {
          q: 'What kind of schedule does the woman prefer?',
          options: {
            A: 'Early mornings',
            B: 'Evenings',
            C: 'Weekends',
            D: 'Full-time hours'
          },
          answer: 'B',
          basis: '第三句：preferably in the evenings，明确表示希望安排在晚上。',
          analysis: {
            A: '与态度相反。早上六点她明确说 a bit too early for me（对我来说太早了）。',
            C: '无中生有，对话未提及周末。',
            D: '程度夸大。她找的是 part-time job（兼职），不是全职。'
          }
        },
        {
          q: 'How much does the sports centre job pay?',
          options: {
            A: 'Twelve dollars an hour',
            B: 'Fourteen dollars an hour',
            C: 'Six dollars an hour',
            D: 'The same as the library job'
          },
          answer: 'B',
          basis: '第八句：the sports centre pays fourteen because of the early start，时薪 14 美元。',
          analysis: {
            A: '张冠李戴。12 美元是图书馆岗位的时薪。',
            C: '数字混淆。six 是上班时间（starts at six in the morning），不是时薪。',
            D: '与原文相反。女士专门问了是否同酬（Do the jobs pay the same），回答是两者不同。'
          }
        },
        {
          q: 'When would the woman begin working if she takes the library job?',
          options: {
            A: 'Next Monday',
            B: 'The week after next',
            C: 'This evening',
            D: 'In three weeks'
          },
          answer: 'B',
          basis: '末句：Training is next Monday ... and you would start working the following week。下周一是培训，正式上岗在再下一周。',
          analysis: {
            A: '时间错位。下周一是培训（training），不是开始工作的时间，这是本题最主要的干扰项。',
            C: '无中生有。',
            D: '数字混淆。three days a week 是体育中心岗位的频率，与入职时间无关。'
          }
        }
      ],
      blanks: [
        {
          text: 'The library job pays {{twelve}} dollars an hour.',
          answer: 'twelve',
          hint: '图书馆岗位时薪'
        },
        {
          text: 'Training is next {{Monday}} at five, and you would start working the following week.',
          answer: 'Monday',
          hint: '培训的星期'
        }
      ]
    },

    /* ============ CET-6 讲座 / 讲话 ============ */

    {
      id: 'c6l01',
      exam: 'cet6',
      label: 'CET-6 讲座听力 · 心理学',
      title: 'Why We Procrastinate',
      sentences: [
        {
          en: 'Good morning. Today I want to talk about procrastination, and why intelligent people are often the worst offenders.',
          zh: '早上好。今天我想谈谈拖延症，以及为什么聪明人常常拖延得最厉害。'
        },
        {
          en: 'For a long time psychologists assumed that putting things off was mainly a problem of poor time management.',
          zh: '长期以来，心理学家一直认为拖延主要是时间管理不善的问题。'
        },
        {
          en: 'If that were true, then a better planner or a longer list of tasks should solve the problem, and most of you know from experience that it does not.',
          zh: '倘若果真如此，那么换个更好的日程本或列更长的任务清单就该解决问题，而在座各位凭经验都知道并没有。'
        },
        {
          en: 'More recent research suggests something different: procrastination is essentially a failure of mood regulation, not of scheduling.',
          zh: '较新的研究则给出了不同解释：拖延本质上是情绪调节的失败，而非日程安排的问题。'
        },
        {
          en: 'When we delay a task, we are usually not avoiding the task itself. We are avoiding the unpleasant feeling that the task produces.',
          zh: '我们拖延时，逃避的往往不是任务本身，而是任务带来的那种不舒服的感受。'
        },
        {
          en: 'A difficult report makes us feel incompetent; a difficult conversation makes us feel anxious. Putting the task off removes that feeling immediately, which is why it is so tempting.',
          zh: '一份难写的报告让我们自觉无能，一场难谈的对话令我们焦虑。推迟任务能立刻消除这种感受，这正是拖延如此诱人的原因。'
        },
        {
          en: 'Unfortunately, the relief is temporary. The feeling returns, usually stronger, and now it is joined by guilt.',
          zh: '遗憾的是，这种解脱只是暂时的。那种感受会卷土重来，往往更强烈，还多添了一份内疚。'
        },
        {
          en: 'In one study, students who were taught to forgive themselves for procrastinating before an exam actually procrastinated less before the next one.',
          zh: '在一项研究中，被引导去原谅自己考前拖延的学生，在下次考前确实拖延得更少了。'
        },
        {
          en: 'The researchers compared them with a second group who received no such instruction, and the difference was still measurable several weeks later.',
          zh: '研究者将他们与未接受此类引导的第二组作对比，数周后差异依然可测。'
        },
        {
          en: 'This is important because guilt tends to make people avoid the task even more, which creates a cycle that is difficult to break.',
          zh: '这一点很重要，因为内疚往往会让人更加逃避任务，从而形成一个难以打破的循环。'
        },
        {
          en: 'A second line of research looks at how tasks are framed.',
          zh: '第二条研究线索关注的是任务如何被表述。'
        },
        {
          en: 'When students were asked to plan a project in detail, they began later than those who were asked only to decide where and when they would take the first step.',
          zh: '当学生被要求详细规划一个项目时，他们动手的时间反而晚于那些只需决定何时何地迈出第一步的学生。'
        },
        {
          en: 'The reason seems to be that detailed planning exposes how much work lies ahead, which brings the unpleasant feeling forward.',
          zh: '原因似乎在于，详细规划会暴露出前方还有多少工作量，从而把那种不适感提前引了过来。'
        },
        {
          en: 'A third finding concerns the environment rather than the individual.',
          zh: '第三个发现关乎环境，而非个人。'
        },
        {
          en: 'People who removed distractions from their workspace, or who worked in a library rather than at home, reported starting sooner without trying harder.',
          zh: '那些清除了工作区干扰、或在图书馆而非家中工作的人表示，他们并未更费力，却开始得更早。'
        },
        {
          en: 'This suggests that willpower is overrated, and that changing the situation is often more effective than changing your mood.',
          zh: '这说明意志力的作用被高估了：改变处境，往往比改变情绪更有效。'
        },
        {
          en: 'So what does this mean in practice?',
          zh: '那么这在实际中意味着什么？'
        },
        {
          en: 'The practical lesson is simple: instead of waiting to feel motivated, break the task into the smallest possible first step and begin.',
          zh: '实践中的启示很简单：与其等有了动力再开始，不如把任务拆成尽可能小的第一步，然后动手。'
        },
        {
          en: 'Do not wait for confidence. In this area, action comes first and motivation follows, not the other way round.',
          zh: '不要等有了自信。在这个问题上，是行动在先、动力在后，而非相反。'
        },
        {
          en: 'And when you do fail, which you will, treat it as information rather than as evidence about your character.',
          zh: '而当你确实失败时——你也一定会失败——把它当作一种信息，而不是对你品格的判定。'
        }
      ],
      questions: [
        {
          q: 'What is the lecture mainly about?',
          options: {
            A: 'How to manage time more effectively',
            B: 'The real cause of procrastination',
            C: 'Why students fail examinations',
            D: 'Methods of punishing procrastinators'
          },
          answer: 'B',
          basis: '讲座先否定了旧假设（时间管理不善），再给出新解释——本质是情绪调节失败（a failure of mood regulation），随后用研究证据与该结论的应用展开，全篇围绕拖延的真正成因。',
          analysis: {
            A: '这是被明确否定的旧观点（For a long time psychologists assumed ... poor time management）。',
            C: '以偏概全。考试只是研究中的一个场景，不是讲座主题。',
            D: '无中生有。讲座提到的是自我原谅（forgive themselves），而非惩罚。'
          }
        },
        {
          q: 'What did the study mentioned by the speaker find?',
          options: {
            A: 'Guilt helps students work harder',
            B: 'Self-forgiveness reduced later procrastination',
            C: 'Scheduling applications solved the problem',
            D: 'Intelligent students procrastinate the most'
          },
          answer: 'B',
          basis: '讲座中提到：students who were taught to forgive themselves... actually procrastinated less before the next one，即学会自我原谅的学生后续拖延减少。',
          analysis: {
            A: '与原文相反。内疚会让人更想逃避任务（guilt tends to make people avoid the task even more）。',
            C: '无中生有，讲座未提及任何日程类应用。',
            D: '张冠李戴。这是开场的一个现象描述，并非该研究的发现。'
          }
        },
        {
          q: 'What practical advice does the speaker give?',
          options: {
            A: 'Wait until you feel motivated',
            B: 'Break the task into a very small first step',
            C: 'Punish yourself for any delay',
            D: 'Make a detailed weekly schedule'
          },
          answer: 'B',
          basis: '讲座在给出实践建议时明确说：break the task into the smallest possible first step and begin。',
          analysis: {
            A: '与原文相反。讲座说的是 instead of waiting to feel motivated（不要等有动力）。',
            C: '无中生有，且与讲座强调的自我原谅相悖。',
            D: '无中生有。讲座恰恰否定了把拖延归因于日程安排的思路。'
          }
        }
      ],
      blanks: [
        {
          text: 'Procrastination is essentially a failure of mood {{regulation}}, not of scheduling.',
          answer: 'regulation',
          hint: '拖延本质上是某种调节的失败'
        },
        {
          text: 'Break the task into the smallest possible first {{step}} and begin.',
          answer: 'step',
          hint: '把任务拆成最小的第一个什么'
        }
      ]
    },

    {
      id: 'c6l02',
      exam: 'cet6',
      label: 'CET-6 讲座听力 · 认知科学',
      title: 'Sleep and Memory',
      sentences: [
        {
          en: 'Good afternoon. Today we will look at the relationship between sleep and memory.',
          zh: '下午好。今天我们要探讨的是睡眠与记忆之间的关系。'
        },
        {
          en: 'It has been known for decades that people who sleep after learning remember more than those who stay awake.',
          zh: '几十年来人们已经知道，学习后入睡的人比保持清醒的人记住得更多。'
        },
        {
          en: 'What is newer is the discovery that different sleep stages appear to protect different kinds of memory.',
          zh: '较新的发现是：不同的睡眠阶段似乎在保护不同类型的记忆。'
        },
        {
          en: 'Let me begin by describing what happens after we fall asleep.',
          zh: '我先讲讲入睡之后发生了什么。'
        },
        {
          en: 'Sleep is not a single state. Over the course of a night we move through several cycles, each lasting roughly ninety minutes.',
          zh: '睡眠并非单一状态。一夜之间我们会经历若干个周期，每个周期约九十分钟。'
        },
        {
          en: 'Early in the night, deep slow-wave sleep dominates; later, rapid eye movement sleep becomes longer and more frequent.',
          zh: '前半夜以深度慢波睡眠为主，后半夜快速眼动睡眠则变得更长、更频繁。'
        },
        {
          en: 'Deep slow-wave sleep seems to be especially important for factual knowledge, such as vocabulary or historical dates.',
          zh: '深度慢波睡眠似乎对事实性知识尤为重要，比如词汇或历史年代。'
        },
        {
          en: 'In one experiment, participants who learned a list of words and then slept recalled about forty per cent more the following morning than a group who stayed awake for the same period.',
          zh: '在一项实验中，学习词表后入睡的受试者，次日早晨的回忆量比同样时长内保持清醒的对照组高出约 40%。'
        },
        {
          en: 'Rapid eye movement sleep, on the other hand, appears to support skills and emotional memory.',
          zh: '另一方面，快速眼动睡眠似乎有助于技能记忆和情绪记忆。'
        },
        {
          en: 'Studies of piano practice have found that performance improves overnight even without further practice, provided the learner has had enough of this stage.',
          zh: '针对钢琴练习的研究发现，只要这一睡眠阶段充足，即便不再加练，演奏表现也会在一夜之间提高。'
        },
        {
          en: 'This is why sleeping less in order to study more is usually a bad trade.',
          zh: '这就是为什么少睡一点、多学一点通常是一笔亏本买卖。'
        },
        {
          en: 'The material you revise while losing sleep is precisely the material that sleep would have helped you keep.',
          zh: '你在缺觉状态下复习的内容，恰恰就是本该由睡眠帮你巩固的内容。'
        },
        {
          en: 'A third finding concerns timing rather than duration.',
          zh: '第三个发现关乎时机，而非时长。'
        },
        {
          en: 'Students who studied in the evening and slept afterwards performed better than those who studied in the morning and were tested the same evening.',
          zh: '晚上学习后入睡的学生，表现优于早上学习、当天傍晚接受测试的学生。'
        },
        {
          en: 'The implication is that the interval between learning and sleeping should be kept short, ideally no more than a few hours.',
          zh: '这意味着学习与睡眠之间的间隔应当尽量短，理想状态下不超过几个小时。'
        },
        {
          en: 'There is one important qualification I should mention.',
          zh: '有一点重要的限定条件我需要说明。'
        },
        {
          en: 'Most of these studies measure retention after a single night, so they tell us relatively little about how much is remembered months later.',
          zh: '这些研究大多只测量一夜之后的记忆保持情况，因此对几个月后还记得多少，它们能告诉我们的相当有限。'
        },
        {
          en: 'Sleep appears to protect memory, but it does not replace the need to review material over time.',
          zh: '睡眠似乎能保护记忆，但它并不能取代长期复习的必要性。'
        },
        {
          en: 'The practical implication is clear: if you are preparing for an examination, cutting sleep to gain study time is likely to cost you more than it gains.',
          zh: '其实践启示很明确：如果你正在备考，牺牲睡眠来换取学习时间，很可能是得不偿失的。'
        },
        {
          en: 'A short review in the evening, followed by a full night of sleep, will almost always serve you better than an extra three hours of anxious revision.',
          zh: '晚上简短复习后再睡个整觉，几乎总比额外焦虑地熬夜三小时更有用。'
        }
      ],
      questions: [
        {
          q: 'What is the main topic of the lecture?',
          options: {
            A: 'How to fall asleep faster',
            B: 'The link between sleep and memory',
            C: 'The stages of human development',
            D: 'Ways to prepare for examinations'
          },
          answer: 'B',
          basis: '首句即点题：the relationship between sleep and memory；随后分述不同睡眠阶段分别保护哪类记忆，并给出备考建议，全篇围绕这一关系展开。',
          analysis: {
            A: '无中生有，讲座未讨论入睡方法。',
            C: '概念混淆。讲座讲的是睡眠阶段（sleep stages），不是人生发展阶段。',
            D: '以偏概全。末句的备考建议只是结论的应用，不是讲座主题。'
          }
        },
        {
          q: 'According to the lecture, what does deep slow-wave sleep support?',
          options: {
            A: 'Emotional memory',
            B: 'Physical skills',
            C: 'Factual knowledge',
            D: 'Language fluency'
          },
          answer: 'C',
          basis: '讲座中指出：Deep slow-wave sleep seems to be especially important for factual knowledge, such as vocabulary or historical dates。',
          analysis: {
            A: '张冠李戴。情绪记忆属于快速眼动睡眠的作用（skills and emotional memory）。',
            B: '张冠李戴。技能记忆同样对应快速眼动睡眠。',
            D: '以偏概全。词汇（vocabulary）只是 factual knowledge 举出的一个例子，不能涵盖全部。'
          }
        },
        {
          q: 'What does the speaker suggest students should not do?',
          options: {
            A: 'Study vocabulary before sleeping',
            B: 'Sleep after learning',
            C: 'Cut sleep to gain study time',
            D: 'Review historical dates'
          },
          answer: 'C',
          basis: '讲座在结论部分指出：cutting sleep to gain study time is likely to cost you more than it gains，明确指出牺牲睡眠得不偿失。',
          analysis: {
            A: '无中生有，讲座未对此提出否定。',
            B: '与原文相反。学习后入睡记得更多（remember more），是被肯定的做法。',
            D: '无中生有，历史年代只是事实性知识的例子。'
          }
        },
        {
          q: 'According to the lecture, how soon after learning should a person sleep?',
          options: {
            A: 'As soon as possible, ideally within a few hours',
            B: 'After exactly twenty-four hours',
            C: 'Only after several nights have passed',
            D: 'It makes no difference at all'
          },
          answer: 'A',
          basis: '原文指出：the interval between learning and sleeping should be kept short, ideally no more than a few hours，即学习与睡眠的间隔应控制在几小时之内。',
          analysis: {
            B: '无中生有。讲座并未给出「正好 24 小时」这类具体数字。',
            C: '与原文相反。间隔应当尽量短，而不是拖上几晚。',
            D: '与原文相反。讲座专门把时机（timing）单列出来讨论，说明它确实有影响。'
          }
        }
      ],
      blanks: [
        {
          text: 'Deep slow-wave sleep is especially important for {{factual}} knowledge.',
          answer: 'factual',
          hint: '哪一类知识'
        },
        {
          text: 'Rapid eye movement sleep appears to support {{skills}} and emotional memory.',
          answer: 'skills',
          hint: '与情绪记忆并列的另一类'
        }
      ]
    },

    {
      id: 'c6c01',
      exam: 'cet6',
      label: 'CET-6 长对话 · 学术讨论',
      title: 'Discussing a Research Proposal',
      sentences: [
        {
          en: 'Professor Hayes, do you have a moment? I would like to discuss my research proposal with you.',
          zh: '海斯教授，您有空吗？我想和您讨论一下我的研究计划。'
        },
        {
          en: 'Of course, Anna. I read the first draft over the weekend. The topic is interesting, but the method needs more thought.',
          zh: '当然，安娜。我周末看了初稿。选题很有意思，但研究方法还需要再斟酌。'
        },
        {
          en: 'I was hoping to interview about thirty undergraduate students. Would that be enough?',
          zh: '我计划访谈大约 30 名本科生。这样够吗？'
        },
        {
          en: 'For a study of this size it is a reasonable start, but the sample may be too narrow to support a general claim.',
          zh: '对这种规模的研究来说，这是个合理的起点，但样本可能过于局限，不足以支持一个普遍性结论。'
        },
        {
          en: 'So I should include students from other universities as well?',
          zh: '那我是不是也应该纳入其他学校的学生？'
        },
        {
          en: 'That would help. More importantly, you need to explain how you will select them, otherwise the results could be biased.',
          zh: '那会有帮助。更重要的是，你需要说明抽样方式，否则结果可能存在偏差。'
        },
        {
          en: 'I see. Should I also reduce the number of research questions? I have five at the moment.',
          zh: '我明白了。研究问题是不是也该减少一些？目前有五个。'
        },
        {
          en: 'Five is ambitious for a one-semester project. I would suggest focusing on two and doing them well.',
          zh: '对于一学期的项目来说，五个太贪多了。我建议聚焦其中两个，把它们做扎实。'
        },
        {
          en: 'That makes sense. When would you need the revised proposal?',
          zh: '有道理。您什么时候需要修改后的计划？'
        },
        {
          en: 'Send it to me by the end of next week. After that we can talk about applying for funding.',
          zh: '下周末之前发给我。之后我们再谈申请经费的事。'
        },
        {
          en: 'Should I include a separate section on previous studies?',
          zh: '我需要单独设一个既往研究的章节吗？'
        },
        {
          en: 'Yes, but keep it short. Two pages is enough to show you know the field, and it will make your own contribution clearer.',
          zh: '需要，但要精简。两页足以说明你了解该领域，也能让你自己的贡献更清楚。'
        },
        {
          en: 'I have found about forty papers, but I am not sure which ones matter most.',
          zh: '我找到了大约四十篇论文，但不确定哪些最重要。'
        },
        {
          en: 'Start with the five or six that are cited most often. If two papers reach opposite conclusions, mention both and explain why.',
          zh: '从被引次数最多的五六篇开始。如果有两篇结论相反，两篇都要提到，并解释原因。'
        },
        {
          en: 'That is helpful. How much time should I allow for the interviews themselves?',
          zh: '很有帮助。访谈本身我应该预留多少时间？'
        },
        {
          en: 'Give yourself at least three weeks. People cancel, and transcribing what they say always takes longer than students expect.',
          zh: '至少给自己三周。受访者会临时取消，而且整理录音文字所花的时间总是超出学生预期。'
        },
        {
          en: 'I had not thought about transcription. Should I record them?',
          zh: '我没考虑到转写这回事。需要录音吗？'
        },
        {
          en: 'You may record them, but you must ask each person for written permission first. That is a requirement, not a choice.',
          zh: '可以录音，但必须先取得每个人的书面许可。这是硬性要求，不是可选项。'
        },
        {
          en: 'Understood. I will prepare a consent form.',
          zh: '明白了，我会准备一份同意书。'
        },
        {
          en: 'Good. Bring the form and your revised questions to our next meeting, and we will go through them together.',
          zh: '好。下次见面时把同意书和修改后的问题一起带来，我们一起过一遍。'
        }
      ],
      questions: [
        {
          q: 'Why does the woman talk to the professor?',
          options: {
            A: 'To hand in her final paper',
            B: 'To discuss her research proposal',
            C: 'To apply for a scholarship',
            D: 'To ask for an extension'
          },
          answer: 'B',
          basis: '首句直接说明来意：I would like to discuss my research proposal with you；教授回应称已看过初稿（read the first draft），全篇围绕如何修改展开。',
          analysis: {
            A: '无中生有。她提交的是研究计划初稿，对话中并未提及期末论文。',
            C: '张冠李戴。申请经费（applying for funding）是末句提到的后续安排，不是此行的目的。',
            D: '无中生有，对话中未出现延期请求。'
          }
        },
        {
          q: 'What does the man say about the woman sample?',
          options: {
            A: 'It is too large to manage',
            B: 'It may be too narrow for a general claim',
            C: 'It should include only undergraduates',
            D: 'It has been carefully selected'
          },
          answer: 'B',
          basis: '第四句明确：the sample may be too narrow to support a general claim。',
          analysis: {
            A: '与原文相反。30 人被称为 reasonable start（合理起点），教授是嫌样本不够广，不是嫌多。',
            C: '与建议相反。教授建议纳入其他学校的学生（include students from other universities）。',
            D: '与原文相反。教授指出必须说明抽样方式，否则结果可能有偏（could be biased）。'
          }
        },
        {
          q: 'What does the man suggest about the research questions?',
          options: {
            A: 'Add more of them',
            B: 'Focus on two of them',
            C: 'Keep all five',
            D: 'Remove them entirely'
          },
          answer: 'B',
          basis: '第八句：Five is ambitious for a one-semester project. I would suggest focusing on two and doing them well。',
          analysis: {
            A: '与原文相反，教授认为五个已经过多。',
            C: '与建议相反，ambitious 在此暗示目标定得过高。',
            D: '程度夸大。教授建议精简聚焦，不是取消研究问题。'
          }
        },
        {
          q: 'What should the woman do by the end of next week?',
          options: {
            A: 'Submit the revised proposal',
            B: 'Apply for research funding',
            C: 'Begin her interviews',
            D: 'Choose a new research topic'
          },
          answer: 'A',
          basis: '末句：Send it to me by the end of next week，其中的 it 指上文的 revised proposal。',
          analysis: {
            B: '时间错位。申请经费是在此之后才谈的事（After that we can talk about ...）。',
            C: '无中生有，对话未提及何时开始访谈。',
            D: '无中生有，选题已获肯定（The topic is interesting），无需更换。'
          }
        }
      ],
      blanks: [
        {
          text: 'I was hoping to interview about {{thirty}} undergraduate students.',
          answer: 'thirty',
          hint: '计划访谈的人数'
        },
        {
          text: 'Send it to me by the end of next {{week}}.',
          answer: 'week',
          hint: '提交的时间单位'
        }
      ]
    }

  );
})();
