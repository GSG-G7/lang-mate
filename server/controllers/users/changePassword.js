const { hash, compare } = require('bcrypt');
const { users: { changePassword, getUserById } } = require('../../database/queries');

exports.changePassword = (req, res, next) => {
  const { userId, oldPassword, newPassword } = req.body;
  let userInfo;
  getUserById(userId)
    .then(({ rows }) => {
      userInfo = rows;
      return compare(oldPassword, (userInfo[0].password));
    })
    .then((checkOldPassword) => {
      if (checkOldPassword) {
        return compare(newPassword, (userInfo[0].password));
      }
      throw new Error('You entered a wrong password');
    })
    .then((checkNewPassword) => {
      if (!checkNewPassword) {
        hash(newPassword, 10);
        return changePassword(userId, newPassword);
      }
      throw new Error('Your new password and old password are the same');
    })
    .then(() => res.send('Password is changed'))
    .catch((err) => {
      if (err.message) next({ code: 400, msg: err.message });
      else next(err);
    });
};
