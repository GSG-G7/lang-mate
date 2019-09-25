const { users: { deactivateUser } } = require('../../database/queries');

exports.deactivateUser = (req, res, next) => {
  // Get the user id and username
  // const { userId, username } = req.user;
  // Calling the query
  deactivateUser(1)
    .then(({ rows: [{ isactive }] }) => {
      const response = { id: 1, /* username, */ isactive, message: 'account deactivated' };
      // Sending a response
      res.status(200).json(response);
    }).catch((err) => {
      // Handling the error
      next(err);
    });
};
