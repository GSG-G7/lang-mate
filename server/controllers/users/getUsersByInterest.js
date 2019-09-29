const {
  users: { getUsersByInterest },
  languages: { getLanguages },
} = require('../../database/queries');
const { formatLanguagesV2 } = require('../../helpers');

exports.getUsersByInterest = (req, res, next) => {
  let users;
  const { id } = req.params;
  // Validate the id
  if (!Number(id)) return next({ code: 400, msg: 'bad request' });
  // Calling the query
  getUsersByInterest(id)
    .then(({ rows }) => {
      users = rows;
      return users;
    })
    .then(() => getLanguages())
    .then(({ rows }) => formatLanguagesV2(users, rows))
    .then((result) => res.status(200).json({ data: result }))
    .catch((err) => next(err));
};
