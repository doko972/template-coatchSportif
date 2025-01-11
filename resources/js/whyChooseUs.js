document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.why-container');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Fonction pour mettre à jour l'affichage du container actif
    const updateContainer = () => {
        containers.forEach((container, index) => {
            if (index === currentIndex) {
                container.style.display = 'flex';
            } else {
                container.style.display = 'none';
            }
        });
    };

    // Événements pour les boutons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + containers.length) % containers.length;
        updateContainer();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % containers.length;
        updateContainer();
    });

    // Initialiser avec le premier container actif
    updateContainer();
});
