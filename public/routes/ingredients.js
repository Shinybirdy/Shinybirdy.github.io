//server side
var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'views/ingredients.html'));
});


console.log('this ran from ingredients.js route');

module.exports = router;
