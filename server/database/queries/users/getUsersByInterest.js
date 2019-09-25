const dbConnection = require('../../config/dbConnection');

exports.getUsersByInterest = () => {
  const sql = {
    text: '',
    values: [],
  };
  return dbConnection.query(sql);
};
