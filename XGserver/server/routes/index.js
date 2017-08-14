var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var EPub = require("epub");
var mongoose = require('mongoose');
var sixiang = mongoose.model('Sixiang');

/* GET users listing. */
var traverse = '/traverse';


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});


function travel(dir, callback) {
	fs.readdirSync(dir).forEach(function(file) {
		var pathname = path.join(dir, file);
		if (fs.statSync(pathname).isDirectory()) {
			travel(pathname, callback);
		} else {
			callback(pathname);
		}
	});
}

router.get(traverse, function(req, res, next) {

	console.log(req.query.static)
	travel(`../public/${req.query.static}`, function(pathname) {
		console.log(pathname);
		// for(var i=0;i<pathname.length;i++) {
			dealEpub(req.query.static,pathname)
		// }
	});
})



function addbook(obj, epub, address, type) {
	var addobj = new obj({
		bookname: epub.metadata.title,
		bookauthor: epub.metadata.creator,
		booktype: type,
		// bookinfo: epub.metadata.bookinfo,
		bookAddress: address,
		// bookimg: epub.metadata.bookimg,
		time: moment(new Date()).format('YYYY-MM-DD')
	})
	addObj.save(function(err) {
		if (err) {
			res.end('Error');
			return;
		}
		res.end('保存成功');
	});
}
// "../public/story/滚滚红尘美利坚-1500206657610.epub"
function dealEpub(type, address) {
	var epub = new EPub(address, "/imagewebroot/", "/articlewebroot/");
	

	epub.on("error", function(err) {
		throw err;
	});
	
	epub.on("end", function(err) {
console.log(21312313,address)

		// addbook(type, ebup, address, type)
	});
	epub.parse();

}


module.exports = router;