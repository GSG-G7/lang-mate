const dbConnection = require('../../config/dbConnection');

exports.changePassword = () => {
  const sql = {
    text: '',
    values: [],
  };
  return dbConnection.query(sql);
};
