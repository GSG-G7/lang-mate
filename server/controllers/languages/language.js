const { languages: { getLanguages } } = require('../../database/queries');

exports.getAllLanguages = (req, res, next) => {
  getLanguages()
    .then(({ rows }) => res.json({ isSuccess: true, data: rows }))
    .catch((err) => next(err));
};
