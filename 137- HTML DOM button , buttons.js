// Kullanicinin hangi butonlara bastigini ogrenmek icin...

function tikla() {
    var tiklandi = event.button; // Bu sekilde kullanicinin mouse uzerinde hangi butona bastigini biliyoruz. Eger sol ise "1", sag ise "2" orta ise de "3" donderir

    switch (tiklandi) {
      case 0:
        document.querySelector('span').innerHTML = 'Sol butona tiklandi';
        break;

      case 1:
        document.querySelector('span').innerHTML = 'Orta butona tiklandi';
        break;

      case 2:
        document.querySelector('span').innerHTML = 'Sag butona tiklandi';
        break;
    }
}

