const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const signIn = require('./routes/sign-in');
const homeRouter = require('./routes/home');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

global.foo = { '홍길동 쿠기값': {}, '이순신 쿠키값': {} };

const hour = 3600000;
app.use(session({
  secret: 'foo',
  cookie: {
    path: '/',
    httpOnly: true,
    secure: false,
    expires: hour * 24,
  },
}))

app.use('/sign-in', signIn);
app.use('/', homeRouter);

module.exports = app;