const { join } = require('path');
const express = require('express');
// middlewares
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');

const router = require('./routes');

const app = express();
app.use(express.json());
app.set('port', process.env.PORT || 5000);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(compression());
app.use('/api/v1/', router);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = app;
