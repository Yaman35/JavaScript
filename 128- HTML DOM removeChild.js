
// "removeChild" cocuk etiketleri kaldirmamiza yarar. () icine hangisini silecegini belirtmemiz gerekir

let doc = document.querySelector("div");
let button = document.querySelector("button");

function sil(){
doc.removeChild(doc.lastElementChild);          // Bu sekilde her seferinde elemanin son cocuk etiketini sileriz
// doc.removeChild(doc.children[doc.children.length - 1]); Bu sekilde de yazilabilirdi
// doc.removeChild(doc.children[2]) seklinde yazarsak her seferinde index[2] deki elemani silecektir

if(doc.children.length == 0){   // Burada !hasChildNodes() yemedi cunku bosluklari da sayiyor
button.style.display = "none";
}

}