
// getAttribute() ile belirli bir etiketin istedigimiz attribute una ulasabiliyoruz

let take = document.querySelector("p");

let att1 = take.getAttribute("title");
let att2 = take.getAttribute('id');
let att3 = take.getAttribute('accesskey');

console.log(att1);
console.log(att2);
console.log(att3);

//-----------------------------------------------------------------------------------------------------------------

// Daha once su sekilde de yazdirilabildigini ogrenmistik

let Att = take.attributes;
for(i in Att){
    console.log(Att[i].value);
}