function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if(user && pass){
    alert('Вход выполнен успешно!');
    window.location.href = "about.html";
  } else {
    alert('Введите логин и пароль');
  }
}
