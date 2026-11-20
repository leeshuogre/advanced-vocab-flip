const WORD_PAIRS = [
  { a: ["abundant", "豐富的；充足的"], b: ["plentiful", "大量的；充裕的"] },
  { a: ["arduous", "艱鉅的；費力的"], b: ["strenuous", "費力的；艱辛的"] },
  { a: ["benevolent", "仁慈的；樂善好施的"], b: ["charitable", "慷慨的；慈善的"] },
  { a: ["candid", "坦率的；直言不諱的"], b: ["frank", "坦白的；直率的"] },
  { a: ["diligent", "勤奮的；用功的"], b: ["assiduous", "勤勉的；刻苦的"] },
  { a: ["elated", "興高采烈的"], b: ["jubilant", "歡欣鼓舞的"] },
  { a: ["frugal", "節儉的；樸素的"], b: ["thrifty", "節省的；節儉的"] },
  { a: ["hostile", "敵意的；不友善的"], b: ["antagonistic", "對立的；懷有敵意的"] },
  { a: ["impartial", "公正的；不偏袒的"], b: ["unbiased", "沒有偏見的；公正的"] },
  { a: ["lucid", "清楚易懂的；明晰的"], b: ["intelligible", "易理解的；明白的"] },
  { a: ["mitigate", "減輕；緩和"], b: ["alleviate", "緩解；減輕"] },
  { a: ["novice", "新手；初學者"], b: ["neophyte", "新手；新入門者"] },
  { a: ["obscure", "晦澀難懂的；不明確的"], b: ["opaque", "難以理解的；不透明的"] },
  { a: ["prudent", "謹慎的；明智的"], b: ["circumspect", "審慎的；小心的"] },
  { a: ["sagacious", "睿智的；有洞察力的"], b: ["shrewd", "精明的；有判斷力的"] },
  { a: ["tranquil", "平靜的；安寧的"], b: ["serene", "寧靜的；平和的"] },
  { a: ["venerate", "尊敬；崇敬"], b: ["revere", "敬重；尊崇"] },
  { a: ["wary", "小心的；警惕的"], b: ["vigilant", "警覺的；警戒的"] },
  { a: ["ephemeral", "短暫的；轉瞬即逝的"], b: ["transient", "暫時的；短暫的"] },
  { a: ["gregarious", "愛交際的；合群的"], b: ["sociable", "好交際的；友善的"] },
  { a: ["haughty", "傲慢的；高高在上的"], b: ["arrogant", "自大的；傲慢的"] },
  { a: ["meticulous", "一絲不苟的；極仔細的"], b: ["scrupulous", "嚴謹細心的；一絲不苟的"] },
  { a: ["placate", "安撫；平息"], b: ["appease", "安撫；使息怒"] },
  { a: ["reticent", "寡言的；不愛表達的"], b: ["taciturn", "沉默寡言的"] },
  { a: ["skeptical", "懷疑的；持保留態度的"], b: ["dubious", "懷疑的；不確定的"] },
  { a: ["subtle", "微妙的；不易察覺的"], b: ["nuanced", "細微複雜的；有層次的"] },
  { a: ["yielding", "順從的；易受影響的"], b: ["compliant", "服從的；順從的"] },
  { a: ["zealous", "熱忱的；積極的"], b: ["fervent", "熱情的；熱烈的"] },
  { a: ["concise", "簡潔的；精煉的"], b: ["succinct", "簡明扼要的"] },
  { a: ["censure", "譴責；責難"], b: ["condemn", "譴責；指責"] },
  { a: ["diminish", "減少；削弱"], b: ["abate", "減弱；減退"] },
  { a: ["eloquent", "雄辯的；有說服力的"], b: ["articulate", "表達清楚的；善於表達的"] },
  { a: ["fortuitous", "偶然的；意外的"], b: ["serendipitous", "意外發現美好事物的"] },
  { a: ["garrulous", "喋喋不休的"], b: ["loquacious", "健談的；多話的"] },
  { a: ["lethargic", "無精打采的；倦怠的"], b: ["languid", "慵懶的；倦怠的"] },
  { a: ["prolific", "多產的；豐富的"], b: ["fecund", "豐饒的；多產的"] },
  { a: ["tenacious", "堅韌的；不屈不撓的"], b: ["steadfast", "堅定的；不動搖的"] },
  { a: ["vindicate", "證明正當；洗清罪名"], b: ["exonerate", "證明無罪；免除責任"] },
  { a: ["wane", "減弱；衰退"], b: ["dwindle", "逐漸減少；縮小"] },
  { a: ["zeal", "熱忱；熱情"], b: ["ardor", "熱情；激情"] },
  { a: ["amiable", "和藹可親的"], b: ["affable", "親切友善的"] },
  { a: ["bolster", "支持；加強"], b: ["buttress", "支撐；鞏固"] },
  { a: ["capricious", "反覆無常的；任性的"], b: ["fickle", "善變的；不穩定的"] },
  { a: ["dearth", "缺乏；不足"], b: ["scarcity", "稀少；匱乏"] },
  { a: ["emulate", "效法；努力趕上"], b: ["imitate", "模仿；仿效"] },
  { a: ["exacerbate", "使惡化；加劇"], b: ["aggravate", "加重；使更嚴重"] },
  { a: ["imminent", "即將發生的；迫近的"], b: ["impending", "即將來臨的"] },
  { a: ["inane", "愚蠢無聊的；空洞的"], b: ["vacuous", "空洞的；缺乏思想的"] },
  { a: ["incessant", "不停的；持續不斷的"], b: ["perpetual", "持續不斷的；永久的"] },
  { a: ["inept", "笨拙的；不適任的"], b: ["incompetent", "無能的；不勝任的"] },
  { a: ["ostensible", "表面上的；假裝的"], b: ["apparent", "表面上的；看似如此的"] },
  { a: ["relinquish", "放棄；交出"], b: ["cede", "割讓；讓出"] },
  { a: ["reproach", "責備；斥責"], b: ["rebuke", "指責；斥責"] },
  { a: ["resolute", "堅決的；果斷的"], b: ["adamant", "堅定不移的；固執的"] },
  { a: ["sporadic", "零星發生的；偶發的"], b: ["intermittent", "間歇的；斷斷續續的"] },
  { a: ["succumb", "屈服；抵擋不住"], b: ["yield", "屈服；讓步"] },
  { a: ["verbose", "冗長的；囉嗦的"], b: ["prolix", "冗長的；累贅的"] },
  { a: ["volatile", "不穩定的；易變的"], b: ["mercurial", "多變的；反覆無常的"] },
  { a: ["clamor", "喧鬧；吵嚷"], b: ["din", "喧鬧聲；嘈雜聲"] },
  { a: ["deride", "嘲笑；奚落"], b: ["ridicule", "嘲弄；嘲笑"] },
  { a: ["efficacious", "有效的；奏效的"], b: ["effective", "有效的；有作用的"] },
  { a: ["impede", "阻礙；妨礙"], b: ["hamper", "妨礙；牽制"] },
  { a: ["incisive", "尖銳透徹的；敏銳的"], b: ["trenchant", "犀利的；一針見血的"] },
  { a: ["laud", "稱讚；讚揚"], b: ["extol", "頌揚；高度讚美"] },
  { a: ["mundane", "平凡的；世俗的"], b: ["ordinary", "普通的；平常的"] },
  { a: ["pervasive", "普遍存在的；遍布的"], b: ["ubiquitous", "無所不在的；普遍的"] },
  { a: ["plausible", "看似合理的；可信的"], b: ["credible", "可信的；可靠的"] },
  { a: ["prodigal", "揮霍的；浪費的"], b: ["wasteful", "浪費的；奢侈的"] },
  { a: ["recalcitrant", "難以管教的；反抗的"], b: ["obstinate", "固執的；頑固的"] },
  { a: ["spurious", "假的；不真實的"], b: ["counterfeit", "偽造的；仿冒的"] },
  { a: ["stagnant", "停滯的；不流動的"], b: ["inert", "呆滯的；無活動力的"] },
  { a: ["timorous", "膽怯的；畏縮的"], b: ["fearful", "害怕的；膽小的"] },
  { a: ["tortuous", "曲折的；錯綜複雜的"], b: ["convoluted", "複雜難懂的；盤繞的"] },
  { a: ["undermine", "暗中削弱；逐漸損害"], b: ["erode", "侵蝕；逐漸削弱"] },
  { a: ["abominate", "憎惡；厭惡"], b: ["loathe", "厭惡；憎恨"] },
  { a: ["allay", "減輕；緩和"], b: ["assuage", "緩和；平息"] },
  { a: ["banal", "陳腐的；老套的"], b: ["hackneyed", "陳腐的；老生常談的"] },
  { a: ["baneful", "有害的；有毒的"], b: ["noxious", "有害的；有毒的"] },
  { a: ["clandestine", "秘密進行的；隱密的"], b: ["furtive", "偷偷摸摸的；鬼祟的"] },
  { a: ["conspicuous", "顯眼的；醒目的"], b: ["obtrusive", "惹人注意的；突兀的"] },
  { a: ["discomfit", "使窘迫；使不安"], b: ["disconcert", "使不安；使困惑"] },
  { a: ["egregious", "極糟糕的；過分的"], b: ["flagrant", "明目張膽的；惡劣的"] },
  { a: ["eradicate", "根除；消滅"], b: ["extirpate", "根除；徹底消滅"] },
  { a: ["esoteric", "深奧難懂的；只有少數人懂的"], b: ["recondite", "艱深的；晦澀難懂的"] },
  { a: ["facetious", "開玩笑的；滑稽的"], b: ["flippant", "輕率的；不當一回事的"] },
  { a: ["flamboyant", "華麗搶眼的；炫耀的"], b: ["ostentatious", "炫耀的；浮華的"] },
  { a: ["guile", "狡猾；詭計"], b: ["duplicity", "欺詐；兩面手法"] },
  { a: ["insipid", "乏味的；淡而無味的"], b: ["vapid", "枯燥的；空洞無味的"] },
  { a: ["jovial", "快樂的；愉快友善的"], b: ["genial", "和藹親切的；友善的"] },
  { a: ["laconic", "言簡意賅的；寡言的"], b: ["terse", "簡短精煉的；簡潔的"] },
  { a: ["malice", "惡意；怨恨"], b: ["animosity", "敵意；憎惡"] },
  { a: ["malign", "中傷；誹謗"], b: ["vilify", "詆毀；誹謗"] },
  { a: ["nonchalant", "漠不關心的；若無其事的"], b: ["indifferent", "冷淡的；不在乎的"] },
  { a: ["opulent", "豪華的；富麗堂皇的"], b: ["lavish", "奢華的；豐盛的"] },
  { a: ["quash", "撤銷；鎮壓"], b: ["quell", "平息；鎮壓"] },
  { a: ["recant", "撤回；放棄（先前的主張）"], b: ["retract", "撤回；收回（說過的話）"] },
  { a: ["repugnant", "令人厭惡的；令人反感的"], b: ["repulsive", "令人厭惡的；令人作嘔的"] },
  { a: ["scourge", "禍害；苦難的根源"], b: ["plague", "禍害；使受折磨"] },
  { a: ["truculent", "好鬥的；挑釁的"], b: ["pugnacious", "好鬥的；愛挑釁的"] },
  { a: ["virulent", "惡毒的；猛烈有害的"], b: ["venomous", "惡毒的；有毒的"] },
  { a: ["vitriolic", "尖刻的；刻薄的"], b: ["caustic", "尖酸刻薄的；挖苦的"] },
  { a: ["intrepid", "無畏的；勇敢的"], b: ["valiant", "英勇的；勇敢的"] },
  { a: ["impetuous", "衝動的；魯莽的"], b: ["rash", "魯莽的；輕率的"] },
  { a: ["insolent", "傲慢無禮的；侮慢的"], b: ["impudent", "厚顏無恥的；無禮的"] },
];

const NEW_WORD_PAIRS = [
  { a: ["compulsory", "強制的；義務的"], b: ["mandatory", "強制的；必須履行的"], difficulty: 1 },
  { a: ["encompass", "涵蓋；包括"], b: ["comprise", "包含；包括"], difficulty: 1 },
  { a: ["susceptible", "易受影響的"], b: ["vulnerable", "脆弱的；易受影響的"], difficulty: 1 },
  { a: ["inherent", "內在的；固有的"], b: ["intrinsic", "內在的；本質的"], difficulty: 1 },
  { a: ["alienate", "使疏遠；使反感"], b: ["estrange", "使疏遠；離間"], difficulty: 1 },
  { a: ["embark", "開始；著手"], b: ["commence", "開始；著手"], difficulty: 1 },
  { a: ["coincide", "同時發生；相符"], b: ["synchronize", "同步；同時發生"], difficulty: 1 },
  { a: ["blunt", "直率的；直截了當的"], b: ["forthright", "直率的；坦白的"], difficulty: 1 },
  { a: ["ambiguous", "模稜兩可的；不明確的"], b: ["equivocal", "模稜兩可的；含糊的"], difficulty: 2 },
  { a: ["tedious", "冗長乏味的"], b: ["monotonous", "單調乏味的"], difficulty: 2 },
  { a: ["adverse", "不利的；有害的"], b: ["inimical", "不利的；有害的"], difficulty: 2 },
  { a: ["groundless", "毫無根據的"], b: ["unwarranted", "無根據的；不合理的"], difficulty: 2 },
  { a: ["agile", "敏捷的；靈活的"], b: ["nimble", "敏捷的；靈巧的"], difficulty: 2 },
  { a: ["advocate", "擁護者；提倡者"], b: ["proponent", "支持者；提倡者"], difficulty: 2 },
  { a: ["manipulate", "操縱；控制"], b: ["maneuver", "操縱；策略性移動"], difficulty: 2 },
  { a: ["refrain", "克制；忍住"], b: ["suppress", "抑制；忍住"], difficulty: 2 },
  { a: ["excoriate", "嚴厲抨擊"], b: ["lambast", "痛斥；嚴厲批評"], difficulty: 3 },
  { a: ["antipathy", "反感；厭惡"], b: ["aversion", "厭惡；反感"], difficulty: 3 },
  { a: ["anomaly", "異常；反常現象"], b: ["aberration", "異常現象；反常行為"], difficulty: 3 },
  { a: ["heyday", "全盛時期"], b: ["zenith", "巔峰；鼎盛時期"], difficulty: 3 },
  { a: ["concur", "同意；一致認為"], b: ["assent", "同意；贊成"], difficulty: 3 },
  { a: ["invert", "使倒置；使顛倒"], b: ["upend", "倒置；顛倒"], difficulty: 3 },
  { a: ["ignite", "點燃；激起"], b: ["kindle", "點燃；燃起"], difficulty: 3 },
  { a: ["conjecture", "推測；臆測"], b: ["surmise", "推測；猜測"], difficulty: 3 },
  { a: ["obliterate", "徹底摧毀；抹除"], b: ["annihilate", "徹底摧毀；消滅"], difficulty: 4 },
  { a: ["prosaic", "平淡無奇的；缺乏想像力的"], b: ["nondescript", "平淡無奇的；不起眼的"], difficulty: 4 },
  { a: ["wholesome", "有益的；有益健康的"], b: ["salubrious", "有益健康的；健康宜人的"], difficulty: 4 },
  { a: ["heterogeneous", "混雜的；各種各樣的"], b: ["miscellaneous", "各式各樣的；雜項的"], difficulty: 4 },
  { a: ["disparage", "貶低；輕視"], b: ["deprecate", "貶低；輕視"], difficulty: 4 },
  { a: ["spur", "刺激；激勵"], b: ["galvanize", "刺激；激起"], difficulty: 4 },
  { a: ["forsake", "拋棄；放棄"], b: ["forgo", "放棄；摒絕"], difficulty: 4 },
  { a: ["undulate", "起伏；波動"], b: ["fluctuate", "波動；起伏不定"], difficulty: 4 },
  { a: ["ebullient", "精力充沛的；熱情洋溢的"], b: ["exuberant", "精力充沛的；熱情洋溢的"], difficulty: 5 },
  { a: ["oscillate", "搖擺；來回擺動"], b: ["vacillate", "猶豫；搖擺不定"], difficulty: 5 },
  { a: ["fidelity", "忠誠；忠實"], b: ["allegiance", "忠誠；忠貞"], difficulty: 5 },
  { a: ["lament", "悲痛；痛惜"], b: ["deplore", "痛惜；譴責"], difficulty: 5 },
  { a: ["curb", "抑制；限制"], b: ["circumscribe", "限制；抑制"], difficulty: 5 },
  { a: ["deplorable", "可悲的；應受譴責的"], b: ["reprehensible", "應受譴責的；應受責備的"], difficulty: 5 },
  { a: ["liberal", "慷慨大方的"], b: ["munificent", "慷慨的；大方的"], difficulty: 5 },
  { a: ["elusive", "難以捉摸的；難以理解的"], b: ["unfathomable", "難以理解的；深不可測的"], difficulty: 5 },
  { a: ["precursor", "先驅；前兆"], b: ["forerunner", "先驅；先行者"], difficulty: 1 },
  { a: ["perilous", "危險的；險峻的"], b: ["dangerous", "危險的"], difficulty: 1 },
  { a: ["knotty", "棘手的；複雜的"], b: ["complicated", "複雜的；難懂的"], difficulty: 1 },
  { a: ["cunning", "狡猾的；巧妙的"], b: ["crafty", "狡猾的；機靈的"], difficulty: 1 },
  { a: ["heartless", "無情的；冷酷的"], b: ["callous", "冷漠無情的；麻木的"], difficulty: 1 },
  { a: ["timid", "膽怯的；羞怯的"], b: ["diffident", "缺乏自信的；羞怯的"], difficulty: 1 },
  { a: ["apposite", "貼切的；恰當的"], b: ["fitting", "合適的；恰當的"], difficulty: 1 },
  { a: ["mockery", "嘲笑；嘲弄"], b: ["derision", "嘲笑；奚落"], difficulty: 2 },
  { a: ["lambaste", "嚴厲批評；痛斥"], b: ["denounce", "公開譴責；痛斥"], difficulty: 2 },
  { a: ["expedite", "加快；促進"], b: ["facilitate", "使更容易；促進"], difficulty: 2 },
  { a: ["diversity", "多樣性"], b: ["heterogeneity", "異質性；多樣性"], difficulty: 3 },
  { a: ["stymie", "阻礙；使受挫"], b: ["hinder", "妨礙；阻礙"], difficulty: 3 },
  { a: ["indigent", "貧困的"], b: ["impecunious", "貧困的；缺錢的"], difficulty: 3 },
  { a: ["unseemly", "不得體的；不合宜的"], b: ["indecorous", "失禮的；不得體的"], difficulty: 3 },
  { a: ["immaterial", "無關緊要的"], b: ["inconsequential", "不重要的；無足輕重的"], difficulty: 3 },
  { a: ["negligible", "微不足道的；可忽略的"], b: ["insignificant", "不重要的；微小的"], difficulty: 3 },
  { a: ["unexampled", "前所未有的；空前的"], b: ["novel", "新穎的；新奇的"], difficulty: 3 },
  { a: ["helter-skelter", "雜亂無章地；匆忙混亂的"], b: ["haphazard", "雜亂無計畫的；隨意的"], difficulty: 3 },
  { a: ["propitious", "有利的；吉祥的"], b: ["auspicious", "吉利的；有利的"], difficulty: 2 },
  { a: ["spartan", "簡樸的；刻苦的"], b: ["austere", "簡樸的；嚴峻的"], difficulty: 3 },
  { a: ["innocuous", "無害的；不冒犯人的"], b: ["harmless", "無害的"], difficulty: 2 },
  { a: ["obdurate", "頑固的；不易改變的"], b: ["intransigent", "不妥協的；固執的"], difficulty: 4 },
  { a: ["provincial", "狹隘的；地方性的"], b: ["insular", "孤立狹隘的；島嶼的"], difficulty: 4 },
  { a: ["vacillation", "猶豫不決；搖擺"], b: ["irresolution", "優柔寡斷；猶豫不決"], difficulty: 4 },
  { a: ["peripatetic", "巡迴的；四處走動的"], b: ["itinerant", "巡迴的；流動的"], difficulty: 5 },
  { a: ["pellucid", "清澈的；清晰易懂的"], b: ["limpid", "清澈的；清晰的"], difficulty: 5 },
  { a: ["remunerative", "有報酬的；有利可圖的"], b: ["lucrative", "有利可圖的；賺錢的"], difficulty: 4 },
  { a: ["hauteur", "傲慢；高高在上的態度"], b: ["superciliousness", "傲慢；目中無人"], difficulty: 5 },
  { a: ["sycophantic", "阿諛奉承的；諂媚的"], b: ["obsequious", "諂媚的；卑躬屈膝的"], difficulty: 5 },
  { a: ["recrudescent", "再度復發的；重新惡化的"], b: ["resurgent", "再度興起的；復甦的"], difficulty: 5 },
  { a: ["apogee", "頂點；最高點"], b: ["pinnacle", "巔峰；頂點"], difficulty: 4 },
  { a: ["plethora", "過多；大量"], b: ["surfeit", "過量；過多"], difficulty: 4 },
  { a: ["tendentious", "有偏見的；帶有傾向性的"], b: ["slanted", "有偏向的；有偏見的"], difficulty: 4 },
  { a: ["irrefutable", "無法反駁的；確鑿的"], b: ["undeniable", "不可否認的"], difficulty: 4 },
  { a: ["unremitting", "不間斷的；持續不懈的"], b: ["unceasing", "持續不斷的"], difficulty: 4 },
  { a: ["unorthodox", "非傳統的；非正統的"], b: ["unconventional", "不循常規的；非傳統的"], difficulty: 3 },
  { a: ["composed", "鎮定的；沉著的"], b: ["unperturbed", "不受干擾的；鎮定的"], difficulty: 3 },
  { a: ["untrammeled", "不受限制的；自由的"], b: ["unrestrained", "不受拘束的；不加限制的"], difficulty: 4 },
  { a: ["indolence", "懶惰；怠惰"], b: ["sloth", "懶惰；怠惰"], difficulty: 4 },
  { a: ["abeyance", "暫停；中止"], b: ["quiescence", "靜止；不活躍"], difficulty: 5 },
  { a: ["proclivity", "傾向；癖好"], b: ["predilection", "偏愛；嗜好"], difficulty: 5 },
  { a: ["vestige", "遺跡；殘餘"], b: ["relic", "遺物；遺跡"], difficulty: 4 },
  { a: ["tenacity", "堅韌；頑強"], b: ["resolve", "決心；堅定"], difficulty: 4 },
  { a: ["stifle", "抑制；扼殺"], b: ["shackle", "束縛；限制"], difficulty: 4 },
  { a: ["supplant", "取代；替代"], b: ["supersede", "取代；接替"], difficulty: 4 },
  { a: ["ancillary", "輔助的；附屬的"], b: ["supplementary", "補充的；附加的"], difficulty: 4 },
  { a: ["halfhearted", "敷衍的；缺乏熱情的"], b: ["tepid", "不熱烈的；冷淡的"], difficulty: 3 },
  { a: ["unfounded", "無根據的；不成立的"], b: ["unjustified", "不合理的；無正當理由的"], difficulty: 3 },
  { a: ["unremunerative", "無利可圖的"], b: ["unprofitable", "不賺錢的；無利可圖的"], difficulty: 4 },
  { a: ["reverence", "崇敬；敬意"], b: ["veneration", "尊崇；敬仰"], difficulty: 4 },
  { a: ["fiasco", "慘敗；一團糟"], b: ["debacle", "災難性的失敗；慘敗"], difficulty: 3 },
  { a: ["conundrum", "難題；棘手問題"], b: ["enigma", "謎團；難以解釋的人或事"] },
];

