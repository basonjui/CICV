var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'COVID-19 Information Center of Vietnam' });
});

module.exports = router;
