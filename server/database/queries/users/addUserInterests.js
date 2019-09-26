const dbConnection = require('../../config/dbConnection');

exports.addUserInterests = (interestId, userId) => {
  const sql = {
    text: ' INSERT INTO user_interest(interest_id, user_id) VALUES ($1,$2)  RETURNING * ',
    values: [interestId, userId],
  };
  return dbConnection.query(sql);
};
