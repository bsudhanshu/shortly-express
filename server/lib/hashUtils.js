const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/

exports.createHashedPassword = function(password) {
  return crypto.createHash('sha1').update(password).digest('hex');
}