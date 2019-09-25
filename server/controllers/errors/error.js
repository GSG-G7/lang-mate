/* eslint-disable no-unused-vars */
exports.errors = (err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log(err.message);
  switch (err.message) {
    case 400:
      res.status(400).send({ msg: 'bad request ... !' });
      break;
    case 401:
      res.status(401).send({ msg: 'Unauthorized' });
      break;
    case 403:
      res.status(403).send({ msg: 'forbidden' });
      break;
    case 501:
      res.status(501).send({ msg: 'not implemented' });
      break;

    default:
      res.status(500).send({ msg: 'server error' });
      break;
  }
};
