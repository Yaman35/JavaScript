function olay1(){
    alert("Merhaba Dunya")
}

document.querySelector('p').addEventListener('click', olay1);   

// Burada ilki hangi event eklemek istiyorsak onun ismi, ikincisi ise hangi fonksiyonu harekete gecireceksek onun ismi
// Ayrica burada ikinci taraftaki fonksiyonda () yazilmamasi gereklidir, aksi takdirde kod duzgun calismaz!


// Asagidaki sekilde addEventListener eklerken fonksyionu parantez icerisinde de yazabiliyoruz
// Ayrica bu sekilde kullanirsak fonksyiona herhangi bir isim vermek zorunda da degiliz!

document.querySelector('p').addEventListener('mouseover', function(){
    alert("Mouse uzerine getirildi")} )