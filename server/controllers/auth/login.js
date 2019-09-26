const { compare, hash } = require('bcrypt');
const { jwtSign } = require('../../helpers');
const { getUserByUsername } = require('../../database/queries/users');

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) next({ code: 400, msg: 'bad request !!!!' });

  const key = process.env.KEY;
  let id;
  getUserByUsername(username)
    .then(({ rows }) => {
      id = rows[0].id;
      return hash(password, 10)
        .then((hashed) => compare(hashed, rows[0].password));
    })
    .then((isValid) => {
      if (isValid) {
        return jwtSign({ userInfo: { username, id } }, key);
      }
      throw new Error(' username or password doesn\'t match our records ');
    })
    .then((token) => {
      res.cookie('token', token, { maxAge: 8400000, httpInly: true });
      res.send({ Login: 'success' });
    })
    .catch((err) => {
      if (err.message === ' username or password doesn\'t match our records ') {
        next({ code: 400, msg: err.message });
      } else {
        next(err);
      }
    });
};
