const { hash, compare } = require('bcrypt');
const { users: { changePassword, getUserById } } = require('../../database/queries');

exports.changePassword = (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  const { userInfo: { id } } = req.user;
  getUserById(id).then(({ rows }) => {
    if (rows.length === 0) throw next({ code: 400, msg: 'no user with that id' });

    return Promise.all([
      compare(oldPassword, rows[0].password),
      compare(newPassword, rows[0].password),
    ]);
  }).then(([oldPasswordMatches, newPasswordMatches]) => {
    if (!oldPasswordMatches) throw next({ code: 400, msg: 'You entered a wrong password' });
    if (newPasswordMatches) throw next({ code: 400, msg: 'Your new password and old password are the same' });
    return hash(newPassword, 10);
  })
    .then((hashedPassword) => changePassword(id, hashedPassword))
    .then(() => res.status(200).json({ message: 'Password is changed' }))
    .catch(next);
};
