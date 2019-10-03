const { hash } = require('bcrypt');
const { jwtSign } = require('../../helpers');
const { signupSchema } = require('./validation/signup-validation');
const { users: { getUserByEmailOrUsername, addUser, addUserInterests } } = require('../../database/queries');


exports.signup = (req, res, next) => {
  const key = process.env.KEY;
  const {
    username, email, password, nativeLangId, learningLangId, interestsId,
  } = req.body;
  const userIfos = {
    username, email, password, nativeLangId, learningLangId, interestsId,
  };
  let userInfo;
  signupSchema.validate(userIfos)
    .then(() => getUserByEmailOrUsername(email, username))
    .then(({ rows }) => {
      if (rows.length !== 0) {
        if (rows[0].username === username) throw ({ code: 400, msg: 'username exists' });
        if (rows[0].email === email) throw ({ code: 400, msg: 'email exists' });
      }
    })
    .then(() => hash(password, 10))
    .then((hashed) => addUser({ ...userIfos, password: hashed }))
    .then(({ rows: [addedUser] }) => {
      userInfo = addedUser;
      return Promise.all([
        jwtSign({ userInfo: { username: addedUser.username, id: addedUser.id } }, key),
        addUserInterests(interestsId, addedUser.id),
      ]);
    })
    .then(([signedPayload]) => {
      res.cookie('token', signedPayload, { maxAge: 86400000 });
      res.send({ isSuccess: true, data: userInfo });
    })
    .catch(next);
};
