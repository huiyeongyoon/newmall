const path = require("path");
const express = require("express");
const router = express.Router();

const controller_main = require('../controller/signIn');


router.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../public/sign-in/index.html'));
});

router.post('/' ,async function(req,res){
  const result = await controller_main.signIn(req,res);
  res.send(result);
})

module.exports = router;
