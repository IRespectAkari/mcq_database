const HoraanaData = [
  {
    youbi: "月",
    details: [
      ["-", "砥石", "山賊"],
      ["金属探知機", "毒鉱石", "山賊"]
    ]
  },
  {
    youbi: "火",
    details: [
      ["-", "魔石", ""],
      ["金属探知機", "ジェンカの短剣", "ウィル・オ・ウィスプ"],
      ["ランタン", "光の粉", "ウィル・オ・ウィスプ"], 
      ["毒鉱石", "毒素の塊", "ウィル・オ・ウィスプ"]
    ]
  },
  {
    youbi: "水",
    details: [["-", "アリアドネの糸", "岩トカゲ"]]
  },
  {
    youbi: "木",
    details: [
      ["-", "木の装甲", "コボルト、メイジコボルト、コボルトエリート"], 
      ["-", "アリアドネの糸", "コボルト、メイジコボルト、コボルトエリート"],
      ["-", "砥石", "コボルト、メイジコボルト、コボルトエリート"], 
      ["-", "強化石", "コボルト、メイジコボルト、コボルトエリート"],
      ["金属探知機", "ジェンカの短剣", "コボルト、メイジコボルト、コボルトエリート"]
    ]
  },
  {
    youbi: "金",
    details: [
      ["-", "鉄鉱石", "マッドマン、マッドゴーレム"], 
      ["-", "魔石", ""], 
      ["-", "砥石", ""], 
      ["-", "強化石", ""],
      ["金属探知機", "ジェンカの短剣", "マッドマン、マッドゴーレム"]
    ]
  },
  {
    youbi: "土",
    details: [
      ["-", "魔石", "罠", "マッドマン、マッドゴーレム"], 
      ["-", "砥石", "罠、マッドマン、マッドゴーレム"],
      ["-", "強化石", "マッドマン、マッドゴーレム"],
      ["金属探知機", "ジェンカの短剣", "マッドマン、マッドゴーレム"]
    ]
  },
  {
    youbi: "日",
    details: [["-", "アリアドネの糸", "おばけきのこ、おばけきのこの群れ"]]
  }
];

function tableCreator() {
  // 表生成関数
  const createTable = (addData, capText)=>{
    const midasi = ["持ち物", "報酬", "敵"];
    const classes = ["motimono", "housyuu", "teki"];

    var table = document.createElement("table");
    // 表のキャプション（見出し）追加
    var cap = createAndSetH("caption", `${capText} (${addData.youbi})`);
    table.appendChild(cap);

    var tr = document.createElement("tr");

    // 見出しセルの書き込み
    for (let i = 0; i < 3; i++) {
      var th = createAndSetH("th", midasi[i]);
      th.classList.add(classes[i]);
      tr.appendChild(th);
    }
    table.appendChild(tr);

    // 情報の書き込み
    for (let e of addData.details) {
      var tr = document.createElement("tr");
      for (let i = 0; i < 3; i++) {
        var td = createAndSetH("td", e[i]);
        // e[i] が「-」の時だけ、cssのboldを付与する。
        if (e[i] === "-") {
          td.style.fontWeight = "bold";
        }
        // 「砥石」の時だけ、cssの「color: red;」を付与する。
        if (e[i] === "砥石") {
          td.style.color = "red";
        }
        td.classList.add(classes[i]);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    return table;
  }

  // 表の更新時にバグらない為に前回の表を削除する関数
  const cloneAndRenew = (old,table)=>{
    //ガワだけ複製して…
    var clone = old.cloneNode(false);
    //すげ替え。
    old.parentNode.replaceChild(clone, old);

    clone.appendChild(table);

    return;
  }

  const numToDayList = ["日", "月", "火", "水", "木", "金", "土"];
  const todayCap = "本日のほら穴";
  const nextCap = "明日のほら穴";

  var now = new Date();
  var i = parseInt(now.getDay());
  const todayInJP = numToDayList[i];
  const nextInJP = numToDayList[(i + 1) % 7];

  const todayData = HoraanaData.find(({youbi})=>youbi == todayInJP);
  const nextData = HoraanaData.find(({youbi})=>youbi == nextInJP);

  var todayTable = createTable(todayData, todayCap);
  var nextTable = createTable(nextData, nextCap);

  var oldToday = document.getElementById("todaysHoraanaTable");
  var oldNext = document.getElementById("nextHoraanaTable");

  cloneAndRenew(oldToday, todayTable);
  cloneAndRenew(oldNext, nextTable);

  return;
}

// ページ読み込み時にtableCreator()を実行する
addEventListener("load", tableCreator);

// // 日付変更時に実行
// const d = new Date();
// const nextDay = d.setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000;
// const nowTime = new Date();
// const tommorowFromNow = ()=>nextDay - nowTime.getTime();

// setTimeout(tableCreator(), tommorowFromNow);

function createAndSetH(elm, txt) {
  const E = document.createElement(elm);
  E.innerHTML = txt;
  return E;
}
