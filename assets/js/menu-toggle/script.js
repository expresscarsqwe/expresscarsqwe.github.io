const toggleButton = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

toggleButton.addEventListener('click', () => {
  if (menuItems.style.display === 'none' || !menuItems.style.display) {
    menuItems.style.display = 'flex';
  } else {
    menuItems.style.display = 'none';
  }
});
