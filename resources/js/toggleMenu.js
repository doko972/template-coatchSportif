document.addEventListener('DOMContentLoaded', () => {
    window.toggleMenu = function () { // Rendre la fonction globale
        const nav = document.querySelector('.nav');
        const toggler = document.querySelector('.navbar-toggler');
        nav.classList.toggle('open');
        toggler.classList.toggle('open');
    };
});