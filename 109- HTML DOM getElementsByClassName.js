
let yazi = document.getElementsByClassName("first_paragraph"); // Burada birden fazla ayni classa sahip olan elemana oldugundan dolayi onlari bir Arraye atar
                                                               // Parantez icerisine bir den fazla class name de yazilabilirdi
// yazi.innerHTML = "Selam";  Eger biz sadece bu sekilde yazrsak herhangi bir sonuc alamayiz cunku hangisine islem yaptirmak istedigimizi bilemez

// Array dondurdugune dair test

for (let i = 1; i <= yazi.length; i++) {
    console.log(i + "nci selam" + "<br>");
}

// Dolayisiyla bizim asagidaki gibi bir islem yaptirmamiz gereklidir

yazi[0].innerHTML = "Yaman";        // Bu sekilde olusturulmus olan arrrayin ilk elemaninin icini degistirmis olduk
yazi[3].innerHTML = 'Hakan'; 