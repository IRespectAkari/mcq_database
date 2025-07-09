const charaData = [{
  name: "アイアン",
  ability: "戦士 剣◎、杖✕",
  skills: ["アイテム転職：", "クリティカル", "ダメージカット(ダメージカット＆敵の攻撃力DOWN)", "力がみなぎる(攻撃力UP)"]
}, {
  name: "アサルト",
  ability: "戦士 剣◎、杖✕",
  skills: ["クリティカル"]
}, {
  name: "アーミー",
  ability: "その他 剣◎、杖◎",
  skills: ["クリティカル(確率高)", "HPMP大幅強化", "※探索スキルなし", "※探索系から確率で転職欄出現"]
}, {
  name: "インビジブル",
  ability: "特殊探索 剣△、杖◎",
  skills: ["奇襲(先制攻撃)", "クリティカル(確率高)", "連撃(確率で2回攻撃)", "透明化(回避)", "探索技能", "文字解読", "金運", "幸運"]
}, {
  name: "エア",
  ability: "その他 剣〇、杖〇",
  skills: ["アイテム転職：", "急所を突く(敵防御力DOWN)", "空中回避(敵の攻撃をよけた次のターンにクリティカル確定)※", "※一つの戦闘の中の次のターンで確定　(敵が死亡して次の戦闘に切り替わった場合リセットされる)"]
}, {
  name: "エレクトリック",
  ability: "援護特殊 剣△、杖◎",
  skills: ["HP回復", "敵バリア軽減", "呪い無効化", "状態異常治療", "雷撃(先制攻撃)[先制◎]", "痺れさせる(敵行動不能)", "文字解読"]
}, {
  name: "クッカー",
  ability: "その他 剣〇、杖〇",
  skills: ["アイテム転職：", "所持しているレタスで料理を作り仲間を呼ぶ。", "レッドレタス所持　 戦士系", "イエローレタス所持 援護系", "ブラックレタス所持 特殊系", "ゴールドレタス所持 探索系", "シロガネレタス所持 その他系", "※複数持っている場合、ランダムで選ばれる。", "※アイテムは消費しない。"]
}, {
  name: "クリーミー",
  ability: "援護 剣〇、杖〇",
  skills: ["アイテム転職：", "クリームトラップ(確率で敵に「攻撃力DOWN」「防御力DOWN」「3ターン行動不能」のどれかを付与)", "HP回復", "敵バリア軽減", "呪い無効化", "状態異常治療"]
}, {
  name: "ケログ",
  ability: "特殊超級 剣✕、杖◎",
  skills: ["先制攻撃", "カエルタレット(毎ターン確定追加ダメージ【攻撃力は本体に依存】)", "輪唱(スキル威力UP)", "MP強化大", "文字解読"]
}, {
  name: "ゴースト",
  ability: "特殊 剣✕、杖◎",
  skills: ["文字解読", "先制攻撃"]
}, {
  name: "シールド",
  ability: "戦士援護 剣◎、杖△",
  skills: ["クリティカル", "盾展開(防御力UP)", "力がみなぎる(攻撃力UP)", "HP回復", "敵バリア軽減", "呪い無効化", "状態異常治療"]
}, {
  name: "スウィニー",
  ability: "特殊上級 剣✕、杖◎",
  skills: ["奇襲(先制攻撃)", "文字解読", "『トリック』(相手の攻撃無力化かつ回復)-2MP", "赤ニンジン(HP UP)※", "ムキムキニンジン(攻撃力UP)※", "カチコチニンジン(防御力UP)※", "ステッキ(スキル威力UP)※", "マジカルマント(敵の攻撃無力化)※", "プラチナマント(敵の攻撃力ダウン)※", "※冒険の最初の戦闘のみどれかが確定で発動"]
}, {
  name: "チュチュ",
  ability: "その他 剣〇、杖✕",
  skills: ["アイテム転職：", "クリティカル", "燃焼(毎ターンHP15%消費＆2回攻撃。効果は自分のみ)", "力がみなぎる(攻撃力UP)"]
}, {
  name: "デスペラード",
  ability: "戦士探索 剣◎、杖✕",
  skills: ["アイテム転職：", "クリティカル", "リボルバールーレット(確率で「敵にダメージ」「味方にダメージ」「何も起きない」のどれかが発動)", "強奪(敵からお金を盗む)→金運", "探索技能", "幸運"]
}, {
  name: "ババ",
  ability: "その他 剣◎、杖✕",
  skills: ["アイテム転職：", "クリティカル(防御を無視したダメージ)", "ハンマー(戦闘開始時クリティカル無効解除)", "金槌(毎ターン確率で敵防御力DOWN)"]
}, {
  name: "ビベリ",
  ability: "その他 剣〇、杖〇",
  skills: ["アイテム転職：", "クリティカル", "戦車に乗る(HP・DF増加)", "敵の最大HPに依存した攻撃力"]
}, {
  name: "フック",
  ability: "探索上級 剣〇、杖✕",
  skills: ["クリティカル(確率高)", "陽気な歌(攻撃力UP)", "自慢話、糸に絡まる(効果なし)", "敵に悪口(敵の攻撃力UP or 敵バリア消滅)※", "拘束(敵行動不可)", "マネーアタック(パーティ全員が所持金を失う。威力と消費金額はそれぞれのプレイヤーの所持金に比例する)", "探索技能", "豪運[幸運◎]", "金運", "※公式ではバリア軽減効果は無し表記"]
}, {
  name: "ブレード",
  ability: "探索超級 剣〇、杖✕",
  skills: ["クリティカル(確率最高)", "探索技能", "一撃必殺", "幸運", "金運"]
}, {
  name: "プラグ",
  ability: "探索 剣〇、杖✕",
  skills: ["アイテム転職：", "クリティカル", "ドローン召喚(毎ターン確定追加ダメージ【攻撃力は本体に依存】)", "探索技能", "幸運", "金運"]
}, {
  name: "ホイールレッグ",
  ability: "援護超級 剣〇、杖〇",
  skills: ["HP回復※", "敵バリア軽減※", "力がみなぎる(攻撃力UP)※", "不思議なベール(防御力UP)※", "不思議な掛け声(HP増加orMP増加)※", "※毎ターンの最初に確定発動", "呪い無効化", "状態異常治療"]
}, {
  name: "ボマー",
  ability: "戦士上級 剣◎、杖✕",
  skills: ["クリティカル", "爆発(攻撃してきた敵にダメージ)", "力がみなぎる(攻撃力UP)", "ステータスHP多"]
}, {
  name: "マッシュ",
  ability: "特殊 剣✕、杖◎",
  skills: ["アイテム転職：", "先制攻撃", "文字解読", "敵の能力発動率減少(※？)", "敵クリティカル率減少※", "ガス(敵を盲目状態にする)※", "※自分攻撃した後に確率で発動"]
}, {
  name: "マーゴ",
  ability: "援護上級 剣〇、杖〇",
  skills: ["HP回復(強)", "敵バリア軽減[バリア減◎]", "呪い無効化", "状態異常治療", "魔法陣(味方回復)", "魔法陣(敵デバフ)※", "HP上昇", "※敵スキル発動率、クリティカル率減少…？"]
}, {
  name: "ミオキャット",
  ability: "戦士超級 剣◎、杖✕",
  skills: ["クリティカル", "威嚇(敵の攻撃力DOWN)", "激昂(被弾時確率で次のターンクリティカル確定)", "HP強化大"]
}, {
  name: "メディック",
  ability: "援護 剣△、杖△",
  skills: ["HP回復", "敵バリア軽減", "呪い無効化", "状態異常治療"]
}, {
  name: "ランチャー",
  ability: "戦士特殊 剣◎、杖◎",
  skills: ["クリティカル", "武器種問わずATとMGが上昇", "迫撃砲(先制攻撃)[先制◎]", "力がみなぎる(攻撃力UP)", "文字解読"]
}, {
  name: "リーコン",
  ability: "探索 剣△、杖✕",
  skills: ["クリティカル", "探索技能", "豪運[幸運◎]", "金運[金運◎]"]
}];

