let find = document.querySelector("#find").childNodes; // children kullanilsaydi zaten yorum satiri ve bosluklar gosterilmeyecekti
let mark = document.getElementsByTagName("mark");


let goster = "";

for (let i = 0; i < find.length; i++){
    goster = find[i].nodeName + "<br>";         // "nodeName" kullanilirsa bosluklar dahil tum cocuklar gosterilirdi
    console.log(goster);                        // "nodeType" kullanilsaydi eger, her satirdaki elemanin ne oldugunu kodlanmis olarak numara seklinde gosteriyor(w3school)
}

console.log("<br>");

let goster1 = "";                               

for (let i = 0; i < find.length; i++) {
  goster1 = find[i].tagName + '<br>';           // "tagName" kullanilirsa  bosluklar/yorum satirlari "undefined" olarak gosterilir
  console.log(goster1);
}
let span1 = document.getElementById("span1");
let find2 = document.getElementsByTagName("div")[0];

let goster3 = find2.childNodes[1].nodeValue;    // "nodeValue" ise bu sekilde ilgili node/child icerigini alabilmek icin kullanilir
span1.innerText = goster3;                      // Yani burada div in cocuklarindan index[1] deki (cunku childNodes ile yaoildi) cocugun icerigini (nodeValue) al

