const dbConnection = require('../../config/dbConnection');

exports.addUser = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};
