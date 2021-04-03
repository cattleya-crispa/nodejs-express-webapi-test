//expressモジュール読み込み
const express = require('express');

//expressアプリ作成
const app = express();

//ルート(http://localhost/)にアクセスしたときにsend内の文字列を返す
//getメソッド　要は、ブラウザでURL入力して開くとgetメソッドでのアクセスとなる
//引数のreqは相手から送られてきた情報(リクエスト),resはサーバーから送る情報(レスポンス)
//今回はresオブジェクトのsendメソッドで文字列を送っただけ
app.get('/',(req, res) => res.send('Hello'));

//ポート3000でサーバーを立てる(ブラウザでhttp://localhost:3000/にアクセス！)
app.listen(3000, () => console.log('Listening on port 3000'));
