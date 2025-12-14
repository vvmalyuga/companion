// Функция входа в систему
function login() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    
    if (!username || !password) {
        console.error('Не найдены поля ввода');
        alert('Ошибка: поля ввода не найдены');
        return;
    }
    
    const user = username.value.trim();
    const pass = password.value.trim();
    
    if (user && pass) {
        // Сохраняем информацию о входе в localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', user);
        
        // Показываем уведомление
        alert('Вход выполнен успешно! Добро пожаловать, ' + user + '!');
        
        // Редирект на главную страницу
        window.location.href = "about.html";
    } else {
        alert('Пожалуйста, введите логин и пароль');
        if (!user) username.focus();
        else if (!pass) password.focus();
    }
}

// Проверка состояния входа при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Приложение "Компаньон" загружено');
    
    // Проверяем, есть ли сохраненный логин
    const loggedIn = localStorage.getItem('loggedIn');
    const savedUsername = localStorage.getItem('username');
    
    if (loggedIn === 'true' && savedUsername) {
        console.log('Пользователь уже вошел:', savedUsername);
    }
    
    // Настраиваем обработчики событий
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    if (usernameInput && passwordInput) {
        // Быстрый вход при нажатии Enter
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                login();
            }
        });
        
        // Автозаполнение для демо-доступа
        if (usernameInput.value === '') {
            usernameInput.value = 'demo_user';
            passwordInput.value = 'demo123';
        }
    }
    
    // Проверка активной страницы
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// Функция выхода из системы
function logout() {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    alert('Вы вышли из системы');
    window.location.href = "index.html";
}

// Добавляем обработчик для кнопок выхода
document.addEventListener('DOMContentLoaded', function() {
    const logoutLinks = document.querySelectorAll('a.logout');
    
    logoutLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            logout();
        });
    });
});

// Утилиты для работы с данными
const CompanionUtils = {
    // Форматирование цены
    formatPrice: function(price) {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0
        }).format(price);
    },
    
    // Форматирование даты
    formatDate: function(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    },
    
    // Проверка email
    isValidEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
};
