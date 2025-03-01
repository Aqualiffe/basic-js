const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let n = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        n++;
    } else {
        res += (n > 1) ? n + str[i] : str[i];
        n = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