// category1: "戦士",
// category2: "戦士",
// rank: "-",
// をcharaDataに直接書き、変換の手間を無くす！

function kanaSort(a, b) {
  const c = a.name.charCodeAt(0) - b.name.charCodeAt(0)
  return c ? c : a.name.charCodeAt(1) - b.name.charCodeAt(1)
}
charaData.sort(kanaSort);

const select = $(`#charaSelect`);
charaData.forEach(e => select.appendChild(createAndSetT("option", e.name)));

// const explanationTable = $(`#charaExplanation`);
const abilitiesBody = $(`thead#abilities + tbody > tr`)
const skillsBody = $(`thead#skills + tbody`)

/* ## 目標値 ##
 *
 * カテゴリ1：戦士|援護|探索|特殊|その他
 * カテゴリ2：戦士|援護|探索|特殊|-
 * ランク　 ：上級|超級|-
 * 剣　　　 ：[◎〇△✕]
 * 杖　　　 ：[◎〇△✕]
 * skills欄に、アイテム転職：アイテム名
 *
 * reg = /(戦士|援護|探索|特殊)((戦士|援護|探索|特殊)|(上級|超級))?/
 * reg.exec("特殊超級 剣✕、杖◎")
 *
 *
 */

/*
const reg = /(アイテム転職)?(戦士|援護|探索|特殊|その他)(戦士|援護|探索|特殊)?(上級|超級)?/g
while((rslt = reg.exec("特殊戦士 剣✕、杖◎")) != null) {
  console.log(0, rslt[0])
  console.log(1, rslt[1])
  console.log(2, rslt[2])
  console.log(3, rslt[3])
  console.log(rslt.length)
}*/// while文

