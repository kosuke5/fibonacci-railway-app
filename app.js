// 初期化
const express = require('express');
const getFibonacci = require('./modules/fibonacci.js');
const app = express();
const dir = '/fib';

// JSON形式の使用許可
app.use(express.json());

// GETメソッド
app.get(dir, (req, res) => {
  const num = Number(req.query.n);
  if(!Number.isNaN(num)) {
    if(Number.isInteger(num)) {
      if(num >= 0) {
        // フィボナッチ数取得
        const result = getFibonacci(num);
        res.status(200).json({
          "result": result
        });
      } else {
        res.status(400).json({
          "status": 400,
          "error": "Invalid query. The query must be more than zero."
        });
      }
    } else {
      res.status(400).json({
        "status": 400,
        "error": "Invalid query. The query must be interger."
      });
    }
  } else {
    res.status(400).json({
      "status": 400,
      "error": "Invalid query. The query must be type of number."
    });
  }
});

// appのエクスポート
module.exports = app;