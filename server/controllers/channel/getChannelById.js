const { channels: { getChannelsByUserId } } = require('../../database/queries');

exports.getChannelsByUserId = (req, res, next) => getChannelsByUserId(2)
  .then((result) => result.rows)
  .then((res) => res.map((e) => ({ id: e.channel_id, messages: [] })))
  .then(console.log)
  .then(process.exit)
  .catch(console.log);
