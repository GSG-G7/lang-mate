
const { logout } = require('./logout');
const { login } = require('./login');
const { signup } = require('./signup');
const { auth } = require('./authentication');


module.exports = {
  login, logout, signup, auth,
};
