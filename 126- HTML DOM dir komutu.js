// "dir" komutu ile elimizdeki bir metnin yonunu degistirebilmek veya dondurebilmek icin kullanilir
// 3 adet deger alabilir. ltr (left to roght), rtl (right to left) and auto (Bu kullanilirsa kullanici ulkesine gore browser tarafindan otomatik olarak ayarlanir)
// Fakat ayni ozelligi HTML ve CSS ile de gerceklestirebiliyoruz

document.querySelector("div").dir = "rtl";

document.querySelector('input').dir = 'rtl'; // Hesap Makinlerinde hep sagdan sola yaoildigi icin bu sekilde kullanilabilir

