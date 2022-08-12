'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('publishEvent', function (userName, message) {
        io.sockets.emit(`publishEvent`, userName, message);
    });
};
