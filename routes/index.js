var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/sharks', function(req,res){
  res.render('sharks');
});

module.exports = router;
