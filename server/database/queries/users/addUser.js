const dbConnection = require('../../config/dbConnection');

exports.addUser = (userData) => {
  const {
    username, email, password, nativeLangId, learningLangId,
  } = userData;
  const sql = {
    text: 'INSERT INTO users (username, email, password, isActive, native_lang_id, learning_lang_id) VALUES ($1, $2, $3, $4, $5, $6)',
    values: [username, email, password, true, nativeLangId, learningLangId],
  };
  return dbConnection.query(sql);
};
