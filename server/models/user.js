const utils = require('../lib/hashUtils');
const Model = require('./model');

// Write you user database model methods here

// var test = new Model('users');
class Users extends Model {
  constructor() {
    super('users'); // ????
  }
  
  create(body) {
    // let shasum = crypto.createHash('sha1');
    // shasum.update(link.url);
    // link.code = shasum.digest('hex').slice(0, 5);
    return super.create.call(this, body);
  }
}

module.exports = new Users();