const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let n = 0;
  for (i=0; i < email.length - 1; i++){
    if(email[i] ==='@') n= i + 1;
  }
  return email.slice(n);
}

module.exports = {
  getEmailDomain
};
