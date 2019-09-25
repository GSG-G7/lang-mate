const dbConnection = require('../../config/dbConnection');

exports.getUserChannels = () => {
  const sql = {
    text: '',
    values: [],
  };
  return dbConnection.query(sql);
};
