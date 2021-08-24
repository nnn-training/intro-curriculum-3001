'use strict';
/**
* ここはJSDOCというやつ！
* 与えられた自然数の階乗を返す
* 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
* @param {Number} n
* パラメーターのNumberは数値が欲しい
* @returns {Number}
* リターンのNumberは数値が欲しい
*
* 「n」にカーソルを持っていくと関数の説明をしてくれる
*
*/
function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--){
      result = result * i;
      console.log("iが"+ i + "のとき" + result);
  }
  return result;
}
const assert = require('assert');
factorial(10);