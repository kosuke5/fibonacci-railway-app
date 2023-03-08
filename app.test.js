const request = require('supertest');
const app = require('./app');
const fib = require('./modules/fibonacci');

// APIのレスポンス確認
describe("GET /fib", () => {
  test("クエリが文字列であった時のエラー確認", async () => {
    const response = await request(app).get("/fib").query({n: 'user1'});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid query. The query must be type of number.");
  });
  test("クエリが浮動小数であった時のエラー確認", async () => {
    const response = await request(app).get("/fib").query({n: '1.2'});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid query. The query must be interger.");
  });
  test("クエリが0以下であった時のエラー確認", async () => {
    const response = await request(app).get("/fib").query({n: '-1'});
    expect(response.status).toBe(400);
    expect(response.body.error).toBe("Invalid query. The query must be more than zero.");
  });
  test("クエリが正しかった時のステータス確認", async () => {
    const response = await request(app).get("/fib").query({n: '10'});
    expect(response.status).toBe(200);
  });
});

// フィボナッチ数取得関数の動作確認
describe("Fibonacci function", () => {
  test("引数に「0」が与えられたら「0」が返ることを確認", () => {
    const result = fib(0);
    expect(result).toBe(0);
  });
  test("引数に「1」が与えられたら「1」が返ることを確認", () => {
    const result = fib(1);
    expect(result).toBe(1);
  });
  test("引数に「2」が与えられたら「1」が返ることを確認", () => {
    const result = fib(2);
    expect(result).toBe(1);
  });
  test("引数に「3」が与えられたら「2」が返ることを確認", () => {
    const result = fib(3);
    expect(result).toBe(2);
  });
  test("引数に「4」が与えられたら「3」が返ることを確認", () => {
    const result = fib(4);
    expect(result).toBe(3);
  });
  test("引数に「5」が与えられたら「5」が返ることを確認", () => {
    const result = fib(5);
    expect(result).toBe(5);
  });
  test("引数に「6」が与えられたら「8」が返ることを確認", () => {
    const result = fib(6);
    expect(result).toBe(8);
  });
  test("引数に「7」が与えられたら「13」が返ることを確認", () => {
    const result = fib(7);
    expect(result).toBe(13);
  });
  test("引数に「8」が与えられたら「21」が返ることを確認", () => {
    const result = fib(8);
    expect(result).toBe(21);
  });
  test("引数に「9」が与えられたら「34」が返ることを確認", () => {
    const result = fib(9);
    expect(result).toBe(34);
  });
  test("引数に「10」が与えられたら「55」が返ることを確認", () => {
    const result = fib(10);
    expect(result).toBe(55);
  });
  test("引数に「11」が与えられたら「89」が返ることを確認", () => {
    const result = fib(11);
    expect(result).toBe(89);
  });
});