const ROUND_SIZE = 8;
const TOTAL_ROUNDS = 3;
const MAX_MOVES = 20;
const SUBTLEX_LG10CD = {
  "abundant": 1.4314,
  "plentiful": 1.1761,
  "arduous": 1.5315,
  "strenuous": 1.4771,
  "benevolent": 1.5185,
  "charitable": 1.9638,
  "candid": 1.9294,
  "frank": 3.1153,
  "diligent": 1.415,
  "assiduous": 0.4771,
  "elated": 1.1461,
  "jubilant": 0.9542,
  "frugal": 1,
  "thrifty": 1.2304,
  "hostile": 2.5051,
  "antagonistic": 1.301,
  "impartial": 1.6532,
  "unbiased": 1.2041,
  "lucid": 1.7404,
  "intelligible": 0.6021,
  "mitigate": 1.301,
  "alleviate": 1.3802,
  "novice": 1.5798,
  "neophyte": 0.9542,
  "obscure": 2.0934,
  "opaque": 0.8451,
  "prudent": 1.8692,
  "circumspect": 1.0414,
  "sagacious": 0.4771,
  "shrewd": 1.7993,
  "tranquil": 1.5911,
  "serene": 1.716,
  "venerate": 0.301,
  "revere": 1.6232,
  "wary": 1.5185,
  "vigilant": 1.5911,
  "ephemeral": 0.9542,
  "transient": 1.6232,
  "gregarious": 0.4771,
  "sociable": 1.6628,
  "haughty": 1.3222,
  "arrogant": 2.3711,
  "meticulous": 1.6902,
  "scrupulous": 0.9542,
  "placate": 1.2304,
  "appease": 1.3802,
  "reticent": 1.1139,
  "taciturn": 0.9542,
  "skeptical": 1.8388,
  "dubious": 1.8325,
  "subtle": 2.4814,
  "nuanced": 0.9031,
  "yielding": 1.2788,
  "compliant": 0.9542,
  "zealous": 1.1761,
  "fervent": 1.2304,
  "concise": 1.301,
  "succinct": 1.1139,
  "censure": 0.9031,
  "condemn": 2,
  "diminish": 1.6335,
  "abate": 0.6021,
  "eloquent": 1.6902,
  "articulate": 1.8692,
  "fortuitous": 1.301,
  "serendipitous": 0.9542,
  "garrulous": 0.6021,
  "loquacious": 0.9542,
  "lethargic": 1.2304,
  "languid": 1.0414,
  "prolific": 1.2788,
  "fecund": 0.4771,
  "tenacious": 1.415,
  "steadfast": 1.3222,
  "vindicate": 0.8451,
  "exonerate": 1.5051,
  "wane": 1.1461,
  "dwindle": 0.7782,
  "zeal": 1.4771,
  "ardor": 0.9031,
  "amiable": 1.3979,
  "affable": 0.7782,
  "bolster": 1.2041,
  "buttress": 0.4771,
  "capricious": 1.2788,
  "fickle": 1.7482,
  "dearth": 0.699,
  "scarcity": 0.9542,
  "emulate": 1.4472,
  "imitate": 1.8976,
  "exacerbate": 0.8451,
  "aggravate": 1.5563,
  "imminent": 2.0086,
  "impending": 1.699,
  "inane": 1.3424,
  "vacuous": 1.1761,
  "incessant": 1.3802,
  "perpetual": 1.7993,
  "inept": 1.5563,
  "incompetent": 2.1931,
  "ostensible": 0.6021,
  "apparent": 2.3032,
  "relinquish": 1.6335,
  "cede": 0.8451,
  "reproach": 1.3617,
  "rebuke": 1.1761,
  "resolute": 1.2041,
  "adamant": 1.6232,
  "sporadic": 1.1461,
  "intermittent": 1.3979,
  "succumb": 1.2788,
  "yield": 2.1139,
  "verbose": 0.7782,
  "volatile": 1.7482,
  "mercurial": 0.9031,
  "clamor": 0.7782,
  "din": 1.415,
  "deride": 0.699,
  "ridicule": 1.9294,
  "efficacious": 1.0414,
  "effective": 2.6776,
  "impede": 1.3979,
  "hamper": 1.7853,
  "incisive": 0.9031,
  "trenchant": 0.4771,
  "laud": 0.699,
  "extol": 0.4771,
  "mundane": 1.5911,
  "ordinary": 2.8506,
  "pervasive": 1.2041,
  "ubiquitous": 1.3424,
  "plausible": 1.8451,
  "credible": 1.8195,
  "prodigal": 1.716,
  "wasteful": 1.4624,
  "recalcitrant": 0.8451,
  "obstinate": 1.5911,
  "spurious": 0.7782,
  "counterfeit": 1.8751,
  "stagnant": 1.1761,
  "inert": 1.2553,
  "fearful": 1.9731,
  "tortuous": 0.8451,
  "convoluted": 1.1461,
  "undermine": 1.8451,
  "erode": 0.7782,
  "abominate": 0.4771,
  "loathe": 1.9823,
  "allay": 1.2304,
  "assuage": 0.7782,
  "banal": 1.0792,
  "hackneyed": 0.7782,
  "baneful": 0.301,
  "noxious": 1.0792,
  "clandestine": 1.6232,
  "furtive": 1.1461,
  "conspicuous": 1.8451,
  "obtrusive": 0.4771,
  "egregious": 1.2304,
  "flagrant": 1.4314,
  "eradicate": 1.3222,
  "esoteric": 1.2041,
  "facetious": 0.8451,
  "flippant": 1.2304,
  "flamboyant": 1.3424,
  "ostentatious": 1.3617,
  "guile": 1.4472,
  "duplicity": 1,
  "insipid": 1.4472,
  "vapid": 1.0792,
  "jovial": 1,
  "genial": 0.9542,
  "laconic": 0.4771,
  "terse": 0.8451,
  "malice": 1.6902,
  "animosity": 1.4914,
  "malign": 1,
  "vilify": 0.9542,
  "nonchalant": 1.2041,
  "indifferent": 1.7404,
  "opulent": 0.9031,
  "lavish": 1.5563,
  "quash": 1,
  "quell": 1.2553,
  "recant": 1.3424,
  "retract": 1.7924,
  "repugnant": 1.5315,
  "repulsive": 1.9494,
  "scourge": 1.7076,
  "plague": 2.4065,
  "truculent": 0.699,
  "pugnacious": 0.4771,
  "virulent": 1.0792,
  "venomous": 1.3424,
  "vitriolic": 0.699,
  "caustic": 0.9031,
  "intrepid": 1.4624,
  "valiant": 1.8388,
  "impetuous": 1.6902,
  "rash": 2.4654,
  "insolent": 1.7324,
  "impudent": 1.5185,
  "compulsory": 1.4472,
  "mandatory": 2.0492,
  "encompass": 1.0414,
  "comprise": 1,
  "susceptible": 1.7709,
  "vulnerable": 2.5888,
  "inherent": 1.4771,
  "intrinsic": 1.0414,
  "alienate": 1.4624,
  "estrange": 0.301,
  "embark": 1.7993,
  "commence": 2.2175,
  "coincide": 1.6128,
  "synchronize": 1.5185,
  "blunt": 2.3075,
  "forthright": 1.4771,
  "ambiguous": 1.5563,
  "equivocal": 0.8451,
  "tedious": 1.8195,
  "monotonous": 1.5682,
  "adverse": 1.5441,
  "inimical": 0.4771,
  "groundless": 1.0414,
  "unwarranted": 1.2304,
  "agile": 1.3222,
  "nimble": 1.4472,
  "advocate": 1.9868,
  "proponent": 1.0414,
  "manipulate": 2.1987,
  "maneuver": 2.0569,
  "refrain": 1.9912,
  "suppress": 1.8388,
  "antipathy": 0.699,
  "aversion": 1.7404,
  "anomaly": 1.7559,
  "aberration": 1.4314,
  "heyday": 0.9542,
  "zenith": 1.1461,
  "concur": 1.6435,
  "assent": 0.699,
  "invert": 0.8451,
  "upend": 0.301,
  "ignite": 1.6902,
  "kindle": 0.9031,
  "conjecture": 1.6128,
  "surmise": 1.2304,
  "obliterate": 1.2553,
  "annihilate": 1.5563,
  "prosaic": 1.1139,
  "nondescript": 1.0414,
  "wholesome": 1.8573,
  "salubrious": 0.9031,
  "heterogeneous": 0.301,
  "miscellaneous": 1.301,
  "disparage": 1.6532,
  "deprecate": 0.4771,
  "spur": 1.7634,
  "galvanize": 0.699,
  "forsake": 1.5315,
  "forgo": 1.2041,
  "undulate": 0.301,
  "fluctuate": 1.0414,
  "ebullient": 0.4771,
  "exuberant": 1.0792,
  "oscillate": 0.6021,
  "vacillate": 0.301,
  "fidelity": 1.9243,
  "allegiance": 2.1106,
  "lament": 1.3979,
  "deplore": 1.1139,
  "curb": 2.2405,
  "deplorable": 1.6335,
  "reprehensible": 1.4472,
  "liberal": 2.1903,
  "elusive": 1.8325,
  "unfathomable": 1.2041,
  "precursor": 0.9031,
  "forerunner": 0.699,
  "perilous": 1.5682,
  "dangerous": 3.3779,
  "knotty": 0.8451,
  "complicated": 3.0237,
  "cunning": 2.2041,
  "crafty": 1.6721,
  "heartless": 2.1173,
  "callous": 1.699,
  "timid": 1.7993,
  "diffident": 0.699,
  "fitting": 2.4031,
  "mockery": 1.8865,
  "derision": 0.9542,
  "denounce": 1.5441,
  "expedite": 1.5185,
  "facilitate": 1.7076,
  "diversity": 1.6128,
  "stymie": 0.6021,
  "hinder": 1.5051,
  "indigent": 1.2304,
  "impecunious": 0.4771,
  "unseemly": 1.3617,
  "indecorous": 0.6021,
  "immaterial": 1.6021,
  "inconsequential": 1.3617,
  "negligible": 1.301,
  "insignificant": 2.0719,
  "novel": 2.4742,
  "haphazard": 1,
  "propitious": 0.699,
  "auspicious": 1.3979,
  "spartan": 1.301,
  "austere": 1.0414,
  "innocuous": 1.3222,
  "harmless": 2.5694,
  "obdurate": 0.4771,
  "intransigent": 0.699,
  "provincial": 1.5682,
  "insular": 0.6021,
  "peripatetic": 0.301,
  "itinerant": 0.301,
  "limpid": 0.699,
  "remunerative": 0.301,
  "lucrative": 1.7993,
  "sycophantic": 0.4771,
  "obsequious": 1,
  "apogee": 0.699,
  "pinnacle": 1.3222,
  "plethora": 1.0414,
  "surfeit": 0.699,
  "tendentious": 0.6021,
  "slanted": 1.2304,
  "irrefutable": 1.1461,
  "undeniable": 1.5798,
  "unremitting": 0.6021,
  "unceasing": 0.9542,
  "unorthodox": 1.8451,
  "unconventional": 1.6335,
  "composed": 1.959,
  "unperturbed": 0.301,
  "untrammeled": 0.6021,
  "unrestrained": 0.9031,
  "indolence": 0.301,
  "sloth": 1.3979,
  "abeyance": 0.4771,
  "proclivity": 1.0414,
  "predilection": 1.0414,
  "vestige": 1.1461,
  "relic": 1.7853,
  "tenacity": 1.1761,
  "resolve": 2.3243,
  "stifle": 1.2041,
  "shackle": 0.9031,
  "supplant": 0.6021,
  "supersede": 0.9031,
  "ancillary": 1.0792,
  "supplementary": 1.0414,
  "tepid": 1.0414,
  "unfounded": 1.4771,
  "unjustified": 0.9031,
  "unprofitable": 0.699,
  "reverence": 1.7482,
  "veneration": 0.4771,
  "fiasco": 1.8513,
  "debacle": 1.5441,
  "conundrum": 1.3617,
  "enigma": 1.6435,
  "parallel": 2.2175,
  "match": 3.1926,
  "defy": 2.1553,
  "disregard": 2.1875,
  "concede": 1.6628,
  "acknowledge": 2.3997,
  "robust": 1.5563,
  "strong": 3.4289,
  "ingenious": 1.9956,
  "clever": 2.9814,
  "condone": 1.7634,
  "excuse": 3.7813,
  "conjure": 1.6812,
  "imagine": 3.4358,
  "elicit": 1.415,
  "draw": 3.1319,
  "skirt": 2.5866,
  "circumvent": 1.3979,
  "boon": 1.3979,
  "benefit": 2.749,
  "disdain": 1.3979,
  "contempt": 2.281,
  "devious": 1.8921,
  "indirect": 1.3424,
  "discord": 1.2553,
  "contention": 1.6021,
  "daunting": 1.2304,
  "formidable": 1.9345,
  "extraneous": 1.2041,
  "irrelevant": 2.3502,
  "augment": 1.1761,
  "enhance": 1.9777,
  "accentuate": 1.1139,
  "highlight": 1.8633,
  "hubris": 1.0792,
  "arrogance": 2.1106,
  "enigmatic": 1.0792,
  "mysterious": 2.7875,
  "harbinger": 1.0414,
  "herald": 1.9031,
  "construe": 1.0414,
  "interpret": 2.0294,
  "instigate": 1.0414,
  "provoke": 2.0492,
  "economy": 2.3385,
  "brevity": 0.9542,
  "commensurate": 0.9542,
  "equivalent": 2.0899,
  "engender": 0.8451,
  "induce": 1.8751,
  "belie": 0.7782,
  "mask": 2.6821,
  "effusive": 0.7782,
  "emotional": 2.8854,
  "analogous": 0.699,
  "comparable": 1.3802,
  "acquiescence": 0.7782,
  "accession": 0.6021,
  "homogeneous": 0.6021,
  "uniform": 2.9079,
  "glean": 0.4771,
  "obtain": 2.1818,
  "castigate": 0.301,
  "chastise": 0.8451,
  "discrepancy": 1.6232,
  "incongruity": 0.301,
  "cupidity": 0.301,
  "avarice": 1.301,
  "permeable": 0.6021,
  "porous": 1.1461,
  "staid": 0.4771,
  "sober": 2.5763,
  "obviate": 0.4771,
  "preclude": 1.1761,
  "sluggish": 1.5563,
  "dilatory": 0.4771,
  "shun": 1.3979,
  "eschew": 0.301,
  "contradict": 1.7709,
  "gainsay": 0.301,
  "baffle": 0.8451,
  "flummox": 0.301,
  "doctrinaire": 0.301,
  "dogmatic": 1,
  "fungible": 0.6021,
  "interchangeable": 1.2041,
  "oust": 0.6021,
  "expel": 1.7482,
  "edify": 0.6021,
  "enlighten": 2.0212,
  "attenuate": 0.6021,
  "shrink": 2.5809,
  "panacea": 0.6021,
  "remedy": 2.0334,
  "hypocrisy": 1.8195,
  "insincerity": 0.4771,
  "mendacious": 0.7782,
  "disingenuous": 0.9031,
  "plastic": 2.8338,
  "malleable": 0.7782,
  "stringent": 0.7782,
  "draconian": 0.8451,
  "vex": 0.9542,
  "irk": 0.7782,
  "formulaic": 0.699,
  "canned": 2.2355,
  "contemptuous": 1,
  "scornful": 0.699,
  "languish": 0.9542,
  "stagnate": 0.699,
  "noisome": 0.699,
  "obnoxious": 2.1818,
  "prophetic": 1.2788,
  "prescient": 0.699,
  "rapacious": 0.7782,
  "avaricious": 0.699,
  "promulgate": 0.6021,
  "disseminate": 0.699,
  "gawky": 1.1761,
  "ungainly": 0.6021,
  "lugubrious": 0.6021,
  "gloomy": 2,
  "mercenary": 1.8808,
  "exploitative": 0.7782,
  "petulant": 1.1761,
  "prickly": 1.4472,
  "anomalous": 1.1139,
  "aberrant": 1.1461,
  "pompous": 1.9868,
  "bombastic": 1,
  "avert": 1.4472,
  "forestall": 0.9542,
  "cursory": 1.1461,
  "perfunctory": 0.9542,
  "outmoded": 0.9031,
  "obsolete": 1.9138,
  "unyielding": 0.9542,
  "implacable": 0.9031,
  "acrimony": 0.8451,
  "rancor": 0.9031,
  "paragon": 1.1761,
  "model": 2.9926,
  "caricature": 1.1461,
  "burlesque": 1.4771,
  "thwart": 1.2304,
  "frustrate": 1.1461,
  "opportune": 1.1461,
  "timely": 1.6902,
  "expedient": 1.1461,
  "advantageous": 1.3222,
  "temperate": 1.1139,
  "restrained": 1.716,
  "marginal": 1.4624,
  "peripheral": 1.6435,
  "exhaustive": 1.3979,
  "comprehensive": 1.7404,
  "brazen": 1.7076,
  "audacious": 1.3979,
  "impenetrable": 1.6628,
  "inscrutable": 1.3802,
  "lull": 1.6721,
  "respite": 1.3617,
  "meager": 1.4771,
  "paltry": 1.3617,
  "eclectic": 1.2553,
  "catholic": 2.5276,
  "predicament": 1.9823,
  "quandary": 1.2553,
  "solitude": 1.9638,
  "seclusion": 1.4771,
  "discerning": 1.4472,
  "insightful": 1.6721,
  "offset": 1.4472,
  "compensate": 2.0531,
  "allure": 1.4472,
  "charm": 2.7767,
  "leeway": 1.4314,
  "latitude": 1.8325,
  "antiquated": 1.4314,
  "outdated": 1.6021,
  "calculated": 2.0453,
  "deliberate": 2.1106,
  "condescending": 1.7709,
  "patronizing": 1.7404,
  "spontaneous": 2.2148,
  "impromptu": 1.5911,
  "rudimentary": 1.5441,
  "sketchy": 1.7559,
  "beholden": 1.4771,
  "indebted": 1.7482,
  "check": 3.7238,
  "brake": 2.2945,
  "absurd": 2.5999,
  "preposterous": 2.1584,
  "sordid": 2.0531,
  "sleazy": 1.9956,
  "chic": 1.9638,
  "elegant": 2.382,
  "cerebral": 1.9494,
  "intellectual": 2.2765,
  "relentless": 1.8751,
  "persistent": 2.1004,
  "futile": 1.8573,
  "pointless": 2.238,
  "commend": 1.9445,
  "endorse": 1.8513,
  "brook": 1.8513,
  "tolerate": 2.4955,
  "coax": 1.5682,
  "cajole": 0.8451,
  "sanction": 1.6335,
  "authorize": 1.9731,
  "calamity": 1.7243,
  "disaster": 2.8357,
  "illustrious": 1.7782,
  "distinguished": 2.4099,
  "impeccable": 1.8692,
  "flawless": 1.8451,
  "orthodox": 1.5315,
  "conventional": 2.1239,
  "blemish": 1.415,
  "defect": 1.9494,
  "forge": 2.017,
  "fabricate": 1.2553,
  "contentious": 0.9542,
  "controversial": 1.9685,
  "utilitarian": 0.9031,
  "functional": 2.0792,
  "commiserate": 1,
  "sympathize": 1.8921,
  "upheaval": 1.3222,
  "convulsion": 1,
  "provenance": 0.7782,
  "origin": 2.2304,
  "maverick": 1.5185,
  "nonconformist": 0.7782,
  "ominous": 1.7404,
  "inauspicious": 0.699,
  "nascent": 0.7782,
  "budding": 1.5051,
  "invective": 0.4771,
  "vituperation": 0.301,
  "dissemble": 0.8451,
  "dissimulate": 0.301,
  "parsimonious": 0.301,
  "miserly": 0.6021,
  "abjure": 0.301,
  "renounce": 1.7709,
  "contravene": 0.301,
  "violate": 2.0569,
  "provisional": 1.415,
  "temporary": 2.7275,
  "erroneous": 1.2788,
  "inaccurate": 1.3617,
  "lenient": 1.6021,
  "clement": 1.2041,
  "sanguine": 0.7782,
  "optimistic": 2.1931,
};

