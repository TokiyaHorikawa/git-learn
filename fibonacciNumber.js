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

function quickFib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// メモ化
function memoFib(n, memo = []) {
  if (n < 3) return 1;
  if (memo[n]) return memo[n];
  memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  return memo[n];
}
const input = 100;
console.time("quickFib");
console.log(quickFib(input));
console.timeEnd("quickFib");

console.time("memoFib");
console.log(memoFib(input));
console.timeEnd("memoFib");
