const charaData = [
  {
    name: "アサルト",
    ability: "戦士 剣◎、杖×",
    skills: ["クリティカル",]
  },
  {
    name: "メディック",
    ability: "援護 剣△、杖△",
    skills: ["HP回復","敵バリア軽減","呪い無効化","状態異常治療",]
  },
  {
    name: "ゴースト",
    ability: "特殊 剣×、杖◎",
    skills: ["文字解読","先制攻撃",]
  },
  {
    name: "リーコン",
    ability: "探索 剣△、杖×",
    skills: ["クリティカル","探索技能","豪運[幸運◎]","金運[金運◎]",]
  },
  {
    name: "ボマー",
    ability: "戦士上級 剣◎、杖×",
    skills: ["クリティカル","爆発(攻撃してきた敵にダメージ)","力がみなぎる(攻撃力UP)","ステータスHP多",]
  },
  {
    name: "ランチャー",
    ability: "戦士特殊 剣◎、杖◎",
    skills: ["クリティカル","武器種問わずATとMGが上昇","迫撃砲(先制攻撃)[先制◎]","力がみなぎる(攻撃力UP)","文字解読",]
  },
  {
    name: "マーゴ",
    ability: "援護上級 剣○、杖○",
    skills: ["HP回復(強)","敵バリア軽減[バリア減◎]","呪い無効化","状態異常治療","魔法陣(味方回復)","魔法陣(敵デバフ)※","HP上昇","※敵スキル発動率、クリティカル率減少…？",]
  },
  {
    name: "シールド",
    ability: "戦士援護 剣◎、杖△",
    skills: ["クリティカル","盾展開(防御力UP)","力がみなぎる(攻撃力UP)","HP回復","敵バリア軽減","呪い無効化","状態異常治療",]
  },
  {
    name: "エレクトリック",
    ability: "援護特殊 剣△、杖◎",
    skills: ["HP回復","敵バリア軽減","呪い無効化","状態異常治療","雷撃(先制攻撃)[先制◎]","痺れさせる(敵行動不能)","文字解読",]
  },
  {
    name: "スウィニー",
    ability: "特殊上級 剣×、杖◎",
    skills: ["奇襲(先制攻撃)","文字解読","『トリック』(相手の攻撃無力化かつ回復?)-2MP","赤ニンジン(HP UP)※","ムキムキニンジン(攻撃力UP)※","カチコチニンジン(防御力UP)※","ステッキ(スキル威力UP)※","マジカルマント(敵の攻撃無力化)※","プラチナマント(敵の攻撃力ダウン)※","※冒険の最初の戦闘のみどれかが確定で発動",]
  },
  {
    name: "インビジブル",
    ability: "特殊探索 剣△、杖◎",
    skills: ["奇襲(先制攻撃)","クリティカル(確率高)","連撃(確率で2回攻撃)","透明化(回避)","探索技能","文字解読","金運","幸運",]
  },
  {
    name: "フック",
    ability: "探索上級 剣○、杖×",
    skills: ["クリティカル(確率高)","陽気な歌(攻撃力UP)","自慢話、糸に絡まる(効果不明)","敵に悪口(敵の攻撃力UP or 敵バリア消滅?)※","拘束(敵行動不可)","マネーアタック(パーティ全員が所持金を失う。威力と消費金額はそれぞれのプレイヤーの所持金に比例する)","探索技能","豪運[幸運◎]","金運","※公式ではバリア軽減効果は無し表記",]
  },
  {
    name: "アーミー",
    ability: "探索系から確率で転職欄出現※ その他 剣◎、杖◎",
    skills: ["クリティカル(確率高)","HPMP大幅強化","※探索スキルなし",]
  },
  {
    name: "ミオキャット",
    ability: "戦士超級 剣◎、杖×",
    skills: ["クリティカル","威嚇(敵の攻撃力DOWN)","激昂(被弾時確率で次のターンクリティカル確定)","HP強化大",]
  },
  {
    name: "ホイールレッグ",
    ability: "援護超級 剣○、杖○",
    skills: ["HP回復※","敵バリア軽減※","力がみなぎる(攻撃力UP)※","不思議なベール(防御力UP)※","不思議な掛け声(HP増加orMP増加)※","※毎ターンの最初に確定発動","呪い無効化","状態異常治療",]
  },
  {
    name: "ケログ",
    ability: "特殊超級 剣×、杖◎",
    skills: ["先制攻撃","カエルタレット(確定ダメージ、攻撃力は本体に依存)","輪唱(スキル威力UP)","MP強化大","文字解読",]
  },
  {
    name: "ブレード",
    ability: "探索超級 剣○、杖×",
    skills: ["クリティカル(確率最高)","探索技能","一撃必殺","幸運","金運",]
  },
  {
    name: "チュチュ",
    ability: "アイテム転職 その他 剣○、杖×",
    skills: ["クリティカル","燃焼(毎ターンHP15%消費＆2回攻撃。効果は自分のみ)","力がみなぎる(攻撃力UP)",]
  },
  {
    name: "プラグ",
    ability: "アイテム転職 探索 剣○、杖×",
    skills: ["クリティカル","ドローン召喚(確定ダメージ、攻撃力は本体に依存)","探索技能","幸運","金運",]
  },
  {
    name: "クリーミー",
    ability: "アイテム転職 援護 剣○、杖○",
    skills: ["クリームトラップ(敵に攻撃力DOWN、防御力DOWN、3ターン行動不能のどれかを付与)","HP回復","敵バリア軽減","呪い無効化","状態異常治療",]
  },
  {
    name: "アイアン",
    ability: "アイテム転職 戦士 剣◎、杖×",
    skills: ["クリティカル","ダメージカット(ダメージカット＆敵の攻撃力DOWN)","力がみなぎる(攻撃力UP)",]
  },
  {
    name: "デスペラード",
    ability: "アイテム転職 戦士探索 剣◎、杖×",
    skills: ["クリティカル","リボルバールーレット(確率で「敵にダメージ」「味方にダメージ」「何も起きない」のどれかが発動)","強奪(敵からお金を盗む)→金運","探索技能","幸運",]
  },
  {
    name: "エア",
    ability: "アイテム転職 その他 剣○、杖○",
    skills: ["急所を突く(敵防御力DOWN)","空中回避(敵の攻撃をよけた次のターンにクリティカル確定)※","※一つの戦闘の中の次のターンで確定　(敵が死亡して次の戦闘に切り替わった場合リセットされる)",]
  },
  {
    name: "ビベリ",
    ability: "アイテム転職 その他 剣○、杖○",
    skills: ["クリティカル","戦車に乗る(HP・DF増加)","敵の最大HPに依存した攻撃力",]
  },
];


const charaSelector = document.getElementById(`charaSearch`);
const charaExplanator = document.getElementById(`charaExplanation`);
createSelectorOptions();// 初期化
charaSelector.addEventListener(`change`, searchFunction);
charaSelector.dispatchEvent(new Event(`change`));

function searchFunction(e) {
  charaExplanator.innerHTML = ``;// 初期化

  const selectName = e.target.selectedOptions[0].textContent;
  const data = charaData.find(e=>e.name===selectName);

  charaExplanator.appendChild(createAndSet(`div`, data.ability));

  const skl = document.createElement(`ul`);
  data.skills.forEach(text=>skl.appendChild(createAndSet(`li`, text)));
  charaExplanator.appendChild(skl);
}

function createSelectorOptions() {
  charaData.forEach(e=>charaSelector.appendChild(createAndSet(`option`, e.name)));
}

function createAndSet(elm, txt) {
  const E = document.createElement(elm);
  E.innerText = txt;
  return E;
}
