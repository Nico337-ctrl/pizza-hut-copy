
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('bd-theme');
    const body = document.body;

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-theme');
        const isDarkMode = body.classList.contains('dark-theme');
        localStorage.setItem('dark-mode', isDarkMode);
    });

    // Verificar el modo preferido del usuario almacenado en localStorage
    const preferredMode = localStorage.getItem('dark-mode');
    if (preferredMode === 'true') {
        body.classList.add('dark-theme');
    }
});