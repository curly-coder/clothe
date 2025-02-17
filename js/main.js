// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href');
    const targetSection = document.querySelector(targetID);
    if(targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Закрытие мобильного меню при клике
    const navMenu = document.getElementById('nav-menu');
    if(navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});

// Переключение гамбургер-меню
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('nav-menu').classList.toggle('active');
});
