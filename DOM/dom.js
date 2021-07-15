// JS DOM

// document.getElementById

const myDom = document.getElementById("dom");       // Bununla html deki elamanlara id leri ile erişim sağlayabiliyoruz, burada id si dom olan eleman geldi
console.log(myDom); 

const instructor = document.getElementById("info"); // id si info olan eleman geldi
console.log(instructor);

const ins = document.getElementById("instructor");  // id si instructor olan eleman geldi
console.log(ins);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// document.getElementsByClassName

const withClassName = document.getElementsByClassName("class-info");

console.log(withClassName);    // Array olarak dönderir (HTML Collection)
console.log(withClassName[0]); // Array in elemanına bu şekilde ulaşabilliyoruz 


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// document.getElementsByTagName

const tagName = document.getElementsByTagName('h3');
console.log(tagName);          // Array olarak dönderir (HTML Collection)
console.log(tagName[0]);       // Array in elemanına bu şekilde ulaşabilliyoruz 


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// document.querySelector   css de yaptığımız gibi class ve id leri içine yazabilliyoruz 

// .class 

const inst = document.querySelector(".class-info");  // Görüldüğü üzere başına " . " koyuldu
console.log(inst);

// Eğer sayfada birden fazla ".class-info" classına sahip eleman varsa hepsini görüntüleyebilmek için aşağıdaki gibi document.querySelectorAll yazılmalıdır
// Aksi takdirde sayfada ilk gördüğünü dönderir

const inst2 = document.querySelectorAll(".class-info");
console.log(inst);

// #id

const inst3 = document.querySelector("#instructor2");
console.log(inst3);

const inst4= document.querySelectorAll("#instructor2"); // Hepsini dönderir yine
console.log(inst4);

//tagName

console.log(document.querySelector('h3'));              // Böyle yazarsak sadece ilkini dönderir
console.log(document.querySelectorAll('h3'));           // Array döner, All yapmazsak sadece ilk h3 döner
console.log(document.querySelectorAll('h3')[0]);        // Bu şekilde array içinden de istediğimiz elemanı alabiliriz
console.log(document.querySelectorAll('h3')[1]);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Aşağıdaki şekillerde de herhangi bir id veya class vermeden ulaşabilliyoruz
console.log(document.querySelector('div h3'))           
console.log(document.querySelector('.class-info h3'))
console.log(document.querySelector('#info h3')) 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// HTML Manipulation

const brands = document.querySelector("#brands");
console.log(brands);

// brands.innerHTML = "<li>NioyaTech</li";   Bu şekilde yaparsak önceki 4 marka gider sadece bu yazılır

brands.innerHTML += "<li>NioyaTech</li";  // Ama bu şekilde mevcut olan listeye bir eleman daha ekleyebiliriz
brands.innerHTML += `<li>BionTech</li"`;  // Backtick ile de eklenebilir

// Görüleceği üzere "".innerHTML", bizim HTML elemanımız içine müdahele etmemizi sağlar

// brands.innerHTML = brands + `<li>BionTech</li"`;  Böyle yazarsak da bu şekilde çıkıyor [object HTMLOListElement]
brands.innerHTML = brands.innerHTML + `<li class="brand" style="color:red">Sinovac</li`; // Bu şekilde de ekleyebiliriz, class lı eklemek için de bu şekilde onu da etiket içine yazabiliriz, hatta style bile ekleyebiliriz

const classBrands = document.querySelectorAll(".brand"); 
console.log(classBrands[3]);              // Marka listesinde index[3] teki elemanı da bu şekilde yazdırabiliyoruz
console.log(classBrands[3].innerText);    // Böyle yazarak da o li etiketi içideki direk text e ulaşılabiliyor (Amazon)

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const copyRight = document.querySelector("#copy-right");    // id ile aratırken # işaretini, class ile aratırken . işaretini başılarına ekelemyi unutma yoksa (null) alırsın !!!
console.log(copyRight);

const copyRight2 = document.querySelector("footer p");      // Bu şekilde de yazabilirdik
console.log(copyRight2);


copyRight.innerHTML = "&copy; 2022 clarusway.com"           // BU ŞEKİLDE İÇERİĞİ DE DEĞİŞTİREBİLİRİZ !!
copyRight.innerHTML = "<h1>&copy; 2022 clarusway.com</h1>"  // .innerHTML ile bu şekilde tag de ekleyebiliyoruz child olarak, burada (h1)

/* copyRight.innerText = "<h1>&copy; 2021 clarusway.com</h1>" ama bu şekilde de yazsaydık burada <h1> ve &copy; olduğu ve burayı "" içinde yazdığı için hepsini string gibi algılar ve olduğu gibi yazardı, 
   yani .innerText ile aslında html kodu değil sadece string ifadeler ekleyip değiştirebiliyoruz */

// copyRight.innerHTML += "&copy; 2023 clarusway.com" Bu şekilde o etiketin içeriğine başka bir içerik de ekleyebilirdik


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Aşağıdaki array elemanlarını HTML içine yazdırma

const lessonList = [            
    {id: 1, name: 'HTML'},
    {id: 2, name: 'CSS'},
    {id: 3, name: 'JS'},
    {id: 4, name: 'REACT'},
];

