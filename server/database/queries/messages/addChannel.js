const dbConnection = require('../../config/dbConnection');

exports.addChannel = (channelName = null) => {
  const sql = {
    text: 'INSERT INTO channels (name) VALUES ($1) RETURNING id',
    values: [channelName],
  };
  return dbConnection.query(sql);
};

const subscriberQueryMaker = (subscribers) => {
  const query = 'INSERT INTO user_channel (channel_id, user_id) VALUES ($1,$2)';
  const rest = subscribers.slice(1).map((e, i) => `, ($1,$${i + 3})`).join('');
  return query + rest;
};

exports.addSubscriber = (channelId, subscribers) => {
  const sql = {
    text: subscriberQueryMaker(subscribers),
    values: [channelId, ...subscribers],
  };
  return dbConnection.query(sql);
};
