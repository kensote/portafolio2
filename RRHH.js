// Selección de elementos del DOM
const navLinks = document.querySelectorAll('#nav a');

// Función para desplazarse a la sección correspondiente
function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const targetPosition = targetElement.offsetTop - 60;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Añadir evento click a cada enlace de la navegación
navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});
