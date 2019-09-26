const dbConnection = require('../../config/dbConnection');

exports.addUser = (userData) => {
  const {
    username, email, password, nativeLangId, learningLangId, interestsId,
  } = userData;
  const sql = {
    text: 'INSERT INTO users (username, email, password, isActive, native_lang_id, learning_lang_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING * ',
    values: [username, email, password, true, nativeLangId, learningLangId, interestsId],
  };
  return dbConnection.query(sql);
};