/* 目標のHTML
<table id="charaExplanation">
  <thead id="abilities">
    <tr>
      <th>カテゴリ1</th>
      <th>カテゴリ2</th>
      <th>ランク</th>
      <th>剣</th>
      <th>杖</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>援護</td>
      <td>特殊</td>
      <td>-</td>
      <td>△</td>
      <td>◎</td>
    </tr>
  </tbody>
  <thead id="skills">
    <tr>
      <th colspan="5">スキル</th>
    </tr>
  </thead>
  <tbody>
    <tr class="skills-row"><td colspan="5" class="skills-container">HP回復</td></tr>
    <tr class="skills-row"><td colspan="5" class="skills-container">敵バリア軽減</td></tr>
    <tr class="skills-row"><td colspan="5" class="skills-container">呪い無効化</td></tr>
    <tr class="skills-row"><td colspan="5" class="skills-container">状態異常治療</td></tr>
    <tr class="skills-row"><td colspan="5" class="skills-container">雷撃(先制攻撃)[先制◎]</td></tr>
    <tr class="skills-row"><td colspan="5" class="skills-container">痺れさせる(敵行動不能)</td></tr>
    <tr class="skills-row"><td colspan="5" class="skills-container">文字解読</td></tr>
  </tbody>
  <tbody>
    <tr class="skills-row"><td colspan="5" class="skills-container">クリティカル</td></tr>
    <tr class="skills-row"><td colspan="5" class="skills-container">ダメージカット(ダメージカット＆敵の攻撃力DOWN)</td></tr>
    <tr class="skills-row"><td colspan="5" class="skills-container">力がみなぎる(攻撃力UP)</td></tr>
  </tbody>
</table>
*/// 目標のHTMaL

/*function setSkill(txt) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.colSpan = 5;
  td.innerText = txt;
  tr.appendChild(td);
  return tr;
}*/// createAndSetH("tr", `<td colspan="5">${e}</td>`) の関数化
function searchFunc(e) {
  abilitiesBody.innerHTML = ``;
  skillsBody.innerHTML = ``;

  const name = e.target.selectedOptions[0].textContent;
  const data = charaData.find(e => e.name == name);
  const reg = /(戦士|援護|探索|特殊|その他)(戦士|援護|探索|特殊)?(上級|超級)? 剣([◎〇△✕])、杖([◎〇△✕])/g;
  const rslt = reg.exec(data.ability);

  // rslt.slice(1).map(e => e ? e : "-").forEach(e => abilitiesBody.appendChild(createAndSetT("td", e)));
  abilitiesBody.innerHTML = rslt.slice(1).map(e => e ? `<td>${e}</td>` : `<td style="text-align: center;letter-spacing: -0.1em;">――</td>`).join("");

  data.skills.forEach(e => skillsBody.appendChild(createAndSetH("tr", `<td colspan="5">${e}</td>`)));
  // data.skills.forEach(e => skillsBody.appendChild(setSkill(e)));
}

select.addEventListener("change", searchFunc);
select.dispatchEvent(new Event("change"));
