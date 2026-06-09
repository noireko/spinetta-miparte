// -----------------------------------
// Código de navegación y dropdown
// -----------------------------------

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Obtener todos los botones de dropdown y contenidos
const dropdownBtns = document.querySelectorAll(".dropbtn");
const dropdownContents = document.querySelectorAll(".dropdown-content");
const dropdownContents_home = document.querySelectorAll(
  ".dropdown-content-home"
);
// Para gestionar el estado del dropdown abierto en mobile
let openDropdownIndex = null;

// Mostrar/Ocultar menú en modo móvil y ocultar logo
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("nav-active");
  logo.classList.toggle("logo-hidden");
});

// Mostrar/Ocultar dropdowns de manera independiente en mobile y permitir que el enlace funcione en desktop
dropdownBtns.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    // Detectar si estamos en mobile (pantallas menores a 768px)
    if (window.innerWidth < 768) {
      const isDropdownOpen =
        dropdownContents[index].classList.contains("show-dropdown");
      if (isDropdownOpen) return true;
      else {
        event.preventDefault();
        if (openDropdownIndex !== null && openDropdownIndex !== index) {
          dropdownContents[openDropdownIndex].classList.remove("show-dropdown");
        }
        dropdownContents[index].classList.toggle("show-dropdown");
        openDropdownIndex = index;
      }
    } else {
      return true;
    }
  });
});
