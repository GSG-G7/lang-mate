const dbConnection = require('../../config/dbConnection');

exports.changePassword = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};