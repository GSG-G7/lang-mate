const dbConnection = require('../../config/dbConnection');
// do 2 queries
// one to get user by username, and one by userId

exports.getUserById = (id) => {
  const sql = {
<<<<<<< HEAD
    text: 'SELECT * FROM users where id = ($1)',
=======
    text: 'SELECT * FROM users where id = $1',
>>>>>>> 85a38d0ec46e2539bdb0c9239025ab5d7b9a0e22
    values: [id],
  };
  return dbConnection.query(sql);
};

exports.getUserByUsername = (username) => {
  const sql = {
<<<<<<< HEAD
    text: 'SELECT * FROM users where username = ($1)',
=======
    text: 'SELECT * FROM users where username = $1',
>>>>>>> 85a38d0ec46e2539bdb0c9239025ab5d7b9a0e22
    values: [username],
  };
  return dbConnection.query(sql);
};
