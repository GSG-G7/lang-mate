const { hash } = require('bcrypt');
const { jwtSign } = require('../../helpers');
const { signupSchema } = require('./validation/signup-validation');
const { users: { getUserByEmailOrUsername, addUser, addUserInterests } } = require('../../database/queries');


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
      if (rows.length !== 0) {
        if (rows[0].username === username) throw Error('username exists');
        if (rows[0].email === email) throw Error('email exists');
      }
    })
    .then(() => hash(password, 10))
    .then((hashed) => addUser({
      username, email, password: hashed, nativeLangId, learningLangId,
    }))
    .then(({ rows: [addedUser] }) => Promise.all([
      jwtSign({ userInfo: { username: addedUser.username, id: addedUser.id } }, key),
      addUserInterests(interestsId, addedUser.id),
    ]))
    .then(([sigendPayload]) => {
      res.cookie('token', sigendPayload, { maxAge: 86400000 });
      res.send({ isSuccess: true });
    })
    .catch((err) => {
      if ((err.message === 'email exists') || (err.message === 'username exists')) {
        next({ msg: err.message, code: 400 });
      } else next(err);
    });
};