const SOURCE_WORD_PAIRS = [
  {
    "a": [
      "parallel",
      "與…同時發生；相似；比得上"
    ],
    "b": [
      "match",
      "相配；相當；符合"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "defy",
      "反抗， 違抗"
    ],
    "b": [
      "disregard",
      "反抗， 違抗"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "concede",
      "（不情願地）承認"
    ],
    "b": [
      "acknowledge",
      "（不情願地）承認"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "robust",
      "強健的；有力的"
    ],
    "b": [
      "strong",
      "強壯的；堅強的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "ingenious",
      "機敏的，巧妙的"
    ],
    "b": [
      "clever",
      "機敏的，巧妙的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "condone",
      "縱容，寬恕"
    ],
    "b": [
      "excuse",
      "縱容，寬恕"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "conjure",
      "使人聯想到，想像出"
    ],
    "b": [
      "imagine",
      "使人聯想到，想像出"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "elicit",
      "引出（資訊或反應）"
    ],
    "b": [
      "draw",
      "引出（資訊或反應）"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "skirt",
      "避開（某話題或問題）"
    ],
    "b": [
      "circumvent",
      "（巧妙或非法地）逃避，規避"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "boon",
      "提高生活素質的東西，有用之物"
    ],
    "b": [
      "benefit",
      "提高生活素質的東西，有用之物"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "disdain",
      "蔑視，鄙視"
    ],
    "b": [
      "contempt",
      "蔑視，鄙視"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "devious",
      "迂迴的；不光明磊落的"
    ],
    "b": [
      "indirect",
      "間接的；迂迴的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "discord",
      "看法不一致，不和諧"
    ],
    "b": [
      "contention",
      "看法不一致，不和諧"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "daunting",
      "令人望而生畏的"
    ],
    "b": [
      "formidable",
      "令人生畏的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "extraneous",
      "非必要的，無關的"
    ],
    "b": [
      "irrelevant",
      "非必要的 ， 無關的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "augment",
      "增大，加強"
    ],
    "b": [
      "enhance",
      "增大，加強"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "accentuate",
      "強調，使明顯"
    ],
    "b": [
      "highlight",
      "強調，使明顯"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "hubris",
      "驕傲自大"
    ],
    "b": [
      "arrogance",
      "驕傲自大"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "enigmatic",
      "神秘的，費解的"
    ],
    "b": [
      "mysterious",
      "神秘的，費解的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "harbinger",
      "先兆，預兆"
    ],
    "b": [
      "herald",
      "先兆，預兆"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "construe",
      "理解，詮釋"
    ],
    "b": [
      "interpret",
      "理解，詮釋"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "instigate",
      "促使發生，挑起"
    ],
    "b": [
      "provoke",
      "促使發生，挑起"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "economy",
      "簡潔；節省用詞"
    ],
    "b": [
      "brevity",
      "簡潔；簡短"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "commensurate",
      "相當的，相稱的"
    ],
    "b": [
      "equivalent",
      "相當的，相稱的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "engender",
      "導致，產生"
    ],
    "b": [
      "induce",
      "誘使，導致"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "belie",
      "掩飾；掩蓋"
    ],
    "b": [
      "mask",
      "掩飾；遮掩"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "effusive",
      "情感豐富的，熱情洋溢的"
    ],
    "b": [
      "emotional",
      "情感豐富的，熱情洋溢的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "analogous",
      "可比擬的，類似的"
    ],
    "b": [
      "comparable",
      "可比擬的，類似的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "acquiescence",
      "默許；同意"
    ],
    "b": [
      "accession",
      "同意；贊成"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "homogeneous",
      "同類的；均質的"
    ],
    "b": [
      "uniform",
      "一致的；統一的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "glean",
      "逐步收集；蒐集資訊"
    ],
    "b": [
      "obtain",
      "取得；獲得"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "castigate",
      "嚴厲指責"
    ],
    "b": [
      "chastise",
      "嚴厲批評，譴責"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "discrepancy",
      "差異，不一致"
    ],
    "b": [
      "incongruity",
      "差異，不一致"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "cupidity",
      "（對金錢或財產的）貪心，貪婪"
    ],
    "b": [
      "avarice",
      "（對金錢或財產的）貪心，貪婪"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "permeable",
      "可滲透的，可滲入的"
    ],
    "b": [
      "porous",
      "多孔的，能滲透的 ，多漏洞的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "staid",
      "沉穩嚴肅的；一本正經的"
    ],
    "b": [
      "sober",
      "嚴肅的；冷靜的"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "obviate",
      "排除，使無必要"
    ],
    "b": [
      "preclude",
      "杜絕，防止"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "sluggish",
      "行動緩慢的，遲緩的"
    ],
    "b": [
      "dilatory",
      "拖延的，緩慢的"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "shun",
      "迴避，避開"
    ],
    "b": [
      "eschew",
      "迴避"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "contradict",
      "反駁"
    ],
    "b": [
      "gainsay",
      "否認，反對"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "baffle",
      "使困惑"
    ],
    "b": [
      "flummox",
      "使困惑，使不知所措"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "doctrinaire",
      "教條主義的，脫離實際的"
    ],
    "b": [
      "dogmatic",
      "武斷的，自以為是的，教條的"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "fungible",
      "易於交換（或交易）的"
    ],
    "b": [
      "interchangeable",
      "易於交換（或交易）的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "oust",
      "驅逐，趕走"
    ],
    "b": [
      "expel",
      "驅逐，趕走"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "edify",
      "教化，啟迪"
    ],
    "b": [
      "enlighten",
      "教化，啟迪"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "attenuate",
      "使減弱；使降低"
    ],
    "b": [
      "shrink",
      "（使）縮小；減少"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "panacea",
      "萬能之計，靈丹妙藥"
    ],
    "b": [
      "remedy",
      "萬能之計，靈丹妙藥"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "hypocrisy",
      "虛偽，偽善"
    ],
    "b": [
      "insincerity",
      "虛偽，偽善"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "mendacious",
      "說謊的；不誠實的"
    ],
    "b": [
      "disingenuous",
      "不坦率的；不誠實的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "plastic",
      "可塑的，有適應性的"
    ],
    "b": [
      "malleable",
      "可塑的，易適應的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "stringent",
      "嚴格的，苛刻的"
    ],
    "b": [
      "draconian",
      "苛刻的，嚴厲的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "vex",
      "使煩惱，使惱火"
    ],
    "b": [
      "irk",
      "使厭煩，使惱火"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "formulaic",
      "套用公式的，老套的"
    ],
    "b": [
      "canned",
      "了無新意的，千篇一律的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "contemptuous",
      "輕蔑的"
    ],
    "b": [
      "scornful",
      "輕視的，鄙視的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "languish",
      "失去活力，被忽視"
    ],
    "b": [
      "stagnate",
      "停滯，不發展"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "noisome",
      "令人厭惡的；有臭味的"
    ],
    "b": [
      "obnoxious",
      "令人討厭的；可憎的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "prophetic",
      "預言的；預示的"
    ],
    "b": [
      "prescient",
      "有先見之明的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "rapacious",
      "貪婪的；掠奪成性的"
    ],
    "b": [
      "avaricious",
      "貪婪的；貪財的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "promulgate",
      "傳播，宣揚（思想或信仰）"
    ],
    "b": [
      "disseminate",
      "散佈，宣傳"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "gawky",
      "笨拙的"
    ],
    "b": [
      "ungainly",
      "笨手笨腳的，舉止不優雅的"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "lugubrious",
      "憂鬱的，悲傷的"
    ],
    "b": [
      "gloomy",
      "憂鬱 的 ，愁悶 的，悲觀的"
    ],
    "difficulty": 5,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "mercenary",
      "唯利是圖的"
    ],
    "b": [
      "exploitative",
      "剝削的；利用他人的"
    ],
    "difficulty": 4,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "petulant",
      "孩子氣的，任性的，脾氣暴躁的"
    ],
    "b": [
      "prickly",
      "易動怒的，易生氣的"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "anomalous",
      "反常的"
    ],
    "b": [
      "aberrant",
      "違反常規的"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "pompous",
      "自大的；浮誇的"
    ],
    "b": [
      "bombastic",
      "誇大的；言辭浮華的"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "avert",
      "防止，避免"
    ],
    "b": [
      "forestall",
      "預先阻止，先發制人"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "cursory",
      "倉促草率的；粗略的"
    ],
    "b": [
      "perfunctory",
      "敷衍的；草率的"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "coax",
      "哄勸；耐心勸說"
    ],
    "b": [
      "cajole",
      "好言勸誘；哄勸"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "unyielding",
      "不屈服的，堅定的"
    ],
    "b": [
      "implacable",
      "無法平息的，堅定的"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "acrimony",
      "激烈，尖刻，火藥味"
    ],
    "b": [
      "rancor",
      "積怨，怨恨"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "paragon",
      "典範；完美模範"
    ],
    "b": [
      "model",
      "典範；模範"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "caricature",
      "諷刺畫；誇張的諷刺描述"
    ],
    "b": [
      "burlesque",
      "滑稽模仿；諷刺作品"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "thwart",
      "反對，阻撓"
    ],
    "b": [
      "frustrate",
      "反對，阻撓"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "opportune",
      "（時間）合適的，恰當的"
    ],
    "b": [
      "timely",
      "（時間）合適的，恰當的"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "expedient",
      "權宜且適宜的；方便的"
    ],
    "b": [
      "advantageous",
      "有利的；有益的"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "temperate",
      "（行為）溫和的，有節制的"
    ],
    "b": [
      "restrained",
      "（行為）溫和的，有節制的"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "marginal",
      "邊緣的，不重要的"
    ],
    "b": [
      "peripheral",
      "邊緣的，無關緊要的"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "exhaustive",
      "詳盡的，全面的"
    ],
    "b": [
      "comprehensive",
      "全面的，詳盡的"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "brazen",
      "毫不隱瞞的，明目張膽的"
    ],
    "b": [
      "audacious",
      "大膽的，敢於冒險的"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "impenetrable",
      "費解的，無法理解的"
    ],
    "b": [
      "inscrutable",
      "高深莫測的，難以捉摸的"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "lull",
      "平靜時期，間歇"
    ],
    "b": [
      "respite",
      "暫緩，喘息"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "meager",
      "很少的，不足的"
    ],
    "b": [
      "paltry",
      "少量的， 微不足道的"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "eclectic",
      "博採眾長的，多元的"
    ],
    "b": [
      "catholic",
      "廣泛的，包羅萬象的"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "predicament",
      "窘境，困境"
    ],
    "b": [
      "quandary",
      "困境，猶豫不決"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "solitude",
      "獨處，獨居"
    ],
    "b": [
      "seclusion",
      "獨處，獨居"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "discerning",
      "有眼光的，好眼力的"
    ],
    "b": [
      "insightful",
      "有眼光的，好眼力的"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "offset",
      "抵消，彌補"
    ],
    "b": [
      "compensate",
      "抵消，彌補"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "allure",
      "魅力，吸引力"
    ],
    "b": [
      "charm",
      "魅力，吸引力"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "leeway",
      "自由空間，餘地"
    ],
    "b": [
      "latitude",
      "自由空間，餘地"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "antiquated",
      "陳舊的，過時的"
    ],
    "b": [
      "outdated",
      "陳舊的，過時的"
    ],
    "difficulty": 3,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "calculated",
      "算計好的，蓄意的"
    ],
    "b": [
      "deliberate",
      "（常指壞事）蓄意的"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "condescending",
      "居高臨下的，睥睨的"
    ],
    "b": [
      "patronizing",
      "自以為高人一等的"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "spontaneous",
      "非籌劃安排的，即興的 ，為人率直的"
    ],
    "b": [
      "impromptu",
      "無準備的，即興的"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "rudimentary",
      "基本的，粗略的"
    ],
    "b": [
      "sketchy",
      "粗略的 ，不完全的"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "beholden",
      "欠人情的，受惠的，感激的"
    ],
    "b": [
      "indebted",
      "感激的"
    ],
    "difficulty": 2,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "check",
      "制止，抑制"
    ],
    "b": [
      "brake",
      "制止，抑制"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "absurd",
      "荒 唐 的， 愚蠢可笑 的"
    ],
    "b": [
      "preposterous",
      "荒 唐 的， 愚蠢可笑 的"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "sordid",
      "不道德的，卑鄙的"
    ],
    "b": [
      "sleazy",
      "不道德的，卑鄙的"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "chic",
      "時髦的，高雅的"
    ],
    "b": [
      "elegant",
      "時髦的，高雅的"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "cerebral",
      "理智的，理性的"
    ],
    "b": [
      "intellectual",
      "理智的，理性的"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "relentless",
      "持續強烈的"
    ],
    "b": [
      "persistent",
      "持續強烈的"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "futile",
      "無作用的"
    ],
    "b": [
      "pointless",
      "無作用的"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "commend",
      "推薦，讚揚"
    ],
    "b": [
      "endorse",
      "推薦，讚揚"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "brook",
      "容忍，接納（主要用於否定句）"
    ],
    "b": [
      "tolerate",
      "容忍，接納（主要用於否定句）"
    ],
    "difficulty": 1,
    "fallbackBasis": "SUBTLEX-US frequency"
  }
];

