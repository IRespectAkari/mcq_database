const HoraanaData = [
  {
    youbi: "sun",
    details: [["-", "アリアドネの糸", "おばけきのこ、おばけきのこの群れ"]]
  },
  {
    youbi: "mon",
    details: [
      ["-", "砥石", "山賊"],
      ["金属探知機", "毒鉱石", "山賊"]
    ]
  },
  {
    youbi: "tue",
    details: [
      ["-", "魔石", "ウィル・オ・ウィスプ"],
      ["金属探知機", "ジェンカの短剣", "ウィル・オ・ウィスプ"],
      ["ランタン", "光の粉", "ウィル・オ・ウィスプ"],
      ["毒鉱石", "毒素の塊", "ウィル・オ・ウィスプ"]
    ]
  },
  {
    youbi: "wed",
    details: [["-", "アリアドネの糸", "岩トカゲ"]]
  },
  {
    youbi: "thu",
    details: [
      ["-", "アリアドネの糸", "コボルト、メイジコボルト、コボルトエリート"],
      ["金属探知機", "ジェンカの短剣", "コボルト、メイジコボルト、コボルトエリート"]
    ]
  },
  {
    youbi: "fri",
    details: [
      // ["-", "鉄鉱石", "マッドマン、マッドゴーレム"],
      ["-", "鉄鉱石", ""],
      ["-", "砥石", ""],
      ["-", "強化石", ""],
      ["金属探知機", "ジェンカの短剣", "マッドマン、マッドゴーレム"]
    ]
  },
  {
    youbi: "sat",
    details: [
      ["-", "魔石", "マッドマン、マッドゴーレム"],
      ["-", "砥石", "罠、マッドマン、マッドゴーレム"],
      ["-", "強化石", "マッドマン、マッドゴーレム"],
      ["金属探知機", "ジェンカの短剣", "マッドマン、マッドゴーレム"]
    ]
  },
];
/* ほら穴データテーブル生成
 * 一週間分の tbody 以降を全て生成し、#horaanaTable に追加（appendChild）
 */
/* 完成品 ここのコメントアウト⇔解除で切り替え
<tbody class="sat">
  <tr><td>-</td><td>魔石</td><td>マッドマン、<br>マッドゴーレム</td></tr>
  <tr><td>-</td><td>砥石</td><td>マッドマン、<br>マッドゴーレム</td></tr>
  <tr><td>-</td><td>強化石</td><td>マッドマン、<br>マッドゴーレム</td></tr>
  <tr><td>金属探知機</td><td>ジェンカの短剣</td><td>マッドマン、<br>マッドゴーレム</td></tr>
</tbody>
*/// 完成品HTMLコード
const target = $("#horaanaTable");

HoraanaData.map(e => {
  const tbody = document.createElement("tbody");
  tbody.classList.add(e.youbi);
  e.details.forEach(e => {
    const tr = document.createElement("tr");
    tr.appendChild(createAndSetT("td", e[0]));
    tr.appendChild(createAndSetT("td", e[1]));
    tr.appendChild(createAndSetT("td", e[2].split("、").join("、\n")));
    tbody.appendChild(tr);
  });

  return tbody;
}).forEach(e => target.appendChild(e))


// 今日のほら穴に変更
$$("#horaanaSwitchBtn > *")[new Date().getDay()].click();
