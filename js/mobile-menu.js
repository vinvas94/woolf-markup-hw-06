// шукаємо елемети в html
const mobileMenu = document.querySelector("[data-menu]");
const openMenuBtn = document.querySelector("[data-menu-open]");
const closeMenuBtn = document.querySelector("[data-menu-close]");
const body = document.querySelector("body");
// кінець 1 блоку

// функція, яка додає та знімає класи через toggle
const toggleMenu = () => {
  const isMenuOpen = mobileMenu.classList.toggle("is-hidden");
  body.classList.toggle("prueba");
};

// кінець 2 блоку

// обробник події по кліку мишки
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);
// кінець 3 блоку

// Close the mobile menu on wider screens if the device orientation changes
window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileMenu.classList.add("is-hidden");
  body.classList.remove("prueba");
});
