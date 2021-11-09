let paraf = document.getElementsByTagName("p");
let newParaf = paraf[3];        // Biz biliyoruz ki sonu "s" ile biten getElements mutlaka bor collection type donderir
                                // Dolayisiyla icerisinde tek bir eleman olsa ona [0] ile ulasabiliriz
                                // Biz simdi burada donderilen collectionin index [3] teki elanina ulasip onun icerigini degistirecegiz
newParaf.innerText = "MERHABA!";

let divContainer = document.getElementById("container");
let allChilderen = divContainer.getElementsByTagName("*"); // Bu sekilde bir eleman altindaki diger elemanlara da rahatlikla ulasabiliyoruz. 
// console.log(allChilderen);                                 Burada ayni zamanda parantez icinde "*" kullanarak tum tag lere ulasmak istedigimizi belirttik
for (items of allChilderen) {
items.style.backgroundColor = "red";
items.style.color = "white"}
