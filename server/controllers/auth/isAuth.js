exports.isAuth = (req, res, next) => {
  if (req.user) res.status(200).json({ isAuth: true, data: req.user });
  else next({ code: 401 });
};
