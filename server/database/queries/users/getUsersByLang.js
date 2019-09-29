const dbConnection = require('../../config/dbConnection');

exports.getUsersByLang = (langId) => {
  const sql = {
    text: 'SELECT users.id, users.username, email, bio, avatar_path, users.native_lang_id, users.learning_lang_id, COALESCE(json_agg(interests) FILTER(WHERE interests.id IS NOT NULL),\'[]\') AS interests FROM users LEFT OUTER JOIN user_interest ON user_interest.user_id = users.id JOIN interests ON interests.id = user_interest.interest_id WHERE users.isactive = true AND users.native_lang_id = $1 GROUP BY users.id LIMIT 100',
    values: [langId],
  };
  return dbConnection.query(sql);
};
