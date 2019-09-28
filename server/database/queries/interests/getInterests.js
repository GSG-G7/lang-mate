const dbConnection = require('../../config/dbConnection');

exports.getInterests = () => {
  const sql = 'SELECT * FROM interests';
  return dbConnection.query(sql);
};
