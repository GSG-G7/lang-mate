const {
  users: { getUserByUsername },
  languages: { getLanguages },
} = require('../../database/queries');
const { formatUsers } = require('../../helpers');

exports.getUserInfo = (req, res, next) => {
  const { username } = req.params;
  Promise.all([
    getUserByUsername(username),
    getLanguages()])
    .then(([{ rows: users, rowCount }, { rows: languages }]) => (rowCount !== 0
      ? formatUsers(users, languages)
      : next({ code: 400, msg: 'no user with that username' })))
    .then((result) => res.json(result))
    .catch(next);
};
