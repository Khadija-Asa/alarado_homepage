// menu
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const burgerIcon = document.getElementById('burger_icon');
  const navMenu = document.querySelector('.nav_menu');

burger.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('active');

  if (isOpen) {
    burgerIcon.src = 'assets/close_button.svg';
  } else {
    burgerIcon.src = 'assets/hamburger_button.svg';
  }
  });
});

// toggle
const toggle = document.getElementById('theme_toggle');
const body = document.body;
const logo = document.getElementById('logo');
const sunIcon = document.getElementById('sun_icon');
const moonIcon = document.getElementById('moon_icon');

toggle.addEventListener('change', () => {
  const isDark = body.classList.toggle('dark');
  logo.src = isDark ? 'assets/logo_dark.svg' : 'assets/logo_light.svg';
  sunIcon.src = isDark ? 'assets/sun_dark.svg' : 'assets/sun_light.svg';
  moonIcon.src = isDark ? 'assets/moon_light.svg' : 'assets/moon_dark.svg';
});