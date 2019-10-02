
const dbConnection = require('../../config/dbConnection');

exports.reactivateUser = (userId) => {
  const sql = {
    text: 'UPDATE users SET isactive = true WHERE users.id = $1',
    values: [userId],
  };
  return dbConnection.query(sql);
};
