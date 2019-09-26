const dbConnection = require('../../config/dbConnection');

const interestsQueryMaker = (interests) => {
  const query = 'INSERT INTO user_interest(interest_id, user_id) VALUES ($1,$2)';
  const rest = interests.slice(1).map((e, i) => `, ($1,$${i + 3})`).join('');
  return query + rest;
};
exports.addUserInterests = (interestsIds, userId) => {
  const sql = {
    text: interestsQueryMaker(interestsIds),
    values: [...interestsIds, userId],
  };
  return dbConnection.query(sql);
};
