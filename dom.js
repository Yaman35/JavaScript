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

// document.querySelector