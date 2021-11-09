
// (window.onmousemove) ile mouse nereye hareket ederse, ilgili fonksyionu calistir demek

window.onmousemove = function follow() {    // Burada (onclick) de kullanilabilirdi

  // Bu kullanim window nesnesi (yani tum pencere) altinda herhangi bir yere tiklandiginda su fonksiyon calissin demektir
  
  let div = document.querySelector('div');

  let sol = event.clientX;      // Yataydaki uzakligi (event nesnesinin)
  let ust = event.clientY;      // Dikeydeki uzakligi (event nesnesinin)

  div.style.left = (sol-40) + 'px';  // div elementinin left degeri mouse tiklamasinda aldigimiz sol degere esit olsun demektir, boylelikle takip eder, cunku (position:absolute) verildi
  div.style.top = (ust-40) + 'px';   // div elementinin top degeri mouse tiklamasinda aldigimiz sol degere esit olsun demektir, boylelikle takip eder, cunku (position:absolute) verildi

  // Ustteki iki kodda -40 yaoilmasinin sebebi mouse circle icerisinde ortalanabilsin diye
}


// Asagidaki sekilde de kullanilabilirdi

window.onmousemove = function follow(e){
  let div = document.querySelector('div');

  div.style.left = e.clientX - 40 + 'px'; 
  div.style.top = e.clientY - 40 + 'px'; 

};