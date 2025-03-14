document.addEventListener('DOMContentLoaded', () => {
    const newsList = document.getElementById('news-list');
    const searchInput = document.getElementById('search');
    const saveButton = document.getElementById('save-news');
    
    // Загрузка новостей из JSON файла
    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            news = data;
            displayNews(news);
        })
        .catch(error => console.error('Ошибка при загрузке новостей:', error));
    
    // Функция для отображения новостей
    function displayNews(filteredNews) {
        newsList.innerHTML = '';
        filteredNews.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.title}: ${item.content}`;
            newsList.appendChild(li);
        });
    }

    // Обработка поиска
    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredNews = news.filter(item =>
            item.title.toLowerCase().includes(searchText) ||
            item.content.toLowerCase().includes(searchText)
        );
        displayNews(filteredNews);
    });

    // Сохранение новостей в JSON
    saveButton.addEventListener('click', () => {
        const dataStr = JSON.stringify(news, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'news.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
