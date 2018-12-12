const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'kevin',
    database: 'test1',
    password: 'kevinxd'
});

module.exports = pool.promise();