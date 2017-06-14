var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', { title: 'Express', username: 'wangzhe', users: [{ username: 'Wilson' }, { username: 'Wilson123 Zhong' }, { username: 'Zhong Wei' }] });
});

router.get('/:id', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', { title: 'Express', username: 'wangzhe', users: [{ username: 'Wilson' }, { username: 'Wilson Z2323hong' }, { username: 'Zhong Wei' }] });
});

module.exports = router;
