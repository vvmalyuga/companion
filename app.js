function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  if(user && pass){
    alert('Вход выполнен успешно!');
    // Здесь можно сделать редирект на главную или личный кабинет
  } else {
    alert('Введите логин и пароль');
  }
}
