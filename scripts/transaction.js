document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');

    // Função para abrir o modal
    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    // Função para fechar o modal
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
