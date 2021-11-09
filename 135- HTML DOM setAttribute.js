
// setAttribute() ile bir etiketin belli bir attribute unu degistirebiliyoruz
// Bu iki deger alir. Ilki degistirmek istedigimiz attribute, ikincisi ise o attribute un degerini ne yapmak istiyoruz
// Degerleri yazarken metinler kesinlikle " " icerisinde yazilmali, fakat number degerler " " icinde yazilmak zorunda degil
let linkekle = document.querySelector("a");

linkekle.setAttribute("href", 'https://www.google.nl/');
linkekle.setAttribute("target", "_blank");

let titleee = "Google'a Git!";           // Bu sekilde bir degiskene atayip asagidaki gibi degiskeni de setAttribute icine yazabiliyoruz
linkekle.setAttribute("title", titleee);

linkekle.setAttribute("class", "renk");  // Bu sekilde etikete classname de ekledik

