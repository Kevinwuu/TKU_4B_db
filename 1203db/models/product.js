/* 建立資料庫連線
 ** export出去給controller使用
 */
const db = require('../util/database')

// 匯出成Product, 負責執行SQL語法
module.exports = class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    // CREATE
    static add(name, price) {
        return db.execute('INSERT INTO product (name,price) VALUES(?, ?)', [name, price])
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM product');
    }

    // SEARCH
    static findById(id) {
        return db.execute('SELECT * FROM product WHERE id = ?', [id])
    }

    // UPDATE
    static update(id, name, price) {
        return db.execute('UPDATE  product SET name = ?, price = ? WHERE id = ?', [name, price, id])
    }

    // EDIT page
    static edit(id) {
        return db.execute('SELECT * FROM product WHERE id = ?', [id])
    }

    // DELETE
    static delete(id) {
        return db.execute('DELETE FROM product WHERE id = ?', [id])
    }

}
