const dbConnection = require('../../config/dbConnection');

exports.getChannelMessages = () => {
  const sql = {
    text: '',
    values: [],
  };
  return dbConnection.query(sql);
};
