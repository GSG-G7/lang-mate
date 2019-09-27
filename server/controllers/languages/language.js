const { languages: { getLanguages } } = require('../../database/queries');

exports.getAllLanguages = (req, res, next) => {
  getLanguages()
    .then(({ rows }) => res.send({ data: rows }))
    .catch((err) => next(err));
};
