

function kod(){
  let input = document.querySelector('input');
  let span1 = document.querySelector('#span1');
  let span2 = document.querySelector('#span2');
  let span3 = document.querySelector('#span3');

  let code1 = event.keyCode;    // Calismasi icin HTML tarafinda input etiketine ("onkeypress") verilmelidir. Fakat keyCode yon tuslari icin calismaz
                                // (keyCode) ile tuslarin Unicode karsiliklarini yazdirabiliyoruz
  let code2 = event.key;        // Calismasi icin HTML tarafinda input etiketine ("onkeydown") verilmelidir. (YON TUSLARI DAHIL CALISIR)
                                // (key) tuslarin isimlerini yazdirir (Safari Browser desteklemez)
  span1.innerHTML = `Basilan tusun Unicode: ${code1}`;
  span2.innerHTML = `Basilan tusun ismi: ${code2}`;

  switch(code2){
        case "ArrowLeft":
        span3.innerHTML = `Sol yon tusuna bastiniz...`;
        break;
        case "ArrowRight":
        span3.innerHTML = `Sag yon tusuna bastiniz...`;
        break;
        case "ArrowUp":
        span3.innerHTML = `Ust yon tusuna bastiniz...`;
        break;
        case "ArrowDown":
        span3.innerHTML = `Alt yon tusuna bastiniz...`;
        break;
  }

  input.value = '';
}

