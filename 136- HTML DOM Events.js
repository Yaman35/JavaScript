
function writing(){
    document.querySelector("span").innerText = "MERHABA DUNYA!"
}

//------------------------------------------------------------------------------------------------------------------

let it = document.querySelector('img');

function kopek(){
    // let it = document.querySelector('img'); Eger burada yazilirsa diger fonksiyon icinde tekrar almak gerekir ama buradaki gibi disrida yazilirsa her yerde kullan
    it.attributes[0].value = 'https://iasbh.tmgrup.com.tr/d88373/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2020/04/28/en-guzel-kopek-isimleri-populer-disi-ve-erkek-kopek-isimleri-1588099066246.jpg';
}

function kopekout(){
    it.setAttribute('src', 'https://www.petihtiyac.com/albino-muhabbet-kusu-ozellikleri-ve-bakimi-365-blog..jpg');
}

// Gorulecegi uzere iki farkli sekilde img etiketinin src attribute degerini belirleyebiliyoruz

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mouse ile her tiklandiginda yatay ve dikey koordinatlarini aliyoruz 

// clientX, clientY özelliği, bir fare olayı tetiklendiğinde fare işaretçisinin yatay/dikey koordinatını (istemci alanına göre) döndürür.
function olc(){
    let dikey = event.clientY;
    let yatay = event.clientX;
    document.querySelector("#span2").innerText = `Tikladiginiz noktanin kutu icindeki koordinatlari: Dikey = ${dikey}, Yatay = ${yatay}`
}



//screenX, screenY özelliği, bir olay tetiklendiğinde fare işaretçisinin yatay/dikey koordinatını (kullanıcının bilgisayar ekranına göre) döndürür.

function olc2() {
    let dikey = event.screenY;
    let yatay = event.screenX;
    document.querySelector('#span3').innerText = `Tikladiginiz noktanin ekrana gore koordinatlari: Dikey = ${dikey}, Yatay = ${yatay}`;
}

// pageX, pageY özelliği, bir fare olayı tetiklendiğinde fare işaretçisinin yatay/dikey koordinatını (belgeye göre) döndürür.

function olc3() {
  let dikey = event.pageY;
  let yatay = event.pageX;
  document.querySelector('#span4').innerText = `Tikladiginiz noktanin ekrana gore koordinatlari: Dikey = ${dikey}, Yatay = ${yatay}`;
}