var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
  	id:1,
  	username:"Kevin"
  },{
  	id:2,
  	username:"Rika"
  }]);
});

module.exports = router;
