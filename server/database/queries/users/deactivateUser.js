const dbConnection = require('../../config/dbConnection');

exports.deactivateUser = () => {
  const sql = {
    text: '',
    values: [],
  };
  return dbConnection.query(sql);
};
