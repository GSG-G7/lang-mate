const dbConnection = require('../../config/dbConnection');

exports.getUsersByInterest = (interestId) => {
  const sql = {
    text: 'SELECT user_interest.interest_id, user_interest.user_id, users.username, users.avatar_path, users.bio , users.native_lang_id, users.learning_lang_id FROM user_interest  INNER JOIN users ON user_interest.user_id = users.id WHERE user_interest.interest_id = $1',
    values: [interestId],
  };
  return dbConnection.query(sql);
};
