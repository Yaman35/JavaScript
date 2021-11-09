let queryAll = document.querySelectorAll("p, span");      // Object (Nodelist) donderir
                                                          // Gorulecegi uzere burada parantez icerisine querySelector() den farkli olarak birden fazla deger alabiliyor ve hepsini donderir
console.log(queryAll);
console.log(typeof queryAll);

queryAll[0].style.color = "red";
queryAll[1].style.color = "yellow";
queryAll[2].style.color = "blue";
queryAll[3].style.color = "green";
queryAll[4].style.color = "orangered";

for(items of queryAll) {
    items.style.backgroundColor = " lightgreen";
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let queryAll2 = document.querySelectorAll(".div1, #span1");     // Gorulecegi uzere bu sekilde icerisine birden fazla classname, id,tagname vs. alabiliyor ve onlari bir nodeList olarak donderip islem yapmamiza yariyor

console.log(queryAll2);

for (items of queryAll2) {
  items.style.backgroundColor = ' yellow';
}