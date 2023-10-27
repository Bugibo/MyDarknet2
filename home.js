const socket = io();

// Получение имени пользователя из localStorage
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const usernameElement = document.getElementById("username");
if (currentUser) {
    usernameElement.textContent = currentUser.username;
} else {
    // Если пользователь не вошел, перенаправляем его на страницу входа
    window.location.href = "index.html";
}

const chatMessages = document.getElementById("chat-messages");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");

// Отправка имени пользователя на сервер
socket.emit('login', currentUser.username);

// Обработка отправки сообщения
sendButton.addEventListener("click", () => {
    const messageText = messageInput.value;
    
    if (messageText.trim() !== "") {
        // Отправляем сообщение на сервер
        socket.emit('chat message', messageText);
        
        // Очищаем поле ввода
        messageInput.value = "";
    }
});

// Обработка приема сообщения с сервера
socket.on('chat message', (data) => {
    const messageElement = document.createElement("p");
    messageElement.textContent = data.username + ": " + data.message;
    chatMessages.appendChild(messageElement);
});
