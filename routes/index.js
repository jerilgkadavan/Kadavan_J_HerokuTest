var express = require('express');
var router = express.Router();

const data = require(`../data`);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: "Welcome to your first express app"});
});

router.get('/user', function(req, res, next) {
  console.log('data:', data);
  console.log('user:', req.params.user);
  res.render('userpage', data[req.params.user]);
  // res.render('index', { title: 'Express', message: "Welcome to your first express app"});
});


module.exports = router;
