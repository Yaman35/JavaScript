let lastChild1 = document.getElementById('find1').lastChild.innerHTML; // Fakat bu da bosluklari ve yorum satirlarini da saydirdigi icin eger bosluk/yorum satiri olursa "undefined" olarak cikar
console.log(lastChild1);                                               // "undefined" cikar cunku elamanin son cocugundan sonraki boslugu da gordugu icin onu aliyor

let lastElementChild = document.getElementById('find2').lastElementChild.innerHTML; // Burada ise ".lastElementChild" ile yapildigindan bosluklari gormuyor ve elemanin gercekten son cocugunu yazdiriyor
console.log(lastElementChild);
