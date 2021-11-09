let paragrapgh = document.querySelector('p'); 
paragrapgh.innerHTML = 'Merhaba Ben Huseyin Yaman';             // Bu sekilde HTML tarafindaki p etiketinin icerigini degistirmis olduk

let paragrapgh2 = document.getElementById('p2'); 
paragrapgh2.innerHTML = '<div>Merhaba Ben Huseyin Yaman<div/>'; // innerHTML ile bu sekilde tag ler de ekleyebiliriz
                                                                // Fkaat innerText kullanirsak bu sefer tag lerde string gibi algilanir.

let paragrapgh3 = document.getElementById('p3');
paragrapgh3.innerText = '<div>Merhaba Ben Huseyin Yaman<div/>'; // Gorulecegi uzere burada tag lerde bir string olarak algilandi ve o sekilde yazildi     

let str = "Bu da degiskene atanmis string"
let paragrapgh4 = document.getElementById('p4');
paragrapgh4.innerText = str;                                    // Gorulecegi uzere yukaridaki gibi string ifadeleri " " icerisinde yazmak zorunlu iken, degiskenleri bu sekilde direk de yazabiliyoruz