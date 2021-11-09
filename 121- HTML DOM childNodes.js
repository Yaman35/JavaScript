
let count = document.querySelector('#count').childNodes; 
console.log(`Child sayisi bosluklari da saydigi icin : ${count.length}`);

count[1].style.color = 'red'; // Indexlerin boyle olmasinin sebebi yukarida da dedigimiz gibi bosluklarin da sayiliyor olmasindan
count[3].style.backgroundColor = 'yellow';
