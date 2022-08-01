const createHttpError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/tutorial', function(){
  console.log('Connection has been made');
})
.catch(err => {
  console.error('App starting error: ', err.stack);
  process.exit(1);
})

//require file system module to load
const fs = require('file-system');

//include controllers 
fs.readdirSync('controllers').forEach(function(file){
if(file.substr(-3) ==  '.js') {
  const route = require('./controllers/' + file)
  route.controller(app)
}
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createHttpError(404));
  res.write('Something went wrong');
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

app.listen(3000, function () {
  console.log('Listening on 3000')
});