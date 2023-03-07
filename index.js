// 初期化
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const dir = '/fib';

// JSON形式の使用許可
app.use(express.json());

// リクエスト受付開始
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}${dir}`)
});

// GETメソッド
app.get(dir, func);
function func(req, res) {
  const num = Number(req.query.n);

  if(Number.isInteger(num)) {
    if(num >= 0){
      const result = fib(num);
      res.json({
        "result": result
      });
    } else {
      res.json({
        "status": 400,
        "error": "The query must be more than 0."
      });
    }
  } else {
    res.json({
      "status": 400,
      "error": "The type of query is not integer."
    });
  }
}

// フィボナッチ数返却関数
function fib(n) {
  if(n <= 1) {
    return n;
  } else {
    let memory = [0, 1];
    let result = 0;
    for(let i=2; i<=n; i++) {
      result = memory[0] + memory[1];
      memory[0] = memory[1];
      memory[1] = result;
    }
    return result;
  }
}