const dbconnection = require('../../config/dbconnection');

exports.getAllLanguages = () => {
  const sql = 'SELECT * FROM languages;';
  return dbconnection.query(sql);
};
