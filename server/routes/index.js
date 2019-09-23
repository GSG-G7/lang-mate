const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('hii');
});

module.exports = router;
