
// ".childElementCount" belli bir elemanin altindaki cocuk sayisini ogrenmek icin kullanilir

let eleman = document.getElementsByClassName('div1');
console.log(eleman[0]);                     // getElements, "s" olayindan oturu tek bir eleman donse dahi [index] belirtmek gerekir

let sec = eleman[0].childElementCount;      // Fakat mesela ul tagi var ve onun altinda da 100 tane li var. Sadece ul cocuk olarak sayilir li etiketleri sayilmaz
console.log(`Istediginiz elemanin child sayisi : ${sec}`);

let ul = document.querySelector("ul").childElementCount;
console.log(`ul taginin cocuk sayisi ise : ${ul}`);
