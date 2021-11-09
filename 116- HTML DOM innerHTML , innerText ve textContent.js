
function yaz(){
let sec1 = document.querySelector("p").innerHTML;           // Burada innerHTML yerine innerText veya textContent de kullanilabilirdi
let sec2= document.querySelector("span").innerHTML = sec1;
document.querySelector('p').innerHTML = '';
}


function yaz2() {
  let sec1 = document.querySelector('#p2').innerText;       // Merhaba ben Huseyin Yaman
  let sec2 = document.querySelector('#p2').textContent;     // Merhaba ben              Huseyin Yaman
  let sec3 = document.querySelector('#p2').innerHTML;       // Merhaba ben        <span id="span1" class="span1">      Huseyin Yaman </span>

  alert(sec1);
  alert(sec2);
  alert(sec3);
}

