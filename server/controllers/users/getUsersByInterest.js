const {
  users: { getUsersByInterest },
  languages: { getLanguages },
} = require('../../database/queries');
const { formatLanguagesV2 } = require('../../helpers');

exports.getUsersByInterest = (req, res, next) => {
  const { id } = req.params;
  // Validate the id
  if (!Number(id)) return next({ code: 400, msg: 'bad request' });
  // Calling the query
  Promise.all([getUsersByInterest(id), getLanguages()])
    .then(([{ rows: users }, { rows: langs }]) => formatLanguagesV2(users, langs))
    .then((result) => res.json({ data: result }))
    .catch((err) => {
      next(err);
    });
};
