var api = 'users'
module.exports = {
	list: `/${api}/list`,//全部图书
	addbook: `/${api}/addbook`,//添加书
	detail: `/${api}/detail`,//图书详情
	updata: `/${api}/updata`,//修改详情
	del: `/${api}/del`,//删除
	upload: `/${api}/upload`,//上传
	bookinfo: `/${api}/bookinfo`,//获取书籍详情
	content: `/${api}/content`,//获取书籍内容
}