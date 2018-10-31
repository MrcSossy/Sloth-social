var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var fetchRouter = require('./routes/fetch');
var saveRouter = require('./routes/save');
var deleteRouter = require('./routes/delete');
var validateRouter = require('./routes/validate');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/fetch', fetchRouter);
app.use('/save', saveRouter);
app.use('/delete', deleteRouter);
app.use('/validate', validateRouter);

console.log("[ DONE ] Checks completed, server running\n");

module.exports = app;
