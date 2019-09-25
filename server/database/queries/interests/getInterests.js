const dbConnection = require('../../config/dbConnection');

exports.getInterests = () => {
  const sql = {
    text: 'SELECT * FROM interests',
    values: [],
  };
  return dbConnection.query(sql);
};
