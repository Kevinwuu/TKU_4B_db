var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   var data = '';
   var db = req.con;
	console.log("hello");
	// console.log(req);
	// console.log(db);

	db.query('SELECT * FROM product_list', function(err,rows,field){
		data = rows;
		console.log(data[0].name);
	    // res.render('products', {title: 'Product List'});
	    res.render('products', {title: 'Product',data: data});
	});

});

module.exports = router;
