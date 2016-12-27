// 这句的意思就是引入 `express` 模块，并将它赋予 `express` 这个变量等待使用。
let express = require('express');
// let utility = require('utility');
let superagent = require('superagent');
let cheerio = require('cheerio');

var router = express.Router();

// var multiparty = require('multiparty');
// var util = require('util');
// var fs = require('fs');

router.use(function(req, res, next) {
	console.log('Time: ', Date.now());
	next();
})

/* 上传页面 */
router.get('/', function(req, res, next) {
	// 用 superagent 去抓取 https://cnodejs.org/ 的内容
	let items = [];

    superagent.get('https://cnodejs.org/?tab=all&page=1')
    .end(function(err, sres) {
        // 常规的错误处理
        if (err) {
            return next(err);
        }
        // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
        // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
        // 剩下就都是 jquery 的内容了
        let $ = cheerio.load(sres.text);
        $('#topic_list img').each(function(idx, element) {
            let $element = $(element);
            let $url = $element.attr('src');
            items.push({
                img: $url
            });
        });
        res.render('index', { title: 'Express', message: 'Hello, Simon!', items: items });
        // res.send(items);
    });
});

// /* 上传 */
// router.post('/file/uploading', function(req, res, next) {
// 	// 生成 multiparty 对象，并配置上传目标路径
// 	var form = new multiparty.Form({uploadDir: './public/files'});
// 	// 上传完成后处理
// 	form.parse(req, function(err, fields, files) {
// 		var filesTmp = JSON.stringify(files, null, 2);

// 		if(err) {
// 			console.log('parse errpr: ' + err);
// 		} else {
// 			console.log('parse files: ' + filesTmp);
// 			var inputFile = files.inputFile[0];
// 			var uploadPath = inputFile.path;
// 			var dstPath = './public/files/' + inputFile.originalFilename;
// 			// 重命名为真实文件名
// 			fs.rename(uploadedPath, dstPath, function(err) {
// 				if(err) {
// 					console.log('rename error: ' + err);
// 				} else {
// 					console.log('rename ok.');
// 				}
// 			});
// 		}
// 		res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
// 		res.write('received upload:\n\n');
// 		res.end(util.inspect({ fields: fields, files: filesTmp }));
// 	})
// })

// 定义 about 页面的路由
router.get('/about', function(req, res) {
  res.send('About birds');
});

module.exports = router;
