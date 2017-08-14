<template>
    <div id="addBook">
        <div class="form-group">
            <label for="exampleInputEmail1">书名</label>
            <input class="form-control" id="exampleInputEmail1" placeholder="请输入" v-model="bookname">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">作者</label>
            <input class="form-control" id="exampleInputEmail1" placeholder="请输入" v-model="bookauthor">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">类型</label>
            <input class="form-control" id="exampleInputEmail1" placeholder="请输入" v-model="booktype">
        </div>
        <div class="form-group">
            <a style="position: relative;overflow: hidden;float: left;line-height: 33px;margin-right: 10px;color: #59646F;">小说地址    
                <input type="file" name="myfile" id="file" @change='onUpload($event,1)' style="position: absolute;top:0;right: 0;opacity: 0;">
            </a>
            <input class="form-control" id="exampleInputEmail1" placeholder="请输入" v-model="bookAddress">
        </div>
        <div class="form-group">
            <a style="position: relative;overflow: hidden;float: left;line-height: 33px;margin-right: 10px;color: #59646F;">图片地址    
                <input type="file" name="myfile" id="file1" @change='onUpload($event,2)' style="position: absolute;top:0;right: 0;opacity: 0;">
            </a>
            <input class="form-control" id="exampleInputEmail1" placeholder="请输入" v-model="bookimg">
        </div>
        <div class="form-group">
            <label for="exampleInputEmail" style="float:left;margin-right: 6px;" v-model="bookinfo">简介</label>
            <textarea id="exampleInputEmail" class="form-control" rows="8" v-model="bookinfo">{{bookinfo}}</textarea>
        </div>
        <button type="button" class="btn btn-success" @click="addBook">添加</button>
    </div>
</template>
<script>
export default {
    props: ['static'],
    data() {
        return {
            bookname: "",
            bookauthor: "",
            booktype: "",
            bookinfo: "",
            bookAddress: '',
            bookimg: "",
            id: ""
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.id = this.$route.query.id;
            if (this.id) {
                console.log(12121,this.static)
                $.get(this.$request.detail, {
                    aaa: "sdfsdfds",
                    static: this.static,
                    id: this.id
                }, res => {
                    this.bookname = res.bookname;
                    this.bookauthor = res.bookauthor;
                    this.booktype = res.booktype;
                    this.bookinfo = res.bookinfo;
                    this.bookAddress = res.bookAddress;
                    this.bookimg = res.bookimg;
                })
            }
        },
        onUpload(e, type) {
            var e = e || window.event,
                target = e.target || e.srcElement;

            var path = target.value;
            var pos1 = path.lastIndexOf("\\");

            var pos2 = path.lastIndexOf(".");
            var pos = path.substring(pos1 + 1, pos2);
            // console.log(11,path,pos1,path.substring(pos1 + 1, pos2))

            var formData = new FormData();
            formData.append("myfile", target.files[0]);
            formData.append("name", "ddd");
            var _this = this;
            var name = path.substring(pos1 + 1, pos2);
            console.log(name)

            $.ajax({
                url: _this.$request.upload,
                type: 'POST',
                // beforeSend: function(request) {
                //     // request.setRequestHeader("Content-Type", "application/json;charset=utf-8");
                //     request.setRequestHeader("name", "sdsdfs" );
                // },
                cache: false,
                data: formData,
                processData: false,
                contentType: false,
                success: (res) => {
                    type == 1 ? _this.bookAddress = res.path : _this.bookimg = res.path;
                },
                error: function(err) {
                    alert("网络错误");
                }
            });
        },
        addBook() {
            if (!this.$validator.isNull(this.bookname) || !this.$validator.isNull(this.bookauthor) || !this.$validator.isNull(this.booktype) || !this.$validator.isNull(this.bookinfo)) {
                alert("请输入内容");
                return;
            }
            var _this = this;
            if (this.id) {
                //修改
                $.ajax({
                    url: this.$request.updata, // 处理的请求路径
                    data: {
                        id: this.id,
                        static: this.static,
                        bookname: this.bookname,
                        bookauthor: this.bookauthor,
                        booktype: this.booktype,
                        bookinfo: this.bookinfo,
                        bookAddress: this.bookAddress,
                        bookimg: this.bookimg,
                        time: new Date()
                    },
                    type: "post", // 此处发送的是PUT请求（可变更为其他需要的请求）
                    dataType: "json", // 返回的数据类型为json类型
                    success: function(data) {
                        _this.$router.back();
                    },
                    error: function(data) {

                    }
                });
            } else {
                // 添加
                console.log(1212,this.static);
                $.post(this.$request.addbook, {
                    static: this.static,
                    bookname: this.bookname,
                    bookauthor: this.bookauthor,
                    booktype: this.booktype,
                    bookinfo: this.bookinfo,
                    bookAddress: this.bookAddress,
                    bookimg: this.bookimg,

                    time: new Date()
                }, res => {
                    _this.$router.back();
                    // console.log(res)
                })
            }




        }

    }
}
</script>
<style scoped>
#addBook .form-group {
    float: left;
    margin: 10px 10px;
}

#addBook input.form-control {
    display: inline-block;
    width: 300px;
}

#addBook textarea {
    width: 1021px;
}

#addBook .btn {
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: 100px;
}
</style>
