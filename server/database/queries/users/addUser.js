const dbConnection = require('../../config/dbConnection');

exports.addUser = (userData) => {
  const {
    username, email, password, nativeLangId, learningLangId,
  } = userData;
  const sql = {
<<<<<<< HEAD
    text: 'INSERT INTO users (username, email, password, isActive, native_lang_id, learning_lang_id) VALUES ($1, $2, $3, $4, $5, $6)',
    values: [username, email, password, true, nativeLangId, learningLangId],
=======
    text: '',
    values: [],
>>>>>>> 85a38d0ec46e2539bdb0c9239025ab5d7b9a0e22
  };
  return dbConnection.query(sql);
};
