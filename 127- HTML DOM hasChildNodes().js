
// "hasChildNodes" bir etiketin altinda cocuk var mi yok mu onu kontrol etmemize yarar, yorum satiri ve bosluklari da dikkate alir

let result = document.querySelector("div").hasChildNodes();     // Bu sekilde cocugu olup olmadigini kontrol edebiliyoruz. Sonuc olarak "true" ya da "false" donderir
let children = document.querySelector('div').children;
console.log(result);

result ? document.write(`Yes, the element has children and the number of them: ${children.length}`) : document.write("No, the element has no any child");

// Eger div icerisindeki tum cocuklari silersek yine de var der cunku bosluklara da bakiyor onlari da goruyor, o yuzden bosluk olmayacak sekilde silmek gereklidir