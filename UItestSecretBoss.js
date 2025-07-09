const SecretBossData = [
  {
    name: "皇帝ゴブリン",
    place: "旅立ちの森",
    participableNumber: 4,
    requiredItem: "森の献上品",
    reward: {
      gold: ["盗賊の心得"],
      silver: ["ゴブリンの冠[その他]"],
      copper: ["錬成石"],
      another: ["銅", "ミスリル", "鉄鉱石", "砥石", "上質砥石"]
    },
    skills: ["クリティカル", "連続攻撃"]
  },
  {
    name: "遺跡の巨人",
    place: "ふしぎな遺跡",
    participableNumber: 4,
    requiredItem: "秘密の石板",
    reward: {
      gold: ["錬金の古文書"],
      silver: ["石化の眼[その他]"],
      copper: ["守護の指輪[指輪]"],
      another: ["銀", "銅", "ミスリル", "魔石", "砥石", "上質砥石", "強化石", "錬成石"]
    },
    skills: ["石化(数ターン行動不能)", "クリティカル無効", "巨体のしかかり"]
  },
  {
    name: "キングクラーケン",
    place: "沈没船",
    participableNumber: 3,
    requiredItem: "深い青の真珠",
    reward: {
      gold: ["幸運のお守り[その他]"],
      silver: ["人魚のうろこ[その他]"],
      copper: ["錬金の手引き"],
      another: ["金", "銀", "魔石", "砥石", "上質砥石", "強化石", "錬成石"]
    },
    skills: ["連続攻撃(回数上限無し)",]
  },
  {
    name: "ジェンカ",
    place: "終末の峡谷",
    participableNumber: 6,
    requiredItem: "真聖杯",
    reward: {
      gold: ["ジェンカの法衣[防]", "ジェンカの杖[武]"],
      silver: ["ジェンカの指輪[輪]", "ジェンカのマント[他]"],
      copper: ["錬金の古文書"],
      another: ["金", "ダイヤ", "プラチナ", "アダマンタイト", "魔石", "砥石", "上質砥石", "強化石", "錬成石"]
    },
    skills: ["通常攻撃強化", "連続攻撃", "炎攻撃"]
  },
];

const tableTemplate = (e)=>{return `<table>
  <tbody>
    <tr>
      <th>ボス名</th><td>${e.name}</td>
    </tr>
    <tr>
      <th>必要アイテム</td><td>${e.requiredItem}</td>
    </tr>
    <tr>
      <th>参加可能人数</th><td>${e.participableNumber}</td>
    </tr>
    <tr>
      <th colspan="2">スキル</th>
    </tr>
    <tr>
      <td colspan="2">${e.skills.join("、")}</td>
    </tr>
    <tr>
      <th colspan="2">報酬</th>
    </tr>
    <tr>
      <td style="color: gold;font-weight: bold;">金の宝箱</td>
      <td>${e.reward.gold.join("、")}</td>
    </tr>
    <tr>
      <td style="color: silver;font-weight: bold;">銀の宝箱</td>
      <td>${e.reward.silver.join("、")}</td>
    </tr>
    <tr>
      <td style="color: brown;font-weight: bold;">銅の宝箱</td>
      <td>${e.reward.copper.join("、")}</td>
    </tr>
    <tr>
      <th colspan="2">獲得可能報酬（宝箱以外）</th>
    </tr>
    <tr>
      <td colspan="2">${e.reward.another.join("、")}</td>
    </tr>
  </tbody>
</table>`};
/* ################################################################## */

const secretBossSelector = document.getElementById(`secretSearch`);
const secretBossExplanator = document.getElementById(`secretExplanation`);
createSelectorOptions();// 初期化
secretBossSelector.addEventListener(`change`, searchFunction);
secretBossSelector.dispatchEvent(new Event(`change`));

/* ################################################################## */
// table初期化 -> select内容取得 -> option名のデータ取得 -> table生成
function searchFunction(e) {
  secretBossExplanator.innerHTML = ``;// 初期化

  const selectName = e.target.selectedOptions[0].textContent;
  const data = SecretBossData.find(e=>e.place===selectName);

  secretBossExplanator.innerHTML = tableTemplate(data);
}
function createSelectorOptions() {
  SecretBossData.forEach(e=>{
    secretBossSelector.appendChild(createAndSetT(`option`, e.place));
  });
}
