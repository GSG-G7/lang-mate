const { messages: { addChannel, addSubscriber } } = require('../../database/queries');

exports.addChannel = (req, res, next) => {
  const { channelName, subscribers } = req.body;

  addChannel(channelName)
    .then(({ rows: [{ id: channelId }] }) => addSubscriber(channelId, subscribers))
    .then(() => res.json({ isSuccess: true, message: 'Channel is created' }))
    // here we will continue on the socket stuff
    .catch(next);
};
