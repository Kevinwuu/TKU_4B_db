var express = require('express');
var router = express.Router();

const productController = require('../controllers/product');

// 處理路由
// 交由controller下寫好的物件處理
router.get('/', productController.getProducts);
router.get('/add', productController.addProducts);
router.post('/add', productController.add);
router.get('/edit', productController.editProducts);
router.post('/update', productController.update);
router.get('/delete', productController.delete);
router.get('/search', productController.search);


module.exports = router;


// router.get('/', function(req, res, next) {

//     var db = req.con;
//     var data = '';

//     db.query('SELECT * from product', function(err, rows) {
//         if (err) {
//             console.log(err);
//         }
//         data = rows;
//         console.log(data);
//         console.log(JSON.stringify(data));
//         //res.json(data);
//         //res.send(JSON.stringify(data));
//         res.render('products', { title: 'Product List', data: data });
//     });
// });


// router.get('/search', function(req, res, next) {

//     var id = req.query.id;
//     console.log(id);

//     var db = req.con;
//     var data = "";

//     db.query('SELECT * FROM product WHERE id = ?', id, function(err, rows) {
//         if (err) {
//             console.log(err);
//         }

//         var data = rows;
//         console.log(JSON.stringify(data));
//         res.render('productsSearch', { title: 'Product Search', data: data });
//     });
// });


// render product.Edit.ejs for prodcut edit
// router.get('/edit', function(req, res, next) {

//     var id = req.query.id;
//     console.log(id);

//     var db = req.con;
//     var data = "";

//     db.query('SELECT * FROM product WHERE id = ?', id, function(err, rows) {
//         if (err) {
//             console.log(err);
//         }

//         var data = rows;
//         console.log(JSON.stringify(data));
//         res.render('productEdit', { title: 'Product Edit', data: data });
//     });
// });

// product edit to database from form of productEdit.ejs
// router.post('/update', function(req, res, next) {

//     var db = req.con;

//     var id = req.body.id;

//     var sql = {
//         id: req.body.id,
//         name: req.body.name,
//         price: req.body.price,
//     };

//     var qur = db.query('UPDATE product SET ? WHERE id = ?', [sql, id], function(err, rows) {
//         if (err) {
//             console.log(err);
//         }

//         res.setHeader('Content-Type', 'application/json');
//         res.redirect('/products');
//     });

// });

// product delete for some id
// router.get('/delete', function(req, res, next) {

//     var id = req.query.id;
//     console.log(id);
//     var db = req.con;

//     var qur = db.query('DELETE FROM product WHERE id = ?', id, function(err, rows) {
//         if (err) {
//             console.log(err);
//         }
//         res.redirect('/products');
//     });
// });

// render productAdd.ejs for product add
// router.get('/add', function(req, res, next) {

//     // use userAdd.ejs
//     res.render('productAdd', { title: 'Add Product', msg: '' });
// });

// product add to database from productAdd.ejs
// router.post('/add', function(req, res, next) {

//     var db = req.con;

//     var sql = {
//         name: req.body.name,
//         price: req.body.price,
//     };

//     //console.log(sql);
//     var qur = db.query('INSERT INTO product SET ?', sql, function(err, rows) {
//         if (err) {
//             console.log(err);
//         }
//         res.setHeader('Content-Type', 'application/json');
//         res.redirect('/products');
//     });
// });