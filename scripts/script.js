
// Seleciona a seção da imagem e adiciona o listener de mousemove
var imageSection = document.querySelector('.image-section');
if (imageSection) {
    imageSection.addEventListener('mousemove', function (e) {
        var logo = document.querySelector('.logo');
        if (logo) {
            var rect = logo.getBoundingClientRect();
            var mouseX = e.clientX - rect.left - rect.width / 2;
            var mouseY = e.clientY - rect.top - rect.height / 2;
            var rotateX = (mouseY / rect.height) * 20 - 10; // Ajuste o intervalo de rotação conforme necessário
            var rotateY = (mouseX / rect.width) * -20 + 10; // Ajuste o intervalo de rotação conforme necessário
            logo.style.setProperty('--rotateX', "".concat(rotateX, "deg"));
            logo.style.setProperty('--rotateY', "".concat(rotateY, "deg"));
        }
    });
    // Listener para o evento mouseleave
    imageSection.addEventListener('mouseleave', function () {
        var logo = document.querySelector('.logo');
        if (logo) {
            logo.style.setProperty('--rotateX', '0deg');
            logo.style.setProperty('--rotateY', '0deg');
        }
    });
}

// Função para alternar a visibilidade da senha
document.addEventListener('DOMContentLoaded', function () {
    var passwordInput = document.getElementById('password');
    var togglePassword = document.getElementById('togglePassword');

    if (passwordInput && togglePassword) {
        togglePassword.addEventListener('click', function () {
            // Alterna o tipo de input entre 'password' e 'text'
            var type = passwordInput.type === 'password' ? 'text' : 'password';
            passwordInput.type = type;

            // Alterna o ícone do olho
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }
});
document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio real do formulário

    // Simulação de processamento de cadastro
    setTimeout(function () {
        // Redireciona para a página de sucesso após o cadastro
        window.location.href = 'singUpDone.html';
    }, 1000); // Simula um pequeno atraso para parecer que está processando
});

