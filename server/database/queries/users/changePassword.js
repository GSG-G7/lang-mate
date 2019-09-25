const dbConnection = require('../../config/dbConnection');

exports.changePassword = (passwordInfo) => {
  const { userId, newPassword } = passwordInfo;
  const sql = {
    text: 'UPDATE users set password = ($2) WHERE id = ($1)',
    values: [userId, newPassword],
  };
  return dbConnection.query(sql);
};
