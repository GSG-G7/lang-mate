const { users: { getUsersByLang }, languages: { getLanguages } } = require('../../database/queries');
const { formatUsers } = require('../../helpers');

exports.getUsersByLang = (req, res, next) => {
  const { id } = req.params;

  if (!Number(id)) throw next({ code: 400, msg: 'Bad request' });

  Promise.all([getUsersByLang(id), getLanguages()])
    .then(([{ rows: users }, { rows: langs }]) => formatUsers(users, langs))
    .then((result) => res.status(200).json({ data: result }))
    .catch((err) => next(err));
};
