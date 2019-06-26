var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("세션ID=",req.sessionID);
  res.render('index.html');
});

module.exports = router;
