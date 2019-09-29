const { messages: { getChannels } } = require('../../database/queries');

exports.getChannels = (req, res, next) => {
  getChannels()
    .then(({ rows }) => res.json({ isSuccess: true, data: rows }))
    .catch((err) => next(err));
};
