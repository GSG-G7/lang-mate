const dbConnection = require('../../config/dbConnection');

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

exports.getUserByEmail = (email) => {
  const sql = {
    text: 'SELECT * FROM users where email = $1',
    values: [email],
  };
  return dbConnection.query(sql);
};

exports.getUserByEmailOrUsername = (email, username) => {
  const sql = {
    text: 'SELECT * FROM users where email = $1 OR username = $2',
    values: [email, username],
  };
  return dbConnection.query(sql);
};
