const dbConnection = require('../../config/dbConnection');

exports.getUsersByInterest = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};
