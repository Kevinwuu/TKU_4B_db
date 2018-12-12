/* 引用models下檔案,使用Product撰寫CRUD操作
 ** export出去給route使用
 **
 */
const Product = require('../models/product');

// READ
exports.getProducts = (req, res, next) => {
    Product.fetchAll()
        .then(([rows]) => {
            res.render('products', {
                title: 'Product List',
                data: rows
            });
        })
        .catch(err => console.log(err));
};


// ADD page
exports.addProducts = (req, res, next) => {
    res.render('productAdd', {
        title: 'Add Product',
    });
};

// ADD
exports.add = (req, res, next) => {
    Product.add(req.body.name, req.body.price)
        .then(() => {
            res.redirect('/products');
        })
        .catch(err => console.log(err));
};


// Edit page
exports.editProducts = (req, res, next) => {
    Product.edit(req.query.id)
        .then(([rows]) => {
            res.render('productEdit', {
                title: 'Edit Product',
                data: rows
            });
        })
        .catch(err => console.log(err));
};


// UPDATE
exports.update = (req, res, next) => {
    Product.update(req.body.id, req.body.name, req.body.price)
        .then(() => {
            res.redirect('/products')
        })
        .catch(err => console.log(err));

};

// DELETE
exports.delete = (req, res, next) => {
    Product.delete(req.query.id)
        .then(() => {
            res.redirect('/products')
        })
        .catch(err => console.log(err));

};

// SEARCH
exports.search = (req, res, next) => {
    Product.findById(req.query.id)
        .then(([rows]) => {
            res.render('productsSearch', {
                title: 'Product Search',
                data: rows
            });
        })
        .catch(err => console.log(err));
};