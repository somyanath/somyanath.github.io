const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');
const btnLine = document.querySelectorAll('.btn-line');
const menuOverlay = document.querySelector('.menu-overlay');
const navMenu = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuOverlay.classList.add('show');
    navMenu.classList.add('show');
    btnLine.forEach(btn => btn.classList.add('show'));
    navItem.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuOverlay.classList.remove('show');
    navMenu.classList.remove('show');
    btnLine.forEach(btn => btn.classList.remove('show'));
    navItem.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}