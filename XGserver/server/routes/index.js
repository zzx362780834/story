var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var EPub = require("epub");
var mongoose = require('mongoose');
var sixiang = mongoose.model('Sixiang');
var moment = require('moment');
/* GET users listing. */
var traverse = '/traverse';


router.get('/img', (req, res, next) => {
    var epub = new EPub("../public/story/滚滚红尘美利坚-1500206657610.epub", "/imagewebroot/", "/articlewebroot/");
    epub.on("error", function(err) {
        throw err;
    });
    epub.on("end", function(err) {
        epub.getFile('css', function(errord, data, mimeType) {
            if (err) {
                console.log(err);
                return;
            }
            fs.writeFile('../public/stylesheets/aaaa.css', data, 'binary', function(err) {
				if (err) throw err;
				console.log('保存成功');
			});

        });
    });
    epub.parse();
})




function selectObj(val) {
	switch (val) {
		case 'sixiang':
			return sixiang;
		case 'scrollAD':
			return scrollAD;
			// default:

	}
}
var arr = [];
/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});


function travel(dir, callback) {
	fs.readdirSync('../public/sixiang').forEach(function(file) {
		var pathname = path.join(dir, file);
		if (pathname.indexOf('.epub') != -1) {
			if (fs.statSync(pathname).isDirectory()) {
				travel(pathname, callback);
			} else {
				callback(pathname); 
			}
		}
	});
}

router.get(traverse, function(req, res, next) {
	travel(`../public/${req.query.static}`, function(pathname) {
		dealEpub(req.query.static, pathname, res)
	});
})



function addbook(static, epub, address, type, res,imagesAddress) {
	// var obj = selectObj(static);
	var addObj = new sixiang({
		bookname: epub.metadata.title,
		bookauthor: epub.metadata.creator,
		booktype: type,
		// bookinfo: epub.metadata.bookinfo,
		bookAddress: address,
		bookimg: imagesAddress.substring(9,address.length),
		time: moment(new Date()).format('YYYY-MM-DD'),
		bookList: epub.toc
	})
	addObj.save(function(err) {
		if (err) {
			console.log(err)
			return;
		}
		// res.json('保存成功');
		// console.log('保存成功');
	});
}
// "../public/story/滚滚红尘美利坚-1500206657610.epub"
function dealEpub(type, address, res) {

	var epub = new EPub(address, "/imagewebroot/", "/articlewebroot/");

	epub.on("error", function(err) {
		throw err;
	});

	epub.on("end", function(err) {
		// res.json(epub)
		// console.log(epub.manifest.cover.id)
		epub.getImage('cover', function(error, img, mimeType) {
			//写入buffer,需用binary编码
			var imagesAddress = `../public/images/${epub.metadata.title}.jpg`;
			fs.writeFile(imagesAddress, img, 'binary', function(err) {
				if (err) throw err;
				console.log('保存成功');
				addbook(type, epub, address, type, res, imagesAddress)
			});
		})

	});
	epub.parse();

}


module.exports = router;