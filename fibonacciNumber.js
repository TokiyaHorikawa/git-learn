/**
 * Q1: フィボナッチのn番目を計算する関数を作成しなさい
 * Q2: n = 77 の計算時間を1秒未満にしてください
 **/

// TODO: n = 44で7秒を超えてしまう
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
console.time("loop");
console.log(fib(44));
console.timeEnd("loop");
