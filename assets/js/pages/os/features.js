// Подгрузка данных из JSON и заполнение списков
fetch('features.json')
    .then(response => response.json())
    .then(data => {
        populateList('services-list', data.services);
        populateList('work-types-list', data.workTypes);
        populateList('car-brands-list', data.carBrands);
        populateList('additional-info-list', data.additionalInfo);
    })
    .catch(error => console.error('Ошибка загрузки данных:', error));

function populateList(listId, items) {
    const list = document.getElementById(listId);
    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
}
