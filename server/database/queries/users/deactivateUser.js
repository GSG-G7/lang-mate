const dbConnection = require('../../config/dbConnection');

exports.deactivateUser = (userId) => {
  const sql = {
    text: 'UPDATE users SET isactive = false WHERE users.id = $1 RETURNING isactive',
    values: [userId],
  };
  return dbConnection.query(sql);
};
