const dbConnection = require('../../config/dbConnection');

exports.addUser = () => {
  const sql = {
    text: '',
    values: [],
  };
  return dbConnection.query(sql);
};
