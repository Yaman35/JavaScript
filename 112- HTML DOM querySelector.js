// querySelector icerisine istedgimiz sayi (id, class, tag) yazdirabiliriz
// id kullanirsak "#" ile birlikte, class name kullanirsak "." ile birlikte kullanilmalidir
// Fakat dezavantaj olarak her daim (ilk buldugunu) donderir!!!

let eleman1 = document.querySelector("p");      // Mesela burada birden fazla p etiketi olmasina ragmen sadece ilkinin arka plani kirmizi oldu
console.log(eleman1)
eleman1.style.backgroundColor = "red"; 

let eleman2 = document.querySelector("nav p"); // Baska bir etiket altindaki etikete ulasmak istedigimizde ise parantez ici bu sekilde olmalidir. Mesela burada nav altindaki p etiketine eristik
console.log(eleman2);                          //  let eleman2 = document.querySelector('nav > p') veya ('nav ~ p'); seklinde kullanimlarda olabilirdi
eleman2.style.backgroundColor = 'green';

let eleman3 = document.querySelector("#span1");
console.log(eleman3);

let eleman4 = document.querySelector(".div1");
console.log(eleman4);

let eleman5 = document.querySelector("input[type='text']"); // Bu sekilde type belirterek de istedgimiz bir inputa ulasabiliriz.Ama eger type belirtmeseydim ilk input secilip arkaplani mavi olacakti
console.log(eleman5);                                       // Fakat burada dikkat etmemiz gerekn husus (" ") icerisinde (' ') kullanmaktir. Aksi takdirde calismaz ! Ayrica parantez ici tum css selectorler kullanilabilir
eleman5.style.backgroundColor = 'blue';

// let eleman1 = document.querySelector("p, span");  Bu sekilde parantez icerisine birden fazla etiket yazarak erisim SAGLAYAMIYORUZ ! (css de olmasina ragmen)


