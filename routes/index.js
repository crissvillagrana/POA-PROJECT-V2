var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/login')
});
router.get('/pruebas',function(req,res){res.render('pruebas')})
module.exports = router;
