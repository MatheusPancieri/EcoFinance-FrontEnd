const menuItems = document.querySelectorAll('.item-menu a'); // Seleciona os links dentro dos itens do menu
const contentArea = document.querySelector('.content'); // Área onde o conteúdo será carregado

function selectLink(event) {
    event.preventDefault(); // Evita que a página seja recarregada

    // Remove a classe 'ativo' de todos os itens do menu
    menuItems.forEach((item) => item.parentElement.classList.remove('ativo'));

    // Adiciona a classe 'ativo' ao item que foi clicado
    this.parentElement.classList.add('ativo');

    // Obtém o href do link que foi clicado
    const href = this.getAttribute('href');

    // Carrega o conteúdo da página dinamicamente
    fetch(href)
        .then(response => response.text())
        .then(data => {
            contentArea.innerHTML = data; // Insere o conteúdo da página no contêiner
        })
        .catch(err => console.error('Erro ao carregar a página:', err));
}

// Adiciona o evento de clique a cada link do menu
menuItems.forEach((item) => item.addEventListener('click', selectLink));
