const dbConnection = require('../../config/dbConnection');

exports.searchUsers = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};
