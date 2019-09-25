const dbConnection = require('../../config/dbConnection');

exports.getChannelMessages = (channelId, numberOfMessages = null) => {
  const sql = numberOfMessages ? {
    text: 'select * from messages where channel_id = $1 limit $2',
    values: [channelId, numberOfMessages],
  }
    : {
      text: 'select * from messages where channel_id = $1 ',
      values: [channelId],
    };
  return dbConnection.query(sql);
};
