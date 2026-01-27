// main.js actualizado con animaciones para todas las secciones

// Efecto de cambio de color en el navbar al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Control de visibilidad del botón "volver arriba"
window.addEventListener('scroll', function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.visibility = "visible";
        scrollTopBtn.style.pointerEvents = "auto";
    } else {
        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.visibility = "hidden";
        scrollTopBtn.style.pointerEvents = "none";
    }
});

// Función para hacer scroll suave hacia arriba
document.getElementById('scrollTopBtn').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ANIMACIONES PARA TODAS LAS SECCIONES
function checkScrollAnimations() {
    // Seleccionamos todos los elementos que queremos animar
    const animatedElements = document.querySelectorAll(
        '.about-section, .values-section, .team-section, .projects-section, .contact-section, ' +
        '.value-card, .team-card, .project-card, ' +
        '.section-title, .section-label, ' +
        '.about-content > *, .values-container, .team-grid, .projects-grid, .contact-grid'
    );
    
    animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Aparece un poco antes
        
        if (elementPosition < screenPosition && !element.classList.contains('animated')) {
            element.classList.add('animated');
            
            // Aplicamos diferentes delays para elementos dentro de las secciones
            if (element.classList.contains('value-card')) {
                const index = Array.from(element.parentNode.children).indexOf(element);
                element.style.animationDelay = `${index * 0.1 + 0.2}s`;
            } else if (element.classList.contains('team-card')) {
                const index = Array.from(element.parentNode.children).indexOf(element);
                element.style.animationDelay = `${index * 0.1 + 0.2}s`;
            } else if (element.classList.contains('project-card')) {
                const index = Array.from(element.parentNode.children).indexOf(element);
                element.style.animationDelay = `${index * 0.1 + 0.2}s`;
            }
        }
    });
}

// Ejecutar al cargar y al hacer scroll
window.addEventListener('load', checkScrollAnimations);
window.addEventListener('scroll', checkScrollAnimations);

// Mensaje de bienvenida en consola
console.log("Zairë - Tecnología con propósito. Iniciado correctamente.");