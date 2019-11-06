var express = require('express');
var router = express.Router();
var db = require('../db/config');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/details', function(req, res, next) {

  res.send('Details of resource here resource...');
  res.end();
  
});

module.exports = router;
