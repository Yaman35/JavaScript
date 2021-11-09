let firstChild1 = document.getElementById("find1").firstChild.innerHTML; // Fakat bu da bosluklari ve yorum satirlarini da saydirdigi icin eger bosluk/yorum satiri olursa "undefined" olarak cikar
console.log(firstChild1);               // "undefined" cikar cunku elaman ile cocuklari arasinda bosluk veya yorum satiri var

let firstChild2 = document.getElementById('find2').firstChild.innerHTML; 
console.log(firstChild2);               // Burada dogru cikar cunku eleman ile cocuklari arasinda hicbir bosluk bulunmamaktadir

let firstElementChild = document.getElementById("find3").firstElementChild.innerHTML; // Burada ise ".firstElementChild" ile yapildigindan arada bosluk da olsa yorum satiri da olsa asil ilk cocugunu dogru sekilde cikartir
console.log(firstElementChild);