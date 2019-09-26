const { jwtVerify } = require('../../helpers/jwtVerifyPromise');

const key = process.env.KEY;
exports.auth = (req, res, next) => {
  const { token } = req.cookies;
  jwtVerify(token, key)
    .then((payload) => { req.user = payload; })
    .then(() => next())
    .catch(() => next({ code: 403 }));
};
