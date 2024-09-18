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
    const addReportBtn = document.getElementById('add-report-btn');
    const reportModal = document.getElementById('report-modal');
    const closeBtn = document.querySelector('.modal .close-btn');

    if (addReportBtn && reportModal && closeBtn) {
        addReportBtn.addEventListener('click', () => {
            reportModal.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            reportModal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === reportModal) {
                reportModal.style.display = 'none';
            }
        });
    }
});
