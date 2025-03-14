// script.js
document.addEventListener('DOMContentLoaded', function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('productContainer');
      data.services.forEach(service => {
        // Создание карточки услуги
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <figure class='card__poster'>
            <img class='card-poster__image' src='${service.image}' alt='poster'>
          </figure>
          <div class='card__databox'>
            <h3 class='card-databox__heading'>${service.title}</h3>
            <div class='card-databox__description'><p>${service.description}</p></div>
            <div class='card-databox__description'><h1>${service.price}</h1></div>
            <button class='button' id='btn${service.id}'>Подробнее</button>
          </div>
        `;
        container.appendChild(card);

        // Создание модального окна
        const modal = document.createElement('div');
        modal.id = `modal${service.id}`;
        modal.className = 'modal';
        modal.innerHTML = `
          <div class="modal-content">
            <div class="modal-header">
              <span class="close" data-modal="modal${service.id}">&times;</span>
              <img class='modal-img' src='${service.image}' width="10" height="10">
              <h1>Заказать услугу</h1>
            </div>
            <div class="modal-body">
              <p><h3>${service.title}</h3><h3>${service.modalDescription}</h3></p>
              <a href="tel:79603211010" class="shine-button">Позвонить</a>
              <a href="https://t.me/+79603211010" class="shine-button">Телеграм</a>
              <a href="https://wa.me/79603211010" class="shine-button">WhatsApp</a>
            </div>
          </div>
        `;
        document.body.appendChild(modal);
      });

      // Обработчики событий для кнопок
      const buttons = document.querySelectorAll("button[id^='btn']");
      buttons.forEach(function(button) {
        button.onclick = function() {
          const modalId = "modal" + this.id.replace("btn", "");
          openModal(modalId);
        };
      });

      // Обработчики событий для элементов <span> закрытия модальных окон
      const spans = document.querySelectorAll(".close");
      spans.forEach(function(span) {
        span.onclick = function() {
          const modalId = this.getAttribute("data-modal");
          closeModal(modalId);
        };
      });

      // Функция для открытия модального окна
      function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "block";
      }

      // Функция для закрытия модального окна
      function closeModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = "none";
      }

      // Закрытие модального окна при клике вне его
      window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
          closeModal(event.target.id);
        }
      };
    });
});