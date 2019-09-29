const { compare } = require('bcrypt');
const { users: { getUserById, deactivateUser } } = require('../../database/queries');

exports.deactivateUser = (req, res, next) => {
  // Get the user id and username
  const { userInfo: { id, username } } = req.user;

  // Get password from body
  const { password } = req.body;

  getUserById(id)
    .then(({ rows: [{ password: dbPassword }] }) => compare(password, dbPassword))
    .then(((value) => (value ? deactivateUser(id) : next({ code: 400, msg: 'bad request' }))))
    .then(({ rows: [{ isactive }] }) => {
      const response = {
        id: 1, username, isactive, message: 'account deactivated',
      };
        // Sending a response
      res.status(200).json(response);
    })
    .catch(next);
};
