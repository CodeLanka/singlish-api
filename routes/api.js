var express = require('express');
var router = express.Router();

var singlish = require("singlish");

/*
GET Singlish transliteration
Exmaple /api/singlish?q=kohomada
*/
router.get('/singlish', function(req, res) {
  var query = req.query.q;
  var transliteration = singlish.translate(query);
  res.send({transliteration:transliteration});
});

module.exports = router;
