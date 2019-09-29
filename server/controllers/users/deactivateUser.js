const { compare } = require('bcrypt');
const { users: { getUserById, deactivateUser } } = require('../../database/queries');

exports.deactivateUser = (req, res, next) => {
  // Get the user id and username
  const { userInfo: { id } } = req.user;

  // Get password from body
  const { password } = req.body;

  getUserById(id)
    .then(({ rows: [{ password: dbPassword }] }) => compare(password, dbPassword))
    .then(((value) => (value ? deactivateUser(id) : next({ code: 400, msg: 'bad request' }))))
    .then(() => res.status(200).json({ message: 'account is deactivated' }))
    .catch(next);
};
