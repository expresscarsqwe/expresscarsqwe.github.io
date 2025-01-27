/*
THIS CODE BY zoliryzik
*/
const boxProducts = document.getElementById("products");
/*
ЗАПОЛНИТЕЛИ УСЛУГ 
*/

const p1 = [
    {
        "TITLE": "ПК диагностика",
        "LORE": "Компьютерная диагностика автомобиля, адаптация дросселя и др.",
        "SUM": "от 500 ₽",
        "IMG": "img/products/1.jpg",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
        "IDBTN": "myBtn",  
    }
]
const p2 = [
    {
        "TITLE": "Эндоскопия двигателя",
        "LORE": "Эндоскопия двигателя и катализатора<br><br><wbr white-space: pre>",
        "SUM": "от 500 ₽",
        "IMG": "img/products/2.jpg",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
        "IDBTN": "myBtn2", 
    }
]
const p3 = [
    {
        "TITLE": "Ремонт гбц",
        "LORE": "<br>Полный ремонт ГБЦ<br><br><br><wbr>",
        "SUM": "от 5 000 ₽",
        "IMG": "img/products/3.jpg",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
        "IDBTN": "myBtn3", 
    }
]
const p4 = [
    {
        "TITLE": "Капитальный ремонт",
        "LORE": "<br>Капитальный ремонт <br>двигателя",
        "SUM": "по договорённости",
        "IMG": "img/products/4.jpg",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
        "IDBTN": "myBtn4", 
    }
]
const p5 = [
    {
        "TITLE": "Система охлождения",
        "LORE": "<br>Замена радиатора, термостата, патрубков.",
        "SUM": "от 500 ₽",
        "IMG": "img/products/5.jpg",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
        "IDBTN": "myBtn5", 
    }
]
const p6 = [
    {
        "TITLE": "Выхлопные системы",
        "LORE": "Замена глушителя, резонатора, удаление катализатора, замена гофры.",
        "SUM": "от 500 ₽",
        "IMG": "img/products/6.jpg",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
        "IDBTN": "myBtn6", 
    }
]
const p7 = [
    {
        "TITLE": "Ремонт подвески",
        "LORE": "Замена амортизаторов, стоек, шаровых опор, рычагов подвески, замена сайлентблоков. Замена подшипников.",
        "SUM": "от 500 ₽",
        "IMG": "img/products/7.jpg",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
        "IDBTN": "myBtn7", 
    }
]
const p8 = [
    {
        "TITLE": "Плановое ТО",
        "LORE": "Замена масла, фильтров.<br><br><wbr>",
        "SUM": "от 500 ₽",
        "IMG": "img/products/8.jpg",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
        "IDBTN": "myBtn8", 
    }
]
const p9 = [
    {
        "TITLE": "Тормозная система",
        "LORE": "Диагностика тормозных систем<br><br><wbr>",
        "SUM": "от 500 ₽",
        "IMG": "img/products/9.jpg",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
        "IDBTN": "myBtn9", 
    }
]
/*
Не важно что это
*/
const owner = [
    {
        "name": "ZoLiryzik",
        "URL": "https://zoliryzik.github.io",
        "SUM": "от 500 ₽",
        "IMG": "img/products/pustota.png",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
    }
]
/*
Добавление баннеров 
*/
for (let indexOne = 0; indexOne < p1.length; indexOne++) {
/* 
Переменные зависят от Кол-ва баннеров
*/
    const elementProduct = p1[indexOne];
    const elementProduct2 = p2[indexOne];
    const elementProduct3 = p3[indexOne];
    const elementProduct4 = p4[indexOne];
    const elementProduct5 = p5[indexOne];
    const elementProduct6 = p6[indexOne];
    const elementProduct7 = p7[indexOne];
    const elementProduct8 = p8[indexOne]; 
    const elementProduct9 = p9[indexOne]; 

    
    const elementowner = owner[indexOne];   
/*
Вывод в консоли
*/
    console.log('Site by '+elementowner.name +' for ExpressAuto\nЛичный сайт: ' + elementowner.URL );
/*
ВЫВОД УСЛУГ НЕ ТРОГАТЬ 
*/  
            const p11 = "    <div class='container'><div class='card'><figure class='card__poster'><img class='card-poster__image' src='"+elementProduct.IMG+"?w=800&amp;h=500&amp;fit=crop' alt='poster'></figure><div class='card__databox'><h3 class='card-databox__heading'>"+ elementProduct.TITLE +"</h3><div class='card-databox__description'>"+ elementProduct.LORE +"</div><div class='card-databox__description'><h1>"+elementProduct.SUM+"</h1></div><button class='button' id="+elementProduct.IDBTN+">"+ elementProduct.TEXTBTN +"</button></div></div>"
            const p12 = "    <div class='container'><div class='card'><figure class='card__poster'><img class='card-poster__image' src='"+elementProduct.IMG+"?w=800&amp;h=500&amp;fit=crop' alt='poster'></figure><div class='card__databox'><h3 class='card-databox__heading'>"+ elementProduct.TITLE +"</h3><div class='card-databox__description'>"+ elementProduct.LORE +"</div><div class='card-databox__description'><h1>"+elementProduct.SUM+"</h1></div><button class='button' id="+elementProduct.IDBTN+">"+ elementProduct.TEXTBTN +"</button></div></div>"
            const p13 = "    <div class='container'><div class='card'><figure class='card__poster'><img class='card-poster__image' src='"+elementProduct.IMG+"?w=800&amp;h=500&amp;fit=crop' alt='poster'></figure><div class='card__databox'><h3 class='card-databox__heading'>"+ elementProduct.TITLE +"</h3><div class='card-databox__description'>"+ elementProduct.LORE +"</div><div class='card-databox__description'><h1>"+elementProduct.SUM+"</h1></div><button class='button' id="+elementProduct.IDBTN+">"+ elementProduct.TEXTBTN +"</button></div></div>"
            const p14 = "    <div class='container'><div class='card'><figure class='card__poster'><img class='card-poster__image' src='"+elementProduct.IMG+"?w=800&amp;h=500&amp;fit=crop' alt='poster'></figure><div class='card__databox'><h3 class='card-databox__heading'>"+ elementProduct.TITLE +"</h3><div class='card-databox__description'>"+ elementProduct.LORE +"</div><div class='card-databox__description'><h1>"+elementProduct.SUM+"</h1></div><button class='button' id="+elementProduct.IDBTN+">"+ elementProduct.TEXTBTN +"</button></div></div>"
            const p15 = "    <div class='container'><div class='card'><figure class='card__poster'><img class='card-poster__image' src='"+elementProduct.IMG+"?w=800&amp;h=500&amp;fit=crop' alt='poster'></figure><div class='card__databox'><h3 class='card-databox__heading'>"+ elementProduct.TITLE +"</h3><div class='card-databox__description'>"+ elementProduct.LORE +"</div><div class='card-databox__description'><h1>"+elementProduct.SUM+"</h1></div><button class='button' id="+elementProduct.IDBTN+">"+ elementProduct.TEXTBTN +"</button></div></div>"
            const p16 = "    <div class='container'><div class='card'><figure class='card__poster'><img class='card-poster__image' src='"+elementProduct.IMG+"?w=800&amp;h=500&amp;fit=crop' alt='poster'></figure><div class='card__databox'><h3 class='card-databox__heading'>"+ elementProduct.TITLE +"</h3><div class='card-databox__description'>"+ elementProduct.LORE +"</div><div class='card-databox__description'><h1>"+elementProduct.SUM+"</h1></div><button class='button' id="+elementProduct.IDBTN+">"+ elementProduct.TEXTBTN +"</button></div></div>"
            const p17 = "    <div class='container'><div class='card'><figure class='card__poster'><img class='card-poster__image' src='"+elementProduct.IMG+"?w=800&amp;h=500&amp;fit=crop' alt='poster'></figure><div class='card__databox'><h3 class='card-databox__heading'>"+ elementProduct.TITLE +"</h3><div class='card-databox__description'>"+ elementProduct.LORE +"</div><div class='card-databox__description'><h1>"+elementProduct.SUM+"</h1></div><button class='button' id="+elementProduct.IDBTN+">"+ elementProduct.TEXTBTN +"</button></div></div>"
            const p18 = "    <div class='container'><div class='card'><figure class='card__poster'><img class='card-poster__image' src='"+elementProduct.IMG+"?w=800&amp;h=500&amp;fit=crop' alt='poster'></figure><div class='card__databox'><h3 class='card-databox__heading'>"+ elementProduct.TITLE +"</h3><div class='card-databox__description'>"+ elementProduct.LORE +"</div><div class='card-databox__description'><h1>"+elementProduct.SUM+"</h1></div><button class='button' id="+elementProduct.IDBTN+">"+ elementProduct.TEXTBTN +"</button></div></div>"
            const p19 = "    <div class='container'><div class='card'><figure class='card__poster'><img class='card-poster__image' src='"+elementProduct.IMG+"?w=800&amp;h=500&amp;fit=crop' alt='poster'></figure><div class='card__databox'><h3 class='card-databox__heading'>"+ elementProduct.TITLE +"</h3><div class='card-databox__description'>"+ elementProduct.LORE +"</div><div class='card-databox__description'><h1>"+elementProduct.SUM+"</h1></div><button class='button' id="+elementProduct.IDBTN+">"+ elementProduct.TEXTBTN +"</button></div></div>"

            boxProducts.innerHTML += p11 + p12 + p13 + p14 + p15 +p16 + p17 + p18 + p19;
}
