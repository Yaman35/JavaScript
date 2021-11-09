// height ve width ile, sitemizi ziyaret eden kullanicinin tam ekran boyutlarini (tarayici dahil) alabiliyoruz

const span1 = document.querySelector('#span1');
const span2 = document.querySelector('#span2');

let height = screen.availHeight;
let width = screen.availWidth;

let totalheight = screen.height;
let totalwidth = screen.width;

span1.innerHTML = `Ekran Yuksekliginiz: ${height} px, Ekran Genisliginiz ise: ${width} px dir`;
span2.innerHTML = `Tam Ekran Yuksekliginiz: ${totalheight} px, Tam Ekran Genisliginiz ise: ${totalwidth} px dir`;
