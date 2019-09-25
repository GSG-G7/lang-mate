const dbConnection = require('../../config/dbConnection');

exports.getUserChannels = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};
