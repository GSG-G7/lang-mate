const dbConnection = require('../../config/dbConnection');

exports.getLanguages = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};
