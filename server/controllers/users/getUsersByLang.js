const { users: { getUsersByLang }, languages: { getLanguageById } } = require('../../database/queries');
const { formatLanguages } = require('../../helpers/formatLanguages');

exports.getUsersByLang = (req, res, next) => {
  let users;
  const { id } = req.params;

  if (!Number(id)) return next({ code: 400, msg: 'Bad request' });

  getUsersByLang(id)
    .then(({ rows }) => {
      users = rows;
      return users.map((user) => getLanguageById(user.native_lang_id));
    })
    .then((promises) => Promise.all(promises))
    .then((langs) => formatLanguages(users, langs, 'native_lang_id'))
    .then((result) => {
      users = result;
      return result.map((user) => getLanguageById(user.learning_lang_id));
    })
    .then((promises) => Promise.all(promises))
    .then((langs) => formatLanguages(users, langs, 'learning_lang_id'))
    .then((result) => res.status(200).json({ data: result }))
    .catch((err) => next(err));
};
