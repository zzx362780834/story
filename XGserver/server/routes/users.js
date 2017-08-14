var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = mongoose.model('User');
var ScrollAD = mongoose.model('ScrollAD');
var validator = require('../action/validator.js')

/* GET users listing. */
var list = '/list';
var detail = '/detail';
var del = '/del';
var info = '/bookInfo';
var content = '/content';



/* POST users listing. */
var addBook = '/addBook';
var updata = '/updata';
var upload1 = '/upload';


var moment = require('moment');
// import moment from 'moment'



router.get(list, function(req, res, next) {
    var obj = {};
    if (req.query.static == 'all') {
        obj = User;
    } else if (req.query.static == 'scrollAd') {
        obj = ScrollAD;
    }
    obj.find({}, function(err, docs) {
        if (err) {
            res.end('Error');
            return next();
        }

        res.json(docs);
    })
})

router.get(detail, function(req, res, next) {
    var obj = {};
    if (req.query.static == 'all') {
        obj = User;
    } else if (req.query.static == 'scrollAd') {
        obj = ScrollAD;
    }
    obj.find({ "_id": req.query.id }, function(err, docs) {
        if (err) {
            res.end('Error');
            return next();
        }
        res.json(docs[0]);
    })
})
router.get(del, (req, res, next) => {
    var obj = {};
    if (req.query.static == 'all') {
        obj = User;
    } else if (req.query.static == 'scrollAd') {
        obj = ScrollAD;
    }
    obj.remove({ _id: req.query.id }, (err, docs) => {
        if (err) {
            res.end('Error');
            return next();
        }
        res.send("success")
    })
})


router.post(addBook, function(req, res, next) {
    if (!validator.isNull(req.body.bookname) || !validator.isNull(req.body.bookauthor) || !validator.isNull(req.body.booktype) || !validator.isNull(req.body.bookinfo)) {
        res.end('参数不能为空');
        return;
    };
    var obj = {};
    if (req.body.static == 'all') {
        obj = User;
    } else if (req.body.static == 'scrollAd') {
        obj = ScrollAD;
    }

    var addObj = new obj({
        bookname: req.body.bookname,
        bookauthor: req.body.bookauthor,
        booktype: req.body.booktype,
        bookinfo: req.body.bookinfo,
        bookAddress: req.body.bookAddress,
        bookimg: req.body.bookimg,
        time: moment(req.body.time).format('YYYY-MM-DD')
    });

    addObj.save(function(err) {
        if (err) {
            res.end('Error');
            return;
        }
        res.end('保存成功');
    });
})

router.post(updata, function(req, res, next) {
    if (!validator.isNull(req.body.bookname) || !validator.isNull(req.body.bookauthor) || !validator.isNull(req.body.booktype) || !validator.isNull(req.body.bookinfo)) {
        res.end('参数不能为空');
        return;
    }
    var obj = {};
    if (req.body.static == 'all') {
        obj = User;
    } else if (req.body.static == 'scrollAd') {
        obj = ScrollAD;
    }
    var updataObj = new obj({
        _id: req.body.id,
        bookname: req.body.bookname,
        bookauthor: req.body.bookauthor,
        booktype: req.body.booktype,
        bookinfo: req.body.bookinfo,
        bookAddress: req.body.bookAddress,
        bookimg: req.body.bookimg,
    });
    obj.update({ "_id": req.body.id }, updataObj, function(err, docs) {
        if (err) {
            res.end('Error');
            return;
        }
        res.json('success');
    })
})

var EPub = require("epub");
router.get(info,(req, res, next) => {
    var epub = new EPub("../public/story/滚滚红尘美利坚-1500206657610.epub", "/imagewebroot/", "/articlewebroot/");
        epub.on("error", function(err){
        throw err;
    });
    epub.on("end", function(err){
        // res.json(epub)
        res.json({'metadata':epub.metadata,'toc':epub.toc});
    });
    epub.parse();
})
router.get(content,(req, res, next) => {
    var epub = new EPub("../public/story/滚滚红尘美利坚-1500206657610.epub", "/imagewebroot/", "/articlewebroot/");
        epub.on("error", function(err){
        throw err;
    });
    epub.on("end", function(err){
        epub.getChapterRaw('id289352', function(err, data){
            if(err){
                console.log(err);
                return;
            }
            res.json(data)
        });
    });
    epub.parse();
})
router.get('/img',(req, res, next) => {
    var epub = new EPub("../public/story/滚滚红尘美利坚-1500206657610.epub", "/imagewebroot/", "/articlewebroot/");
        epub.on("error", function(err){
        throw err;
    });
    epub.on("end", function(err){
        epub.getImage('cover', function(error, img, mimeType){
            if(err){
                console.log(err);
                return;
            }
            res.json(img)
        });
    });
    epub.parse();
})



//上传文件
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../public/story/')
    },
    filename: function(req, file, cb) {
        var fileFormat = (file.originalname).split('.');
        cb(null, fileFormat[0] + "-" + Date.now() + '.' + fileFormat[fileFormat.length - 1]);
    }
});
var upload = multer({
    storage: storage
});

router.post(upload1, upload.single('myfile'), function(req, res, next) {
    var file = req.file;
    file.path = file.path.substring(9,file.path.length);
    res.send(file);
});









module.exports = router;