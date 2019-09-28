const { users: { searchUsers } } = require('../../database/queries');
const { languages: { getLanguages } } = require('../../database/queries');
const { formatLanguagesV2 } = require('../../helpers');

exports.searchUsers = (req, res, next) => {
  // we will use req.query to get results based on it
  const { search: searchQuery } = req.query;
  Promise.all([searchUsers(searchQuery), getLanguages()])
    .then(([{ rows: users }, { rows: languages }]) => {
      console.log(users);
      if (users && users[0]) {
        return formatLanguagesV2(users, languages);
      }
      throw new Error('no users with that username found :(');
    }).then((usersFormatted) => res.json({ data: { searchQuery, result: usersFormatted } }))
    .catch((err) => {
      if (err.message === 'no users with that username found :(') {
        next({ code: 400, msg: err.message });
      } else next(err);
    });
};
