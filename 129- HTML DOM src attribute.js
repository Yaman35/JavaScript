
let resim = document.querySelector("#resim");
let button = document.querySelector("button");

console.log(resim.src);

function change(){
    resim.src = 'https://i.ytimg.com/vi/5KS4E_SGu4c/maxresdefault.jpg';
    button.style.display = "none";
}