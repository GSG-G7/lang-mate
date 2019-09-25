const dbConnection = require('../../config/dbConnection');

exports.deactivateUser = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};
