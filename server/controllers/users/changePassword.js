const { hash, compare } = require('bcrypt');
const { users: { changePassword, getUserById } } = require('../../database/queries');

exports.changePassword = (req, res, next) => {
  const { userId, oldPassword, newPassword } = req.body;
  getUserById(userId).then(({ rows }) => {
    if (rows.length === 0) next({ code: 400, msg: 'no user with that id' });
    return Promise.all([
      compare(oldPassword, rows[0].password),
      compare(newPassword, rows[0].password),
    ]);
  }).then(([oldPasswordMatches, newPasswordMatches]) => {
    if (!oldPasswordMatches) return next({ code: 400, msg: 'You entered a wrong password' });
    if (newPasswordMatches) return next({ code: 400, msg: 'Your new password and old password are the same' });
    return hash(newPassword, 10);
  })
    .then((hashedPassword) => changePassword(userId, hashedPassword))
    .then(() => res.status(200).json({ message: 'Password is changed' }))
    .catch(next);
};
