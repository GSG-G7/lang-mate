const { jwtSign } = require('./jwtSignPromise');
const { jwtVerify } = require('./jwtVerifyPromise');
const { formatLanguages } = require('./formatLanguages');

module.exports = {
  jwtSign,
  jwtVerify,
  formatLanguages,
};
