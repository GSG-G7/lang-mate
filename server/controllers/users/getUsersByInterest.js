const {
  users: { getUsersByInterest: getUsers },
  languages: { getLanguageById },
} = require('../../database/queries');
const { formatLanguages } = require('../../helpers/formatLanguages');

exports.getUsersByInterest = (req, res, next) => {
  let users;
  const { id } = req.params;
  // Validate the id
  if (!Number(id)) return next({ code: 400 });
  // Calling the query
  getUsers(id)
    .then((result) => {
      users = result.rows;
      return users;
    })
    .then((result) => result.map((user) => getLanguageById(user.native_lang_id)))
    .then((promises) => Promise.all(promises))
    .then((langs) => formatLanguages(users, langs, 'native_lang_id'))
    .then((result) => {
      users = result;
      return users;
    })
    .then((result) => result.map((user) => getLanguageById(user.learning_lang_id)))
    .then((promises) => Promise.all(promises))
    .then((langs) => formatLanguages(users, langs, 'learning_lang_id'))
    .then((result) => {
      res.status(200).json({ data: result });
    })
    .catch((err) => {
      next(err);
    });
};
