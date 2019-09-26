exports.logout = (req, res) => {
  res.clearCookie('token');
  res.send({ isSuccess: true });
};
