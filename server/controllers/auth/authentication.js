const { jwtVerify } = require('../../helpers/jwtVerifyPromise');

const key = process.env.KEY;
exports.auth = (req, res, next) => {
  const { token } = req.cookies;
  if (req.cookies && token) {
    jwtVerify(token, key)
      .then((payload) => { req.user = payload; })
      .then(() => next())
      .catch(() => next({ code: 401 }));
  } else {
    next({ code: 401 });
  }
};
