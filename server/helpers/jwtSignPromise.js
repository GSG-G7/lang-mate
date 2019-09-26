const { sign } = require('jsonwebtoken');

/**
 * Asynchronously sign the given payload into a JSON Web Token string
 * payload -  Payload to sign, could be an literal, buffer or string
 * secretOrPrivateKey - Either the secret for HMAC algorithms.
 *  [options] - Options for the signature
 * @param { String } payload
 * @param { String } secretOrPrivateKey
 * @param { String= } options
 * @returns { Promise<String> } a promise containing the signed jwt token
 */

exports.jwtSign = (payload, secretKey, options = {}) => new Promise((resolve, reject) => {
  sign(payload, secretKey, options, (err, signed) => {
    if (err) return reject(err);
    return resolve(signed);
  });
});
