const dbConnection = require('../../config/dbConnection');

exports.getLanguageById = (languageId) => {
  const sql = {
    text: 'SELECT * FROM languages WHERE id = $1',
    values: [languageId],
  };
  return dbConnection.query(sql);
};
