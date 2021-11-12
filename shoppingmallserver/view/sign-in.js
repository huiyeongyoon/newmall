var express = require('express');
var router = express.Router();

// 1파일 불러오기
const controller = require('../routes/controller/sign-in');

router.post('/', controller.signIn);

module.exports = router;
