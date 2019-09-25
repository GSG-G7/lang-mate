const { hash } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { signupSchema } = require('./validation/signup-validation');
const { users: { getUserByUsername, getUserByEmail, addUser } } = require('../../database/queries');


exports.signup = (req, res, next) => {
  const key = process.env.KEY;
  const {
    username, email, password, nativeLangId, learningLangId,
  } = req.body;

  signupSchema.validate({
    username, email, password, nativeLangId, learningLangId,
  })
    .then(() => getUserByUsername(username))
    .then((result) => {
      if (result.rows.length !== 0) throw Error('username exists');
    })
    .then(() => getUserByEmail(username))
    .then(({ rows }) => {
      if (rows.length !== 0) throw Error('email exists');
    })
    .then(() => hash(password, 10))
    .then((hashed) => addUser({
      username, email, password: hashed, nativeLangId, learningLangId,
    }))
    .then(() => getUserByUsername(username))
    .then(({ rows }) => {
      const token = sign({ userInfo: { username: rows[0].username, Id: rows[0].id } }, key);
      res.cookie('token', token, { maxAge: 86400000 });
      res.send('Signup success !!');
    })
    .catch((err) => {
      if ((err.message === 'email exists') || (err.message === 'username exists')) {
        next({ msg: err.message, code: 400 });
      } else next(err);
    });
};
