const app = require('./app');

const port = process.env.PORT || 3000;

// リクエスト受付開始
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});