var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'kevin',
  password : 'kevinxd',
  database : 'test'
});

con.connect(function(err){
	if(err)
		console.log('err');
	else{
		console.log('sql connection sucessful.');
		// connection.query('SELECT * FROM product_list', function(err,rows){
		// 	console.log('ya');
		// 	console.log(rows);
		// });
	}
});
var app = express();

app.use(function(req, res, next) {
    req.con = con;
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
