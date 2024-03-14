var createError = require('http-errors');
var express = require('express');
const jwt = require('jsonwebtoken');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var departamentsRouter = require('./routes/departaments');
var bannersRouter = require('./routes/banners');
var registerRouter = require('./routes/register');
var categoriesDepartamentsRouter = require('./routes/categoriesDepartaments');




var app = express();

app.set("secretKey", "123")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/departaments',departamentsRouter);
app.use('/banners', bannersRouter);
app.use('/register', registerRouter);
app.use('/categories', categoriesDepartamentsRouter);

//VALIDAR TOKEN
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Token must be provided" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, req.app.get("secretKey"), function (error, payload) {
    if (error) {
      return res.status(401).json({ message: error.message });
    } else {
      console.log(payload);
      next();
    }
  });
}

app.verifyToken = verifyToken;
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
  res.json(err.message);
});

module.exports = app;
