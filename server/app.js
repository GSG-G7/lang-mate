const { join } = require('path');

const express = require('express');
const router = require('./routes');
// middlewares
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 5000);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(compression());
app.use('/api/v1/', router);

module.exports = app;
