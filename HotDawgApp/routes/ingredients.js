var express = require('express');
var router = express.Router();

const data = require('../data/ingredients.json');

router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;
