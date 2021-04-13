const headerMenu = document.querySelector('.header__menu');
const headerNav = document.querySelector('.header__nav');
const body = document.body;

console.log(headerMenu, headerNav)

headerMenu.addEventListener('click', function () {
  headerMenu.classList.toggle('active');
  headerNav.classList.toggle('active');
  body.classList.toggle('lock');
})