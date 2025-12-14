function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if(user && pass){
    alert('Вход выполнен успешно!');
    // Редирект на главную информационную страницу
    window.location.href = "main.html";
  } else {
    alert('Введите логин и пароль');
  }
}

// Демо-доступ при нажатии Enter
document.addEventListener('keypress', function(e) {
  if(e.key === 'Enter') {
    login();
  }
});
