const dbConnection = require('../../config/dbConnection');

exports.getUsersByLang = () => {
  const sql = {
    text: '',
    values: [],
  };
  return dbConnection.query(sql);
};
