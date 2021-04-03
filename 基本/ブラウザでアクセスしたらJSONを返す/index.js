//expressモジュール読み込み
const express = require('express');

//expressアプリ作成
const app = express();

// http://localhost:3000/api/v1/list にアクセスしてきたときに
// TODOリストを返す
app.get('/api/v1/list',(req, res) => {
    //クライアントに送るJSONデータ
    const todoList = [
        { title: '何ができるかな' , done: true },
        { title: 'WEB APIが作れう' , done: true},
        { title: '今日わ' , done: true}
    ];

    //jsonを送信する
    res.json(todoList)
});

//ポート3000でサーバーを立てる(ブラウザでhttp://localhost:3000/にアクセス！)
app.listen(3000, () => console.log('Listening on port 3000'));
