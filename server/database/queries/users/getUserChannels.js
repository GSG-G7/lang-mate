const dbConnection = require('../../config/dbConnection');

exports.getUserChannels = (userId) => {
  const sql = {
    text: 'SELECT DISTINCT channel_id FROM user_channel WHERE user_id = $1',
    values: [userId],
  };
  return dbConnection.query(sql);
};
