// "charCode", Basilan tusu bir UTF-8 karakter koduna cevirir. (w3school)
// "code" ise, basilan tusun tipini gosterir (KeyT, Numpad4, Digit8 gibi)(Internet Explorer destekelemez!)
// Bunlar ile kullanicinin klavyeden bastigi tuslari anlayarak ona gore islemler yaptirabiliriz.
// (!!! Fakat yon tuslari bunlar ile gosterilemez !!! Bu iki kod sadece alfabetik ve rakamlar)
function kod(){
    let input = document.querySelector("input");
    let span1 = document.querySelector("#span1");
    let span2 = document.querySelector('#span2');

    let code1 = event.charCode;      // Basilan tusu bir karakter koduna cevirir.
    let code2 = event.code;
    
    span1.innerHTML = `It's charCode is: ${code1}`;
    span2.innerHTML = `It's Code is: ${code2}`;
    input.value = "";               // Bununla tekrar input icini bos hale getirdik
}