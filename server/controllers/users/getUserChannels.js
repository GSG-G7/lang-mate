const {
  messages: { getChaMessagesByChaId },
  languages: { getLanguages },
  users: {
    getUserChannels,
    getUsersByIds,
  },
} = require('../../database/queries');
const { formatMessages, formatUsers } = require('../../helpers');

exports.getUserChannels = (req, res, next) => {
  const { userInfo: { id } } = req.user;
  let channelIds = {};
  getUserChannels(id)
    .then(({ rows }) => {
      channelIds = rows.map(({ channel_id: channelId }) => channelId);
      return getChaMessagesByChaId(channelIds);
    })
    .then(({ rows: messages }) => {
      const userIds = new Set();
      messages.forEach((msg) => {
        userIds.add(msg.user_id);
      });
      return Promise.all([
        formatMessages(messages, channelIds),
        getUsersByIds(Array.from(userIds)),
        getLanguages(),
      ]);
    })
    .then(([channels,
      { rows: users },
      { rows: languages }]) => res.json({ ...channels, users: formatUsers(users, languages) }))
    .catch(next);
};
