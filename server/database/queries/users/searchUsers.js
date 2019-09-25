const dbConnection = require('../../config/dbConnection');

exports.searchUsers = () => {
  const sql = {
    text: '',
    values: [],
  };
  return dbConnection.query(sql);
};
