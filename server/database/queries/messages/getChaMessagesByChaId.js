const dbConnection = require('../../config/dbConnection');

const queryMaker = (channelIds) => {
  const rest = new Array(channelIds.length - 1).fill(1).map((e, i) => ` OR channel_id = $${i + 2}`).join('');
  return `SELECT * FROM messages WHERE channel_id = $1${rest} ORDER BY channel_id`;
};
exports.getChaMessagesByChaId = (channelIds) => {
  const sql = {
    text: queryMaker(channelIds),
    values: [...channelIds],
  };
  return dbConnection.query(sql);
};
