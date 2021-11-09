const navbarItem = document.getElementsByClassName("nav__item");        // HTMLCollection, Array classı "nav__item" olanlar
console.log(navbarItem);                                                // document.querySelector(".nav__item"); kullansaydık başına " . " koymamız gerekirdi

const navbarItem1 = document.getElementsByClassName("nav__item")[0];    // 0. index
const navbarItem2 = document.getElementsByClassName("nav__item")[1];    // 1. index
const navbarItem3 = document.getElementsByClassName("nav__item")[2];    // 2. index

console.log(navbarItem1);       // Features
console.log(navbarItem2);       // Operations       
console.log(navbarItem3);       // Testimonials

// --------------------------------------------------------------------------------------------------------------------

const h1 = document.querySelector("h1");  // h1 etiketine ulaştık
console.log(h1);

const highlightSpan = h1.querySelectorAll(".highlight");   // Farkedileceği üzere burada document ile değil de h1 ile başladı. Yani h1 altındaki classı ".highlight" olanların hepsi alındı (2 tane span)
console.log(highlightSpan);               // Birden fazla eleman var. [Array]

h1.firstElementChild.style.color = "red"; // h1 in çocuklarının ilki (yani ilk span) nin style ile color degistirdik
h1.lastElementChild.style.color = "blue"; // h1 in çocuklarının sonuncusu (yani ikinci span)

// document.querySelectorAll(".highlight")[0].style.color = "red";    İlk elemanın rengi bu şekilde de değiştirilebilirdi
// Birden fazla çocuk olduğunda bu şekilde indexleme yöntemi ile yapmak daha mantıkı olur

h1.closest(".header").style.backgroundColor = "yellow";   /* Bu şekilde parantez içindeki şartı sağlayan en yakın elemana da ulaşıp işlem yaptırabiliyoruz 
                                                          (Üst komşulardan (parent şart değil, 2-3 üst alt olsa da gider) en yakın olan, yani şartları sağlayan birden fazla olsa bile en yakın olana işlem yapılır) */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// let navbarItem1 = document.getElementsByClassName("nav__item")[0].innerText;
// console.log(navbarItem1);
// let navbarItem1 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
let navbarItem1 = document.getElementsByClassName("nav__links")[0].children[0];
let navbarItem2 = document.getElementsByClassName("nav__links")[0].children[1];
let navbarItem3 = document.getElementsByClassName("nav__links")[0].children[2];
// console.log(navbarItem1);

let h1 = document.querySelector("h1");
let span = h1.querySelector(".highlight");
span.style.color = "red";
// span.classList.remove("highlight");
// span.className = "highlight";
// span.classList.add("highlight");
// console.log(span);
let headerDiv = h1.parentElement.children;
// console.log(headerDiv);
// [... headerDiv].forEach(function(element) {
//     if(element != h1){
//         element.style.transform = 'scale(0.7)';
//         element.style.color = "purple";
//     }
// });

