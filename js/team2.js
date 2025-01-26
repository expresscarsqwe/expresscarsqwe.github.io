/*
THIS CODE BY zoliryzik
*/
const boxOwners = document.getElementById("products");
/*
you can use this api but if you need to create custome api check:
 
*/
/*const API = "https://discord-web-api.glitch.me/discord/user/";*/

const p1 = [
    {
        "TITLE": "ПК диагностика",
        "LORE": "Компьютерная диагностика автомобиля1",
        "SUM": "от 500 ₽",
        "IMG": "img/products/1.jpg",
        "TEXTBTN": "Подробнее",
        "URLBTN": "./index.html",
    }
]
const p2 = [
    {
        "URL": "../img/expresscarspenza.png",
        "INDEX": "../index.html",
        "TEL": "tel:79603211010",
        "post": "<br>Экспресс-Авто<br><br>Контактная информация",
        "TELEGA": "https://t.me/+79603211010",
        "WA": "https://wa.me/79603211010"
    }
]
const p3 = [
    {
        "URL": "../img/expresscarspenza.png",
        "INDEX": "../index.html",
        "TEL": "tel:79603211010",
        "post": "<br>Экспресс-Авто<br><br>Контактная информация",
        "TELEGA": "https://t.me/+79603211010",
        "WA": "https://wa.me/79603211010"
    }
]
const p4 = [
    {
        "URL": "../img/expresscarspenza.png",
        "INDEX": "../index.html",
        "TEL": "tel:79603211010",
        "post": "<br>Экспресс-Авто<br><br>Контактная информация",
        "TELEGA": "https://t.me/+79603211010",
        "WA": "https://wa.me/79603211010"
    }
]
const p5 = [
    {
        "URL": "../img/expresscarspenza.png",
        "INDEX": "../index.html",
        "TEL": "tel:79603211010",
        "post": "<br>Экспресс-Авто<br><br>Контактная информация",
        "TELEGA": "https://t.me/+79603211010",
        "WA": "https://wa.me/79603211010"
    }
]
const p6 = [
    {
        "URL": "../img/expresscarspenza.png",
        "INDEX": "../index.html",
        "TEL": "tel:79603211010",
        "post": "<br>Экспресс-Авто<br><br>Контактная информация",
        "TELEGA": "https://t.me/+79603211010",
        "WA": "https://wa.me/79603211010"
    }
]
const p7 = [
    {
        "URL": "../img/expresscarspenza.png",
        "INDEX": "../index.html",
        "TEL": "tel:79603211010",
        "post": "<br>Экспресс-Авто<br><br>Контактная информация",
        "TELEGA": "https://t.me/+79603211010",
        "WA": "https://wa.me/79603211010"
    }
]
const p8 = [
    {
        "URL": "../img/expresscarspenza.png",
        "INDEX": "./index.html",
        "TEL": "tel:79603211010",
        "post": "<br>Экспресс-Авто<br><br>Контактная информация",
        "TELEGA": "https://t.me/+79603211010",
        "WA": "https://wa.me/79603211010"
    }
]
for (let indexOne = 0; indexOne < p1.length; indexOne++) {
    const elementOwners = p1[indexOne];
    const elementOwners2 = p2[indexOne];
    const elementOwners3 = p3[indexOne];
    const elementOwners4 = p4[indexOne];
    const elementOwners5 = p5[indexOne];
    const elementOwners6 = p6[indexOne];
    const elementOwners7 = p7[indexOne];
    const elementOwners8 = p8[indexOne];    
    
            const p11 = "    <div class='container'><div class='card'><figure class='card__poster'><img class='card-poster__image' src='"+elementOwners.IMG+"?w=800&amp;h=500&amp;fit=crop' alt='poster'></figure><div class='card__databox'><h3 class='card-databox__heading'>"+ elementOwners.TITLE +"</h3><div class='card-databox__description'>"+ elementOwners.LORE +"</div><div class='card-databox__description'><h1>"+elementOwners.SUM+"</h1></div><a class='card-databox__read-more-btn' href="+ elementOwners.URLBTN +">"+ elementOwners.TEXTBTN+"</a></div></div>"
            boxOwners.innerHTML += p11;
}