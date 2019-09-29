const dbConnection = require('../../config/dbConnection');

exports.getChannels = () => {
  const sql = 'SELECT * FROM channels';
  return dbConnection.query(sql);
};
