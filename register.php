<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Получите данные формы
  $username = $_POST["username"];
  $password = $_POST["password"];

  // Ваш код для сохранения данных пользователя в базе данных или файле

  // Перенаправьте пользователя на страницу home
  header("Location: home.php");
  exit();
}
?>