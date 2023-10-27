const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const users = {};

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('User connected');

    // Обработка входа нового пользователя
    socket.on('login', (username) => {
        users[socket.id] = username;
        io.emit('user joined', username);
    });

    // Обработка отправки сообщения
    socket.on('chat message', (message) => {
        io.emit('chat message', { username: users[socket.id], message });
    });

    // Обработка отключения пользователя
    socket.on('disconnect', () => {
        const username = users[socket.id];
        delete users[socket.id];
        io.emit('user left', username);
    });
});

http.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
