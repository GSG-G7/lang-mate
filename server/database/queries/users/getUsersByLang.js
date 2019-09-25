const dbConnection = require('../../config/dbConnection');

exports.getUsersByLang = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};
