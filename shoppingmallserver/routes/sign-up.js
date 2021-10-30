const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {User} = require('../models/user');

// bodyParser 서버에서 가져오는 정보를 분석하여 가져올 수 있게 하는 것
router.use(bodyParser.urlencoded({extended: true}))

// 제이슨 타입을 분석해서 가져올 수 있게 하는 것
router.use(bodyParser.json());

router.post('/sign-up', function(req, res, next) {

  const { body: { id, password } } = req;

  const user = new User(req.body)

  //몽고 디비에서 오는 메서드
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

module.exports = router;