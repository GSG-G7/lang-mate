const dbConnection = require('../../config/dbConnection');

exports.addChannel = () => {
  const sql = {
    text: '',
    values: [],
  };
  return dbConnection.query(sql);
};
