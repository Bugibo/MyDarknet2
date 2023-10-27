<!DOCTYPE html>
<html>
<head>
  <title>Домашняя страница</title>
  <style>
    /* Стили для чата */
    .chat-container {
      width: 400px;
      margin: 20px auto;
      border: 1px solid #ccc;
      padding: 10px;
    }

    .message {
      margin-bottom: 10px;
    }
  </style>
</head>
<body>
  <?php
  // Получите имя пользователя из базы данных или файла
  $username = "John Doe";
  ?>

  <h1>Welcome home, <?php echo $username; ?>!</h1>

  <div class="chat-container">
    <h2>Чат</h2>
    <div id="messageContainer"></div>

    <form id="chatForm">
      <input type="text" id="chatMessage" placeholder="Введите сообщение">
      <button type="submit">Отправить</button>
    </form>
  </div>

  <script>
    document.getElementById("chatForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Предотвращаем отправку формы

      var messageInput = document.getElementById("chatMessage");
      var message = messageInput.value;

      // Ваш код для отправки сообщения на сервер

      // Очистка поля ввода сообщения после отправки
      messageInput.value = "";
    });
  </script>
</body>
</html>