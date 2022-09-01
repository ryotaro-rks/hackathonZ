'use strict';

// 最新の時刻をhiddenにset
function setLatestPublishedTime() {
    $("#latestPublishedTime").val(new Date());
}

function calcDiffBetweenCurrentAndLatestPublished() {
    // 最新の投稿の時刻取得
    const latestPublishedTime = new Date($("#latestPublishedTime").val());
    // 現在の時刻と比較
    const now = new Date();
    const diff = Math.floor((now.getTime() - latestPublishedTime.getTime())/1000);
    return diff;
}

// 最新の投稿との秒数差が1分以内かを判定
function judgePublishIntervalWithinOneMinite() {
    // 最初の投稿
    if ($("#latestPublishedTime").val() === "") {
        setLatestPublishedTime()
        return false;
    }
    
    // 1分以内ならtrue
    return calcDiffBetweenCurrentAndLatestPublished() < 60;
}

// 投稿メッセージをサーバに送信する
function publish() {
    if (judgePublishIntervalWithinOneMinite()) {
        return false;
    }

    // ユーザ名を取得
    const userName = $(`#userName`).val();
    // 入力されたメッセージを取得
    const message = $(`#message`).val();

    // 空文字では投稿できないように制御
    if(message.trim() === '') {
        return false;
    }

    // 投稿内容を送信
    socket.emit(`publishEvent`, userName, message);

    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('publishEvent', function (userName, message) {
    // 投稿の最新時刻を埋め込む
    setLatestPublishedTime()
    $('#thread').prepend('<p>' + userName + ': ' + message + '</p>');
});
