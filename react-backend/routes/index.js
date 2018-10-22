var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        id: '405417048',
        name: "Kevin"
    });
});

module.exports = router;