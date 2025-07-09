// {txt: name, val: 100} のようなオブジェクトを引数に取る
function createOption(e) {
  const o = createAndSetT("option", e.txt);
  // const o = document.createElement("option");
  // o.innerText = e.txt;
  o.value = e.val;
  return o;
}
// const createOption = (t, v) => {let o = document.createElement(`option`); o.value = v; return o;}
// const createOption = (t, v) => new DOMParser().parseFromString(`<option value="${v}">${t}</option>`, "text/html");

const abilityList = (function f(m, M) {
  const s = [];
  for (let i = m; i <= M; i++) {
    const ss = {
      txt: i,
      val: 2 ** -i * 100
    };
    s.push(ss);
  }
  return s;
})(1, 8);
const charaList = [
  "幸運なし", "幸運持ち", "豪運持ち", "アーミー", "アイアン", "アサルト", "インビジブル", "エアー", "エレクトリック", "クリーミー", "ケログ", "ゴースト", "シールド", "スウィニー", "チュチュ", "デスペラード", "ビベリ", "フック", "プラグ", "ブレード", "ホイールレッグ", "ボマー", "マーゴ", "ミオキャット", "メディック", "ランチャー", "リーコン"];
const itemList = [
  {
    txt: `砥石`,
    val: 80
  },
  {
    txt: `ダイヤ`,
    val: 95
  },
  {
    txt: `プラチナ`,
    val: 90
  },
  {
    txt: `アダマンタイト`,
    val: 85
  },
  {
    txt: `オリハルコン`,
    val: 80
  },
  {
    txt: `クリスタル`,
    val: 75
  },
  {
    txt: `ヒヒイロカネ`,
    val: 70
  },
  {
    txt: `強化石`,
    val: 55
  },
];
const modeJson = {
  Accessory: {
    list: abilityList,
    explanation: `強化前の能力値`,
    chengeover: {
      target: [`guidance`, `notes`],
      disable: false,
    }
  },
  Item: {
    list: itemList,
    explanation: `錬金するアイテム`,
    chengeover: {
      target: [`guidance`, `notes`],
      disable: true,
    }
  }
};
const greadLuck = [
  "豪運持ち",
  "リーコン",
  "フック"
];
const luck = [
  "幸運持ち",
  "ブレード",
  "プラグ",
  "デスペラード",
  "インビジブル"
];

const luckRate = 165;//      幸運の倍率(1.65)
const greadLuckRate = 180;// 豪運の倍率(1.8)
const guidanceRate = 13;//   錬金の手引きの倍率(1.3)
const notesRate = 25;//      賢者の手記の倍率(2.5)
const conditionRate = 12;//  状態異常：幸運の倍率(1.2)
const luckAbilityRate = (i)=>{return `1${i}`};// 幸運のお守りの倍率(1.0 ~ 1.9)

/* ---------------------------------------------------------------------------------------------------------------------------------------------- */

// option等生成
function initialize() {
  // ヒーロー選択肢
  const select_chara = $(`select#chara`);
  charaList.map(name => {
    if (greadLuck.includes(name)) {
      return {txt: name, val: greadLuckRate};
    }else if (luck.includes(name)) {
      return {txt: name, val: luckRate};
    }else {
      return {txt: name, val: 100};
    }
  }).forEach(e => select_chara.appendChild(createOption(e)));

  // 幸運のお守り
  const select_luckAbility = $(`select#luckAbility`);
  for (let i = 0; i <= 9; i++) {
    let s;
    if (i == 0) {
      s = `0(持っていない)`
    } else if (i == 1) {
      s = `幸運のお守り(1)`
    }else{
      s = `幸運のお守り＋${i}(${i})`
    }
    select_luckAbility.appendChild(createOption({txt: s, val: luckAbilityRate(i)}))
  }

  // 賢者の手引き
  const radio_guidance = $$(`.guidance`);
  radio_guidance[0].value = guidanceRate;
  radio_guidance[1].value = 10;

  // 賢者の手記
  const radio_notes = $$(`.notes`);
  radio_notes[0].value = notesRate;
  radio_notes[1].value = 10;

   // 幸運
  const radio_condition = $$(`.condition`);
  radio_condition[0].value = conditionRate;
  radio_condition[1].value = 10;

  modeChange({target: {value: "Accessory"}})
 }

