function tus(){
  let div = document.querySelector('div');
  let span = document.querySelector('span');

  let code = event.altKey; // Iki sonuc donderir. "true" or "false". Kullanici "alt" tusuna basarsa true donderir onun disindaki hangi tusa basarsa bassin false donderir
  // let code = event.altKey;   Ayni sekilde kullanici "Ctrl" tusuna basarsa "true", onun disinda herhangi bir tusa basarsa "false" donderir
  // let code = event.shiftKey;   Ayni sekilde kullanici "Shift" tusuna basarsa "true", onun disinda herhangi bir tusa basarsa "false" donderir
  // let code = event.shiftKey;   Ayni sekilde kullanici "Shift" tusuna basarsa "true", onun disinda herhangi bir tusa basarsa "false" donderir
  // let code = event.metaKey;   Ayni sekilde kullanici "Windows" tusuna basarsa "true", onun disinda herhangi bir tusa basarsa "false" donderir
  
  if (code) {
    span.innerHTML = 'Alt tusuna bastiniz.';
  } else {
    span.innerHTML = 'Alt tusu disinda bir tusa bastiniz.';
  }
}