// Пример базовой регистрации и входа
const users = [];

function register() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    users.push({ username, password });
    
    // Очистка формы
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function login() {
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
    
    const user = users.find(u => u.username === loginUsername && u.password === loginPassword);
    
    if (user) {
        // Вход успешен
        document.getElementById("message").innerHTML = "Вход выполнен. Переход на домашнюю страницу...";
        
        // Сохранение пользователя в localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
        
        // Перенаправление на страницу home.html (предположим, такая страница существует)
        window.location.href = "home.html";
    } else {
        document.getElementById("message").innerHTML = "Пользователь не найден. Попробуйте снова.";
    }
}
