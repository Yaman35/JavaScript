let eleman = document.getElementById("overview");
console.log(eleman);

function goster(){
    let yaz = document.querySelector('span');
    yaz.innerText = eleman.tagName;
}