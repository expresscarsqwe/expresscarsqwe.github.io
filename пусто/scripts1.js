// Данные для карточек
const services = [
    {
        id: 1,
        title: "ПК диагностика",
        description: "Компьютерная диагностика автомобиля, адаптация дросселя и др.",
        price: "от 500 ₽",
        image: "https://www.expresscarspenza.ru/img/products/1.jpg"
    },
    {
        id: 2,
        title: "Эндоскопия двигателя",
        description: "Эндоскопия двигателя и катализатора",
        price: "от 500 ₽",
        image: "https://www.expresscarspenza.ru/img/products/2.jpg"
    },
    {
        id: 3,
        title: "Ремонт ГБЦ",
        description: "Полный ремонт ГБЦ",
        price: "от 5 000 ₽",
        image: "https://www.expresscarspenza.ru/img/products/3.jpg"
    }
    // Добавьте другие услуги
];
// Данные для карточек
const servicess = [
    {
        id: 1,
        title: "Компьютерная диагностика",
        description: "Компьютерная диагностика автомобиля, адаптация дросселя и др.",
        price: "от 500 ₽",
        image: "https://www.expresscarspenza.ru/img/products/11.jpg"
    },
    {
        id: 2,
        title: "Эндоскопия двигателя",
        description: "Эндоскопия двигателя и катализатора",
        price: "от 500 ₽",
        image: "https://www.expresscarspenza.ru/img/products/21.jpg"
    },
    {
        id: 3,
        title: "Ремонт ГБЦ",
        description: "Полный ремонт ГБЦ",
        price: "от 5 000 ₽",
        image: "https://www.expresscarspenza.ru/img/products/31.jpg"
    }
    // Добавьте другие услуги
];
// Генерация карточек
const productContainer = document.getElementById("productContainer");
services.forEach(service => {
    const card = `
        <div class='card'>
            <figure class='card__poster'>
            <img class='card-poster__image' src='${service.image}?w=800&h=500&fit=crop' alt='poster2'>
            </figure>
            <div class='card__databox'>
            <h3 class='card-databox__heading'>${service.title}</h3>
            <div class='card-databox__description'><p>${service.description}</p><br><br>  </div>
            <div class='card-databox__description'><h1>${service.price}</h1></div>
            <button class="button" onclick="openModal(${service.id})">Подробнее</button>
        </div>
    `;
    productContainer.innerHTML += card;
});

// Генерация модальных окон
const modalsContainer = document.getElementById("modalsContainer");
servicess.forEach(serviceq => {
    const modal = `
<div id="modal${serviceq.id}" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeModal(${serviceq.id})">&times;</span>
    <h1>Заказать услугу</h1>
    <hr>
    <img class="modal-icon" src="${serviceq.image}" alt="Иконка товара">
    <h3>${serviceq.title}</h3>
    <p>${serviceq.description}</p>
    <div class="info-text">
      Чтобы заказать данную услугу напишите нам или позвоните
    </div>
    <a href="tel:+79603211010" class="shine-button">Позвонить</a>
    <a href="https://t.me/+79603211010" class="shine-button">Телеграм</a>
    <a href="https://wa.me/79603211010" class="shine-button">WhatsApp</a>
  </div>
</div>



    `;
    modalsContainer.innerHTML += modal;
});
// Скрываем все модальные окна при загрузке страницы
window.addEventListener("load", () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach(modal => {
    modal.style.display = "none"; // Устанавливаем display: none
  });
});

// Функция для открытия модального окна
function openModal(id) {
  const modal = document.getElementById(`modal${id}`);
  if (modal) {
    modal.style.display = "flex"; // Показываем окно с flexbox
  }
}

// Функция для закрытия модального окна
function closeModal(id) {
  const modal = document.getElementById(`modal${id}`);
  if (modal) {
    modal.style.display = "none"; // Скрываем окно
  }
}

// Открытие модального окна
function openModal(id) {
    document.getElementById(`modal${id}`).style.display = "flex";
}

// Закрытие модального окна
function closeModal(id) {
    document.getElementById(`modal${id}`).style.display = "none";
}

// Функция поиска
document.getElementById("searchInput").addEventListener("input", searchProducts);

function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    let found = false;

    // Поиск по карточкам
    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        if (text.includes(query)) {
            card.style.display = "block";
            found = true;
        } else {
            card.style.display = "none";
        }
    });

    // Получение контейнера продуктов
    const productContainer = document.getElementById("productContainer");
    
    // Если ничего не найдено
    if (!found) {
        const noResultsMessage = productContainer.querySelector(".no-results");
        if (!noResultsMessage) {
            const message = document.createElement("p");
            message.className = "no-results";
            message.textContent = "Ничего не найдено.";
            productContainer.appendChild(message);
        }
    } else {
        // Удаляем сообщение, если результаты найдены
        const noResultsMessage = productContainer.querySelector(".no-results");
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
}



// Отображение текущего года
document.getElementById("current-year").textContent = new Date().getFullYear();

