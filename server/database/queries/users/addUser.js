const dbConnection = require('../../config/dbConnection');

exports.addUser = (userData) => {
  const {
    username, email, password, native_lang_id, learning_lang_id,
  } = userData;
  const sql = {
    text: 'INSERT INTO users (username, email, password, isActive, native_lang_id, learning_lang_id) VALUES ($1, $2, $3, $4, $5, $6)',
    values: [username, email, password, true, native_lang_id, learning_lang_id],
  };
  return dbConnection.query(sql);
};
