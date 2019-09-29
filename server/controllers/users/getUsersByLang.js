const { users: { getUsersByLang }, languages: { getLanguages } } = require('../../database/queries');
const { formatLanguagesV2 } = require('../../helpers');

exports.getUsersByLang = (req, res, next) => {
  let users;
  const { id } = req.params;

  if (!Number(id)) return next({ code: 400, msg: 'Bad request' });

  getUsersByLang(id)
    .then(({ rows }) => {
      users = rows;
      return users;
    })
    .then(() => getLanguages())
    .then((langs) => formatLanguagesV2(users, langs.rows))
    .then((result) => res.json({ data: result }))
    .catch((err) => next(err));
};
