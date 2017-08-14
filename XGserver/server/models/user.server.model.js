var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	bookname: String,
	bookauthor: String,
	booktype: String,
	bookinfo: String,
	time: String,
	bookAddress:String,
    bookimg:String,

});

var scrollAD = new mongoose.Schema({
	bookname: String,
	bookauthor: String,
	booktype: String,
	bookinfo: String,
	time: String,
	bookAddress:String,
    bookimg:String,
})

mongoose.model('User', UserSchema);
mongoose.model('ScrollAD', scrollAD);