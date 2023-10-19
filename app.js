'use strict';

/**
 * Array.reduceみたいなもの
 * @param {Function} func 関数
 * @param {Number} cnt 回数
 * @param {any} before 初期値
 * @returns {any}
 */
function reduce(func, cnt, before) {
  // console.log(`${cnt}回目、${before}を処理, ${cnt !== 0}`);
  if (typeof cnt !== "number") {
    throw new TypeError(`${cnt} is not number.`);
  }
  if (cnt !== 0) {
    return reduce(func, cnt - 1, func(before, cnt));
  } else {
    return before;
  }
}

/**
 * 与えられた自然数の階乗を返す
 * 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
 * @param {Number} n
 * @returns {Number}
 */
function factorial(n) {
  let result = 1;
  result = reduce((n, i) => n * i, n, 1);
  return result;
}

const assert = require('node:assert');
assert.strictEqual(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1) }でした`);
assert.strictEqual(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2) }でした`);
assert.strictEqual(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3) }でした`);
assert.strictEqual(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10) }でした`);
console.log('すべてのテストを通過しました');
