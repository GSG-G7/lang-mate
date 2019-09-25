const dbConnection = require('../../config/dbConnection');
// do 2 queries
// one to get user by username, and one by userId

exports.getUserById = (id) => {
  const sql = {
    text: 'SELECT * FROM users where id = $1',
    value: [id],
  };
  return dbConnection.query(sql);
};

exports.getUserByUsername = (username) => {
  const sql = {
    text: 'SELECT * FROM users where username = $1',
    value: [username],
  };
  return dbConnection.query(sql);
};

exports.getUserByEmail = (email) => {
  const sql = {
    text: 'SELECT * FROM users where email = $1',
    value: [email],
  };
  return dbConnection.query(sql);
};
