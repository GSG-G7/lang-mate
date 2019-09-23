const router = require('express').Router();

router.get('/', (req, res) => {
  res.send({ body: 'hii from server' });
});

module.exports = router;
