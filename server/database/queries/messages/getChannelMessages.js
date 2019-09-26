const dbConnection = require('../../config/dbConnection');

exports.getChannelMessages = (channelId, numberOfMessages = null) => {
  const sql = numberOfMessages ? {
    text: 'SELECT * FROM (SELECT * FROM messages WHERE channel_id = $1 ORDER BY sent_at DESC) AS msgs LIMIT $2',
    values: [channelId, numberOfMessages],
  }
    : {
      text: 'SELECT * FROM messages WHERE channel_id = $1 ORDER BY sent_at DESC',
      values: [channelId],
    };
  return dbConnection.query(sql);
};
