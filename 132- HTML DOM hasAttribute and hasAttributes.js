
// hasAttribute(), belirli bir attribute var mi yok mu diye sorgulatabiliyoruz. "true" ya da "false" donderir
// hasAttributes(), etiketin herhangi bir attribute var mi yok mu diye sorgulatiyor. "true" ya da "false" donderir

let sorgula = document.querySelector("p");
let result1 = sorgula.hasAttribute("class");        // false
let result2 = sorgula.hasAttributes();              // true

console.log(result1, result2);