for (let index = 0; index < headerDiv.length; index++) {
    if(headerDiv[index] != h1){
        headerDiv[index].style.transform = 'scale(0.7)';
        headerDiv[index].style.color = "purple";
    }
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DOM EVENTS

window.onload = () => { alert("Welcome !");}            // Sayfa yüklenirken "Welcome" ekranda çıkar
window.onload = function(){ alert("Welcome !");}        //Bu şekilde de yazılabilirdi

window.addEventListener("load", function(){             // addEventListener ile kullanımı, görüleceği üzere yukarıda ".onload" idi burada parantez içi "load"
      alert("Welcome !");
});

window.addEventListener("load", () => alert("Welcome !") ); // Bu ve yukarıdakilerin hepsi aynı işi yapar

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
// DOM EVENTS

window.onload = (e) => {
    console.log("your page is loaded");
    // alert("your page was rendered");
}

window.addEventListener("load", (e) => {
    console.log("windowload eventlistener added");
    console.log(navbarItem1.innerText);
});

window.addEventListener("DOMContentLoaded", function(e){
    console.log("DOMContent was Loaded");
});

navbarItem1.addEventListener("click", ()=>{
    alert("Paths clicked");
})


//---------------------------------------------------------------------------------------------------------------------------------

navbarItem1.onclick = function () { 
    navbarItem1.style.color = "red"       // Tıkladıktan sonra rengini kırmızı yaptı 
 }

 navbarItem1.addEventListener("click",function() {alert("Hello1 !");}); // Tıkladıktan sonra alert verdi
 // navbarItem1.addEventListener("click", () => alert("Hello2"))    Bu şekilde de yazılabilirdi

 /* function sayHello(){     // Variable function
      alert("Hello3");
    } */

//---------------------------------------------------------------------------------------------------------------------------------

// navbarItem2.addEventListener("mouseenter", ()=> alert("Over Me!"));     // Üzerine gelir gelmez alert veriyor, "mouseover" da yazılabilirdi

navbarItem2.addEventListener("mouseover", () => {   // Mouse ile üzerine geldiğinde yazı "Over Me" olacak
  navbarItem2.textContent = "Over me!";}            // ".textContent" yerine ".innerText" de kullanılabilirdi
);

navbarItem2.addEventListener("mouseout", () => {    // Mouse üzerinden geri gittiğinde "Operations" yazısına dönecek
  navbarItem2.textContent = "Operations" ;}         // ".textContent" yerine ".innerText" de kullanılabilirdi
);

//---------------------------------------------------------------------------------------------------------------------------------

//rgb(255,255,255)

const randomNumber = () => {  // Variable Functions
      return Math.floor(Math.random() * 255);   // Burada Math.random(), "0-1" arasında bir sayı oluşturur, onu 250 ile çarparsak sayılarımızı random oluşturabiliyoruz
    }                                           // Math.floor() ise küsürlü sayılar çıktığında alta doğru yuvarlar
                                                // Math.ceil() ise küsürlü sayılar çıktığında üste doğru yuvarlar
                                                // Math.round() ise en yakın neresiyse oraya yuvarlar .5 e göre değişir

const randomColor = () => {   // Variable Functions
      return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;  // Fonksiyonu 3 kere çağırdığımız için 3 kere random sayı oluşturacak
    }

navbarItem3.addEventListener("click", () =>{
navbarItem3.style.backgroundColor = randomColor();   // Her tıkta arka plan rengi değişecek, "navbarItem3" yerine "this" de yazılabilirdi
// navbarItem3.style.borderRadius = "10px";          // Her tıkta border radius işlem görecek, burada saçma örnek oldu
})


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* function changeColor() {                                 // changeColor() adında bir fonksiyon oluşturduk navbarItem3 için  
      navbarItem3.style.borderRadius = "10px";              // Arrow function ile de yapabiliriz ama o functionı EventListener den silebilmek için bir ismi olmalı o da variable functions şeklinde olmalı
      navbarItem3.style.backgroundColor = randomColor();
    }
*/

const changeColor = () =>{                                  // Bu şekilde kullanım daha yaygın ve son zamanlarda yukarıdakinden ziyade daha çok kabul gören bir kullanım
    navbarItem3.style.borderRadius = "10px";              
    navbarItem3.style.backgroundColor = randomColor();
}

navbarItem3.addEventListener("mouseenter", changeColor)     // Bu şekilde ikinci kısma sadece function ismini yazarak da işlem yaptırabiliriz
navbarItem3.removeEventListener("mouseenter", changeColor); // Bu şekilde de ilgili functionun artık etkileyememesini de sağlamış oluruz

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* !!! Kullanıcı navbar da bulunan seçeneklere tıkladığında sayfanın ilgili bölümüne giderken 
   yavaş ve smooth bir şekilde ilerlemesni sağlamak için kod !!! */

document.querySelectorAll(".nav__link").forEach(             // Elemanların tümüne ulaşıp herbirine işlem yaptırıyoruz
    function (elements){   // Burada tamamına
      elements.addEventListener("click", function(element){  // Burada kendilerine tıklanınca içteki fonksiyon çalışacak
        element.preventDefault();                            // HTML de #section ile ilgili yere gidiyordu onu böylelikle engelledik
        const sectionId = this.getAttribute("href");         // Elemanların ilgili sectionlarını alıp sextionId değişkenine atıyoruz
        document.querySelector(sectionId).scrollIntoView({   // Scroll yapılması ile ilgili bir method
          behavior : "smooth"
        });
      });
    });