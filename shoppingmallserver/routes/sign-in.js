var express = require('express');
var router = express.Router();

const TempLoginInfo = {
  userId: 1,
  id: 'test@test.com',
  password: 'test!234',
};

router.post('/sign-in', function(req, res, next) {
  const { body: { id = '', password = '' } } = req;


  if (TempLoginInfo.id === id && TempLoginInfo.password === password) {
    req.session.userId = TempLoginInfo.userId;
    console.log(req.session.userId);
    res.json({ ok: true });
    return;
  }

  res.json({ ok: false });
});

router.get('/sign-out', function(req, res, next) {
  const { body: { id = '', password = '' } } = req;

  if (req.session.userId) {
    req.session.userId = undefined;
    res.json({ ok: true });
    return;
  }

  res.json({ ok: false });
});

module.exports = router;
