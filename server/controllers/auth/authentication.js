const { jwtVerify } = require('../../helpers/jwtVerifyPromise');

const key = process.env.KEY;
exports.auth = (req, res, next) => {
  if (req.cookies && req.cookies.token) {
    const { token } = req.cookies;
    jwtVerify(token, key)
      .then((payload) => { req.user = payload; })
      .then(() => next())
      .catch(() => next({ code: 401 }));
  } else {
    return next({ code: 401 });
  }
};
