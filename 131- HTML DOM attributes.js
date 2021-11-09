
// attributes.length ile bir etiketin sahip oldugu attribute larin sayisini ogrenebiliyoruz

let paraf = document.querySelector("p");

let result = paraf.attributes.length;
console.log(`Istediginiz elemanin attributes sayisi toplamda: ${result} kadardir`);

//---------------------------------------------------------------------------------------------------------------

// attributes.name ile bir etiketin sahip oldugu attribute larin isimlerini ogrenebiliyoruz

let attributes = paraf.attributes;

console.log(`Istediginiz attribute ismi: ${attributes[2].name} dir`);

for(i of attributes){
console.log(i);
}

for(i in attributes){
console.log(attributes[i]);
}

//---------------------------------------------------------------------------------------------------------------

// attributes.value ile bir etiketin sahip oldugu attribute larin degerlerini ogrenebiliriz

for(i in attributes){
let result2 = paraf.attributes[i].value;
console.log(result2);
}

paraf.attributes[1].value = "Acceskey2";
console.log(`Etiketin acceskey degeri artik ${paraf.attributes[1].value} olarak guncellenmistir`);

