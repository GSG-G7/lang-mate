const { join } = require('path');
const { readFileSync } = require('fs');
const dbConnection = require('./dbConnection');

let sql = readFileSync(join(__dirname, 'dbbuild.sql')).toString();
if (process.env.NODE_ENV === 'test') {
  sql += readFileSync(join(__dirname, 'fakedata.sql')).toString();
}

module.exports = () => dbConnection.query(sql);
