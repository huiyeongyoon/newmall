const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const signInRouter = require('./routes/sign-in');
const homeRouter = require('./routes/home');
const productDetailsRouter = require('./routes/productdetail');
const contactRouter = require('./routes/contact');
const cartRouter = require('./routes/cart');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sign-in', signInRouter);
app.use('/home', homeRouter);
app.use('/productDetails', productDetailsRouter);
app.use('/contact', contactRouter);
app.use('/cart', cartRouter);


module.exports = app;
