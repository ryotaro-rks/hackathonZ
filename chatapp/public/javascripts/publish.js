'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $(`#userName`).val();
    // 入力されたメッセージを取得
    const message = $(`#message`).val();
    // 投稿内容を送信
    socket.emit(`publishEvent`, userName, message);

    return false;
}

const formatDate = ()=>{
    const date = new Date();
    let formatted_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    return formatted_date;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('publishEvent', function (userName, message) {
    $('#thread').prepend('<p>' + userName + ': ' + message + '</p>');
    $('#thread').prepend('<p>' + formatDate() + '</p>');
});
