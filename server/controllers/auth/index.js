
const { logout } = require('./logout');
const { login } = require('./login');
const { signup } = require('./signup');
const { auth } = require('./authentication');
const { isAuth } = require('./isAuth');


module.exports = {
  login, logout, signup, auth, isAuth,
};
