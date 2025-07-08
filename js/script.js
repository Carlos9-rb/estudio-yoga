document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleccionar los elementos del DOM (Document Object Model)
    const mobileMenuButton = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu'); // El menú de navegación completo

    // 2. Añadir un "escuchador de eventos" (event listener) al botón
    mobileMenuButton.addEventListener('click', function() {
        // Cuando se hace clic en el botón:

        // Alternar la clase 'active' en el menú de navegación
        // Si el menú tiene la clase 'active', la quita. Si no la tiene, la añade.
        navMenu.classList.toggle('active');

        // Opcional: Animar el icono
        mobileMenuButton.classList.toggle('is-active');
    });

    // 3. Cerrar el menú si se hace clic en un enlace (para móviles)
    const navLinks = document.querySelectorAll('.nav-menu ul li a'); // Todos los enlaces dentro del menú

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Si el menú está abierto (tiene la clase 'active'), ciérralo
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuButton.classList.remove('is-active'); // También resetear el icono
            }
        });
    });
});