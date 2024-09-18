
document.getElementById('login-button').addEventListener('click', function () {
    // Obtém os valores dos campos de entrada
    var usernameField = document.getElementById('username');
    var passwordField = document.getElementById('password');
    var username = usernameField.value;
    var password = passwordField.value;

    // Remove classes de erro existentes
    usernameField.classList.remove('error');
    passwordField.classList.remove('error');

    // Verifica se ambos os campos estão preenchidos
    var hasError = false;

    if (username === "") {
        usernameField.classList.add('error');
        usernameField.placeholder = "missing field!";
        hasError = true;
    }
    if (password === "") {
        passwordField.classList.add('error');
        passwordField.placeholder = "missing field!";
        hasError = true;
    }

    // Se não houver erro, redireciona
    if (!hasError) {
        window.location.href = '/htmls/index.html';
    }
});

