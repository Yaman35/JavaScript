
// target ile ilgili olayin etkiledigi elemani (mesela tiklanan eleman) isaretleyip gerekirse onunla ilgili bilgileri alabiliyorsun

let sec = document.querySelector("body"); // Burada "body" etiketinin yazilmasinin sebebi, en ustte bosy etiketi var ve onun icerisindeki olaylarin yakalanmak istenmesi

sec.addEventListener("click", tikla);    // Yani bu su anlama geliyor: "body" etiketimde bir yere tiklandiginda benim tikla() fonksyionum calissin

function tikla(e) {
    console.log(e.target.tagName)      // Burada "e" derken, body icerisinde tiklandiginda o olayin muhatabi olan hedefin tagName ismini ekrana yazdir demektir

    if (e.target.tagName === 'DIV') {
      console.log('Sectiginiz hedef DIV Etiketi');
    } else if (e.target.tagName === 'NAV') {
      console.log('Sectiginiz hedef NAV Etiketi ve arka plan rengini kirmizi yaptiniz');
      sec.style.backgroundColor = "red";
    } else {
      console.log('Sectiginiz hedef P Etiketi');
    } 
}

// Asagidaki sekilde fonksiyon icerisine degisken almadan da kullanilabilirdi
/*
function tikla() {
    let e = event;
  console.log(e.target.tagName); // Burada "e" derken, body icerisinde tiklandiginda o olayin muhatabi olan hedefin tagName ismini ekrana yazdir demektir
} 
*/