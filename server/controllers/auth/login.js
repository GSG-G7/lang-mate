const { compare } = require('bcrypt');
const { jwtSign } = require('../../helpers');
const { getUserByUsername, reactivateUser } = require('../../database/queries/users');

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) next({ code: 400, msg: 'bad request !!!!' });

  const key = process.env.KEY;
  let id;
  getUserByUsername(username)
    .then(({ rows: [{ id: dbId, password: dbPassword, isactive }] }) => {
      id = dbId;
      const reactivePromise = isactive ? Promise.resolve(true) : reactivateUser();
      return Promise.all([compare(password, dbPassword), reactivePromise]);
    })
    .then(([isValid]) => {
      if (isValid) {
        return jwtSign({ userInfo: { username, id } }, key);
      }
      throw new Error(' username or password doesn\'t match our records ');
    })
    .then((token) => {
      res.cookie('token', token, { maxAge: 8400000, httpOnly: true });
      res.send({ message: 'success' });
    })
    .catch((err) => {
      if (err.message === ' username or password doesn\'t match our records ') {
        next({ code: 400, msg: err.message });
      } else {
        next(err);
      }
    });
};
