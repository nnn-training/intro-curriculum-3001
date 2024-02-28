'use strict';
/**
 * 与えられた自然数の階乗を返す
 * 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
 * @param {Number} n
 * @returns {Number}
 */
try {
  function factorial(n) {
    if (n < 1) {
      throw new Error("与えられた値の階乗を計算することができません。");
    }
    let result = 1;
    while (n > 1) {
      result = result * n;
      n--;
    }
    if (result > Number.MAX_SAFE_INTEGER) {
      throw new Error("計算結果の値が大きすぎるため表示できません。");
    }
    return result;
  }
  const assert = require('node:assert');
  assert.strictEqual(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1)}でした`);
  assert.strictEqual(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2)}でした`);
  assert.strictEqual(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3)}でした`);
  assert.strictEqual(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10)}でした`);
  console.log('すべてのテストを通過しました。');
} catch (error) {
  console.error('テストでエラーが発生しています。', error.message);
  console.error('エラースタック', error.stack);
}