var express = require('express');
var router = express.Router();

router.all('*', requireAuthentication)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    message: 'Hello World'
  });
});

router.get('/healthz', function(req, res, next) {
  res.json({
    message: 'Healthz responded'
  });
});

module.exports = router;
