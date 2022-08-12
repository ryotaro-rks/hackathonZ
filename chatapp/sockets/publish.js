'use strict';

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('publishEvent', function (userName, message) {
        socket.emit(`publishOwnMessageEvent`, userName, message);
        socket.broadcast.emit(`publishOtherMessageEvent`, userName, message);
    });
};
