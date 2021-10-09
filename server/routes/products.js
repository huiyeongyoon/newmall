var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({
    data: [
      { id: 1, name: '옷1', price: 10000 },
      { id: 2, name: '옷2', price: 10000 },
      { id: 3, name: '옷3', price: 10000 },
      { id: 4, name: '옷4', price: 10000 },
      { id: 5, name: '옷5', price: 10000 },
      { id: 6, name: '옷6', price: 10000 },
      { id: 7, name: '옷7', price: 10000 },
    ]
  });
});

module.exports = router;
