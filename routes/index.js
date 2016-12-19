var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
	console.log('Time: ', Date.now());
	next();
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', message: 'Hello, Simon!' });
});

// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
