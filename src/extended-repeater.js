const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'PLUS00STRINGPLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const timeOut = (options.repeatTimes) ? options.repeatTimes : 1;
  const sepOut = (options.separator) ? options.separator : '+';
  let addOut = (options.addition !== undefined) ? String(options.addition) : '';
  const timeIn = options.additionRepeatTimes;
  const addIn = (options.additionSeparator) ? options.additionSeparator : '|';

  if(str === null) {
      str = 'null';
  }
  if(options.addition === null) {
      addOut = 'null';
  }

  let tmpRes = Array(timeIn).fill(addOut).join(addIn);
  let res = Array(timeOut).fill(new String(str) + new String(tmpRes)).join(sepOut);
  return res;
}

module.exports = {
  repeater
};
