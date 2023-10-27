document.addEventListener("DOMContentLoaded", function() {
    // Получаем текущего пользователя из localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    
    if (currentUser) {
        // Отображаем имя текущего пользователя
        document.getElementById("username").textContent = currentUser.username;
    } else {
        // Если текущего пользователя нет, перенаправляем на страницу входа
        window.location.href = "index.html";
    }
});

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    
    if (message) {
        // Создаем элемент для сообщения и добавляем его в чат
        const chat = document.getElementById("chat");
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        chat.appendChild(messageElement);
        
        // Очищаем поле ввода
        messageInput.value = "";
    }
}
