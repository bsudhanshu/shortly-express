const utils = require('../lib/hashUtils');
const Model = require('./model');
const crypto = require('crypto');

// Write you user database model methods here

// var test = new Model('users');
class Users extends Model {
  constructor() {
    super('users'); // ????
  }
  
  create(body) {
    let shasum = crypto.createHash('sha1');
    // shasum.update(body.username);
    body.password = shasum.digest('hex').slice(0, 5);

    return super.create.call(this, body);
  }
}

module.exports = new Users();