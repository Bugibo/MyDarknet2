<!DOCTYPE html>
<html>
<head>
    <title>MyDarknet2 Registration and login</title>
    <meta name="google-site-verification" content="dq0_n6xUf9XgnjNIsmugNH2kRjcCkLbeddKEld0bCOw" />
</head>
<body>
    <h1>Регистрация</h1>
    <form id="registrationForm">
        <label for="username">Имя пользователя:</label>
        <input type="text" id="username" required><br>
        <label for="password">Пароль:</label>
        <input type="password" id="password" required><br>
        <button type="button" onclick="register()">Зарегистрироваться</button>
    </form>

    <h1>Вход</h1>
    <form id="loginForm">
        <label for="loginUsername">Имя пользователя:</label>
        <input type="text" id="loginUsername" required><br>
        <label for="loginPassword">Пароль:</label>
        <input type="password" id="loginPassword" required><br>
        <button type="button" onclick="login()">Войти</button>
    </form>

    <div id="message"></div>

    <script src="script.js"></script>
</body>
</html>