const REPLACEMENT_WORD_PAIRS = [
  {
    "a": [
      "sanction",
      "批准；認可"
    ],
    "b": [
      "authorize",
      "授權；批准"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "calamity",
      "災難；災禍"
    ],
    "b": [
      "disaster",
      "災難；災禍"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "illustrious",
      "著名的；卓越的"
    ],
    "b": [
      "distinguished",
      "著名的；傑出的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "impeccable",
      "無可挑剔的；完美的"
    ],
    "b": [
      "flawless",
      "完美無瑕的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "orthodox",
      "正統的；傳統的"
    ],
    "b": [
      "conventional",
      "傳統的；依慣例的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "blemish",
      "瑕疵；缺點"
    ],
    "b": [
      "defect",
      "缺陷；缺點"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "forge",
      "偽造；假冒"
    ],
    "b": [
      "fabricate",
      "捏造；偽造"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "contentious",
      "好爭論的；易引起爭論的"
    ],
    "b": [
      "controversial",
      "有爭議的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "utilitarian",
      "實用的；功利的"
    ],
    "b": [
      "functional",
      "實用的；功能正常的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "commiserate",
      "表示同情；慰問"
    ],
    "b": [
      "sympathize",
      "同情；表示惋惜"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "upheaval",
      "劇變；動盪"
    ],
    "b": [
      "convulsion",
      "劇烈動盪；劇變"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "provenance",
      "來源；出處"
    ],
    "b": [
      "origin",
      "起源；來源"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "maverick",
      "特立獨行者"
    ],
    "b": [
      "nonconformist",
      "不循常規的人"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "ominous",
      "不祥的；預兆不好的"
    ],
    "b": [
      "inauspicious",
      "不吉利的；不順利的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "nascent",
      "新生的；初現的"
    ],
    "b": [
      "budding",
      "初露頭角的；剛起步的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "invective",
      "辱罵；痛斥"
    ],
    "b": [
      "vituperation",
      "謾罵；痛罵"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "dissemble",
      "掩飾（真實動機）"
    ],
    "b": [
      "dissimulate",
      "掩飾（真實感情或動機）"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "parsimonious",
      "吝嗇的；過度節儉的"
    ],
    "b": [
      "miserly",
      "小氣吝嗇的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "abjure",
      "公開放棄；發誓戒除"
    ],
    "b": [
      "renounce",
      "放棄；宣布不再支持"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "contravene",
      "違反；與……牴觸"
    ],
    "b": [
      "violate",
      "違反；侵犯"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "provisional",
      "暫時的；臨時的"
    ],
    "b": [
      "temporary",
      "暫時的；臨時的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "erroneous",
      "錯誤的；不正確的"
    ],
    "b": [
      "inaccurate",
      "不準確的；錯誤的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "lenient",
      "寬容的；從輕的"
    ],
    "b": [
      "clement",
      "寬厚的；仁慈的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "sanguine",
      "樂觀的；抱有希望的"
    ],
    "b": [
      "optimistic",
      "樂觀的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency"
  },
  {
    "a": [
      "groundless",
      "毫無根據的；缺乏事實支撐的"
    ],
    "b": [
      "unwarranted",
      "不合理的；沒有正當理由的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency",
    "difficulty": 2
  },
  {
    "a": [
      "stymie",
      "阻撓；使陷入僵局"
    ],
    "b": [
      "hinder",
      "妨礙進展；使更困難"
    ],
    "fallbackBasis": "SUBTLEX-US frequency",
    "difficulty": 3
  },
  {
    "a": [
      "conspicuous",
      "顯眼的；醒目的"
    ],
    "b": [
      "salient",
      "顯著的；突出的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency",
    "difficulty": 3
  },
  {
    "a": [
      "obliterate",
      "徹底摧毀或抹除"
    ],
    "b": [
      "annihilate",
      "完全消滅；使不復存在"
    ],
    "fallbackBasis": "SUBTLEX-US frequency",
    "difficulty": 4
  },
  {
    "a": [
      "obdurate",
      "頑固不化的；拒不改變立場"
    ],
    "b": [
      "intransigent",
      "不願妥協的；立場強硬的"
    ],
    "fallbackBasis": "SUBTLEX-US frequency",
    "difficulty": 4
  }
];

const PAIR_MERGE_GROUPS = [
  [
    "alleviate|mitigate",
    "abate|diminish",
    "dwindle|wane",
    "appease|placate",
    "allay|assuage"
  ],
  [
    "esoteric|recondite",
    "obscure|opaque"
  ],
  [
    "circumspect|prudent",
    "vigilant|wary"
  ],
  [
    "laconic|terse",
    "reticent|taciturn",
    "concise|succinct"
  ],
  [
    "censure|condemn",
    "denounce|lambaste"
  ],
  [
    "genial|jovial",
    "affable|amiable"
  ],
  [
    "capricious|fickle",
    "mercurial|volatile"
  ],
  [
    "incessant|perpetual",
    "unceasing|unremitting"
  ],
  [
    "adamant|resolute",
    "intransigent|obdurate"
  ],
  [
    "hamper|impede",
    "hinder|stymie"
  ],
  [
    "mundane|ordinary",
    "nondescript|prosaic"
  ],
  [
    "eradicate|extirpate",
    "annihilate|obliterate"
  ],
  [
    "unfounded|unjustified",
    "groundless|unwarranted"
  ],
  [
    "apogee|pinnacle",
    "heyday|zenith"
  ],
  [
    "immaterial|inconsequential",
    "insignificant|negligible"
  ],
  [
    "obviate|preclude",
    "avert|forestall"
  ],
  [
    "avaricious|rapacious",
    "exploitative|mercenary"
  ],
  [
    "adverse|inimical",
    "baneful|noxious"
  ],
  [
    "insipid|vapid",
    "banal|hackneyed"
  ],
  [
    "deprecate|disparage",
    "deride|ridicule"
  ]
];
const REMOVED_PRIMARY_PAIR_KEYS = new Set([
  "accession|acquiescence",
  "advantageous|expedient",
  "condone|excuse",
  "conspicuous|obtrusive",
  "languish|stagnate",
]);
const PROMOTED_BASE_PAIR_KEYS = new Set([
  "groundless|unwarranted",
  "hinder|stymie",
  "conspicuous|salient",
  "annihilate|obliterate",
  "intransigent|obdurate",
]);
const REMOVED_PAIR_KEYS = new Set([
  ...PAIR_MERGE_GROUPS.flatMap((group) => group.slice(1)),
  ...REMOVED_PRIMARY_PAIR_KEYS,
]);

const CEFR_WORD_LEVELS = {
  "arduous": "C2",
  "benevolent": "C2",
  "assiduous": "C2",
  "elated": "C2",
  "frugal": "C2",
  "hostile": "C1",
  "impartial": "C2",
  "alleviate": "C2",
  "circumspect": "C2",
  "ephemeral": "C2",
  "gregarious": "C2",
  "haughty": "C2",
  "appease": "C2",
  "dubious": "C2",
  "fervent": "C2",
  "censure": "C2",
  "condemn": "C1",
  "diminish": "C1",
  "abate": "C2",
  "eloquent": "C2",
  "articulate": "C1",
  "fortuitous": "C2",
  "garrulous": "C2",
  "languid": "C2",
  "exonerate": "C2",
  "dwindle": "C2",
  "affable": "C2",
  "buttress": "C2",
  "capricious": "C2",
  "fickle": "C2",
  "dearth": "C2",
  "emulate": "C2",
  "exacerbate": "C2",
  "imminent": "C1",
  "inane": "C2",
  "incessant": "C2",
  "inept": "C2",
  "apparent": "B2",
  "adamant": "C2",
  "deride": "C2",
  "efficacious": "C2",
  "effective": "B1",
  "impede": "C2",
  "hamper": "C2",
  "incisive": "C2",
  "laud": "C2",
  "extol": "C2",
  "ordinary": "A2",
  "plausible": "C1",
  "credible": "C1",
  "convoluted": "C2",
  "assuage": "C2",
  "banal": "C2",
  "hackneyed": "C2",
  "clandestine": "C2",
  "furtive": "C2",
  "egregious": "C2",
  "flagrant": "C2",
  "eradicate": "C2",
  "esoteric": "C2",
  "facetious": "C2",
  "guile": "C2",
  "duplicity": "C2",
  "insipid": "C2",
  "genial": "C2",
  "laconic": "C2",
  "animosity": "C2",
  "indifferent": "C2",
  "caustic": "C2",
  "intrepid": "C2",
  "impetuous": "C2",
  "insolent": "C2",
  "compulsory": "B2",
  "mandatory": "C1",
  "encompass": "C1",
  "comprise": "C1",
  "inherent": "C1",
  "intrinsic": "C2",
  "embark": "C1",
  "commence": "C1",
  "coincide": "C1",
  "equivocal": "C2",
  "adverse": "C1",
  "inimical": "C2",
  "advocate": "C1",
  "manipulate": "C1",
  "excoriate": "C2",
  "antipathy": "C2",
  "aversion": "C2",
  "anomaly": "C2",
  "aberration": "C2",
  "kindle": "C2",
  "conjecture": "C2",
  "disparage": "C2",
  "forsake": "C2",
  "forgo": "C2",
  "ebullient": "C2",
  "exuberant": "C2",
  "fidelity": "C2",
  "allegiance": "C2",
  "lament": "C2",
  "deplore": "C2",
  "deplorable": "C2",
  "liberal": "C1",
  "elusive": "C2",
  "forerunner": "C2",
  "dangerous": "A1",
  "complicated": "B2",
  "cunning": "C2",
  "callous": "C2",
  "diffident": "C2",
  "lambaste": "C2",
  "denounce": "C1",
  "expedite": "C2",
  "facilitate": "C1",
  "diversity": "B2",
  "novel": "A2",
  "haphazard": "C2",
  "auspicious": "C2",
  "austere": "C2",
  "innocuous": "C2",
  "intransigent": "C2",
  "provincial": "C1",
  "itinerant": "C2",
  "abeyance": "C2",
  "fiasco": "C2",
  "debacle": "C2",
  "conundrum": "C2",
  "enigma": "C2",
  "parallel": "B2",
  "match": "A1",
  "defy": "C1",
  "disregard": "C1",
  "concede": "C1",
  "acknowledge": "B2",
  "robust": "C1",
  "strong": "A1",
  "ingenious": "C2",
  "clever": "A2",
  "condone": "C2",
  "excuse": "B2",
  "conjure": "C2",
  "imagine": "A2",
  "elicit": "C2",
  "draw": "A1",
  "skirt": "A1",
  "circumvent": "C2",
  "boon": "C2",
  "benefit": "B1",
  "disdain": "C2",
  "contempt": "C1",
  "devious": "C2",
  "indirect": "B1",
  "discord": "C2",
  "contention": "C1",
  "daunting": "C2",
  "formidable": "C2",
  "extraneous": "C2",
  "irrelevant": "C1",
  "augment": "C2",
  "enhance": "B2",
  "accentuate": "C2",
  "highlight": "B1",
  "hubris": "C2",
  "arrogance": "C2",
  "enigmatic": "C2",
  "mysterious": "B2",
  "harbinger": "C2",
  "herald": "C2",
  "construe": "C2",
  "interpret": "B2",
  "instigate": "C2",
  "provoke": "C1",
  "economy": "B1",
  "brevity": "C2",
  "commensurate": "C2",
  "equivalent": "B2",
  "engender": "C2",
  "induce": "C1",
  "belie": "C2",
  "mask": "A2",
  "effusive": "C2",
  "emotional": "B2",
  "analogous": "C2",
  "comparable": "C1",
  "acquiescence": "C2",
  "accession": "C2",
  "homogeneous": "C2",
  "uniform": "A2",
  "glean": "C2",
  "obtain": "B2",
  "castigate": "C2",
  "chastise": "C2",
  "discrepancy": "C2",
  "incongruity": "C2",
  "cupidity": "C2",
  "avarice": "C2",
  "dilatory": "C2",
  "eschew": "C2",
  "dogmatic": "C2",
  "remedy": "C1",
  "hypocrisy": "C2",
  "disingenuous": "C2",
  "plastic": "A2",
  "irk": "C2",
  "languish": "C2",
  "disseminate": "C2",
  "bombastic": "C2",
  "forestall": "C2",
  "cursory": "C2",
  "implacable": "C2",
  "acrimony": "C2",
  "model": "B1",
  "expedient": "C2",
  "marginal": "C1",
  "comprehensive": "B2",
  "inscrutable": "C2",
  "eclectic": "C2",
  "compensate": "C1",
  "charm": "C1",
  "latitude": "C2",
  "antiquated": "C2",
  "deliberate": "B2",
  "impromptu": "C2",
  "check": "A1",
  "absurd": "C1",
  "elegant": "B2",
  "intellectual": "B2",
  "persistent": "C1",
  "futile": "C2",
  "endorse": "C1",
  "lethargic": "C2",
  "loathe": "C2",
  "loquacious": "C2",
  "lucid": "C2",
  "malice": "C2",
  "malign": "C2",
  "meticulous": "C2",
  "mitigate": "C2",
  "mundane": "C2",
  "munificent": "C2",
  "neophyte": "C2",
  "nonchalant": "C2",
  "novice": "C2",
  "noxious": "C2",
  "obdurate": "C2",
  "obliterate": "C2",
  "obscure": "C2",
  "obsequious": "C2",
  "obstinate": "C2",
  "opaque": "C2",
  "opulent": "C2",
  "ostensible": "C2",
  "ostentatious": "C2",
  "perilous": "C2",
  "perpetual": "C2",
  "pervasive": "C2",
  "pinnacle": "C2",
  "placate": "C2",
  "plethora": "C2",
  "precursor": "C2",
  "predilection": "C2",
  "proclivity": "C2",
  "prodigal": "C2",
  "prolific": "C2",
  "propitious": "C2",
  "proponent": "C2",
  "prosaic": "C2",
  "prudent": "C2",
  "pugnacious": "C2",
  "puzzle": "B2",
  "quash": "C2",
  "quell": "C2",
  "rebuke": "C2",
  "recalcitrant": "C2",
  "recant": "C2",
  "recondite": "C2",
  "relic": "C2",
  "relinquish": "C2",
  "reprehensible": "C2",
  "reproach": "C2",
  "repugnant": "C2",
  "resolute": "C2",
  "resolve": "B2",
  "reticent": "C2",
  "retract": "C2",
  "revere": "C2",
  "sagacious": "C2",
  "salubrious": "C2",
  "scarcity": "C2",
  "scourge": "C2",
  "scrupulous": "C2",
  "serendipitous": "C2",
  "shackle": "C2",
  "sloth": "C2",
  "spur": "C2",
  "spurious": "C2",
  "stagnant": "C2",
  "stifle": "C2",
  "subtle": "C1",
  "succinct": "C2",
  "succumb": "C2",
  "supersede": "C2",
  "supplant": "C2",
  "suppress": "C1",
  "surfeit": "C2",
  "surmise": "C2",
  "susceptible": "C2",
  "sycophantic": "C2",
  "taciturn": "C2",
  "tedious": "C2",
  "tenacious": "C2",
  "tenacity": "C2",
  "terse": "C2",
  "timorous": "C2",
  "tortuous": "C2",
  "tranquil": "C2",
  "transient": "C2",
  "trenchant": "C2",
  "truculent": "C2",
  "ubiquitous": "C2",
  "undermine": "C1",
  "unfathomable": "C2",
  "unremitting": "C2",
  "vacillate": "C2",
  "vacillation": "C2",
  "vacuous": "C2",
  "vapid": "C2",
  "veneration": "C2",
  "verbose": "C2",
  "vestige": "C2",
  "vilify": "C2",
  "vindicate": "C2",
  "virulent": "C2",
  "vitriolic": "C2",
  "volatile": "C2",
  "vulnerable": "C1",
  "wane": "C2",
  "yield": "C1",
  "zeal": "C2",
  "zealous": "C2",
  "zenith": "C2",
  "disaster": "A2",
  "impeccable": "C2",
  "conventional": "B2",
  "defect": "C1",
  "forge": "C1",
  "fabricate": "C2",
  "controversial": "B2",
  "functional": "C1",
  "commiserate": "C2",
  "origin": "B2",
  "invective": "C2",
  "abjure": "C2",
  "contravene": "C2",
  "optimistic": "B2",
};
const CEFR_LEVEL_ORDER = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };

function getPairCefrLevel(pair) {
  const firstLevel = CEFR_WORD_LEVELS[pair.a[0].toLowerCase()];
  const secondLevel = CEFR_WORD_LEVELS[pair.b[0].toLowerCase()];
  if (!firstLevel || !secondLevel) return null;
  return CEFR_LEVEL_ORDER[firstLevel] >= CEFR_LEVEL_ORDER[secondLevel] ? firstLevel : secondLevel;
}

function getPairFrequencyScore(pair) {
  const firstScore = SUBTLEX_LG10CD[pair.a[0].toLowerCase()];
  const secondScore = SUBTLEX_LG10CD[pair.b[0].toLowerCase()];
  if (!Number.isFinite(firstScore) || !Number.isFinite(secondScore)) return -1;
  return Math.min(firstScore, secondScore);
}

const UNLISTED_SOURCE_PAIRS = [
  ...SOURCE_WORD_PAIRS.filter((pair) => !REMOVED_PAIR_KEYS.has(getPairVariantKey(pair))),
  ...REPLACEMENT_WORD_PAIRS,
].filter((pair) => !getPairCefrLevel(pair))
  .sort((a, b) => getPairFrequencyScore(b) - getPairFrequencyScore(a));
const SOURCE_FREQUENCY_DIFFICULTY = new Map();
UNLISTED_SOURCE_PAIRS.forEach((pair, index) => {
  SOURCE_FREQUENCY_DIFFICULTY.set(
    getPairVariantKey(pair),
    Math.floor((index * 5) / UNLISTED_SOURCE_PAIRS.length) + 1,
  );
});

function getLegacyDifficultyRank(pair, index, isNewPair) {
  const sourceRank = SOURCE_FREQUENCY_DIFFICULTY.get(getPairVariantKey(pair));
  if (isNewPair && !getPairCefrLevel(pair) && sourceRank) return sourceRank;
  if (Number.isFinite(pair.difficulty)) return pair.difficulty;
  if (isNewPair) return 5;
  const existingBand = index < 40 ? 1 : index < 72 ? 2 : 3;
  return existingBand === 1 ? 1 : existingBand === 2 ? 3 : 5;
}

function decorateCampaignPair(pair, sourceOrder, isNewPair) {
  const cefrLevel = getPairCefrLevel(pair);
  const legacyDifficultyRank = getLegacyDifficultyRank(pair, sourceOrder, isNewPair);
  return {
    ...pair,
    cefrLevel,
    difficultyBasis: cefrLevel ? "ESL-Lounge CEFR" : pair.fallbackBasis || "existing difficulty",
    orderingLevel: cefrLevel ? CEFR_LEVEL_ORDER[cefrLevel] : legacyDifficultyRank,
    legacyDifficultyRank,
    frequencyScore: getPairFrequencyScore(pair),
    sourceOrder,
  };
}

const CAMPAIGN_PAIRS = [
  ...WORD_PAIRS.map((pair, index) => ({ pair, index }))
    .filter(({ pair }) => !REMOVED_PAIR_KEYS.has(getPairVariantKey(pair)))
    .map(({ pair, index }) => decorateCampaignPair(pair, index, false)),
  ...NEW_WORD_PAIRS.map((pair, index) => ({ pair, index }))
    .filter(({ pair }) => !REMOVED_PAIR_KEYS.has(getPairVariantKey(pair)))
    .map(({ pair, index }) => decorateCampaignPair(pair, WORD_PAIRS.length + index, true)),
  ...SOURCE_WORD_PAIRS.map((pair, index) => ({ pair, index }))
    .filter(({ pair }) => !REMOVED_PAIR_KEYS.has(getPairVariantKey(pair)))
    .map(({ pair, index }) => decorateCampaignPair(
      pair,
      WORD_PAIRS.length + NEW_WORD_PAIRS.length + index,
      true,
    )),
  ...REPLACEMENT_WORD_PAIRS.map((pair, index) => decorateCampaignPair(
    pair,
    WORD_PAIRS.length + NEW_WORD_PAIRS.length + SOURCE_WORD_PAIRS.length + index,
    true,
  )),
].sort((a, b) =>
  a.orderingLevel - b.orderingLevel
  || Number(Boolean(b.cefrLevel)) - Number(Boolean(a.cefrLevel))
  || (a.cefrLevel && b.cefrLevel ? 0 : a.legacyDifficultyRank - b.legacyDifficultyRank)
  || b.frequencyScore - a.frequencyScore
  || a.sourceOrder - b.sourceOrder,
);

// Alternative partners are curated by word sense and part of speech.
const PAIR_SYNONYM_VARIANTS = {
  "abundant|plentiful": [
    [["abundant", "豐富的；充足的"], ["bountiful", "豐富的；充裕的"]],
  ],
  "arduous|strenuous": [
    [["arduous", "艱鉅的；費力的"], ["laborious", "費力的；艱鉅的"]],
  ],
  "meticulous|scrupulous": [
    [["meticulous", "一絲不苟的；極仔細的"], ["fastidious", "一絲不苟的；講究細節的"]],
    [["meticulous", "一絲不苟的；極仔細的"], ["punctilious", "一絲不苟的；嚴守細節的"]],
  ],
  "neophyte|novice": [
    [["novice", "新手；初學者"], ["tyro", "新手；初學者"]],
  ],
  "bolster|buttress": [
    [["bolster", "支持；加強"], ["cement", "鞏固；加強"]],
    [["buttress", "支撐；鞏固"], ["underpin", "支撐；作為基礎"]],
  ],
  "deprecate|disparage": [
    [["disparage", "貶低；輕視"], ["belittle", "貶低；小看"]],
  ],
  "extol|laud": [
    [["extol", "頌揚；高度讚美"], ["glorify", "頌揚；美化"]],
  ],
  "capricious|fickle": [
    [["capricious", "反覆無常的；任性的"], ["mercurial", "反覆多變的；善變的"]],
    [["fickle", "善變的；不穩定的"], ["volatile", "易變的；反覆無常的"]],
  ],
  "mercurial|volatile": [
    [["capricious", "反覆無常的；任性的"], ["mercurial", "反覆多變的；善變的"]],
    [["fickle", "善變的；不穩定的"], ["volatile", "易變的；反覆無常的"]],
  ],
  "abate|diminish": [
    [["diminish", "減少；削弱"], ["dwindle", "逐漸減少；縮小"]],
  ],
  "dwindle|wane": [
    [["diminish", "減少；削弱"], ["dwindle", "逐漸減少；縮小"]],
  ],
  "obscure|opaque": [
    [["obscure", "晦澀難懂的；不明確的"], ["recondite", "艱深的；晦澀難懂的"]],
  ],
  "esoteric|recondite": [
    [["obscure", "晦澀難懂的；不明確的"], ["recondite", "艱深的；晦澀難懂的"]],
  ],
  "vigilant|wary": [
    [["wary", "小心的；警惕的"], ["circumspect", "審慎的；小心的"]],
  ],
  "circumspect|prudent": [
    [["prudent", "謹慎的；明智的"], ["discreet", "謹慎的；慎重的"]],
    [["wary", "小心的；警惕的"], ["circumspect", "審慎的；小心的"]],
  ],
  "pugnacious|truculent": [
    [["pugnacious", "好鬥的；愛挑釁的"], ["belligerent", "好鬥的；挑釁的"]],
  ],
  "conjecture|surmise": [
    [["surmise", "推測；猜測"], ["speculate", "推測；臆測"]],
  ],
  "erode|undermine": [
    [["undermine", "暗中削弱；逐漸損害"], ["mar", "損害；破壞"]],
    [["undermine", "暗中削弱；逐漸損害"], ["vitiate", "損害；削弱"]],
  ],
  "hamper|impede": [
    [["hamper", "妨礙；牽制"], ["hinder", "阻礙；妨礙"]],
  ],
  "hinder|stymie": [
    [["hamper", "妨礙；牽制"], ["hinder", "阻礙；妨礙"]],
  ],
  "affable|amiable": [
    [["affable", "親切友善的"], ["genial", "和藹親切的；友善的"]],
  ],
  "genial|jovial": [
    [["affable", "親切友善的"], ["genial", "和藹親切的；友善的"]],
  ],
  "convoluted|tortuous": [
    [["tortuous", "曲折的；錯綜複雜的"], ["labyrinthine", "錯綜複雜的；迷宮般的"]],
    [["intricate", "錯綜複雜的；精細的"], ["convoluted", "複雜難懂的；盤繞的"]],
  ],
  "emulate|imitate": [
    [["imitate", "模仿；仿效"], ["mimic", "模仿；摹仿"]],
  ],
  "conundrum|enigma": [
    [["riddle", "謎語；謎題"], ["conundrum", "難題；棘手問題"]],
    [["riddle", "謎語；謎題"], ["enigma", "謎團；難以解釋的人或事"]],
    [["riddle", "謎語；謎題"], ["puzzle", "謎題；令人困惑的事"]],
  ],
  "rebuke|reproach": [
    [["rebuke", "指責；斥責"], ["berate", "嚴厲責罵"]],
  ],
  "dangerous|perilous": [
    [["perilous", "危險的；險峻的"], ["precarious", "岌岌可危的；不穩定的"]],
  ],
};

// Synonym rotations extracted from the provided GRE lists and reviewed for part of speech.
// Synonym rotations extracted from the provided GRE lists and reviewed for part of speech.
const SOURCE_SYNONYM_VARIANTS = {
  "abate|diminish": [
    [
      [
        "abate",
        "減弱；減退"
      ],
      [
        "dissipate",
        "（使）逐漸消失"
      ]
    ],
    [
      [
        "abate",
        "減弱；減退"
      ],
      [
        "mitigate",
        "減輕；緩和"
      ]
    ],
    [
      [
        "downplay",
        "對…輕描淡寫"
      ],
      [
        "diminish",
        "減少；削弱"
      ]
    ]
  ],
  "abominate|loathe": [
    [
      [
        "detest",
        "厭惡，討厭"
      ],
      [
        "loathe",
        "厭惡；憎恨"
      ]
    ]
  ],
  "abundant|plentiful": [
    [
      [
        "copious",
        "大量的"
      ],
      [
        "abundant",
        "豐富的；充足的"
      ]
    ]
  ],
  "adverse|inimical": [
    [
      [
        "adverse",
        "不利的；有害的"
      ],
      [
        "unfavorable",
        "不利的，有害的"
      ]
    ],
    [
      [
        "inimical",
        "不利的；有害的"
      ],
      [
        "deleterious",
        "造成危害的"
      ]
    ]
  ],
  "advocate|proponent": [
    [
      [
        "espouse",
        "支持，擁護"
      ],
      [
        "advocate",
        "擁護者；提倡者"
      ]
    ],
    [
      [
        "champion",
        "擁護者；捍衛者"
      ],
      [
        "advocate",
        "擁護者；提倡者"
      ]
    ],
    [
      [
        "champion",
        "擁護者；捍衛者"
      ],
      [
        "proponent",
        "支持者；提倡者"
      ]
    ]
  ],
  "affable|amiable": [
    [
      [
        "affable",
        "親切友善的"
      ],
      [
        "cordial",
        "友好的，誠摯的"
      ]
    ],
    [
      [
        "affable",
        "親切友善的"
      ],
      [
        "easygoing",
        "容易交談的，友善的"
      ]
    ]
  ],
  "aggravate|exacerbate": [
    [
      [
        "compound",
        "使加劇，使惡化"
      ],
      [
        "aggravate",
        "加重；使更嚴重"
      ]
    ],
    [
      [
        "compound",
        "使加劇，使惡化"
      ],
      [
        "exacerbate",
        "使惡化；加劇"
      ]
    ],
    [
      [
        "exacerbate",
        "使惡化；加劇"
      ],
      [
        "magnify",
        "使惡化，使加劇"
      ]
    ]
  ],
  "agile|nimble": [
    [
      [
        "deft",
        "熟練的，靈巧的"
      ],
      [
        "nimble",
        "敏捷的；靈巧的"
      ]
    ],
    [
      [
        "nimble",
        "敏捷的；靈巧的"
      ],
      [
        "adroit",
        "靈巧的，機敏的，幹練的"
      ]
    ],
    [
      [
        "nimble",
        "敏捷的；靈巧的"
      ],
      [
        "dexterous",
        "靈活的，敏捷的，機敏的"
      ]
    ],
    [
      [
        "nimble",
        "敏捷的；靈巧的"
      ],
      [
        "skillful",
        "靈活的，敏捷的，機敏的"
      ]
    ]
  ],
  "alienate|estrange": [
    [
      [
        "estrange",
        "使疏遠；離間"
      ],
      [
        "disaffect",
        "使疏遠，離間"
      ]
    ]
  ],
  "allay|assuage": [
    [
      [
        "assuage",
        "緩和；平息"
      ],
      [
        "palliate",
        "緩和，平息"
      ]
    ],
    [
      [
        "allay",
        "減輕；緩和"
      ],
      [
        "palliate",
        "減輕，緩解"
      ]
    ]
  ],
  "alleviate|mitigate": [
    [
      [
        "mitigate",
        "減輕；緩和"
      ],
      [
        "ameliorate",
        "改善"
      ]
    ],
    [
      [
        "mitigate",
        "減輕；緩和"
      ],
      [
        "mollify",
        "使平靜，撫慰"
      ]
    ],
    [
      [
        "mitigate",
        "減輕；緩和"
      ],
      [
        "temper",
        "使變溫和，緩和"
      ]
    ]
  ],
  "ambiguous|equivocal": [
    [
      [
        "equivocal",
        "模稜兩可的；含糊的"
      ],
      [
        "elusive",
        "難以捉摸的；難以理解的"
      ]
    ],
    [
      [
        "equivocal",
        "模稜兩可的；含糊的"
      ],
      [
        "evasive",
        "模棱兩可的，含糊的"
      ]
    ],
    [
      [
        "ambiguous",
        "模稜兩可的；不明確的"
      ],
      [
        "perplexing",
        "模棱兩可的，不明確的"
      ]
    ]
  ],
  "annihilate|obliterate": [
    [
      [
        "exterminate",
        "根除，滅絕"
      ],
      [
        "annihilate",
        "徹底摧毀；消滅"
      ]
    ],
    [
      [
        "exterminate",
        "根除，滅絕"
      ],
      [
        "obliterate",
        "徹底摧毀；抹除"
      ]
    ],
    [
      [
        "annihilate",
        "徹底摧毀；消滅"
      ],
      [
        "destroy",
        "徹底摧毀"
      ]
    ]
  ],
  "antagonistic|hostile": [
    [
      [
        "adversarial",
        "敵對的，對立的"
      ],
      [
        "antagonistic",
        "對立的；懷有敵意的"
      ]
    ],
    [
      [
        "antagonistic",
        "對立的；懷有敵意的"
      ],
      [
        "inimical",
        "不利的；有害的"
      ]
    ],
    [
      [
        "antagonistic",
        "對立的；懷有敵意的"
      ],
      [
        "opposed",
        "敵對的，對立的"
      ]
    ]
  ],
  "appease|placate": [
    [
      [
        "mollify",
        "使平靜，撫慰"
      ],
      [
        "placate",
        "安撫；平息"
      ]
    ],
    [
      [
        "appease",
        "安撫；使息怒"
      ],
      [
        "allay",
        "減輕；緩和"
      ]
    ],
    [
      [
        "appease",
        "安撫；使息怒"
      ],
      [
        "calm",
        "平息，撫慰，緩解"
      ]
    ],
    [
      [
        "appease",
        "安撫；使息怒"
      ],
      [
        "conciliate",
        "平息，撫慰，緩解"
      ]
    ],
    [
      [
        "appease",
        "安撫；使息怒"
      ],
      [
        "pacify",
        "平息，撫慰，緩解"
      ]
    ]
  ],
  "apposite|fitting": [
    [
      [
        "apposite",
        "貼切的；恰當的"
      ],
      [
        "germane",
        "有密切關係的，適切的"
      ]
    ],
    [
      [
        "apposite",
        "貼切的；恰當的"
      ],
      [
        "relevant",
        "適當的，貼切的"
      ]
    ],
    [
      [
        "germane",
        "有密切關係的，適切的"
      ],
      [
        "fitting",
        "合適的；恰當的"
      ]
    ]
  ],
  "arduous|strenuous": [
    [
      [
        "arduous",
        "艱鉅的；費力的"
      ],
      [
        "onerous",
        "繁重艱鉅的，麻煩的"
      ]
    ],
    [
      [
        "arduous",
        "艱鉅的；費力的"
      ],
      [
        "taxing",
        "負擔重的，費勁的"
      ]
    ]
  ],
  "assiduous|diligent": [
    [
      [
        "assiduous",
        "勤勉的；刻苦的"
      ],
      [
        "industrious",
        "勤勞的，勤奮的"
      ]
    ],
    [
      [
        "assiduous",
        "勤勉的；刻苦的"
      ],
      [
        "sedulous",
        "專心致志的，勤勉的"
      ]
    ],
    [
      [
        "industrious",
        "勤勞的，勤奮的"
      ],
      [
        "diligent",
        "勤奮的；用功的"
      ]
    ]
  ],
  "auspicious|propitious": [
    [
      [
        "auspicious",
        "吉利的；有利的"
      ],
      [
        "favorable",
        "吉利的，吉祥的"
      ]
    ]
  ],
  "austere|spartan": [
    [
      [
        "austere",
        "簡樸的；嚴峻的"
      ],
      [
        "abstemious",
        "有節制的，戒絕的"
      ]
    ]
  ],
  "banal|hackneyed": [
    [
      [
        "banal",
        "陳腐的；老套的"
      ],
      [
        "stale",
        "老掉牙的"
      ]
    ],
    [
      [
        "hackneyed",
        "陳腐的；老生常談的"
      ],
      [
        "unoriginal",
        "（語詞或觀點）陳腐的，老套的"
      ]
    ]
  ],
  "baneful|noxious": [
    [
      [
        "noxious",
        "有害的；有毒的"
      ],
      [
        "deleterious",
        "造成危害的"
      ]
    ]
  ],
  "benevolent|charitable": [
    [
      [
        "altruistic",
        "利他的，無私心的"
      ],
      [
        "benevolent",
        "仁慈的；樂善好施的"
      ]
    ],
    [
      [
        "magnanimous",
        "寬宏大量的"
      ],
      [
        "benevolent",
        "仁慈的；樂善好施的"
      ]
    ]
  ],
  "capricious|fickle": [
    [
      [
        "erratic",
        "不規則的，不確定的"
      ],
      [
        "capricious",
        "反覆無常的；任性的"
      ]
    ],
    [
      [
        "erratic",
        "不規則的，不確定的"
      ],
      [
        "fickle",
        "善變的；不穩定的"
      ]
    ],
    [
      [
        "arbitrary",
        "任意的"
      ],
      [
        "capricious",
        "反覆無常的；任性的"
      ]
    ],
    [
      [
        "capricious",
        "反覆無常的；任性的"
      ],
      [
        "flighty",
        "善變的，反覆無常的，任性的"
      ]
    ],
    [
      [
        "capricious",
        "反覆無常的；任性的"
      ],
      [
        "impulsive",
        "善變的，反覆無常的，任性的"
      ]
    ],
    [
      [
        "capricious",
        "反覆無常的；任性的"
      ],
      [
        "inconstant",
        "善變的，反覆無常的，任性的"
      ]
    ],
    [
      [
        "capricious",
        "反覆無常的；任性的"
      ],
      [
        "unpredictable",
        "善變的，反覆無常的，任性的"
      ]
    ],
    [
      [
        "fickle",
        "善變的；不穩定的"
      ],
      [
        "flighty",
        "反覆無常的，易變的"
      ]
    ],
    [
      [
        "whimsical",
        "古怪的，突發奇想的"
      ],
      [
        "capricious",
        "反覆無常的；任性的"
      ]
    ]
  ],
  "caustic|vitriolic": [
    [
      [
        "vitriolic",
        "尖刻的；刻薄的"
      ],
      [
        "acerbic",
        "尖酸刻薄的"
      ]
    ],
    [
      [
        "vitriolic",
        "尖刻的；刻薄的"
      ],
      [
        "acrimonious",
        "尖酸刻薄的"
      ]
    ],
    [
      [
        "vitriolic",
        "尖刻的；刻薄的"
      ],
      [
        "cutting",
        "尖酸刻薄的"
      ]
    ],
    [
      [
        "vitriolic",
        "尖刻的；刻薄的"
      ],
      [
        "mordant",
        "尖刻而又風趣的"
      ]
    ],
    [
      [
        "vitriolic",
        "尖刻的；刻薄的"
      ],
      [
        "scathing",
        "苛刻的，尖刻斥責的"
      ]
    ],
    [
      [
        "scathing",
        "苛刻的，尖刻斥責的"
      ],
      [
        "caustic",
        "尖酸刻薄的；挖苦的"
      ]
    ],
    [
      [
        "acerbic",
        "尖酸刻薄的"
      ],
      [
        "caustic",
        "尖酸刻薄的；挖苦的"
      ]
    ]
  ],
  "cede|relinquish": [
    [
      [
        "relinquish",
        "放棄；交出"
      ],
      [
        "abandon",
        "放棄"
      ]
    ],
    [
      [
        "relinquish",
        "放棄；交出"
      ],
      [
        "desert",
        "放棄"
      ]
    ]
  ],
  "censure|condemn": [
    [
      [
        "condemn",
        "譴責；指責"
      ],
      [
        "decry",
        "譴責，抨擊"
      ]
    ]
  ],
  "circumscribe|curb": [
    [
      [
        "circumscribe",
        "限制；抑制"
      ],
      [
        "confine",
        "限制，抑制"
      ]
    ],
    [
      [
        "circumscribe",
        "限制；抑制"
      ],
      [
        "limit",
        "限制，抑制"
      ]
    ]
  ],
  "circumspect|prudent": [
    [
      [
        "circumspect",
        "審慎的；小心的"
      ],
      [
        "chary",
        "審慎的"
      ]
    ],
    [
      [
        "circumspect",
        "審慎的；小心的"
      ],
      [
        "cautious",
        "審慎的"
      ]
    ],
    [
      [
        "circumspect",
        "審慎的；小心的"
      ],
      [
        "provident",
        "審慎的"
      ]
    ],
    [
      [
        "prudent",
        "謹慎的；明智的"
      ],
      [
        "cautious",
        "慎重的，精明的"
      ]
    ],
    [
      [
        "prudent",
        "謹慎的；明智的"
      ],
      [
        "chary",
        "慎重的，精明的"
      ]
    ],
    [
      [
        "prudent",
        "謹慎的；明智的"
      ],
      [
        "provident",
        "慎重的，精明的"
      ]
    ]
  ],
  "clandestine|furtive": [
    [
      [
        "furtive",
        "偷偷摸摸的；鬼祟的"
      ],
      [
        "conspiratorial",
        "鬼祟的，秘密的"
      ]
    ],
    [
      [
        "furtive",
        "偷偷摸摸的；鬼祟的"
      ],
      [
        "secretive",
        "鬼祟的，秘密的"
      ]
    ],
    [
      [
        "surreptitious",
        "偷偷的，鬼鬼祟祟的"
      ],
      [
        "clandestine",
        "秘密進行的；隱密的"
      ]
    ],
    [
      [
        "covert",
        "隱秘的，秘密的"
      ],
      [
        "clandestine",
        "秘密進行的；隱密的"
      ]
    ]
  ],
  "compliant|yielding": [
    [
      [
        "compliant",
        "服從的；順從的"
      ],
      [
        "tractable",
        "易控制的，易處理的"
      ]
    ]
  ],
  "composed|unperturbed": [
    [
      [
        "imperturbable",
        "沉著冷靜的"
      ],
      [
        "composed",
        "鎮定的；沉著的"
      ]
    ]
  ],
  "concise|succinct": [
    [
      [
        "succinct",
        "簡明扼要的"
      ],
      [
        "curt",
        "簡明扼要的"
      ]
    ],
    [
      [
        "succinct",
        "簡明扼要的"
      ],
      [
        "laconic",
        "言簡意賅的；寡言的"
      ]
    ]
  ],
  "conspicuous|salient": [
    [["conspicuous", "顯眼的；醒目的"], ["marked", "顯眼的；明顯的"]],
    [["conspicuous", "顯眼的；醒目的"], ["noticeable", "容易注意到的；顯眼的"]],
    [["conspicuous", "顯眼的；醒目的"], ["prominent", "突出的；顯著的"]],
    [["conspicuous", "顯眼的；醒目的"], ["remarkable", "顯著的；值得注意的"]],
    [["conspicuous", "顯眼的；醒目的"], ["visible", "看得見的；明顯的"]],
    [["salient", "顯著的；突出的"], ["prominent", "突出的；顯著的"]],
    [["salient", "顯著的；突出的"], ["noticeable", "容易注意到的；顯眼的"]],
    [["salient", "顯著的；突出的"], ["remarkable", "顯著的；值得注意的"]],
  ],
  "conspicuous|obtrusive": [
    [
      [
        "salient",
        "顯著的，突出的"
      ],
      [
        "conspicuous",
        "顯眼的；醒目的"
      ]
    ],
    [
      [
        "salient",
        "顯著的，突出的"
      ],
      [
        "obtrusive",
        "惹人注意的；突兀的"
      ]
    ],
    [
      [
        "conspicuous",
        "顯眼的；醒目的"
      ],
      [
        "marked",
        "顯眼的，顯著的"
      ]
    ],
    [
      [
        "conspicuous",
        "顯眼的；醒目的"
      ],
      [
        "noteworthy",
        "顯眼的，顯著的"
      ]
    ],
    [
      [
        "conspicuous",
        "顯眼的；醒目的"
      ],
      [
        "noticeable",
        "顯眼的，顯著的"
      ]
    ],
    [
      [
        "conspicuous",
        "顯眼的；醒目的"
      ],
      [
        "prominent",
        "顯眼的，顯著的"
      ]
    ],
    [
      [
        "conspicuous",
        "顯眼的；醒目的"
      ],
      [
        "remarkable",
        "顯眼的，顯著的"
      ]
    ],
    [
      [
        "conspicuous",
        "顯眼的；醒目的"
      ],
      [
        "visible",
        "顯眼的，顯著的"
      ]
    ],
    [
      [
        "blatant",
        "明目張膽的，公然的"
      ],
      [
        "conspicuous",
        "顯眼的；醒目的"
      ]
    ]
  ],
  "conundrum|enigma": [
    [
      [
        "conundrum",
        "難題；棘手問題"
      ],
      [
        "puzzle",
        "謎題；令人困惑的事"
      ]
    ]
  ],
  "convoluted|tortuous": [
    [
      [
        "tortuous",
        "曲折的；錯綜複雜的"
      ],
      [
        "circuitous",
        "迂迴的，拐彎抹角的"
      ]
    ],
    [
      [
        "tortuous",
        "曲折的；錯綜複雜的"
      ],
      [
        "intricate",
        "錯綜複雜的；精細的"
      ]
    ],
    [
      [
        "tortuous",
        "曲折的；錯綜複雜的"
      ],
      [
        "involved",
        "曲折的，複雜難懂的"
      ]
    ]
  ],
  "counterfeit|spurious": [
    [
      [
        "spurious",
        "假的；不真實的"
      ],
      [
        "artificial",
        "虛假的，欺騙的"
      ]
    ],
    [
      [
        "spurious",
        "假的；不真實的"
      ],
      [
        "implausible",
        "難以置信的，不可能的"
      ]
    ],
    [
      [
        "spurious",
        "假的；不真實的"
      ],
      [
        "specious",
        "似是而非的，虛假的"
      ]
    ]
  ],
  "crafty|cunning": [
    [
      [
        "craft",
        "靈巧技藝"
      ],
      [
        "cunning",
        "狡猾的；巧妙的"
      ]
    ]
  ],
  "dangerous|perilous": [
    [
      [
        "precarious",
        "岌岌可危的；不穩定的"
      ],
      [
        "dangerous",
        "危險的"
      ]
    ]
  ],
  "dearth|scarcity": [
    [
      [
        "paucity",
        "缺乏"
      ],
      [
        "dearth",
        "缺乏；不足"
      ]
    ]
  ],
  "denounce|lambaste": [
    [
      [
        "denounce",
        "公開譴責；痛斥"
      ],
      [
        "condemn",
        "譴責；指責"
      ]
    ]
  ],
  "deplorable|reprehensible": [
    [
      [
        "reprehensible",
        "應受譴責的；應受責備的"
      ],
      [
        "contemptible",
        "應受斥責的，不道德的"
      ]
    ],
    [
      [
        "reprehensible",
        "應受譴責的；應受責備的"
      ],
      [
        "ignoble",
        "應受斥責的，不道德的"
      ]
    ],
    [
      [
        "reprehensible",
        "應受譴責的；應受責備的"
      ],
      [
        "unconscionable",
        "應受斥責的，不道德的"
      ]
    ]
  ],
  "deprecate|disparage": [
    [
      [
        "deprecate",
        "貶低；輕視"
      ],
      [
        "detract",
        "貶低，有損…，對…產生不利影響"
      ]
    ],
    [
      [
        "disparage",
        "貶低；輕視"
      ],
      [
        "slight",
        "輕視，冷落"
      ]
    ]
  ],
  "deride|ridicule": [
    [
      [
        "deride",
        "嘲笑；奚落"
      ],
      [
        "belittle",
        "貶低；小看"
      ]
    ]
  ],
  "diffident|timid": [
    [
      [
        "diffident",
        "缺乏自信的；羞怯的"
      ],
      [
        "unassertive",
        "不夠強勢的；不敢表明立場的"
      ]
    ]
  ],
  "dubious|skeptical": [
    [
      [
        "dubious",
        "懷疑的；不確定的"
      ],
      [
        "suspect",
        "不可信的，懷疑的"
      ]
    ]
  ],
  "duplicity|guile": [
    [
      [
        "duplicity",
        "欺詐；兩面手法"
      ],
      [
        "deceit",
        "欺騙"
      ]
    ],
    [
      [
        "duplicity",
        "欺詐；兩面手法"
      ],
      [
        "dissemblance",
        "欺騙"
      ]
    ]
  ],
  "dwindle|wane": [
    [
      [
        "ebb",
        "逐漸減少，衰退"
      ],
      [
        "wane",
        "減弱；衰退"
      ]
    ],
    [
      [
        "dwindle",
        "逐漸減少；縮小"
      ],
      [
        "contract",
        "減小，降低"
      ]
    ]
  ],
  "egregious|flagrant": [
    [
      [
        "flagrant",
        "明目張膽的；惡劣的"
      ],
      [
        "blatant",
        "明目張膽的，公然的"
      ]
    ]
  ],
  "elusive|unfathomable": [
    [
      [
        "elusive",
        "難以捉摸的；難以理解的"
      ],
      [
        "cryptic",
        "難以捉摸、理解的"
      ]
    ],
    [
      [
        "elusive",
        "難以捉摸的；難以理解的"
      ],
      [
        "evasive",
        "難以捉摸、理解的"
      ]
    ],
    [
      [
        "elusive",
        "難以捉摸的；難以理解的"
      ],
      [
        "slippery",
        "意義不明確的"
      ]
    ]
  ],
  "emulate|imitate": [
    [
      [
        "replicate",
        "使複現，複製"
      ],
      [
        "mimic",
        "模仿；摹仿"
      ]
    ]
  ],
  "ephemeral|transient": [
    [
      [
        "transitory",
        "轉瞬即逝的"
      ],
      [
        "ephemeral",
        "短暫的；轉瞬即逝的"
      ]
    ],
    [
      [
        "transitory",
        "轉瞬即逝的"
      ],
      [
        "transient",
        "暫時的；短暫的"
      ]
    ],
    [
      [
        "evanescent",
        "短暫的，轉瞬即逝的"
      ],
      [
        "ephemeral",
        "短暫的；轉瞬即逝的"
      ]
    ],
    [
      [
        "evanescent",
        "短暫的，轉瞬即逝的"
      ],
      [
        "transient",
        "暫時的；短暫的"
      ]
    ],
    [
      [
        "evanescent",
        "短暫的，轉瞬即逝的"
      ],
      [
        "fleeting",
        "短暫的，迅速的"
      ]
    ]
  ],
  "eradicate|extirpate": [
    [
      [
        "exterminate",
        "根除，滅絕"
      ],
      [
        "eradicate",
        "根除；消滅"
      ]
    ],
    [
      [
        "exterminate",
        "根除，滅絕"
      ],
      [
        "extirpate",
        "根除；徹底消滅"
      ]
    ],
    [
      [
        "extirpate",
        "根除；徹底消滅"
      ],
      [
        "eliminate",
        "根除，消滅"
      ]
    ]
  ],
  "erode|undermine": [
    [
      [
        "undermine",
        "暗中削弱；逐漸損害"
      ],
      [
        "impair",
        "削弱信心、權威"
      ]
    ],
    [
      [
        "undermine",
        "暗中削弱；逐漸損害"
      ],
      [
        "sap",
        "削弱信心、權威"
      ]
    ],
    [
      [
        "undermine",
        "暗中削弱；逐漸損害"
      ],
      [
        "undercut",
        "削弱信心、權威"
      ]
    ],
    [
      [
        "undermine",
        "暗中削弱；逐漸損害"
      ],
      [
        "weaken",
        "削弱信心、權威"
      ]
    ],
    [
      [
        "vitiate",
        "損害；削弱"
      ],
      [
        "compromise",
        "損害，危及"
      ]
    ],
    [
      [
        "vitiate",
        "損害；削弱"
      ],
      [
        "hamstring",
        "破壞，削弱"
      ]
    ],
    [
      [
        "vitiate",
        "損害；削弱"
      ],
      [
        "impair",
        "破壞，削弱"
      ]
    ],
    [
      [
        "vitiate",
        "損害；削弱"
      ],
      [
        "undercut",
        "破壞，削弱"
      ]
    ],
    [
      [
        "compromise",
        "損害，危及"
      ],
      [
        "undermine",
        "暗中削弱；逐漸損害"
      ]
    ]
  ],
  "esoteric|recondite": [
    [
      [
        "abstruse",
        "難解的，深奧的"
      ],
      [
        "esoteric",
        "深奧難懂的；只有少數人懂的"
      ]
    ],
    [
      [
        "abstruse",
        "難解的，深奧的"
      ],
      [
        "recondite",
        "艱深的；晦澀難懂的"
      ]
    ],
    [
      [
        "arcane",
        "晦澀難懂的，鮮為人知的"
      ],
      [
        "esoteric",
        "深奧難懂的；只有少數人懂的"
      ]
    ],
    [
      [
        "arcane",
        "晦澀難懂的，鮮為人知的"
      ],
      [
        "recondite",
        "艱深的；晦澀難懂的"
      ]
    ],
    [
      [
        "arcane",
        "晦澀難懂的，鮮為人知的"
      ],
      [
        "occult",
        "奧秘的，難以理解的"
      ]
    ]
  ],
  "excoriate|lambast": [],
  "exonerate|vindicate": [
    [
      [
        "vindicate",
        "證明正當；洗清罪名"
      ],
      [
        "uphold",
        "證明…正確"
      ]
    ],
    [
      [
        "vindicate",
        "證明正當；洗清罪名"
      ],
      [
        "absolve",
        "證明（某人）無辜"
      ]
    ],
    [
      [
        "vindicate",
        "證明正當；洗清罪名"
      ],
      [
        "acquit",
        "證明（某人）無辜"
      ]
    ],
    [
      [
        "vindicate",
        "證明正當；洗清罪名"
      ],
      [
        "exculpate",
        "證明（某人）無辜"
      ]
    ],
    [
      [
        "exonerate",
        "證明無罪；免除責任"
      ],
      [
        "absolve",
        "證明…無罪，使免受責備"
      ]
    ],
    [
      [
        "exonerate",
        "證明無罪；免除責任"
      ],
      [
        "exculpate",
        "證明…無罪，使免受責備"
      ]
    ]
  ],
  "extol|laud": [
    [
      [
        "eulogize",
        "讚美，稱頌"
      ],
      [
        "extol",
        "頌揚；高度讚美"
      ]
    ],
    [
      [
        "applaud",
        "贊成，稱讚"
      ],
      [
        "extol",
        "頌揚；高度讚美"
      ]
    ]
  ],
  "facetious|flippant": [
    [
      [
        "facetious",
        "開玩笑的；滑稽的"
      ],
      [
        "waggish",
        "（尤指不問場合）好開玩笑的"
      ]
    ]
  ],
  "fecund|prolific": [
    [
      [
        "fruitful",
        "富有成果的"
      ],
      [
        "prolific",
        "多產的；豐富的"
      ]
    ]
  ],
  "fervent|zealous": [
    [
      [
        "zealous",
        "熱忱的；積極的"
      ],
      [
        "fiery",
        "熱情的，狂熱的"
      ]
    ],
    [
      [
        "zealous",
        "熱忱的；積極的"
      ],
      [
        "impassioned",
        "充滿激情的"
      ]
    ],
    [
      [
        "zealous",
        "熱忱的；積極的"
      ],
      [
        "passionate",
        "熱情的，狂熱的"
      ]
    ],
    [
      [
        "impassioned",
        "充滿激情的"
      ],
      [
        "fervent",
        "熱情的；熱烈的"
      ]
    ],
    [
      [
        "fervent",
        "熱情的；熱烈的"
      ],
      [
        "fiery",
        "熱烈的，熱切的"
      ]
    ],
    [
      [
        "fervent",
        "熱情的；熱烈的"
      ],
      [
        "passionate",
        "熱烈的，熱切的"
      ]
    ]
  ],
  "flamboyant|ostentatious": [
    [
      [
        "flamboyant",
        "華麗搶眼的；炫耀的"
      ],
      [
        "showy",
        "豔麗的，酷炫的"
      ]
    ]
  ],
  "forerunner|precursor": [
    [
      [
        "precursor",
        "先驅；前兆"
      ],
      [
        "antecedent",
        "先驅，前兆"
      ]
    ]
  ],
  "forgo|forsake": [
    [
      [
        "forsake",
        "拋棄；放棄"
      ],
      [
        "neglect",
        "放棄，摒棄"
      ]
    ]
  ],
  "fortuitous|serendipitous": [
    [
      [
        "fortuitous",
        "偶然的；意外的"
      ],
      [
        "accidental",
        "幸運湊巧的，偶然的"
      ]
    ]
  ],
  "galvanize|spur": [
    [
      [
        "galvanize",
        "刺激；激起"
      ],
      [
        "animate",
        "刺激，激起"
      ]
    ],
    [
      [
        "galvanize",
        "刺激；激起"
      ],
      [
        "inspire",
        "刺激，激起"
      ]
    ],
    [
      [
        "galvanize",
        "刺激；激起"
      ],
      [
        "rouse",
        "刺激，激起"
      ]
    ]
  ],
  "genial|jovial": [
    [
      [
        "jovial",
        "快樂的；愉快友善的"
      ],
      [
        "mirthful",
        "友好的，快樂的"
      ]
    ]
  ],
  "groundless|unwarranted": [
    [
      [
        "groundless",
        "毫無根據的"
      ],
      [
        "unfounded",
        "無根據的；不成立的"
      ]
    ],
    [
      [
        "unwarranted",
        "無根據的；不合理的"
      ],
      [
        "baseless",
        "不合理的，無根據的"
      ]
    ],
    [
      [
        "unwarranted",
        "無根據的；不合理的"
      ],
      [
        "unfounded",
        "無根據的；不成立的"
      ]
    ],
    [
      [
        "unwarranted",
        "無根據的；不合理的"
      ],
      [
        "unjustified",
        "不合理的；無正當理由的"
      ]
    ],
    [
      [
        "unwarranted",
        "無根據的；不合理的"
      ],
      [
        "untenable",
        "不合理的，無根據的"
      ]
    ]
  ],
  "halfhearted|tepid": [
    [
      [
        "tepid",
        "不熱烈的；冷淡的"
      ],
      [
        "lukewarm",
        "冷淡的，不熱情的"
      ]
    ],
    [
      [
        "lukewarm",
        "冷淡的，不熱情的"
      ],
      [
        "halfhearted",
        "敷衍的；缺乏熱情的"
      ]
    ]
  ],
  "hamper|impede": [
    [
      [
        "hamper",
        "妨礙；牽制"
      ],
      [
        "encumber",
        "阻礙，拖累"
      ]
    ]
  ],
  "haphazard|helter-skelter": [
    [
      [
        "haphazard",
        "雜亂無計畫的；隨意的"
      ],
      [
        "random",
        "無計劃的，無秩序的，隨意的"
      ]
    ]
  ],
  "harmless|innocuous": [
    [
      [
        "innocuous",
        "無害的；不冒犯人的"
      ],
      [
        "benign",
        "無害的，良性的"
      ]
    ],
    [
      [
        "innocuous",
        "無害的；不冒犯人的"
      ],
      [
        "inoffensive",
        "無害的，不觸犯人的"
      ]
    ],
    [
      [
        "benign",
        "無害的，良性的"
      ],
      [
        "harmless",
        "無害的"
      ]
    ]
  ],
  "heterogeneous|miscellaneous": [
    [
      [
        "heterogeneous",
        "混雜的；各種各樣的"
      ],
      [
        "disparate",
        "截然不同的，迥然相異的"
      ]
    ],
    [
      [
        "heterogeneous",
        "混雜的；各種各樣的"
      ],
      [
        "dissimilar",
        "混雜的，各種各樣的"
      ]
    ],
    [
      [
        "heterogeneous",
        "混雜的；各種各樣的"
      ],
      [
        "mixed",
        "混雜的，各種各樣的"
      ]
    ]
  ],
  "heyday|zenith": [
    [
      [
        "zenith",
        "巔峰；鼎盛時期"
      ],
      [
        "apex",
        "巔峰，鼎盛時期"
      ]
    ],
    [
      [
        "zenith",
        "巔峰；鼎盛時期"
      ],
      [
        "apogee",
        "頂點；最高點"
      ]
    ],
    [
      [
        "zenith",
        "巔峰；鼎盛時期"
      ],
      [
        "pinnacle",
        "巔峰；頂點"
      ]
    ]
  ],
  "hinder|stymie": [
    [
      [
        "inhibit",
        "抑制，約束，禁止"
      ],
      [
        "hinder",
        "妨礙；阻礙"
      ]
    ],
    [
      [
        "inhibit",
        "抑制，約束，禁止"
      ],
      [
        "stymie",
        "阻礙；使受挫"
      ]
    ],
    [
      [
        "stymie",
        "阻礙；使受挫"
      ],
      [
        "block",
        "妨礙，阻撓"
      ]
    ],
    [
      [
        "stymie",
        "阻礙；使受挫"
      ],
      [
        "neutralize",
        "妨礙，阻撓"
      ]
    ]
  ],
  "immaterial|inconsequential": [
    [
      [
        "inconsequential",
        "不重要的；無足輕重的"
      ],
      [
        "insignificant",
        "不重要的；微小的"
      ]
    ],
    [
      [
        "inconsequential",
        "不重要的；無足輕重的"
      ],
      [
        "negligible",
        "微不足道的；可忽略的"
      ]
    ],
    [
      [
        "inconsequential",
        "不重要的；無足輕重的"
      ],
      [
        "trifling",
        "微不足道的，不重要的"
      ]
    ],
    [
      [
        "inconsequential",
        "不重要的；無足輕重的"
      ],
      [
        "trivial",
        "微不足道的，瑣碎的"
      ]
    ],
    [
      [
        "trivial",
        "微不足道的，瑣碎的"
      ],
      [
        "immaterial",
        "無關緊要的"
      ]
    ]
  ],
  "impartial|unbiased": [
    [
      [
        "disinterested",
        "無私的，公正客觀的"
      ],
      [
        "impartial",
        "公正的；不偏袒的"
      ]
    ],
    [
      [
        "impartial",
        "公正的；不偏袒的"
      ],
      [
        "evenhanded",
        "公正的，公平的"
      ]
    ],
    [
      [
        "impartial",
        "公正的；不偏袒的"
      ],
      [
        "fair",
        "無偏見的，公正客觀的"
      ]
    ],
    [
      [
        "impartial",
        "公正的；不偏袒的"
      ],
      [
        "objective",
        "無偏見的，公正客觀的"
      ]
    ],
    [
      [
        "detached",
        "認為與己無關的，旁觀的，公正客觀的"
      ],
      [
        "impartial",
        "公正的；不偏袒的"
      ]
    ]
  ],
  "impetuous|rash": [
    [
      [
        "impetuous",
        "衝動的；魯莽的"
      ],
      [
        "precipitate",
        "衝動的，魯莽的"
      ]
    ]
  ],
  "incessant|perpetual": [
    [
      [
        "incessant",
        "不停的；持續不斷的"
      ],
      [
        "ceaseless",
        "連續不斷的"
      ]
    ],
    [
      [
        "incessant",
        "不停的；持續不斷的"
      ],
      [
        "unceasing",
        "持續不斷的"
      ]
    ],
    [
      [
        "perennial",
        "長期存在的，不斷發生的"
      ],
      [
        "perpetual",
        "持續不斷的；永久的"
      ]
    ]
  ],
  "incisive|trenchant": [
    [
      [
        "incisive",
        "尖銳透徹的；敏銳的"
      ],
      [
        "acute",
        "切中要害的，一針見血的，頭腦敏銳的"
      ]
    ],
    [
      [
        "trenchant",
        "犀利的；一針見血的"
      ],
      [
        "profound",
        "犀利的，尖刻的"
      ]
    ]
  ],
  "indifferent|nonchalant": [
    [
      [
        "apathetic",
        "漠不關心的，無動於衷的"
      ],
      [
        "indifferent",
        "冷淡的；不在乎的"
      ]
    ],
    [
      [
        "nonchalant",
        "漠不關心的；若無其事的"
      ],
      [
        "insouciant",
        "漫不經心的，漠不關心的"
      ]
    ]
  ],
  "inert|stagnant": [
    [
      [
        "inert",
        "呆滯的；無活動力的"
      ],
      [
        "inactive",
        "呆滯的，無生氣的"
      ]
    ]
  ],
  "insignificant|negligible": [
    [
      [
        "trifling",
        "微不足道的，不重要的"
      ],
      [
        "insignificant",
        "不重要的；微小的"
      ]
    ],
    [
      [
        "trifling",
        "微不足道的，不重要的"
      ],
      [
        "negligible",
        "微不足道的；可忽略的"
      ]
    ]
  ],
  "insipid|vapid": [
    [
      [
        "jejune",
        "沉悶乏味的"
      ],
      [
        "vapid",
        "枯燥的；空洞無味的"
      ]
    ],
    [
      [
        "insipid",
        "乏味的；淡而無味的"
      ],
      [
        "banal",
        "陳腐的；老套的"
      ]
    ],
    [
      [
        "insipid",
        "乏味的；淡而無味的"
      ],
      [
        "bland",
        "枯燥乏味的"
      ]
    ],
    [
      [
        "vapid",
        "枯燥的；空洞無味的"
      ],
      [
        "banal",
        "陳腐的；老套的"
      ]
    ]
  ],
  "insular|provincial": [
    [
      [
        "provincial",
        "狹隘的；地方性的"
      ],
      [
        "parochial",
        "偏狹的"
      ]
    ],
    [
      [
        "insular",
        "孤立狹隘的；島嶼的"
      ],
      [
        "parochial",
        "偏狹的"
      ]
    ]
  ],
  "intelligible|lucid": [
    [
      [
        "intelligible",
        "易理解的；明白的"
      ],
      [
        "readable",
        "明白易懂的"
      ]
    ],
    [
      [
        "lucid",
        "清楚易懂的；明晰的"
      ],
      [
        "transparent",
        "清晰明瞭的"
      ]
    ]
  ],
  "intermittent|sporadic": [
    [
      [
        "sporadic",
        "零星發生的；偶發的"
      ],
      [
        "occasional",
        "偶爾發生的，斷斷續續的"
      ]
    ],
    [
      [
        "sporadic",
        "零星發生的；偶發的"
      ],
      [
        "fitful",
        "斷斷續續的，一陣陣的"
      ]
    ],
    [
      [
        "fitful",
        "斷斷續續的，一陣陣的"
      ],
      [
        "intermittent",
        "間歇的；斷斷續續的"
      ]
    ]
  ],
  "intransigent|obdurate": [
    [
      [
        "obdurate",
        "頑固的；不易改變的"
      ],
      [
        "resolute",
        "堅決的；果斷的"
      ]
    ],
    [
      [
        "intransigent",
        "不妥協的；固執的"
      ],
      [
        "resolute",
        "堅決的；果斷的"
      ]
    ],
    [
      [
        "intransigent",
        "不妥協的；固執的"
      ],
      [
        "uncompromising",
        "固執的，不妥協的，不讓步的"
      ]
    ]
  ],
  "itinerant|peripatetic": [
    [
      [
        "peripatetic",
        "巡迴的；四處走動的"
      ],
      [
        "mobile",
        "巡迴的，流動的"
      ]
    ]
  ],
  "laconic|terse": [
    [
      [
        "terse",
        "簡短精煉的；簡潔的"
      ],
      [
        "curt",
        "簡要的"
      ]
    ],
    [
      [
        "terse",
        "簡短精煉的；簡潔的"
      ],
      [
        "succinct",
        "簡明扼要的"
      ]
    ],
    [
      [
        "terse",
        "簡短精煉的；簡潔的"
      ],
      [
        "taciturn",
        "沉默寡言的"
      ]
    ],
    [
      [
        "laconic",
        "言簡意賅的；寡言的"
      ],
      [
        "curt",
        "寡言的，談吐簡潔的"
      ]
    ]
  ],
  "languid|lethargic": [
    [
      [
        "lethargic",
        "無精打采的；倦怠的"
      ],
      [
        "indolent",
        "懶散的，懶惰的"
      ]
    ],
    [
      [
        "lethargic",
        "無精打采的；倦怠的"
      ],
      [
        "somnolent",
        "令人昏昏欲睡的，想睡的"
      ]
    ],
    [
      [
        "lethargic",
        "無精打采的；倦怠的"
      ],
      [
        "slumberous",
        "萎靡不振的，無精打采的"
      ]
    ]
  ],
  "lavish|opulent": [
    [
      [
        "sumptuous",
        "奢侈的，奢華的"
      ],
      [
        "lavish",
        "奢華的；豐盛的"
      ]
    ],
    [
      [
        "affluent",
        "富裕的，富足的"
      ],
      [
        "opulent",
        "豪華的；富麗堂皇的"
      ]
    ]
  ],
  "malign|vilify": [
    [
      [
        "vilify",
        "詆毀；誹謗"
      ],
      [
        "defame",
        "詆毀，醜化"
      ]
    ]
  ],
  "mercurial|volatile": [
    [
      [
        "erratic",
        "不規則的，不確定的"
      ],
      [
        "volatile",
        "不穩定的；易變的"
      ]
    ],
    [
      [
        "volatile",
        "不穩定的；易變的"
      ],
      [
        "capricious",
        "反覆無常的；任性的"
      ]
    ],
    [
      [
        "volatile",
        "不穩定的；易變的"
      ],
      [
        "flighty",
        "易變的，不穩定的"
      ]
    ],
    [
      [
        "volatile",
        "不穩定的；易變的"
      ],
      [
        "inconstant",
        "易變的，不穩定的"
      ]
    ]
  ],
  "meticulous|scrupulous": [
    [
      [
        "painstaking",
        "費盡心思的，認真仔細的"
      ],
      [
        "meticulous",
        "一絲不苟的；極仔細的"
      ]
    ],
    [
      [
        "exacting",
        "要求嚴格的"
      ],
      [
        "meticulous",
        "一絲不苟的；極仔細的"
      ]
    ],
    [
      [
        "meticulous",
        "一絲不苟的；極仔細的"
      ],
      [
        "thorough",
        "嚴謹的，一絲不苟的"
      ]
    ]
  ],
  "monotonous|tedious": [
    [
      [
        "tedious",
        "冗長乏味的"
      ],
      [
        "boring",
        "單調乏味的"
      ]
    ],
    [
      [
        "tedious",
        "冗長乏味的"
      ],
      [
        "dreary",
        "單調乏味的"
      ]
    ]
  ],
  "mundane|ordinary": [
    [
      [
        "pedestrian",
        "平淡的，缺乏想像力的"
      ],
      [
        "mundane",
        "平凡的；世俗的"
      ]
    ],
    [
      [
        "pedestrian",
        "平淡的，缺乏想像力的"
      ],
      [
        "ordinary",
        "普通的；平常的"
      ]
    ],
    [
      [
        "mundane",
        "平凡的；世俗的"
      ],
      [
        "prosaic",
        "平淡無奇的；缺乏想像力的"
      ]
    ]
  ],
  "neophyte|novice": [
    [
      [
        "neophyte",
        "新手；新入門者"
      ],
      [
        "tyro",
        "新手；初學者"
      ]
    ]
  ],
  "nondescript|prosaic": [
    [
      [
        "pedestrian",
        "平淡的，缺乏想像力的"
      ],
      [
        "prosaic",
        "平淡無奇的；缺乏想像力的"
      ]
    ],
    [
      [
        "unexceptional",
        "平常的，普通的"
      ],
      [
        "nondescript",
        "平淡無奇的；不起眼的"
      ]
    ]
  ],
  "novel|unexampled": [
    [
      [
        "unexampled",
        "前所未有的；空前的"
      ],
      [
        "original",
        "無先例的，空前的"
      ]
    ],
    [
      [
        "unexampled",
        "前所未有的；空前的"
      ],
      [
        "unprecedented",
        "史無前例的，空前的"
      ]
    ],
    [
      [
        "unprecedented",
        "史無前例的，空前的"
      ],
      [
        "novel",
        "新穎的；新奇的"
      ]
    ]
  ],
  "obscure|opaque": [
    [
      [
        "opaque",
        "難以理解的；不透明的"
      ],
      [
        "inaccessible",
        "難懂的"
      ]
    ],
    [
      [
        "opaque",
        "難以理解的；不透明的"
      ],
      [
        "incomprehensible",
        "難理解的，晦澀的"
      ]
    ],
    [
      [
        "inaccessible",
        "難懂的"
      ],
      [
        "obscure",
        "晦澀難懂的；不明確的"
      ]
    ]
  ],
  "obsequious|sycophantic": [
    [
      [
        "obsequious",
        "諂媚的；卑躬屈膝的"
      ],
      [
        "adulating",
        "卑躬屈膝的，諂媚的"
      ]
    ],
    [
      [
        "obsequious",
        "諂媚的；卑躬屈膝的"
      ],
      [
        "ingratiating",
        "迎合的，奉承的"
      ]
    ],
    [
      [
        "sycophantic",
        "阿諛奉承的；諂媚的"
      ],
      [
        "adulating",
        "阿諛奉承的，諂媚的"
      ]
    ],
    [
      [
        "sycophantic",
        "阿諛奉承的；諂媚的"
      ],
      [
        "fawning",
        "阿諛奉承的，諂媚的"
      ]
    ]
  ],
  "obstinate|recalcitrant": [
    [
      [
        "recalcitrant",
        "難以管教的；反抗的"
      ],
      [
        "headstrong",
        "頑強的，桀驁不馴的"
      ]
    ]
  ],
  "oscillate|vacillate": [
    [
      [
        "vacillate",
        "猶豫；搖擺不定"
      ],
      [
        "fluctuate",
        "波動；起伏不定"
      ]
    ],
    [
      [
        "oscillate",
        "搖擺；來回擺動"
      ],
      [
        "waver",
        "搖擺不定"
      ]
    ]
  ],
  "pervasive|ubiquitous": [
    [
      [
        "pervasive",
        "普遍存在的；遍布的"
      ],
      [
        "commonplace",
        "瀰漫的，充斥各處的"
      ]
    ],
    [
      [
        "pervasive",
        "普遍存在的；遍布的"
      ],
      [
        "rife",
        "瀰漫的，充斥各處的"
      ]
    ],
    [
      [
        "rampant",
        "繁茂的，蔓生的"
      ],
      [
        "ubiquitous",
        "無所不在的；普遍的"
      ]
    ],
    [
      [
        "ubiquitous",
        "無所不在的；普遍的"
      ],
      [
        "omnipresent",
        "普遍存在的，似乎無處不在的"
      ]
    ],
    [
      [
        "ubiquitous",
        "無所不在的；普遍的"
      ],
      [
        "universal",
        "普遍存在的，似乎無處不在的"
      ]
    ]
  ],
  "plethora|surfeit": [
    [
      [
        "surfeit",
        "過量；過多"
      ],
      [
        "glut",
        "過量，過剩"
      ]
    ],
    [
      [
        "plethora",
        "過多；大量"
      ],
      [
        "glut",
        "大量，過多"
      ]
    ]
  ],
  "predilection|proclivity": [
    [
      [
        "predilection",
        "偏愛；嗜好"
      ],
      [
        "preference",
        "偏愛，偏好"
      ]
    ],
    [
      [
        "proclivity",
        "傾向；癖好"
      ],
      [
        "affinity",
        "喜愛，吸引，情投意合"
      ]
    ],
    [
      [
        "proclivity",
        "傾向；癖好"
      ],
      [
        "penchant",
        "偏好，傾向"
      ]
    ],
    [
      [
        "proclivity",
        "傾向；癖好"
      ],
      [
        "preference",
        "癖性，傾向"
      ]
    ],
    [
      [
        "proclivity",
        "傾向；癖好"
      ],
      [
        "propensity",
        "（尤指不良的）傾向，嗜好，癖好"
      ]
    ],
    [
      [
        "propensity",
        "（尤指不良的）傾向，嗜好，癖好"
      ],
      [
        "predilection",
        "偏愛；嗜好"
      ]
    ],
    [
      [
        "penchant",
        "偏好，傾向"
      ],
      [
        "predilection",
        "偏愛；嗜好"
      ]
    ]
  ],
  "prodigal|wasteful": [
    [
      [
        "prodigal",
        "揮霍的；浪費的"
      ],
      [
        "extravagant",
        "奢侈的"
      ]
    ],
    [
      [
        "prodigal",
        "揮霍的；浪費的"
      ],
      [
        "profligate",
        "恣意揮霍的，浪費的"
      ]
    ]
  ],
  "pugnacious|truculent": [
    [
      [
        "truculent",
        "好鬥的；挑釁的"
      ],
      [
        "aggressive",
        "好鬥的"
      ]
    ],
    [
      [
        "truculent",
        "好鬥的；挑釁的"
      ],
      [
        "bellicose",
        "好鬥的"
      ]
    ],
    [
      [
        "truculent",
        "好鬥的；挑釁的"
      ],
      [
        "belligerent",
        "好鬥的；挑釁的"
      ]
    ],
    [
      [
        "truculent",
        "好鬥的；挑釁的"
      ],
      [
        "combative",
        "好鬥的"
      ]
    ],
    [
      [
        "pugnacious",
        "好鬥的；愛挑釁的"
      ],
      [
        "aggressive",
        "愛爭吵、爭鬥的"
      ]
    ],
    [
      [
        "pugnacious",
        "好鬥的；愛挑釁的"
      ],
      [
        "bellicose",
        "愛爭吵、爭鬥的"
      ]
    ],
    [
      [
        "pugnacious",
        "好鬥的；愛挑釁的"
      ],
      [
        "combative",
        "愛爭吵、爭鬥的"
      ]
    ]
  ],
  "quash|quell": [],
  "recant|retract": [
    [
      [
        "repudiate",
        "拒絕，駁斥"
      ],
      [
        "recant",
        "撤回；放棄（先前的主張）"
      ]
    ]
  ],
  "refrain|suppress": [
    [
      [
        "inhibit",
        "抑制，約束，禁止"
      ],
      [
        "suppress",
        "抑制；忍住"
      ]
    ]
  ],
  "reticent|taciturn": [
    [
      [
        "taciturn",
        "沉默寡言的"
      ],
      [
        "laconic",
        "言簡意賅的；寡言的"
      ]
    ],
    [
      [
        "taciturn",
        "沉默寡言的"
      ],
      [
        "reserved",
        "沉默寡言的"
      ]
    ]
  ],
  "revere|venerate": [
    [
      [
        "exalt",
        "高度讚揚"
      ],
      [
        "venerate",
        "尊敬；崇敬"
      ]
    ]
  ],
  "sagacious|shrewd": [
    [
      [
        "astute",
        "敏銳的，精明的"
      ],
      [
        "shrewd",
        "精明的；有判斷力的"
      ]
    ],
    [
      [
        "shrewd",
        "精明的；有判斷力的"
      ],
      [
        "artful",
        "敏銳的，精明的"
      ]
    ],
    [
      [
        "shrewd",
        "精明的；有判斷力的"
      ],
      [
        "canny",
        "敏銳的，精明的"
      ]
    ]
  ],
  "serene|tranquil": [
    [
      [
        "tranquil",
        "平靜的；安寧的"
      ],
      [
        "peaceful",
        "安靜的，平靜的"
      ]
    ]
  ],
  "steadfast|tenacious": [
    [
      [
        "staunch",
        "忠實堅定的"
      ],
      [
        "steadfast",
        "堅定的；不動搖的"
      ]
    ],
    [
      [
        "steadfast",
        "堅定的；不動搖的"
      ],
      [
        "unfaltering",
        "堅定的，不動搖的"
      ]
    ]
  ],
  "succumb|yield": [],
  "supersede|supplant": [
    [
      [
        "preempt",
        "取代"
      ],
      [
        "supersede",
        "取代；接替"
      ]
    ]
  ],
  "unconventional|unorthodox": [
    [
      [
        "quirky",
        "古怪的，獨特的"
      ],
      [
        "unconventional",
        "不循常規的；非傳統的"
      ]
    ]
  ],
  "vigilant|wary": [
    [
      [
        "vigilant",
        "警覺的；警戒的"
      ],
      [
        "careful",
        "警覺的，警戒的"
      ]
    ]
  ],
  // Additional rotations from the newly selected 104 source pairs.
  "circumvent|skirt": [[["skirt","避開（某話題或問題）"],["bypass","避開"]],[["skirt","避開（某話題或問題）"],["shirk","逃避，規避"]],[["skirt","避開（某話題或問題）"],["sidestep","避開（某話題或問題）"]]],
  "benefit|boon": [[["boon","提高生活素質的東西，有用之物"],["windfall","提高生活素質的東西，有用之物"]]],
  "contempt|disdain": [[["disdain","蔑視，鄙視"],["scorn","蔑視，鄙視"]]],
  "daunting|formidable": [[["daunting","令人望而生畏的"],["forbidding","令人生畏的，令人討厭的"]],[["daunting","令人望而生畏的"],["intimidating","令人望而生畏的"]]],
  "augment|enhance": [[["augment","增大，加強"],["expand","增大，加強"]],[["augment","增大，加強"],["extend","增大，加強"]]],
  "accentuate|highlight": [[["accentuate","強調，使明顯"],["emphasize","強調，使明顯"]]],
  "harbinger|herald": [[["harbinger","先兆，預兆"],["portent","先兆，預兆"]]],
  "commensurate|equivalent": [[["commensurate","相當的，相稱的"],["proportionate","相當的，相稱的"]]],
  "engender|induce": [[["engender","導致，產生"],["create","導致，產生"]],[["engender","導致，產生"],["beget","導致，產生"]]],
  "belie|mask": [[["belie","掩飾；掩蓋"],["veil","掩飾；掩蓋"]]],
  "obviate|preclude": [],
  "dilatory|sluggish": [[["sluggish","行動緩慢的，遲緩的"],["listless","行動緩慢的，遲緩的"]],[["sluggish","行動緩慢的，遲緩的"],["laggard","行動緩慢的，遲緩的"]]],
  "doctrinaire|dogmatic": [[["doctrinaire","教條主義的，脫離實際的"],["rigid","不易改變的，沒有彈性的"]]],
  "malleable|plastic": [[["plastic","可塑的，有適應性的"],["pliable","可塑的，有適應性的"]]],
  "contemptuous|scornful": [[["contemptuous","輕蔑的"],["disdainful","輕蔑的"]]],
  "noisome|obnoxious": [[["noisome","令人厭惡的；有臭味的"],["objectionable","令人厭惡的；有臭味的"]],[["noisome","令人厭惡的；有臭味的"],["malodorous","令人厭惡的；有臭味的"]]],
  "avaricious|rapacious": [[["rapacious","貪婪的；掠奪成性的"],["acquisitive","迫切求取的，貪婪的"]]],
  "gloomy|lugubrious": [[["lugubrious","憂鬱的，悲傷的"],["cheerless","憂鬱的，悲傷的"]]],
  "avert|forestall": [[["avert","防止，避免"],["obviate","排除，使無必要"]],[["avert","防止，避免"],["avoid","防止，避免"]],[["avert","防止，避免"],["prevent","防止，避免"]]],
  "cursory|perfunctory": [[["cursory","倉促草率的；粗略的"],["casual","倉促草率的；粗略的"]]],
  "acrimony|rancor": [[["acrimony","激烈，尖刻，火藥味"],["bitterness","激烈，尖刻，火藥味"]]],
  "comprehensive|exhaustive": [[["exhaustive","詳盡的，全面的"],["encyclopedic","詳盡的，全面的"]]],
  "meager|paltry": [[["meager","很少的，不足的"],["insufficient","很少的，不足的"]]],
  "predicament|quandary": [[["predicament","窘境，困境"],["dilemma","窘境，困境"]]],
  "impromptu|spontaneous": [[["spontaneous","自發的；自然發生的"],["extemporaneous","即席而作的；未事先準備的"]]],
  "rudimentary|sketchy": [[["rudimentary","基本的，粗略的"],["primitive","基本的，粗略的"]],[["rudimentary","基本的，粗略的"],["elemental","基本的，粗略的"]],[["rudimentary","基本的，粗略的"],["embryonic","基本的，粗略的"]]],
  "brake|check": [[["check","制止，抑制"],["stem","制止，抑制"]]],
  "absurd|preposterous": [[["absurd","荒 唐 的， 愚蠢可笑 的"],["nonsensical","荒 唐 的， 愚蠢可笑 的"]]],

  "antiquated|outdated": [
    [["antiquated","陳舊的；過時的"],["outmoded","過時的；不再實用的"]],
    [["antiquated","陳舊的；過時的"],["obsolete","過時的；已淘汰的"]],
    [["outdated","陳舊的；過時的"],["outmoded","過時的；不再實用的"]],
    [["outdated","陳舊的；過時的"],["obsolete","過時的；已淘汰的"]],
    [["outmoded","過時的；不再實用的"],["obsolete","過時的；已淘汰的"]]
  ],
};

const MERGE_EXTRA_VARIANTS = {
  "avaricious|rapacious": [
    [["mercenary", "唯利是圖的；貪婪的"], ["rapacious", "貪婪的；掠奪成性的"]],
    [["avaricious", "貪婪的；貪財的"], ["mercenary", "唯利是圖的；貪婪的"]],
  ],
};

const MERGED_SYNONYM_VARIANTS = Object.fromEntries(PAIR_MERGE_GROUPS.map((group) => {
  const anchorKey = group[0];
  const clusterPairs = [...WORD_PAIRS, ...NEW_WORD_PAIRS, ...SOURCE_WORD_PAIRS]
    .filter((pair) => group.includes(getPairVariantKey(pair)));
  const options = clusterPairs.flatMap((pair) => {
    const key = getPairVariantKey(pair);
    return [
      { a: pair.a, b: pair.b },
      ...(PAIR_SYNONYM_VARIANTS[key] || []).map(([a, b]) => ({ a, b })),
      ...(SOURCE_SYNONYM_VARIANTS[key] || []).map(([a, b]) => ({ a, b })),
    ];
  });
  options.push(...(MERGE_EXTRA_VARIANTS[anchorKey] || []).map(([a, b]) => ({ a, b })));
  const anchorPair = clusterPairs.find((pair) => getPairVariantKey(pair) === anchorKey);
  const unique = new Map();
  options.forEach(({ a, b }) => {
    const key = [a[0].toLowerCase(), b[0].toLowerCase()].sort().join("|");
    if (key !== anchorKey && !unique.has(key)) unique.set(key, [a, b]);
  });
  return [anchorKey, [...unique.values()]];
}));

function getPairVariantKey(pair) {
  return [pair.a[0].toLowerCase(), pair.b[0].toLowerCase()].sort().join("|");
}

const WORD_GLOSS_OVERRIDES = {
  "check": "制止趨勢或行為；抑制",
  "brake": "煞住；減緩速度",
  "stem": "阻止；遏止問題擴大",
  "absurd": "荒謬的；不合常理的",
  "preposterous": "荒唐離譜的；難以置信的",
  "nonsensical": "不合邏輯的；毫無道理的",
  "sordid": "卑劣不堪的；涉及醜聞的",
  "sleazy": "低俗不正派的；品質低劣的",
  "chic": "時髦有型的",
  "elegant": "優雅精緻的",
  "cerebral": "偏重理智思考的；理性的",
  "intellectual": "知識性的；需要思辨的",
  "relentless": "不間斷且不留情面的",
  "persistent": "持續不懈的；鍥而不捨的",
  "futile": "徒勞無功的；不會奏效的",
  "pointless": "沒有意義或必要的",
  "commend": "稱讚；表揚",
  "endorse": "公開支持；背書",
  "brook": "通常用於否定句，表示容忍或接受",
  "tolerate": "忍受；允許某事存在",
  "calamity": "造成重大損失的災禍",
  "disaster": "嚴重的突發災難",
  "spontaneous": "自發的；自然發生的",
  "extemporaneous": "即席而作的；未事先準備的",
  "rudimentary": "初步的；僅具基礎功能的",
  "primitive": "原始的；尚未發展成熟的",
  "elemental": "基本要素構成的；根本的",
  "embryonic": "萌芽階段的；尚在初期發展的",
  "solitude": "獨自一人的狀態；獨處",
  "seclusion": "與外界隔離的隱居狀態",
  "steadfast": "堅定忠實的；不改其志的",
  "unfaltering": "持續穩定的；毫不動搖的",
  "diffident": "缺乏自信的；羞怯的",
  "unassertive": "不夠強勢的；不善於表明立場的",
  "reserved": "內斂少言的；不輕易表露想法的",
  "estranged": "疏遠的；失和的",
  "estrange": "使關係疏遠；使不再親近",
  "disaffect": "使不滿；使疏離原有團體",
  "discerning": "有辨別力的；眼光敏銳的",
  "insightful": "見解深刻的；能看出事物本質的",
  "offset": "抵銷成本或影響",
  "compensate": "補償；彌補損失",
  "allure": "吸引人的魅力；誘惑力",
  "charm": "令人喜愛的特質；魅力",
  "leeway": "可自行決定或調整的空間",
  "latitude": "行動或判斷上的自由度",
  "antiquated": "陳舊過時的；不合時宜的",
  "outdated": "資訊或方法已過時的",
  "provisional": "暫定的；待確認的",
  "temporary": "只持續一段時間的；臨時的",
  "exhaustive": "徹底查遍每一項的；無遺漏的",
  "encyclopedic": "涵蓋廣泛知識的；百科全書式的",
  "meager": "少得可憐的；不足以滿足需求的",
  "insufficient": "不夠用的；未達所需標準的",
  "predicament": "難以脫身的困境",
  "dilemma": "必須在兩難選項間抉擇的局面",
  "thwart": "挫敗計畫；阻止目標實現",
  "frustrate": "使受阻或受挫；令努力無法奏效",
  "opportune": "時機恰好的；適逢其時的",
  "timely": "及時的；在需要時發生的",
  "temperate": "溫和克制的；不走極端的",
  "restrained": "有所節制的；不外露的",
  "cursory": "匆匆帶過的；未仔細檢查的",
  "casual": "隨意的；不拘正式的",
  "acrimony": "爭論中的尖刻敵意",
  "bitterness": "因怨恨或失望而生的苦澀",
  "defy": "公然違抗；蔑視權威",
  "disregard": "不理會；忽略規則或建議",
  "embark": "著手進行計畫或事業",
  "commence": "正式開始；啟動",
  "concede": "不情願地承認或讓步",
  "acknowledge": "承認某事存在；表示知悉",
  "plastic": "可塑的；能被塑造成形的",
  "pliable": "柔韌易彎的；容易調整的",
  "galvanize": "激起行動；使突然振奮",
  "animate": "使活躍；為…注入生氣",
  "inspire": "激勵；啟發靈感",
  "rouse": "喚起情緒或使人清醒",
  "zenith": "發展或成就的最高點",
  "apex": "形體或層級的頂端",
  "contemptuous": "流露輕蔑態度的",
  "disdainful": "帶著不屑與鄙夷的",
  "noisome": "有害健康或令人作嘔的；常指惡臭",
  "objectionable": "令人反感或無法接受的",
  "malodorous": "散發難聞氣味的",
  "fungible": "同類品項可互相替代，尤指金融或法律用語",
  "interchangeable": "可以互換使用的",
  "oust": "把人逐出職位或權力位置",
  "expel": "正式開除或驅逐",
  "edify": "啟發心智；使增長見識",
  "enlighten": "提供資訊使人理解；闡明",
  "disparage": "貶抑其價值或能力",
  "deprecate": "表示不贊成；淡化其重要性",
  "heterogeneous": "由不同類型或成分組成的",
  "dissimilar": "彼此不同的；不相似的",
  "mixed": "混合多種成分或類別的",
  "indolence": "習慣性懶散；不願付出努力",
  "sloth": "怠惰；懶惰的習性",
  "ingenious": "構想巧妙而有創意的",
  "clever": "反應快且善於解決問題的",
  "condone": "明知不當仍放任或默許",
  "excuse": "替過失辯解；原諒某次行為",
  "conjure": "使人聯想到；彷彿變出",
  "imagine": "在心中形成畫面或設想",
  "elicit": "設法引出回應或資訊",
  "draw": "吸引或取得反應、注意或資源",
  "skirt": "迴避棘手議題；也可指沿邊而行",
  "sidestep": "刻意避開問題或責任",
  "boon": "帶來重大好處的事物",
  "benefit": "利益；有助於改善的效果",
  "windfall": "意外獲得的一筆錢或好處",
  "disdain": "認為不值得尊重而鄙視",
  "contempt": "強烈認為某人或事不值得尊重",
  "scorn": "公開嘲弄並鄙夷",
  "assuage": "安撫情緒；減輕恐懼或憂慮",
  "palliate": "暫時減輕症狀或問題的嚴重性",
  "discord": "不和諧或彼此衝突的狀態",
  "contention": "公開爭論；有爭議的主張",
  "daunting": "艱鉅到令人卻步的",
  "intimidating": "使人感到害怕或不敢接近的",
  "extraneous": "多餘且與主體無關的",
  "irrelevant": "與當前問題或目的無關的",
  "augment": "增加數量、規模或力量",
  "enhance": "改善品質、價值或效果",
  "expand": "擴大範圍或體積",
  "extend": "延長時間或伸展長度",
  "accentuate": "凸顯某項特徵",
  "highlight": "特別指出或醒目呈現",
  "emphasize": "著重強調其重要性",
  "hubris": "因過度自信而生的傲慢",
  "arrogance": "自認高人一等的態度",
  "enigmatic": "令人難以解讀或猜透的",
  "mysterious": "原因或本質不明的；神祕的",
  "vigilant": "持續警戒以防危險的",
  "careful": "謹慎小心、避免出錯的",
  "harbinger": "預示某事將發生的人事物",
  "herald": "預告或標誌新事物來臨的人事物",
  "portent": "被視為重大事件預兆的徵象",
  "construe": "依某種方式理解或解讀",
  "interpret": "說明含義；翻譯或詮釋",
  "instigate": "暗中或主動煽動某行動",
  "provoke": "激起反應、怒氣或爭端",
  "novice": "缺乏經驗的初學者",
  "tyro": "某領域的新手，較少見用法",
  "evanescent": "迅速消散或消失的",
  "ephemeral": "存在時間極短的",
  "transient": "短暫經過、非永久的",
  "commensurate": "大小或程度相稱的",
  "equivalent": "價值、功能或意義相等的",
  "proportionate": "與另一數量保持比例的",
  "engender": "引發某種情況或情緒",
  "create": "創造或製造出新的事物",
  "beget": "造成或帶來結果，較正式",
  "belie": "與表面印象不符；顯示真相不同",
  "veil": "遮掩或籠罩，使不易看見",
  "effusive": "情感表達過度熱烈的",
  "emotional": "情緒起伏明顯或受情感影響的",
  "precursor": "在時間或發展上先於另一事物的前身",
  "antecedent": "在時間上更早的事物或背景",
  "analogous": "在原理或關係上相似的",
  "comparable": "可放在一起衡量或比較的",
  "taciturn": "話少而沉默寡言的",
  "succinct": "用字精簡而表達完整的",
  "curt": "簡短但可能顯得唐突無禮的",
  "truculent": "好鬥且帶有威嚇性的",
  "belligerent": "具有敵意、準備爭鬥的",
  "adverse": "造成不利影響的；逆境的",
  "inimical": "有害於某事物或與之敵對的",
  "unfavorable": "條件不理想或不利的",
  "baneful": "造成嚴重長期危害的",
  "noxious": "有毒或對健康有害的",
  "ebullient": "情緒高昂、熱情外露的",
  "exuberant": "活力旺盛且洋溢喜悅的",
  "sycophantic": "為討好權勢者而阿諛奉承的",
  "adulating": "極力吹捧或崇拜的",
  "fawning": "卑屈討好、過度順從的",
  "discrepancy": "數據或陳述間的矛盾差異",
  "incongruity": "彼此不協調或不合情境之處",
  "cupidity": "對財物或利益的貪欲",
  "avarice": "貪得無厭的求財慾望",
  "impetuous": "未充分思考便衝動行事的",
  "precipitate": "倉促而可能造成嚴重後果的",
  "panacea": "被認為能解決所有問題的萬靈藥",
  "remedy": "治療方法；補救措施",
  "lugubrious": "顯得哀戚陰沉的",
  "cheerless": "缺乏歡樂、令人沮喪的",
  "avert": "及時採取行動，使危險不發生",
  "avoid": "避開危險、接觸或不想做的事",
  "prevent": "採取措施阻止事情發生",
  "sluggish": "反應或活動遲緩的",
  "listless": "缺乏精力或興趣的",
  "laggard": "落後緩慢的人或事物",
  "hypocrisy": "言行不一、假裝有道德的行為",
  "insincerity": "缺少真誠；虛情假意",
  "circumscribe": "劃定界限；限制範圍",
  "confine": "把人事物限制在特定空間或範圍",
  "limit": "設定上限；限制數量或程度",
  "intuitive": "憑直覺判斷的；直觀的"
};
const REMOVED_SYNONYM_OPTION_KEYS = new Set(["diffident|reserved","intuitive|spontaneous","displace|obviate","accession|acquiescence","advantageous|expedient","condone|excuse","conspicuous|obtrusive","languish|stagnate","exalt|revere","deprecate|detract","uphold|vindicate","equivocal|evasive","avert|obviate"]);

function getWordExample(word) {
  const directExample = window.WORD_EXAMPLES[word] || window.WORD_EXAMPLES[word.toLowerCase()];
  return directExample || ["例句準備中。", ""];
}

function applyPairVariants(rounds) {
  const basePairs = rounds.flat();
  const reservedWords = new Set(basePairs.flatMap((pair) => [pair.a[0], pair.b[0]].map((word) => word.toLowerCase())));
  const usedWords = new Set();
  const resolvedPairs = new Map();

  shuffle(basePairs).forEach((pair) => {
    const pairWords = new Set([pair.a[0], pair.b[0]].map((word) => word.toLowerCase()));
    const pairKey = getPairVariantKey(pair);
    const variants = [
      ...(PAIR_SYNONYM_VARIANTS[pairKey] || []),
      ...(SOURCE_SYNONYM_VARIANTS[pairKey] || []),
      ...(MERGED_SYNONYM_VARIANTS[pairKey] || []),
    ];
    const normalizeGloss = ([word, gloss]) => [word, WORD_GLOSS_OVERRIDES[word.toLowerCase()] || gloss];
    const allOptions = [{ a: normalizeGloss(pair.a), b: normalizeGloss(pair.b) }, ...variants.map(([a, b]) => ({ a: normalizeGloss(a), b: normalizeGloss(b) }))];
    const seenOptions = new Set();
    const options = allOptions.filter(({ a, b }) => {
      const key = [a[0].toLowerCase(), b[0].toLowerCase()].sort().join("|");
      if (REMOVED_SYNONYM_OPTION_KEYS.has(key) || (PROMOTED_BASE_PAIR_KEYS.has(key) && key !== pairKey) || seenOptions.has(key)) return false;
      seenOptions.add(key);
      return true;
    });
    const availableOptions = options.filter(({ a, b }) => {
      const words = [a[0].toLowerCase(), b[0].toLowerCase()];
      return words[0] !== words[1]
        && words.every((word) => (!reservedWords.has(word) || pairWords.has(word)) && !usedWords.has(word));
    });
    const selected = shuffle(availableOptions)[0] || { a: pair.a, b: pair.b };
    selected.a && usedWords.add(selected.a[0].toLowerCase());
    selected.b && usedWords.add(selected.b[0].toLowerCase());
    resolvedPairs.set(pair, {
      ...pair,
      a: selected.a,
      b: selected.b,
      exampleCandidates: options.flatMap(({ a, b }) => [a, b]),
    });
  });

  return rounds.map((round) => round.map((pair) => resolvedPairs.get(pair) || pair));
}

function buildCampaignRounds() {
  let poolStart = 0;
  const basePoolSize = Math.floor(CAMPAIGN_PAIRS.length / TOTAL_ROUNDS);
  const extraPairs = CAMPAIGN_PAIRS.length % TOTAL_ROUNDS;
  const rounds = Array.from({ length: TOTAL_ROUNDS }, (_, roundIndex) => {
    const poolSize = basePoolSize + (roundIndex < extraPairs ? 1 : 0);
    const pool = CAMPAIGN_PAIRS.slice(poolStart, poolStart + poolSize);
    poolStart += poolSize;
    return shuffle(pool).slice(0, ROUND_SIZE);
  });
  return applyPairVariants(rounds);
}

let CAMPAIGN_ROUNDS = buildCampaignRounds();
const board = document.querySelector("#game-board");
const matchedCount = document.querySelector("#matched-count");
const movesCount = document.querySelector("#moves-count");
const timerDisplay = document.querySelector("#timer");
const progressFill = document.querySelector("#progress-fill");
const collectionList = document.querySelector("#collection-list");
const collectionCount = document.querySelector("#collection-count");
const emptyCollection = document.querySelector("#empty-collection");
const completionOverlay = document.querySelector("#completion-overlay");
const campaignSummaryOverlay = document.querySelector("#campaign-summary-overlay");
const roundFinishPrompt = document.querySelector("#round-finish-prompt");
const roundFinishStats = document.querySelector("#round-finish-stats");
const showReviewButton = document.querySelector("#show-review-button");
const memoryWordInput = document.querySelector("#memory-word-input");
const playAgainButton = document.querySelector("#play-again-button");
const toast = document.querySelector("#toast");

let roundPairs = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedPairs = 0;
let elapsedSeconds = 0;
let timerInterval = null;
let gameStarted = false;
let currentRoundIndex = 0;
let attemptNumber = 1;
let roundRecords = [];
let toastTimeout = null;
let mismatchTimeout = null;

function shuffle(items) {
  const shuffled = [...items];
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("visible"), 1700);
}

function startTimer() {
  if (gameStarted) return;
  gameStarted = true;
  timerInterval = window.setInterval(() => {
    elapsedSeconds += 1;
    timerDisplay.textContent = formatTime(elapsedSeconds);
  }, 1000);
}

function makeCard(word, pairId, meaning, index) {
  const button = document.createElement("button");
  button.className = "word-card";
  button.type = "button";
  button.dataset.pairId = String(pairId);
  button.dataset.word = word;
  button.dataset.meaning = meaning;
  button.setAttribute("aria-label", `第 ${index + 1} 張單字卡，尚未翻開`);
  button.innerHTML = `
    <span class="card-inner">
      <span class="card-face card-back" aria-hidden="true">
        <span class="back-mark">✳</span>
        <span class="back-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="back-label">WORD PAIR</span>
      </span>
      <span class="card-face card-front" aria-hidden="true">
        <span class="card-word"></span>
        <span class="card-mini">ADVANCED VOCABULARY</span>
      </span>
    </span>`;
  button.querySelector(".card-word").textContent = word;
  button.addEventListener("click", () => flipCard(button));
  return button;
}

function createBoard() {
  const chosenPairs = CAMPAIGN_ROUNDS[currentRoundIndex];
  roundPairs = chosenPairs.map((pair, index) => ({ ...pair, id: index + 1 }));
  const cards = roundPairs.flatMap((pair) => [
    { word: pair.a[0], meaning: pair.a[1], pairId: pair.id },
    { word: pair.b[0].trim(), meaning: pair.b[1], pairId: pair.id },
  ]);
  board.replaceChildren(...shuffle(cards).map((card, index) => makeCard(card.word, card.pairId, card.meaning, index)));
}

function flipCard(card) {
  if (lockBoard || card === firstCard || card.classList.contains("is-matched")) return;
  if (card.classList.contains("is-open")) return;
  if (moves >= MAX_MOVES && !firstCard) return;
  startTimer();
  card.classList.add("is-open");
  card.setAttribute("aria-label", `${card.dataset.word}，${card.dataset.meaning}`);

  if (!firstCard) {
    firstCard = card;
    return;
  }

  secondCard = card;
  moves += 1;
  movesCount.textContent = String(moves);
  checkForMatch();
}

function checkForMatch() {
  const isMatch = firstCard.dataset.pairId === secondCard.dataset.pairId;
  if (isMatch) {
    firstCard.classList.add("is-matched");
    secondCard.classList.add("is-matched");
    firstCard.disabled = true;
    secondCard.disabled = true;
    firstCard.setAttribute("aria-label", `${firstCard.dataset.word}，${firstCard.dataset.meaning}，已配對`);
    secondCard.setAttribute("aria-label", `${secondCard.dataset.word}，${secondCard.dataset.meaning}，已配對`);
    addCollectionPair(firstCard, secondCard);
    matchedPairs += 1;
    matchedCount.textContent = String(matchedPairs);
    collectionCount.textContent = String(matchedPairs);
    progressFill.style.width = `${(matchedPairs / ROUND_SIZE) * 100}%`;
    updateCampaignStatus();
    resetTurn();
    if (matchedPairs === ROUND_SIZE) {
      finishGame("success");
    } else if (moves >= MAX_MOVES) {
      lockBoard = true;
      finishGame("failed");
    }
    return;
  }

  lockBoard = true;
  mismatchTimeout = window.setTimeout(() => {
    [firstCard, secondCard].forEach((card) => {
      card.classList.remove("is-open");
      card.setAttribute("aria-label", "單字卡，尚未翻開");
    });
    mismatchTimeout = null;
    resetTurn();
    if (moves >= MAX_MOVES) {
      lockBoard = true;
      finishGame("failed");
    }
  }, 950);
}

function addCollectionPair(cardOne, cardTwo) {
  emptyCollection.hidden = true;
  const item = document.createElement("div");
  item.className = "collection-item";
  const orderedCards = [cardOne, cardTwo].sort((a, b) => a.dataset.word.localeCompare(b.dataset.word));
  item.innerHTML = `
    <span class="collection-index">${String(matchedPairs + 1).padStart(2, "0")}</span>
    <span class="collection-words">
      <span class="collection-pair"></span>
      <span class="collection-meaning"></span>
    </span>
    <span class="collection-check" aria-label="已配對">✓</span>`;
  item.querySelector(".collection-pair").textContent = `${orderedCards[0].dataset.word}  ·  ${orderedCards[1].dataset.word}`;
  item.querySelector(".collection-meaning").textContent = `${orderedCards[0].dataset.meaning} / ${orderedCards[1].dataset.meaning}`;
  collectionList.append(item);
  collectionList.scrollTop = collectionList.scrollHeight;
  showToast(`${orderedCards[0].dataset.word} ＋ ${orderedCards[1].dataset.word}，配對成功！`);
}

function resetTurn() {
  [firstCard, secondCard] = [null, null];
  lockBoard = false;
}

function readBestScore(roundIndex = currentRoundIndex) {
  try {
    return Number(window.localStorage.getItem(`lexiflip-best-moves-${roundIndex}`)) || 0;
  } catch {
    return 0;
  }
}

function writeBestScore(score) {
  try {
    window.localStorage.setItem(`lexiflip-best-moves-${currentRoundIndex}`, String(score));
  } catch {
    // The game remains playable when browser storage is unavailable.
  }
}

function updateBestScore() {
  const best = readBestScore();
  document.querySelector("#best-score").textContent = best ? `${best} 次` : "—";
}

function finishGame(result) {
  lastResult = result;
  window.clearInterval(timerInterval);
  const roundNumber = currentRoundIndex + 1;
  const completionKicker = document.querySelector("#completion-kicker");
  const completionTitle = document.querySelector("#completion-title");
  const completionCopy = document.querySelector("#completion-copy");
  const memoryCheckin = document.querySelector("#memory-checkin");

  if (result === "failed") {
    roundFinishPrompt.hidden = true;
    document.querySelector("#review-list").replaceChildren();
    memoryCheckin.hidden = true;
    playAgainButton.disabled = false;
    completionKicker.textContent = `ROUND ${roundNumber} · TRY ${attemptNumber}`;
    completionTitle.textContent = "已達翻牌上限";
    completionCopy.textContent = `這局已用滿 ${MAX_MOVES} 次配對嘗試，仍未完成全部配對。重新挑戰會保留本局單字並重新洗牌。`;
    playAgainButton.textContent = "重新挑戰本局";
    completionOverlay.hidden = false;
    playAgainButton.focus();
  } else {
    const previousBest = readBestScore();
    if (!previousBest || moves < previousBest) {
      writeBestScore(moves);
      updateBestScore();
      showToast("本局新紀錄！翻牌次數更少了。");
    }
    roundFinishStats.textContent = `這局用了 ${formatTime(elapsedSeconds)}，翻了 ${moves} 次。牌面會保留，準備好後按下「看單字解說」。`;
    roundFinishPrompt.hidden = false;
    completionOverlay.hidden = true;
  }
}

function renderReview() {
  const reviewList = document.querySelector("#review-list");
  const groups = roundPairs.map((pair, index) => {
    const section = document.createElement("section");
    section.className = "review-pair";

    const heading = document.createElement("h3");
    heading.className = "review-pair-heading";
    heading.textContent = `${String(index + 1).padStart(2, "0")}  ${pair.a[0]}  ·  ${pair.b[0]}`;
    section.append(heading);

    const words = document.createElement("div");
    words.className = "review-words";
    [pair.a, pair.b].forEach(([word, meaning]) => {
      const card = document.createElement("article");
      card.className = "review-word";
      const title = document.createElement("h4");
      title.textContent = word;
      const definition = document.createElement("p");
      definition.className = "review-meaning";
      definition.textContent = meaning;
      const [sentence, translation] = getWordExample(word, pair);
      const example = document.createElement("p");
      example.className = "review-example";
      example.textContent = sentence;
      const translated = document.createElement("p");
      translated.className = "review-translation";
      translated.textContent = translation;
      card.append(title, definition, example, translated);
      words.append(card);
    });
    section.append(words);
    return section;
  });
  reviewList.replaceChildren(...groups);
}

function openRoundReview() {
  if (lastResult !== "success") return;
  const roundNumber = currentRoundIndex + 1;
  const completionKicker = document.querySelector("#completion-kicker");
  const completionTitle = document.querySelector("#completion-title");
  const completionCopy = document.querySelector("#completion-copy");

  renderReview();
  completionKicker.textContent = `ROUND ${roundNumber} REVIEW`;
  completionTitle.textContent = "本局單字解說";
  completionCopy.textContent = "複習本局 16 個目標單字的中文釋義與例句，再輸入一個想記得更熟的單字即可繼續。";
  memoryWordInput.value = "";
  document.querySelector("#memory-word-error").textContent = "";
  document.querySelector("#memory-checkin").hidden = false;
  playAgainButton.disabled = true;
  playAgainButton.textContent = roundNumber === TOTAL_ROUNDS ? "查看三局記錄" : "前往下一局";
  roundFinishPrompt.hidden = true;
  completionOverlay.hidden = false;
  completionTitle.focus({ preventScroll: true });
}

function validateMemoryWord() {
  const typedWord = memoryWordInput.value.trim().toLowerCase();
  const matchingWord = roundPairs
    .flatMap((pair) => [pair.a[0], pair.b[0]])
    .find((word) => word.toLowerCase() === typedWord);
  const isValid = Boolean(matchingWord);
  playAgainButton.disabled = !isValid;
  document.querySelector("#memory-word-error").textContent = typedWord && !isValid
    ? "請輸入本局 16 個目標單字其中之一。"
    : "";
  return isValid ? matchingWord : null;
}

function renderCampaignSummary() {
  const summaryList = document.querySelector("#campaign-summary-list");
  const cards = roundRecords.map((record) => {
    const card = document.createElement("article");
    card.className = "summary-round-card";
    const heading = document.createElement("h3");
    heading.textContent = `第 ${record.round} 局`;
    card.append(heading);

    [
      ["用時", record.time],
      ["配對次數", `${record.moves} 次`],
      ["想加強的單字", record.memoryWord],
    ].forEach(([label, value]) => {
      const metric = document.createElement("p");
      const name = document.createElement("span");
      name.className = "summary-metric-label";
      name.textContent = label;
      const result = document.createElement("strong");
      result.className = "summary-metric-value";
      result.textContent = value;
      metric.append(name, result);
      card.append(metric);
    });
    return card;
  });
  summaryList.replaceChildren(...cards);
}

function downloadCampaignSummary() {
  const canvas = document.createElement("canvas");
  const cardHeight = 515;
  const cardGap = 10;
  const sectionHeight = cardHeight + cardGap;
  canvas.width = 1080;
  canvas.height = 1920;
  const context = canvas.getContext("2d");
  if (!context) return;

  function drawWrappedText(text, x, y, maxWidth, lineHeight, maxLines = 2) {
    if (!text) return y;
    let line = "";
    let lineCount = 0;
    const words = text.match(/\S+|\s+/gu) || [];
    for (const word of words) {
      if (/^\s+$/u.test(word)) {
        if (line) line += word;
        continue;
      }
      const candidate = line ? line + word : word;
      if (line && context.measureText(candidate.trimEnd()).width > maxWidth && lineCount < maxLines - 1) {
        context.fillText(line.trimEnd(), x, y + lineCount * lineHeight);
        lineCount += 1;
        line = word.trimStart();
      } else {
        line = candidate;
      }
    }
    if (line) {
      context.fillText(line.trimEnd(), x, y + lineCount * lineHeight);
      lineCount += 1;
    }
    return y + lineCount * lineHeight;
  }

  context.fillStyle = "#f6f3ec";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#fffefa";
  context.fillRect(32, 32, canvas.width - 64, canvas.height - 64);
  const headerGap = 48;
  let headerCursorY = 64;
  function drawHeaderLine(text, font, fontSize, color) {
    context.font = font;
    context.fillStyle = color;
    const metrics = context.measureText(text);
    const ascent = metrics.actualBoundingBoxAscent ?? fontSize * 0.8;
    const descent = metrics.actualBoundingBoxDescent ?? fontSize * 0.2;
    context.fillText(text, 76, headerCursorY + ascent);
    headerCursorY += ascent + descent + headerGap;
  }

  drawHeaderLine("LEESHUO · ADVANCED VOCABULARY", '500 22px "DM Mono", monospace', 22, "#536c52");
  drawHeaderLine("李碩高階單字｜想加強單字", '800 52px "Noto Sans TC", "DM Sans", sans-serif', 52, "#22231f");
  drawHeaderLine(`完成日期：${new Date().toLocaleDateString("zh-TW")}`, '400 26px "Noto Sans TC", sans-serif', 26, "#777970");
  const headerHeight = Math.ceil(headerCursorY);

  roundRecords.forEach((record, index) => {
    const y = headerHeight + index * sectionHeight;
    const selectedWord = {
      word: record.memoryWord,
      meaning: record.memoryMeaning,
      sentence: record.memorySentence,
      translation: record.memoryTranslation,
    };
    const contentX = 92;
    const contentWidth = canvas.width - 184;
    context.fillStyle = "#faf9f5";
    context.fillRect(60, y, canvas.width - 120, cardHeight);
    context.fillStyle = "#3c553c";
    context.font = '600 24px "Noto Sans TC", sans-serif';
    context.fillText(`第 ${record.round} 局`, contentX, y + 50);
    context.fillStyle = "#22231f";
    context.font = '700 60px "Noto Sans TC", "DM Sans", sans-serif';
    context.fillText(selectedWord.word, contentX, y + 126);
    context.fillStyle = "#435a43";
    context.font = '600 40px "Noto Sans TC", sans-serif';
    drawWrappedText(selectedWord.meaning, contentX, y + 183, contentWidth, 46, 2);
    context.fillStyle = "#22231f";
    context.font = '400 40px "Noto Sans TC", "DM Sans", sans-serif';
    const exampleEnd = drawWrappedText(selectedWord.sentence, contentX, y + 310, contentWidth, 46, 3);
    context.fillStyle = "#434840";
    context.font = '500 32px "Noto Sans TC", sans-serif';
    drawWrappedText(selectedWord.translation, contentX, Math.max(y + 410, exampleEnd + 8), contentWidth, 36, 2);
  });

  const imageUrl = canvas.toDataURL("image/png");
  const fileName = "李碩高階單字-三局闖關記錄.png";
  const isAppleTouchDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (isAppleTouchDevice) {
    try {
      const [, encodedImage] = imageUrl.split(",");
      const binaryImage = atob(encodedImage);
      const imageBytes = new Uint8Array(binaryImage.length);
      for (let index = 0; index < binaryImage.length; index += 1) {
        imageBytes[index] = binaryImage.charCodeAt(index);
      }
      const imageFile = new File([imageBytes], fileName, { type: "image/png" });
      if (navigator.canShare?.({ files: [imageFile] }) && navigator.share) {
        navigator.share({ files: [imageFile], title: "李碩高階單字｜想加強單字" }).catch((error) => {
          if (error.name !== "AbortError") showToast("分享圖卡時發生問題，請再試一次。");
        });
        showToast("請在分享選單中選擇「儲存影像」。");
        return;
      }
    } catch (error) {
      // Older iOS versions can still save the image from the preview page below.
    }

    const preview = window.open("", "_blank");
    if (preview) {
      preview.document.write(`<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>想加強單字圖卡</title><style>body{margin:0;padding:20px;background:#f6f3ec;color:#22231f;font:16px system-ui,sans-serif;text-align:center}.hint{margin:0 auto 16px;max-width:32em;line-height:1.6}img{display:block;width:min(100%,540px);height:auto;margin:0 auto}</style></head><body><p class="hint">長按下方圖卡，選擇「儲存影像」即可保存到照片。</p><img src="${imageUrl}" alt="李碩高階單字想加強單字圖卡"></body></html>`);
      preview.document.close();
    } else {
      showToast("Safari 阻擋了新分頁，請允許彈出式視窗後重試。");
    }
    return;
  }

  const link = document.createElement("a");
  link.href = imageUrl;
  link.download = fileName;
  document.body.append(link);
  link.click();
  link.remove();
  showToast("想加強單字圖卡已下載。");
}

function updateCampaignStatus() {
  const roundNumber = currentRoundIndex + 1;
  document.querySelector("#round-number").textContent = String(roundNumber).padStart(2, "0");
  document.querySelector("#campaign-position").textContent = `第 ${roundNumber} 局 / ${TOTAL_ROUNDS}`;
  document.querySelector("#campaign-attempt").textContent = `挑戰 ${attemptNumber}`;
  document.querySelector("#campaign-total").textContent = `共 ${TOTAL_ROUNDS} 局`;
  document.querySelector("#campaign-progress").style.width = `${((currentRoundIndex + matchedPairs / ROUND_SIZE) / TOTAL_ROUNDS) * 100}%`;
  document.querySelector("#footer-round").textContent = `${String(roundNumber).padStart(2, "0")} / ${TOTAL_ROUNDS}`;
}

function startNewGame({ advance = false, retry = false, restartCampaign = false } = {}) {
  if (advance) {
    currentRoundIndex = Math.min(currentRoundIndex + 1, CAMPAIGN_ROUNDS.length - 1);
    attemptNumber = 1;
  } else if (restartCampaign) {
    currentRoundIndex = 0;
    attemptNumber = 1;
    CAMPAIGN_ROUNDS = buildCampaignRounds();
    roundRecords = [];
  } else if (retry) {
    attemptNumber += 1;
  }
  window.clearInterval(timerInterval);
  window.clearTimeout(mismatchTimeout);
  mismatchTimeout = null;
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  moves = 0;
  matchedPairs = 0;
  elapsedSeconds = 0;
  gameStarted = false;
  timerInterval = null;
  lastResult = null;
  matchedCount.textContent = "0";
  movesCount.textContent = "0";
  timerDisplay.textContent = "00:00";
  collectionCount.textContent = "0";
  progressFill.style.width = "0%";
  collectionList.replaceChildren(emptyCollection);
  emptyCollection.hidden = false;
  completionOverlay.hidden = true;
  campaignSummaryOverlay.hidden = true;
  document.querySelector("#memory-checkin").hidden = true;
  memoryWordInput.value = "";
  playAgainButton.disabled = false;
  document.querySelector("#memory-word-error").textContent = "";
  document.querySelector("#review-list").replaceChildren();
  roundFinishPrompt.hidden = true;
  createBoard();
  updateCampaignStatus();
  updateBestScore();
}

document.querySelector("#reset-button").addEventListener("click", () => {
  startNewGame({ retry: true });
  showToast("本局重新洗牌，再挑戰一次！");
});

function handleCompletionAction() {
  if (lastResult === "failed") {
    startNewGame({ retry: true });
    document.querySelector("#reset-button").focus();
    return;
  }

  const memoryWord = validateMemoryWord();
  if (!memoryWord) {
    memoryWordInput.focus();
    return;
  }
  const memoryPair = roundPairs.find((pair) =>
    [pair.a, pair.b].some(([word]) => word.toLowerCase() === memoryWord.toLowerCase()),
  );
  const memoryMeaning = memoryPair
    ? [memoryPair.a, memoryPair.b].find(([word]) => word.toLowerCase() === memoryWord.toLowerCase())?.[1] || ""
    : "";
  const [memorySentence, memoryTranslation] = getWordExample(memoryWord, memoryPair);
  roundRecords[currentRoundIndex] = {
    round: currentRoundIndex + 1,
    time: formatTime(elapsedSeconds),
    moves,
    memoryWord,
    memoryMeaning,
    memorySentence,
    memoryTranslation,
  };

  if (currentRoundIndex === TOTAL_ROUNDS - 1) {
    completionOverlay.hidden = true;
    renderCampaignSummary();
    campaignSummaryOverlay.hidden = false;
    document.querySelector("#campaign-summary-title").focus({ preventScroll: true });
  } else {
    startNewGame({ advance: true });
    document.querySelector("#reset-button").focus();
  }
}

playAgainButton.addEventListener("click", handleCompletionAction);
showReviewButton.addEventListener("click", openRoundReview);
memoryWordInput.addEventListener("input", validateMemoryWord);
memoryWordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !playAgainButton.disabled) {
    event.preventDefault();
    handleCompletionAction();
  }
});
document.querySelector("#download-summary-button").addEventListener("click", downloadCampaignSummary);
document.querySelector("#restart-campaign-button").addEventListener("click", () => {
  startNewGame({ restartCampaign: true });
  document.querySelector("#reset-button").focus();
});

let lastResult = null;
startNewGame();

