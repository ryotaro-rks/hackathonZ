'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('enterEvent', function (userName) {
        socket.broadcast.emit(`enterEvent`, userName);
    });
};
