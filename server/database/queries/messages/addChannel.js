const dbConnection = require('../../config/dbConnection');

exports.addChannel = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};
