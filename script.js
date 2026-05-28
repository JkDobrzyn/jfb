const menuToggle = document.getElementById('menuToggle');
const navClose = document.getElementById('navClose');
const nav = document.getElementById('nav');
const overlay = document.getElementById('overlay');

function openMenu() {
  nav.classList.add('open');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  nav.classList.remove('open');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', openMenu);
navClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
