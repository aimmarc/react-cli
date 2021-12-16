const user = require('./user');
const list = require('./list')

module.exports = {
    ...user,
    ...list
}