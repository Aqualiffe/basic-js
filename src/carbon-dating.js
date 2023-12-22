const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //Math.log(MODERN_ACTIVITY / str) / (0.693 / HALF_LIFE_PERIOD)
  let num = parseFloat(sampleActivity);
  if (typeof sampleActivity !== 'string' || num <= 0|| num > MODERN_ACTIVITY || isNaN(num)) {
    return false;
  }
  let age = Math.ceil(Math.log(MODERN_ACTIVITY / num) / (0.693 / HALF_LIFE_PERIOD));
  return age > 0 ? age : false;

}

module.exports = {
  dateSample
};
