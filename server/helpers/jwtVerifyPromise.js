const { verify } = require('jsonwebtoken');

exports.jwtVerify = (token, secret) => new Promise((resolve, reject) => {
  verify(token, secret, (err, payload) => {
    if (err) {
      return reject(err);
    }
    return resolve(payload);
  });
});
