var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var data = '';
    var db = req.con;
    db.query('SELECT * FROM product_list', function(err, rows, field) {
        data = rows;
        res.render('products', {
            title: 'Product',
            data: data
        });
    });

});

// 進入編輯頁面
router.get('/edit', function(req, res, next) {
    var db = req.con;
    var data;
    var id = req.query.id;
    console.log("id=" + id);
    db.query('SELECT * FROM product_list where id=?', id, function(err, rows) {
        if (err) {
            console.log(err);
        }
        data = rows;
        // console.log(JSON.stringify(data));
        res.render('productEdit', {
            title: "Product-Edit",
            data: data
        });
    });
});

// 送出編輯表單結果
router.post('/edit', function(req, res, next) {
    var db = req.con;
    var data = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    }
    var qur = db.query('UPDATE product_list set ?', data, function(err, ) {
        if (err) {
            console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/products');
    });
});

// 新增資料
router.get('/add', function(req, res, next) {
    res.render('productAdd', {
        title: "Product-Add"
    });
});

// 送出新增資料
router.post('/add', function(req, res, next) {
    var db = req.con;
    var sql = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    }
    var qur = db.query('INSERT INTO  product_list set ?', sql, function(err, rows) {
        if (err) {
            console.log(err);
        }
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/products');
    });
});

// 刪除資料後直接返回
router.get('/delete', function(req, res, next) {
    var db = req.con;
    var id = req.query.id;
    console.log("ID=" + id);

    db.query('DELETE FROM product_list WHERE id = ?', id, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Delete sucess');
        }
        res.redirect('/products');
    });

});

module.exports = router;