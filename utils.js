// elmのタグを生成し、elm内にtxtを T:innerText, H:innerHTML として記入
const createAndSetT = (elm, txt) => {var E = document.createElement(elm);E.innerText = txt;return E;};
const createAndSetH = (elm, txt) => {var E = document.createElement(elm);E.innerHTML = txt;return E;};

// 冒険ログ時のヒーロー名を配列で取得

// querySelector のショートカット
const $ = (q)=>document.querySelector(q);
// querySelectorAll のショートカット
const $$ = (q)=>{return Array.from(document.querySelectorAll(q));};
/* ただし一度に沢山の量を querySelector する場合は、
 * const d = getD(); d.querySelector(); などで getD() 呼び出し回数を抑えること
 * 実行時間 $ > getD.querySelector
 * 実行時間 $$ > getD.querySelectorAll
 *
 *        $: 0.6181640625 ms
 *  getD.qS: 0.013916015625 ms
 *       $$: 0.014892578125 ms
 * getD.qSA: 0.0078125 ms
 */// クエリタイム

const f = (t)=>debugMode ? console.log(t) : "";

const debugMode = false;
if (debugMode) {
  $(`header#switchBtn`).before(createAndSetH("span", "デバッグ中！"));
  $(`header#switchBtn`).before(createAndSetT("style", `span:has(~ header#switchBtn) { color: red; }`));
  // $$(`header#switchBtn > label > input`).forEach(e => e.disabled = false);
  $$(`label > input[disabled]`).forEach(e => e.disabled = false);
  $$(`header#switchBtn > *`)[2].click();// ほら穴：0、キャラ：1、隠しボス：2、錬金術：3、アイテム：4
}

$(`#secretSearch`).after(createAndSetT(`span`, `未完成につきデータ募集中！`))
$(`#secretSearch`).after(createAndSetH("style", `select#secretSearch ~ span { color: red; }`));
