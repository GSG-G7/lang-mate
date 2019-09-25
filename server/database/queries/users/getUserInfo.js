const dbConnection = require('../../config/dbConnection');
// do 2 queries
// one to get user by username, and one by userId

exports.getUserById = (id) => {
  const sql = {
    text: 'SELECT * FROM users where id = $1',
    values: [id],
  };
  return dbConnection.query(sql);
};

exports.getUserByUsername = (username) => {
  const sql = {
    text: 'SELECT * FROM users where username = $1',
    values: [username],
  };
  return dbConnection.query(sql);
};
