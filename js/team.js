/*
THIS CODE BY zoliryzik
*/
const boxOwners = document.getElementById("owners_list");
/*
you can use this api but if you need to create custome api check:
 
*/
const API = "https://discord-web-api.glitch.me/discord/user/";

const owners = [
    {
        "id": "760400133212602369",
        "URL": "../img/expresscarspenza.png",
        "INDEX": "..",
        "TEL": "tel:79603211010",
        "post": "<br>Экспресс-Авто<br><br>Контактная информация",
        "TELEGA": "https://t.me/+79603211010",
        "WA": "https://wa.me/79603211010"
    }
]

for (let indexOne = 0; indexOne < owners.length; indexOne++) {
    const elementOwners = owners[indexOne];

    $.getJSON(API + elementOwners.id)
        .then(output => {
            if (!output.username || !output.url) {
                setTimeout(function () {
                    document.querySelectorAll(".banner img").forEach(imgs => imgs.src = url + "https://zoliryzik.github.io/zoliryzik.png");
                }, 1000);
            }
            const ownerList = "<div id='trigger' class='card' style='margin: 15px;'><div class='banner'><img src='" + elementOwners.URL + "'></div></br></br></br></br><h2 class='name'><br>" + "</h2><div class='title'><h1 id='trigger2' style='font-size: 26px; color: #000000;'>" + elementOwners.post + "</h2></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.TEL + "' target='_blank'><button style='color: #000000;'>Позвонить</button></a></div></button></a></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.TELEGA + "' target='_blank'><button style='color: #000000;'>Телеграм</button></a></div></button></a></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.WA + "' target='_blank'><button style='color: #000000;'>WhatsApp</button></a></div></button></a></div><div class='actions'><div class='follow-btn' style='margin-bottom: 5px;'><a href='" + elementOwners.INDEX + "' target='_blank'><button style='color: #000000;'>На главную</button></a></div></button></a></div></div></div>"
            boxOwners.innerHTML += ownerList;
        });
}