// モード変更用変数定義
const te = $(`#targetExplanation`);
const ts = $(`#targetSelectbox`);
const g10 = $(`[name="guidance"][value="10"]`);
const n10 = $(`[name="notes"][value="10"]`);
const g = $$(`[name="guidance"]`);
const n = $$(`[name="notes"]`);
// モード変更
function modeChange(e) {
  // const te = $(`#targetExplanation`);
  // const ts = $(`#targetSelectbox`);
  // // const g13 = $(`[name="guidance"][value="13"]`);
  // const g10 = $(`[name="guidance"][value="10"]`);
  // // const n25 = $(`[name="notes"][value="25"]`);
  // const n10 = $(`[name="notes"][value="10"]`);
  // const g = $$(`[name="guidance"]`);
  // const n = $$(`[name="notes"]`);
  // var clone = ts.cloneNode(false); //ガワだけ複製して…
  // ts.parentNode.replaceChild(clone, ts); //すげ替え。
  // clone.addEventListener("change", calc);// 別物なので再設定
  while(ts.firstChild) ts.removeChild(ts.firstChild);// tsの子要素全削除

  switch(e.target.value) {
    case "Accessory":
      te.innerText = `強化前の能力値`;
      abilityList.forEach(e => ts.appendChild(createOption(e)));
      // 初期値：オフをchecked = true、どちらもdisabled = false;
      g.forEach(e => e.disabled = false);
      n.forEach(e => e.disabled = false);
      break;
    case "Item":
      te.innerText = `錬金するアイテム`;
      itemList.forEach(e => ts.appendChild(createOption(e)));
      // 初期値：どちらもdisabled = true、オフをchecked = true;
      g.forEach(e => e.disabled = true);
      n.forEach(e => e.disabled = true);
      break;
  }
  g10.checked = true;
  n10.checked = true;

  calc();
}

/*function charaRate(name) {
  if (greadLuck.includes(name)) {
    return greadLuckRate;
  }else if (luck.includes(name)) {
    return luckRate;
  }else {
    return 100;
  }
}*/// 削除予定
/* ---------------------------------------------------------------------------------------------------------------------------------------------- */

// 事前に全ての要素を取得しておく
let c = $("#calc");
const p = $(`#probability`);
const rRate = $(`#totalMultiplier`);
const pr = $("#calc").elements["probabilityRatio"];

// 全ての要素から値を読み取る→途中結果に表示→少数が無くなるようにして計算→左の修正→表示
function calc() {
  const calcAry = ["targetSelectbox", "chara", "luckAbility", "guidance", "notes", "condition"].map(e => c.elements[e].value);// ['50', '100', '10', '10', '10', '10']
  const ratioAry = ["targetSelectbox", "chara", "luckAbility", "guidance", "notes", "condition"].map(e => e + "Ratio").map(e => c.elements[e]);
  const correctionRatio = [1, 100, 10, 10, 10, 10];
  const correctionTotalRatio = correctionRatio.reduce((pre, cur) => pre * cur);// correctionRatioの積

  // f(calcAry);

  let resultValue = 1;

  for (let i = 0; i < 6; i++) {
    ratioAry[i].value = (i != 0 ? "×" : "") + calcAry[i] / correctionRatio[i] + (i == 0 ? "%" : "");
    resultValue *= calcAry[i];
  }

  pr.value = resultValue / calcAry[0] / correctionTotalRatio + "倍";
  resultValue /= correctionTotalRatio;

  // f(`resultValue : ${resultValue}`);

  p.value = resultValue + "%";
}

// 初期化処理
initialize();
// 全ての.Input要素に対して、変化時にイベント発火
$$(`.Input`).forEach(e => e.addEventListener("change", calc));
// モード変更イベント設定
$$(`input[name="targetRadio"]`).forEach(e => e.addEventListener("change", modeChange));
