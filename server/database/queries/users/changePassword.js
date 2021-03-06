const dbConnection = require('../../config/dbConnection');

exports.changePassword = (userId, newPassword) => {
  const sql = {
    text: 'UPDATE users SET password = $2 WHERE id = $1',
    values: [userId, newPassword],
  };
  return dbConnection.query(sql);
};
