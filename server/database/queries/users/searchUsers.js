const dbConnection = require('../../config/dbConnection');

exports.searchUsers = (query) => {
  const sql = {
    text: 'SELECT * FROM users WHERE username LIKE $1 ',
    values: [`%${query}%`],
  };
  return dbConnection.query(sql);
};
