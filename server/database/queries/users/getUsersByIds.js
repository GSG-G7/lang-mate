const dbConnection = require('../../config/dbConnection');

exports.getUsersByIds = (ids) => {
  const rest = ids.slice(1).map((e, i) => ` OR users.id = $${i + 2}`).join('');
  const sql = {
    text: `SELECT users.id, users.username, email, bio, avatar_path, users.native_lang_id, users.learning_lang_id, COALESCE(json_agg(interests) FILTER(WHERE interests.id IS NOT NULL),'[]') AS interests FROM users LEFT OUTER JOIN user_interest ON user_interest.user_id = users.id JOIN interests ON interests.id = user_interest.interest_id WHERE users.isactive = true AND (users.id = $1${rest}) GROUP BY users.id LIMIT 100 `,
    values: [...ids],
  };
  return dbConnection.query(sql);
};
