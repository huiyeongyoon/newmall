const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const FileStore = require('session-file-store')(session)

const indexRouter = require('./view');
const signIn = require('./view/sign-in');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  key: 'signInData',
  secret: 'huiyeong',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60 * 60 * 24,
  }
}));


app.use('/', indexRouter);
app.use('/sign-in', signIn);

module.exports = app;