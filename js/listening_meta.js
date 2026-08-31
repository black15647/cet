/* 听力配音元数据 —— 题型 / 声线 / 说话人 / 考试指令
 *
 * 设计原则：不修改原有题库文件，仅以映射表补充「配音」所需的信息。
 * 新增一篇听力时，只要在 ITEMS 里加一行配置即可；没配置的会自动按
 * 标题关键字和考试类型推断（见 app.js 的 inferListenMeta）。
 *
 * 声线选用微软 Edge Neural TTS（与 Azure Neural 同源），发音接近
 * 四六级听力播音风格；语速按官方大纲设定：四级约 130wpm、六级约 150wpm。
 */
(function () {
  const LISTEN_META = {
    version: 1,

    /* 声线库：F=女声 M=男声
     * wpm0 = 该声线在 rate=+0% 时的实测自然语速，用于反推 rate 以命中目标语速。
     * 各声线差异很大（Andrew 183wpm、Aria 仅 159wpm），必须逐声线校准，
     * 否则同一 rate 下不同声线的实际快慢会差出一截。
     */
    VOICES: {
      F_NEWS: { id: 'en-US-AriaNeural',     gender: 'F', desc: '女声·新闻播报', wpm0: 159 },
      F_TALK: { id: 'en-US-JennyNeural',    gender: 'F', desc: '女声·自然讲述', wpm0: 163 },
      F_LECT: { id: 'en-US-MichelleNeural', gender: 'F', desc: '女声·学术讲座', wpm0: 167 },
      M_TALK: { id: 'en-US-AndrewNeural',   gender: 'M', desc: '男声·自然对话', wpm0: 183 },
      M_LECT: { id: 'en-US-EricNeural',     gender: 'M', desc: '男声·学术讲座', wpm0: 159 }
    },

    /* 题型配音参数
     * wpm   : 目标语速（词/分钟）
     * gap   : 句间停顿（毫秒），考试连读时用
     * voice : 主声线；altVoice 为对话中的另一方声线
     * mode  : single 单人独白 / dialog 双人对谈
     */
    TYPES: {
      news: {
        label: '新闻听力', wpm: 145, gap: 700,
        voice: 'F_NEWS', mode: 'single'
      },
      conversation: {
        label: '长对话', wpm: 135, gap: 450,
        voice: 'F_TALK', altVoice: 'M_TALK', mode: 'dialog'
      },
      passage: {
        label: '短文听力', wpm: 130, gap: 650,
        voice: 'F_TALK', mode: 'single'
      },
      lecture: {
        label: '讲座听力', wpm: 150, gap: 750,
        voice: 'M_LECT', mode: 'single'
      }
    },

    /* 考试指令：CET 官方 Directions 逐字原文
     * 依据：2025-12、2024-06、2018-06 等多套真题录音文字稿，措辞一致。
     * 注意两点易错处——选项写作 A), B), C) and D)（带括号）；
     * 末句涂卡说明（Then mark the corresponding letter ...）不能省。
     * 六级讲座原文为 "three recordings of lectures or talks followed by three
     * or four questions"，此前误写成 "some questions"，已更正。
     *
     * 说明：这些文本只用于显示与存档；送 TTS 朗读时会由 gen_audio.py 的
     * spoken_text() 把 A), B), C) and D) 改读成 A, B, C and D，
     * 因为真题录音里播音员并不读出括号。
     */
    DIRECTIONS: {
      cet4_news: 'In this section, you will hear three news reports. At the end of each news report, you will hear two or three questions. Both the news report and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.',
      cet4_conv: 'In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.',
      cet4_pass: 'In this section, you will hear three passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.',
      cet6_conv: 'In this section, you will hear two long conversations. At the end of each conversation, you will hear four questions. Both the conversation and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.',
      cet6_pass: 'In this section, you will hear two passages. At the end of each passage, you will hear three or four questions. Both the passage and the questions will be spoken only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.',
      cet6_lect: 'In this section, you will hear three recordings of lectures or talks followed by three or four questions. The recordings will be played only once. After you hear a question, you must choose the best answer from the four choices marked A), B), C) and D). Then mark the corresponding letter on Answer Sheet 1 with a single line through the centre.',
      ky_conv:   'Directions: In this section, you will hear a conversation on an academic topic. The conversation will be spoken only once. After you hear each question, you must choose the best answer from the four choices marked A, B, C and D.',
      ky_lect:   'Directions: In this section, you will hear a short lecture on an academic topic. The lecture will be spoken only once. After you hear each question, you must choose the best answer from the four choices marked A, B, C and D.'
    },

    /* 题目引导语用到的材料名称：与真题录音措辞一致 */
    MATERIAL: {
      news: 'news report',
      conversation: 'conversation',
      passage: 'passage',
      lecture: 'recording'
    },

    /* 逐篇配音配置
     * type     : 题型（决定声线与语速）
     * speakers : 说话人序列，F=女声 M=男声；单字符表示全篇同一人
     * dir      : 使用的考试指令键
     */
    ITEMS: {
      l1:     { type: 'passage',      speakers: 'F',      dir: 'cet4_pass' },
      l2:     { type: 'passage',      speakers: 'F',      dir: 'cet4_pass' },
      l3:     { type: 'passage',      speakers: 'M',      dir: 'cet4_pass' },
      l4:     { type: 'lecture',      speakers: 'M',      dir: 'cet6_lect' },
      l5:     { type: 'conversation', speakers: 'FMFMFM', dir: 'ky_conv'   },
      c4l01:  { type: 'passage',      speakers: 'F',      dir: 'cet4_pass' },
      c4l02:  { type: 'passage',      speakers: 'M',      dir: 'cet4_pass' },
      c4l03:  { type: 'passage',      speakers: 'F',      dir: 'cet4_pass' },
      c4l04:  { type: 'passage',      speakers: 'M',      dir: 'cet4_pass' },
      c4l05:  { type: 'passage',      speakers: 'F',      dir: 'cet4_pass' },

      /* 题型覆盖补充：CET-4 新闻报道 / 长对话，CET-6 讲座讲话 */
      c4n01:  { type: 'news',         speakers: 'F',      dir: 'cet4_news' },
      c4n02:  { type: 'news',         speakers: 'F',      dir: 'cet4_news' },
      c4n03:  { type: 'news',         speakers: 'F',      dir: 'cet4_news' },
      c4c01:  { type: 'conversation', speakers: 'MF',     dir: 'cet4_conv' },
      c4c02:  { type: 'conversation', speakers: 'WM',     dir: 'cet4_conv' },
      c6l01:  { type: 'lecture',      speakers: 'M',      dir: 'cet6_lect' },
      c6l02:  { type: 'lecture',      speakers: 'F',      dir: 'cet6_lect' },
      c6c01:  { type: 'conversation', speakers: 'WM',     dir: 'cet6_conv' }
    }
  };

  window.LISTEN_META = LISTEN_META;
})();
