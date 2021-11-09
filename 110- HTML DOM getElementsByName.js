
let texts = document.getElementsByName("isim"); // Attribute "name" kullanarak elamanlarimiza ulastik

texts[0].placeholder = "Enter your name";       // Olusan array in ilk elemaninin icerigini degistirdik

function myFunction(){
    let x = document.getElementsByName("radio").length;
    document.getElementById("demo").innerHTML = x;
}