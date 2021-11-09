// availHeight ve availWidth ile, sitemizi ziyaret eden kullanicinin ekran boyutlarini (tarayici kismi haric) alabiliyoruz
// Bu iki method ile css deki MediaQuery lerde oldugu gibi islemler gerceklestirebiliriz


const span = document.querySelector("span");

let height = screen.availHeight; // Ekranin yuksekligini alir
let width = screen.availWidth;   // Ekranin genisligini alir

span.innerHTML = `Ekran Yuksekliginiz: ${height} px, Ekran Genisliginiz ise: ${width} px dir`

function changeColor(){
    if (width > 1500) {
      span.style.backgroundColor = 'red';
    }
}

changeColor();
