var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('You have made it to ingredients!');
});

module.exports = router;
