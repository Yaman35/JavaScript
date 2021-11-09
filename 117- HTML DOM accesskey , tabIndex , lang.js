
let sec = document.querySelectorAll("input");

let first = sec[0].accessKey;
let second = sec[1].accessKey;
let third = sec[2].accessKey;

document.write(`The first one's accesskey: ${first} and second: ${second} and third: ${third}<br>`);

let first2 = sec[0].tabIndex;       // Burada tabIndex lere atama da yapabiliriz. Sayi olacagi icin tirnak icinde yazmayabiliriz de
let second2 = sec[1].tabIndex;
let third2 = sec[2].tabIndex;

document.write(`The first one's tabIndex: ${first2} and second: ${second2} and third: ${third2}`);

let lang_old = sec[0].lang;
sec[0].lang = 'fr';
document.write(`The first input's language will be:  ${sec[0].lang}. It was : ${lang_old}`);