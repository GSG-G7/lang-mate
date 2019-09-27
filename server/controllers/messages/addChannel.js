const { messages: { addChannel, addSubscriber } } = require('../../database/queries');
const { validateChannel } = require('../../helpers/validateAddChannel');

exports.addChannel = (req, res, next) => {
  const { channelName, subscribers } = req.body;
  validateChannel.validate({ channelName })
    .then(() => addChannel(channelName))
    .then(({ rows: [{ id: channelId }] }) => addSubscriber(channelId, subscribers))
    .then(() => res.json({ isSuccess: true, message: 'Channel is created' }))
    // here we will continue on the socket stuff
    .catch(next);
};
