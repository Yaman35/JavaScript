// "window.onkeydown" ile window nesnesi altindaki herhangi bir tusa basilirsa kutu() function aktif hale getirilsin demektir

window.onkeydown = function kutu() {
  let kutu = document.querySelector('div');
  let sol = kutu.offsetLeft;                // Elemanin sol taraftan uzakligi
  let yukari = kutu.offsetTop;              // Elemanin ust taraftan uzakligi

  let code = event.keyCode;                 // Klavyeden hangi tuslara basma olayini bu kod ile aktif hale getiriyoruz ve elde ediyoruz

  if(code === 37){                          // Eger sol ok tusa basilirsa
      kutu.style.left = (sol - 5) + "px";
      kutu.style.backgroundColor = "red";
  }

  if (code === 38) {                        // Eger yukari ok tusa basilirsa
    kutu.style.top = (yukari - 5) + 'px';
    kutu.style.backgroundColor = 'yellow';
  }

  if (code === 39) {                        // Eger sag ok tusa basilirsa
    kutu.style.left = (sol + 5) + 'px';
    kutu.style.backgroundColor = 'blue';
  }

  if (code === 40) {                        // Eger alt ok tusa basilirsa
    kutu.style.top = (yukari + 5) + 'px';
    kutu.style.backgroundColor = 'orange';
  }
}