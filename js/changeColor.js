const logo = document.querySelector('.logo h3');
const menuBar = document.querySelector('.menu-bar');

let scrollTigger = 800;

window.innerWidth;
window.onscroll = () => {
  if (window.innerWidth <= 860) {
    scrollTigger = 700;
    if (window.scrollY >= scrollTigger || window.pageYOffset >= scrollTigger) {
      logo.style.color = '#0061ff ';
      menuBar.style.color = '#0061ff ';
    } else if (
      window.scrollY <= scrollTigger ||
      window.pageYOffset <= scrollTigger
    ) {
      logo.style.color = '#ffffff ';
      menuBar.style.color = '#ffffff ';
    }
  } else {
    logo.style.color = '#ffffff ';
    menuBar.style.color = '#ffffff ';
  }
};
