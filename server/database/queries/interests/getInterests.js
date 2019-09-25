const dbConnection = require('../../config/dbConnection');

exports.getInterests = () => {
  const sql = {
    text: '',
    values: [],
  };
  return dbConnection.query(sql);
};
