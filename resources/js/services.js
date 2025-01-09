document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Supprime l'état actif de tous les boutons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Ajoute l'état actif au bouton cliqué
            button.classList.add('active');

            // Masque tous les panneaux
            tabPanels.forEach(panel => panel.classList.remove('active'));
            // Affiche le panneau correspondant
            const targetPanel = document.getElementById(button.dataset.target);
            targetPanel.classList.add('active');
        });
    });
});
