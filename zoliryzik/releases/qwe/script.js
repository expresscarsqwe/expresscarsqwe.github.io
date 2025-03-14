// Функция загрузки JSON файла с новостями
function loadNewsData(callback) {
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open('GET', 'news.json', true); // путь к вашему JSON файлу
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      callback(JSON.parse(xhr.responseText));
    }
  };
  xhr.send(null);
}

// Загрузка новостей при загрузке страницы
window.onload = function() {
  loadNewsData(function(newsData) {
    const newsContainer = document.getElementById('news-container');
    newsData.forEach(newsItem => {
      const newsDiv = document.createElement('div');
      newsDiv.className = 'news-item';
      newsDiv.innerHTML = `<h2>${newsItem.title}</h2><p>${newsItem.description}</p>`;
      newsContainer.appendChild(newsDiv);
    });
  });
};

// Функция поиска новостей
function searchNews() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const newsItems = document.getElementsByClassName('news-item');
  Array.from(newsItems).forEach(item => {
    const itemText = item.textContent.toLowerCase();
    item.style.display = itemText.includes(input) ? "" : "none";
  });
}
