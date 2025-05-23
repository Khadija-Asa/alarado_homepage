// menu
const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav_menu");

burger.addEventListener("click", mobileMenu);

function mobileMenu() {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav_link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    burger.classList.remove("active");
    navMenu.classList.remove("active");
}

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