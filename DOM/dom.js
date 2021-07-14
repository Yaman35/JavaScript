// JS DOM

// document.getElementById

const myDom = document.getElementById("dom");       // Bununla html deki elamanlara id leri ile erişim sağlayabiliyoruz, burada id si dom olan eleman geldi
console.log(myDom); 

const instructor = document.getElementById("info"); // id si info olan eleman geldi
console.log(instructor);

const ins = document.getElementById("instructor");  // id si instructor olan eleman geldi
console.log(ins);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// document.getElementsByClassName

const withClassName = document.getElementsByClassName("class-info");

console.log(withClassName);    // Array olarak dönderir (HTML Collection)
console.log(withClassName[0]); // Array in elemanına bu şekilde ulaşabilliyoruz 


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// document.getElementsByTagName

const tagName = document.getElementsByTagName('h3');
console.log(tagName);          // Array olarak dönderir (HTML Collection)
console.log(tagName[0]);       // Array in elemanına bu şekilde ulaşabilliyoruz 


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// document.querySelector   css de yaptığımız gibi class ve id leri içine yazabilliyoruz 

// .class 

const inst = document.querySelector(".class-info");  // Görüldüğü üzere başına " . " koyuldu
console.log(inst);

// Eğer sayfada birden fazla ".class-info" classına sahip eleman varsa hepsini görüntüleyebilmek için aşağıdaki gibi document.querySelectorAll yazılmalıdır
// Aksi takdirde sayfada ilk gördüğünü dönderir

const inst2 = document.querySelectorAll(".class-info");
console.log(inst);

// #id

const inst3 = document.querySelector("#instructor2");
console.log(inst3);

const inst4= document.querySelectorAll("#instructor2");  // Hepsini dönderir yine
console.log(inst4);
