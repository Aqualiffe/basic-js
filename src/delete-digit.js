const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // remove line with error and write your code here
  let arrNum = String(n).split("");
  let arr = [];
  for (let i = 0; i < arrNum.length; i++) {
    let tmpArr = [...arrNum];
    tmpArr.splice(i, 1);
    arr.push(tmpArr.join(''));
  }
  arr.sort((a, b) => b - a);
  return +arr[0];
}

module.exports = {
  deleteDigit
};
