const dbConnection = require('../../config/dbConnection');

exports.getInterests = () => {
  const sql = {
    text: '',
    value: [],
  };
  return dbConnection.query(sql);
};
