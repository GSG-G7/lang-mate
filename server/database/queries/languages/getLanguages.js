const dbConnection = require('../../config/dbConnection');

exports.getLanguages = () => {
  const sql = 'SELECT * FROM languages';
  return dbConnection.query(sql);
};
