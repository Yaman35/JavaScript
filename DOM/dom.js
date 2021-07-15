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

// setAttribute and getAttribute Methods
