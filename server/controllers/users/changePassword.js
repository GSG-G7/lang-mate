const { hash, compare } = require('bcrypt');
const { users: { changePassword, getUserById } } = require('../../database/queries');

exports.changePassword = (req, res, next) => {
  const { userId, oldPassword, newPassword } = req.body;
  getUserById(userId).then(({ rows }) => {
    if (rows.length === 0) throw new Error();
    return Promise.all([
      compare(oldPassword, (rows[0].password)),
      compare(newPassword, rows[0].password),
    ]);
  }).then(([oldPasswordMatches, newPasswordMatches]) => {
    if (!oldPasswordMatches) throw new Error('You entered a wrong password');
    else if (newPasswordMatches) throw new Error('Your new password and old password are the same');
    return hash(newPassword, 10);
  })
    .then((hashedPassword) => changePassword(userId, hashedPassword))
    .then(() => res.send('Password is changed'))
    .catch((err) => {
      if (err.message) next({ code: 400, msg: err.message });
      else next(err);
    });
};
