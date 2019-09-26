const { messages: { getChannels } } = require('../../database/queries');

exports.getChannels = (req, res, next) => {
  getChannels()
    .then(({ rows }) => res.send({ data: rows }))
    .catch((err) => next(err));
};
