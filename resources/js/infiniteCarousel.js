document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    const cloneCount = items.length;
    let currentPosition = 0;
    let isDragging = false;
    let startX = 0;
    let scrollStartPosition = 0;

    // Clone items pour créer un effet infini
    for (let i = 0; i < cloneCount; i++) {
        const clone = items[i].cloneNode(true);
        track.appendChild(clone);
    }

    // Défilement automatique
    const autoScroll = () => {
        currentPosition += 1;
        if (currentPosition >= track.scrollWidth / 2) {
            currentPosition = 0;
        }
        updatePosition();
    };

    let autoScrollInterval = setInterval(autoScroll, 20);

    // Fonction pour mettre à jour la position
    const updatePosition = () => {
        track.style.transform = `translateX(-${currentPosition}px)`;
    };

    // Gestion du glisser-déposer
    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        clearInterval(autoScrollInterval); // Arrête l'autoscroll pendant le glisser
        startX = e.pageX;
        scrollStartPosition = currentPosition;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dragDistance = e.pageX - startX;
        currentPosition = scrollStartPosition - dragDistance;
        updatePosition();
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        autoScrollInterval = setInterval(autoScroll, 20); // Redémarre l'autoscroll après le glisser
    });

    // Réinitialise la position pour un effet infini
    const resetScroll = () => {
        if (currentPosition >= track.scrollWidth / 2) {
            currentPosition = 0;
        } else if (currentPosition < 0) {
            currentPosition = track.scrollWidth / 2;
        }
        updatePosition();
    };

    setInterval(resetScroll, 50); // Vérifie périodiquement la position
});
