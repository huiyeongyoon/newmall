var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
  const { body: { id, password } } = req;

  // res.setHeader('Access-Control-Allow-Origin', '*'); // CORS

  console.log('login', req.body, id, password);

  if (id === 'test@test.com' && password === 'test') {
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false
    });
  }
});

module.exports = router;
