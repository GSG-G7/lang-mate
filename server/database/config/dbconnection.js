const { Pool } = require('pg');
require('env2')('config.env');

let dbUrl = '';

switch (process.env.NODE_ENV) {
  case 'test':
    dbUrl = process.env.TEST_DB_URL;
    break;
  case 'production':
    dbUrl = process.env.DATABASE_URL;
    break;
  case 'development':
    dbUrl = process.env.DEV_DB_URL;
    break;
  default:
    throw new Error('no db url');
}

const options = {
  connectionString: dbUrl,
  ssl: true,
};

module.exports = new Pool(options);
