let sec = document.querySelector("p");

function olay(){
    sec.style.backgroundColor = "red";
}

sec.addEventListener("click", olay);    // Bununla p etiketine tiklandiginda arka plan kirmizi olsun olayini ekledik
sec.removeEventListener('click', olay); // Bununla da yukarida ekledigimiz eventi sildik, yani tiklandiginda artik arka plan rengi kirmizi olmaz
                                        // Icerisine ayni addEventListener da oldugu gibi 2 degisken alir. Event ve fonksiyon

// "removeEventListener" ile HTML tarafinda eklenen (onclick,onmouseover) gibi eventleri silemeyiz. Yalnizca js tarafinda "addEventListener" ile eklenen eventlar silinebilir!!!