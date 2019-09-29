const {
  users: { getUsersByInterest },
  languages: { getLanguageById },
} = require('../../database/queries');
const { formatLanguages } = require('../../helpers');

exports.getUsersByInterest = (req, res, next) => {
  let users;
  const { id } = req.params;
  // Validate the id
  if (!Number(id)) return next({ code: 400, msg: 'bad request' });
  // Calling the query
  getUsersByInterest(id)
    .then(({ rows }) => {
      users = rows;
      return users.map((user) => getLanguageById(user.native_lang_id));
    })
    .then((promises) => Promise.all(promises))
    .then((langs) => formatLanguages(users, langs, 'native_lang_id'))
    .then((result) => {
      users = result;
      return users.map((user) => getLanguageById(user.learning_lang_id));
    })
    .then((promises) => Promise.all(promises))
    .then((langs) => formatLanguages(users, langs, 'learning_lang_id'))
    .then((result) => {
      res.status(200).json({ data: result });
    })
    .catch((err) => {
      next(err);
    });
};
