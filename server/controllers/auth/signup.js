const { hash } = require('bcrypt');
const { jwtSign } = require('../../helpers');
const { signupSchema } = require('./validation/signup-validation');
const { users: { getUserByEmailOrUsername, addUser } } = require('../../database/queries');


exports.signup = (req, res, next) => {
  const key = process.env.KEY;
  const {
    username, email, password, nativeLangId, learningLangId, interestsId,
  } = req.body;

  signupSchema.validate({
    username, email, password, nativeLangId, learningLangId, interestsId,
  })
    .then(() => getUserByEmailOrUsername(email, username))
    .then(({ rows }) => {
      if (rows.length !== 0) throw Error('username or email exists');
    })
    .then(() => hash(password, 10))
    .then((hashed) => addUser({
      username, email, password: hashed, nativeLangId, learningLangId, interestsId,
    }))
    .then(({ rows }) => jwtSign({ userInfo: { username: rows[0].username, Id: rows[0].id } }, key))
    .then((sigendPayload) => {
      res.cookie('token', sigendPayload, { maxAge: 86400000 });
      res.send({ signup: true });
    })
    .catch((err) => {
      if ((err.message === 'email exists') || (err.message === 'username exists')) {
        next({ msg: err.message, code: 400 });
      } else next(err);
    });
};
