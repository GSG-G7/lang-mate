const dbConnection = require('../../config/dbConnection');

const interestsQueryMaker = (interests) => {
  const query = 'edit thisVALUES ($1,$2)';
  const rest = interests.slice(1).map((e, i) => `, ($1,$${i + 3})`).join('');
  return query + rest;
};
exports.addUserInterests = (interestsId, userId) => {
  const sql = {
    text: interestsQueryMaker(interestsId),
    values: [...interestsId, userId],
  };
  return dbConnection.query(sql);
};
