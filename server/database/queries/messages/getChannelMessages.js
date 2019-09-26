const dbConnection = require('../../config/dbConnection');

exports.getChannelMessages = (channelId, numberOfMessages = null) => {
  const sql = numberOfMessages ? {
    text: 'select * from (select * from messages where channel_id = $1 order by sent_at desc) as msgs limit $2',
    values: [channelId, numberOfMessages],
  }
    : {
      text: 'select * from messages where channel_id = $1 order by sent_at desc',
      values: [channelId],
    };
  return dbConnection.query(sql);
};
