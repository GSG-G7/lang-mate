const { messages: { getChannelMessages } } = require('../../database/queries');

exports.getChannelMessages = (req, res, next) => {
  const { id } = req.params;
  getChannelMessages(id)
    .then(({ rows }) => res.json({
      data:
      {
        channelId: id,
        messages: rows,
      },
    }))
    .catch(next);
};
