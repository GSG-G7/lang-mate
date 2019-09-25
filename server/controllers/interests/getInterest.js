const { interests: { getInterests } } = require('../../database/queries');

exports.getAllInterests = (req, res, next) => {
  getInterests()
    .then(({ rows }) => {
      res.status(200).json(rows);
    }).catch((err) => {
      next(err);
    });
};
