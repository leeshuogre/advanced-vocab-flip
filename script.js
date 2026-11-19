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
];

const ROUND_SIZE = 8;
const ROUNDS_PER_LEVEL = 3;
const MAX_MOVES = 20;
const CAMPAIGN_PAIRS = [
  ...WORD_PAIRS.map((pair, index) => ({
    ...pair,
    difficulty: 1 + (4 * index) / Math.max(1, WORD_PAIRS.length - 1),
    sourceOrder: index,
  })),
  ...NEW_WORD_PAIRS.map((pair, index) => ({
    ...pair,
    difficulty: pair.difficulty + (index + 1) / 1000,
    sourceOrder: WORD_PAIRS.length + index,
  })),
].sort((a, b) => a.difficulty - b.difficulty || a.sourceOrder - b.sourceOrder);
const CAMPAIGN_ROUNDS = Array.from(
  { length: CAMPAIGN_PAIRS.length / ROUND_SIZE },
  (_, index) => CAMPAIGN_PAIRS.slice(index * ROUND_SIZE, (index + 1) * ROUND_SIZE),
);
const TOTAL_LEVELS = CAMPAIGN_ROUNDS.length / ROUNDS_PER_LEVEL;
const board = document.querySelector("#game-board");
const matchedCount = document.querySelector("#matched-count");
const movesCount = document.querySelector("#moves-count");
const timerDisplay = document.querySelector("#timer");
const progressFill = document.querySelector("#progress-fill");
const collectionList = document.querySelector("#collection-list");
const collectionCount = document.querySelector("#collection-count");
const emptyCollection = document.querySelector("#empty-collection");
const completionOverlay = document.querySelector("#completion-overlay");
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
        <span class="card-mini">SAT VOCABULARY</span>
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
  if (moves > MAX_MOVES) {
    lockBoard = true;
    finishGame("failed");
    return;
  }
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
    if (matchedPairs === ROUND_SIZE) finishGame("success");
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
  const levelNumber = Math.floor(currentRoundIndex / ROUNDS_PER_LEVEL) + 1;
  const roundInLevel = (currentRoundIndex % ROUNDS_PER_LEVEL) + 1;
  const completionKicker = document.querySelector("#completion-kicker");
  const completionTitle = document.querySelector("#completion-title");
  const completionCopy = document.querySelector("#completion-copy");
  const playAgainButton = document.querySelector("#play-again-button");

  if (result === "failed") {
    document.querySelector("#review-list").replaceChildren();
    completionKicker.textContent = `LEVEL ${levelNumber} · ROUND ${roundInLevel} · TRY ${attemptNumber}`;
    completionTitle.textContent = "超過翻牌上限";
    completionCopy.textContent = `這局用了 ${moves} 次配對嘗試（每次翻兩張），超過 20 次上限。必須在 20 次內完成，才能查看單字解釋與例句。重新挑戰時卡牌會重新洗牌。`;
    playAgainButton.textContent = "重新挑戰本局";
  } else {
    renderReview();
    const previousBest = readBestScore();
    if (!previousBest || moves < previousBest) {
      writeBestScore(moves);
      updateBestScore();
      showToast("本局新紀錄！翻牌次數更少了。");
    }
    completionKicker.textContent = `LEVEL ${levelNumber} · ROUND ${roundInLevel} COMPLETE`;
    completionTitle.textContent = currentRoundIndex === CAMPAIGN_ROUNDS.length - 1 ? "全數通關！" : "配對完成！";
    completionCopy.textContent = `這局用了 ${formatTime(elapsedSeconds)}，翻了 ${moves} 次。複習本局 16 個目標單字：`;
    if (currentRoundIndex === CAMPAIGN_ROUNDS.length - 1) {
      playAgainButton.textContent = "從頭再玩";
    } else {
      const nextLevel = Math.floor((currentRoundIndex + 1) / ROUNDS_PER_LEVEL) + 1;
      playAgainButton.textContent = nextLevel > levelNumber ? "前往下一關" : "下一局";
    }
  }
  completionOverlay.hidden = false;
  playAgainButton.focus();
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
      const [sentence, translation] = window.WORD_EXAMPLES[word] || ["例句準備中。", ""];
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

function updateCampaignStatus() {
  const levelNumber = Math.floor(currentRoundIndex / ROUNDS_PER_LEVEL) + 1;
  const roundInLevel = (currentRoundIndex % ROUNDS_PER_LEVEL) + 1;
  document.querySelector("#level-number").textContent = String(levelNumber).padStart(2, "0");
  document.querySelector("#total-levels").textContent = String(TOTAL_LEVELS).padStart(2, "0");
  document.querySelector("#round-in-level").textContent = String(roundInLevel);
  document.querySelector("#campaign-position").textContent = `第 ${levelNumber} 關・第 ${roundInLevel} 局`;
  document.querySelector("#campaign-attempt").textContent = `挑戰 ${attemptNumber}`;
  document.querySelector("#campaign-total").textContent = `共 ${CAMPAIGN_ROUNDS.length} 局`;
  document.querySelector("#campaign-progress").style.width = `${((currentRoundIndex + matchedPairs / ROUND_SIZE) / CAMPAIGN_ROUNDS.length) * 100}%`;
  document.querySelector("#footer-round").textContent = `${String(currentRoundIndex + 1).padStart(2, "0")} / ${CAMPAIGN_ROUNDS.length}`;
}

function startNewGame({ advance = false, retry = false, restartCampaign = false } = {}) {
  if (advance) {
    currentRoundIndex = Math.min(currentRoundIndex + 1, CAMPAIGN_ROUNDS.length - 1);
    attemptNumber = 1;
  } else if (restartCampaign) {
    currentRoundIndex = 0;
    attemptNumber = 1;
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
  document.querySelector("#review-list").replaceChildren();
  createBoard();
  updateCampaignStatus();
  updateBestScore();
}

document.querySelector("#reset-button").addEventListener("click", () => {
  startNewGame({ retry: true });
  showToast("本局重新洗牌，再挑戰一次！");
});

document.querySelector("#play-again-button").addEventListener("click", () => {
  if (lastResult === "failed") {
    startNewGame({ retry: true });
  } else if (currentRoundIndex === CAMPAIGN_ROUNDS.length - 1) {
    startNewGame({ restartCampaign: true });
  } else {
    startNewGame({ advance: true });
  }
  document.querySelector("#reset-button").focus();
});

let lastResult = null;
document.querySelector("#total-levels").textContent = String(TOTAL_LEVELS).padStart(2, "0");
startNewGame();
