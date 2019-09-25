const dbConnection = require('../../config/dbConnection');

exports.changePassword = (passwordInfo) => {
  const { userId, newPassword } = passwordInfo;
  const sql = {
<<<<<<< HEAD
    text: 'UPDATE users set password = ($2) WHERE id = ($1)',
    values: [userId, newPassword],
=======
    text: '',
    values: [],
>>>>>>> 85a38d0ec46e2539bdb0c9239025ab5d7b9a0e22
  };
  return dbConnection.query(sql);
};
