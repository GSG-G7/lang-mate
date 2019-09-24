const { join } = require('path');
const { readFileSync } = require('fs');
const dbconnection = require('./dbconnection');

let sql = readFileSync(join(__dirname, 'dbbuild.sql')).toString();
if (process.env.NODE_ENV === 'test') { sql += readFileSync(join(__dirname, 'insertFakeData')).toString(); }
module.exports = () => dbconnection.query(sql);
