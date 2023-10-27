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

// Обработка отправки сообщения
sendButton.addEventListener("click", sendMessage);

function sendMessage() {
    const messageText = messageInput.value;
    
    if (messageText.trim() !== "") {
        const messageElement = document.createElement("p");
        messageElement.textContent = currentUser.username + ": " + messageText;
        chatMessages.appendChild(messageElement);
        
        // Очищаем поле ввода
        messageInput.value = "";
    }
}
