let div = document.querySelector("div");
let p = document.querySelector('p');
let span = document.querySelector('span');

function tikla1(){
    alert("div")
}

function tikla2() {
    alert('p');
}

function tikla3(e) {
    e.stopPropagation();            // !!! ISTE BURADA BU SEKILDE (STOPPROPAGATION) KULLANIRSAK span etiketine tikladigimizda sadece span etiketi function hareketlenir
    alert('span');                  // Fakat mesela yukarida p etiketi icin yazilan fonksiyon icinde bunu kullanmadigimiz icin p etiketine her basista p nin fonksiyonunun yani sira div in fonksiyonu da hareketlenir yani "bubbling" olur
}

div.addEventListener("click", tikla1, false);    // 3. parametre hepsinde "false" olursa ve spana tiklarsak "span - p - div" seklinde (bubbling) oluyor
p.addEventListener('click', tikla2, false);      // Ama 3. parametre hepsinde "true" olursa ve spana tiklarsak "div - p - span" seklinde (capturing) oluyor
span.addEventListener('click', tikla3, false);   // Yani aslinda 3.parametre eventin calisma sirasini belirlemek icin kullanilmaktadir
stopPropagation();
// Burada 3.parametre default olarak "false" dur ve "bubbling" olayi gecerlidir