var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  //biz
  console.log("세션IDID=",req.sessionID);
  req.session.email=req.body.email;
  const result={msg:`${req.body.name}님 감사합니다.`};
  console.log("test");
  //const result={msg:"가입되셨습니다"};
  res.json(JSON.stringify(result));
});

module.exports = router;

