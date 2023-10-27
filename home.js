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

// Функция для отправки сообщения на сервер (заглушка, требуется серверная часть)
function sendMessageToServer(message) {
    // Здесь должен быть код для отправки сообщения на сервер
}

// Функция для отображения сообщения на странице
function displayMessage(username, messageText) {
    const messageElement = document.createElement("p");
    messageElement.textContent = username + ": " + messageText;
    chatMessages.appendChild(messageElement);
}

// Обработка отправки сообщения
sendButton.addEventListener("click", () => {
    const messageText = messageInput.value;
    
    if (messageText.trim() !== "") {
        // Отправляем сообщение на сервер
        sendMessageToServer({
            username: currentUser.username,
            message: messageText
        });
        
        // Отображаем сообщение на странице
        displayMessage(currentUser.username, messageText);
        
        // Очищаем поле ввода
        messageInput.value = "";
    }
});

// Функция для отображения сообщений полученных с сервера (заглушка)
function receiveMessagesFromServer() {
    // Здесь должен быть код для получения сообщений с сервера и отображения их на странице
    // Пример получения сообщений с сервера:
    const messages = [
        { username: "User1", message: "Привет!" },
        { username: "User2", message: "Привет, User1!" },
    ];

    messages.forEach((message) => {
        displayMessage(message.username, message.message);
    });
}

// Получаем и отображаем сообщения с сервера (вызывается при загрузке страницы)
receiveMessagesFromServer();
