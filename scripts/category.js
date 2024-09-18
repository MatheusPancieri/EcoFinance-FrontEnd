document.addEventListener("DOMContentLoaded", () => {
    // Menu lateral
    const menuItems = document.querySelectorAll('.menu-lateral .item-menu');

    const currentPath = window.location.pathname;

    menuItems.forEach((item) => {
        const link = item.querySelector('a');
        if (link) {
            if (link.getAttribute('href') === currentPath) {
                item.classList.add('ativo');
            } else {
                item.classList.remove('ativo');
            }
        }
    });

    // Modal
    const addGoalBtn = document.getElementById('add-goal-btn');
    const goalModal = document.getElementById('goal-modal');
    const closeBtn = document.querySelector('.modal .close-btn');

    if (addGoalBtn && goalModal && closeBtn) {
        addGoalBtn.addEventListener('click', () => {
            goalModal.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            goalModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === goalModal) {
                goalModal.style.display = 'none';
            }
        });
    }
});
