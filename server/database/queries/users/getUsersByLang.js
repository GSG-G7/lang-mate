const dbConnection = require('../../config/dbConnection');

exports.getUsersByLang = (langId) => {
  const sql = {
    text: 'SELECT id, username, bio, avatar_path, native_lang_id, learning_lang_id FROM users WHERE users.native_lang_id = $1',
    values: [langId],
  };
  return dbConnection.query(sql);
};
