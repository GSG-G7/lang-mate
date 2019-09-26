const { users: { searchUsers } } = require('../../database/queries');

exports.searchUsers = (req, res, next) => {
  // we will use req.query to get results based on it
  const { search: searchQuery } = req.query;
  searchUsers(searchQuery)
    .then(({ rows }) => {
      if (rows.length && rows) {
        res.json({ data: { searchQuery, result: rows } });
      } else {
        throw new Error('no users with that username found :(');
      }
    })
    .catch((err) => {
      if (err.message === 'no users with that username found :(') {
        next({ code: 400, msg: err.message });
      } else next(err);
    });
};
