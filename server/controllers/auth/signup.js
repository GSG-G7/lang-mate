const { hash } = require('bcrypt');
const { signupSchema } = require('./validation/signup-validation');
const { users: { getUserByUsername, getUserByEmail, addUser } } = require('../../database/queries');


exports.signup = (req, res, next) => {
  // res.send(' Hello from signup file');
  console.log(req.body);
  const {
    username, email, password, nativeLangId, learningLangId,
  } = req.body;

  signupSchema.validate({
    username, email, password, nativeLangId, learningLangId,
  })
    .then(() => getUserByUsername(username))
    .then((result) => {
      if (result.rows.length !== 0) throw Error({ err: 'username exists', code: 400 });
    })
    .then(() => getUserByEmail(username))
    .then((result) => {
      if (result.rows.length !== 0) throw Error({ err: 'email exists', code: 400 });
    })
    .then(() => hash(password, 10))
    .then((hashed) => addUser({
      username, email, password: hashed, nativeLangId, learningLangId,
    }))
    .then(() => getUserByUsername(username))
    .then(console.log)
    .then((result) => res.send(result.rows[0]))
    .catch(next);
};