/* const lessons = document.querySelector('#lessons');     // ul tag ine ulaştık

    for(items of lessonList){                              // lessonList arrayinin tüm elemanlarına tek tek ulaşıyoruz
        lessons.innerHTML += items.name + '<br>'           // eleman objectlerinin namelerini teker teker for döngüsü yardımıyla ve .innerHTML ile lessons id li ul tagi içine yazdırıyoruz
    }; */

        ///////////////////////////////////

/* let liste = document.querySelector('#lessons');         // Aynı şekilde ul tag ine ulaştık

for(let i = 0; i < lessonList.length; i++){                // for döngüsünü lessonList objectinin tüm elemanları arasında dönderdik 
    liste.innerHTML += lessonList[i].name + '<br>';        // ul tag inin içine her seferinde diğerini de ekleyecek şekilde lessonList objectinin herbir elemanının name ini aktardık
    }; */

        ///////////////////////////////////

const lessonElm = document.querySelector('#lessons');
// lessonList.forEach( (element) => { console.log(element)} )       // Bu da forEach ile arrayin tüm elemanlarına ulaşma yöntemi
lessonList.forEach( (element) => { 
    lessonElm.innerHTML += `<li class="lesson-item">${element.name}</li>`;  // Ulaştığımız her bir elemanın name ini  lessonElm (yani ul tag) içine li etiketi olarak yaz demek
});                                                                         // Burada backtick `` değilde "" kullansaydık değişken ismini ( element.name ) mecbur + lar ile birlikte yazmamız gerekecekti


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// setAttribute and getAttribute Methods     (js ile htmle attribute vermek için)

const mdn = document.querySelector("#mdn");
console.log(mdn)

const mdnHrefAttr = mdn.getAttribute("href"); // Görüleceği üzere bu getAttribute ile linkin href attributunda ne olduğunu öğrenebiliyorum
console.log(mdnHrefAttr)                      // Bu örnek için "https://developer.mozilla.org/" çıkar
console.log(mdn.getAttribute("target"));

mdn.setAttribute("href", "https://www.w3schools.com/");  // İlk parametre: hangi attribute değiştirmek istiyorsun?, ikinci parametre: bunu ne yapmak istiyorsun?
                                                         // Artık linke tıkladığımızda bu saatten sonra burada yeni girdiğimiz linke yönlenecektir

mdn.innerHTML = "W3School"    // Bu şekilde linkin ismini de değiştirebiliriz

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// HTML deki id si instructor olan listede içinde Frontend geçenler kırmızı Backend geçenler yeşil olsun

const insElm = document.querySelectorAll("#instructors li") // id si instructors olan ul listesinin elemanları döner
// console.log(insElm);

insElm.forEach((item) =>{ 
// console.log(item.innerText);    // Dönderilen elemanların ne olduklarını bu şekilde görüntülemekte fayda var
   console.log(item.innerText.includes("FrontEnd")); // İlki için false, sonraki ikisi için true, sondaki ikisi için de false geldi
   if (item.innerText.includes("FrontEnd")){         // Eğer içinde FrontEnd geçiyorsa
       item.setAttribute("class", "front-end")       // Burada classı değişti üzerine yazdı
   }else if (item.innerText.includes("BackEnd")){    // Eğer içinde BackEnd geçiyorsa
       item.setAttribute("class", "back-end")        // Burada da classı değişti
   }
})

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// JS ile manually adding style

const jsprg = document.querySelector("#js-prg");
console.log(jsprg);

jsprg.style.color = 'red';       // Bu şekilde style işlemi uygulayabiliriz
// jsprg.style = 'color:green'   // Bu şekilde de bir kullanım mevcuttur

jsprg.style.backgroundColor = 'blue';
jsprg.style.fontSize = '1rem';
jsprg.style.margin = '10px';

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Bir elemanın mevcut classını değiştirmeden class ekleme (setAttribute mevcut class üzerine yazıyordu bu yöntem mevcut olanı muhafaza ederek yebi class ekliyor)

const cwBanner = document.querySelector("#cw-banner");
console.log(cwBanner);

console.log(cwBanner.classList);    // Elemanın tüm class larını görüntüler, işte biz bu classliste ekleme yapacağız (Burada banner ve test diye iki class geldi)
cwBanner.classList.add("imp")       // Bu şekilde elemana yeni bir class eklemiş olduk( banner, test, imp), böylece css de tanımlanmış olan altını çizme işlemini gerçekleştirmiş oldu
cwBanner.classList.remove("banner") // Bu şekilde de bir elemandan bir classı çıkartma işlemi yapabililyoruz (test, imp), kahverengi rengi vardı gitti

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Mevcut bir paragrafın altına yazı ekleme

const cwQuote = document.querySelector("#quote-div");
console.log(cwQuote);

cwElm = document.createElement("h2")    // () içine hangi tag ile bir eleman oluşturmak istiyorsak o tagi yazıyoruz
console.log(cwElm);                     // İçi boş bir h2 tag geldi
// console.log(document.createElement("h3"));  // Bu şekilde de yazılabilir

cwElm.innerText = "Clarusway"           // 'h2' tag ile oluşturduğumuz cwElm elemanının içine 'Clarusway' yazdırdık

cwQuote.appendChild(cwElm);             // id si #quote-div olan div içerisine child olarak h2 elementini eklemiş olduk, içindeki h3 elementinin siblingsi(kardeş) olmuş oldu