'use strict';

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('exitEvent', function (userName) {
        socket.broadcast.emit('exitEvent', userName);
    });
};
