const { users: { searchUsers } } = require('../../database/queries');
const { languages: { getLanguages } } = require('../../database/queries');
const { formatUsers } = require('../../helpers');

exports.searchUsers = (req, res, next) => {
  // we will use req.query to get results based on it
  const { search: searchQuery } = req.query;
  Promise.all([searchUsers(searchQuery), getLanguages()])
    .then(([{ rows: users }, { rows: languages }]) => {
      if (users && users[0]) {
        return formatUsers(users, languages);
      }
      throw next({ code: 400, msg: 'no users with that username found :(' });
    }).then((usersFormatted) => res.json({ data: { searchQuery, result: usersFormatted } }))
    .catch(next);
};
