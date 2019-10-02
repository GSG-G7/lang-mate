const { messages: { getChaMessagesByChaId }, users: { getUserChannels } } = require('../../database/queries');
const { formatMessages } = require('../../helpers');

exports.getUserChannels = (req, res, next) => {
  const { userInfo: { id } } = req.user;
  let channelIds = {};
  getUserChannels(id)
    .then(({ rows }) => {
      channelIds = rows.map(({ channel_id: channelId }) => channelId);
      return getChaMessagesByChaId(channelIds);
    })
    .then(({ rows: messages }) => formatMessages(messages, channelIds))
    .then((result) => res.json(result))
    .catch(next);
};
