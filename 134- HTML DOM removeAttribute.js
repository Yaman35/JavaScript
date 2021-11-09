
// removeAttribute() ile bir etiketin belirli bir attribute unu kaldirabiliyoruz/silebiliyoruz

let erase = document.querySelector("p");
erase.removeAttribute("title")      // title attribute has been deleted
erase.removeAttribute('tabIndex');  // tabIndex attribute has been deleted

let result = erase.attributes;

for(i of result){
    console.log(i.name); // Burada ilgili etiketin silindikten sonra kalan attribute name lerini yazdirdik
}

