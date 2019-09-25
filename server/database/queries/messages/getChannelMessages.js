const dbConnection = require('../../config/dbConnection');

exports.getChannelMessages = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};
