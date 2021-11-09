
// ".children" ilgili elemanin cocuklarini bir nodeList olarak donderir 
// Fakat en onemlisi oncekinin (".childNodes") aksine bosluk ve yorum satirlarini gormuyor

let count = document.querySelector("#count").children;

for(items of count) {
    console.log(items);
}

count[0].style.backgroundColor = " yellow";
count[2].style.fontSize = "20px";
count[3].style.fontWeight = "bolder";

console.log(`Bu elemanin cocuk sayisi ise: ${count.length}`);


