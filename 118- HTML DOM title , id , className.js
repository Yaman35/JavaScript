
let sec = document.querySelector("p"); 
console.log(sec.title);             // "Yazar Yaman" yazar
sec.title = "Hayir yazar Huseyin";  // Bu sekilde elemanin title ozelligini degistirmis olduk 

function goster(){
    document.querySelector("span").innerText = sec.title;
}

///////////////////////////

let sec2 = document.querySelector("p").id;          // Burada degistirme islemi de gerceklestirilebilir
console.log("p etikerinin id'si: " + sec2);

let sec3 = document.querySelector('p').className;   // Burada degistirme islemi de gerceklestirilebilir
console.log("p etikerinin class'i: " + sec3);       // Lakin className kullanirken dikkat etmek gereklidir. Eger bir className atayacaksak oncekileri siler ama "+=" seklinde yazarsak ilave eder