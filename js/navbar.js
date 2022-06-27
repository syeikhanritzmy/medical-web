const menu = document.querySelector('.menus');
const hamburgerMenu = document.querySelector('.menu-hamburger');
const iconMenu = document.querySelector('.menu-bar');
const iconClose = document.querySelector('.close-bar');



hamburgerMenu.addEventListener('click', () => {
  toggleMenu();
});

const toggleMenu = () => {
  if (menu.classList.contains('show-menus')) {
    menu.classList.remove('show-menus');
    iconClose.style.display = 'none';
    iconMenu.style.display = 'block';
  } else {
    menu.classList.add('show-menus');
    iconClose.style.display = 'block';
    iconMenu.style.display = 'none';
  }
};