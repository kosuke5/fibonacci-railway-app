// フィボナッチ数取得関数
function fib(num) {
  if(num <= 1) {
    return num;
  } else {
    let memory = [0, 1];
    let result = 0;
    for(let i=2; i<=num; i++) {
      result = memory[0] + memory[1];
      memory[0] = memory[1];
      memory[1] = result;
    }
    return result;
  }
}

module.exports = fib;