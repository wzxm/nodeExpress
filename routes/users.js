var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', { title: 'Express', username: 'wangzhe', users: [{ username: 'Wilson' }, { username: 'Wilson Zhong' }, { username: 'Zhong Wei' }] });
});

router.get('/:id', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', { title: 'Express', username: 'wangzhe', users: [{ username: 'Wilson' }, { username: 'Wilson Zhong' }, { username: 'Zhong Wei' }] });
});

module.exports = router;
