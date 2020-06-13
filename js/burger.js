let headerBurger = document.querySelector(".header-burger");
let menu = document.getElementById("menu");
let openBurger = document.getElementById("openBurger");
let closeBurger = document.createElement('i');
closeBurger.setAttribute('class', 'fas fa-times');
closeBurger.style.display = 'none';
headerBurger.appendChild(closeBurger);

openBurger.addEventListener('click', () => {
  menu.setAttribute('class', 'header-menu-close');
  openBurger.style.display = 'none';
  closeBurger.style.display = 'block';
});

closeBurger.addEventListener('click', () => {
  menu.setAttribute('class', 'header-menu');
  closeBurger.style.display = 'none';
  openBurger.style.display = 'block';
});
