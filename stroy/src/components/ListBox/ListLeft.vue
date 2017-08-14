<template>
    <div class="listLeft">
        <a><img :src="book.bookimg"></a>
        <h2 class="name">{{book.bookname}}</h2>
        <p class="type">{{book.booktype}}</p>
        <p class="author">{{book.bookauthor}}</p>
        <p class="info">{{book.bookinfo}}</p>
        <button>书籍详情</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            book: {
                'imgPath': "../../../static/images/0.jpeg",
                'name': "超神机械师",
                'type': "玄幻",
                'author': '佚名',
                'info': '圣诞节疯狂双方咖啡教室里的房间里撒解放路撒解放大师傅水电费就撒范德萨发神经范德萨发'
            }
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            $.get(this.$request.list,{static:'all'},res => {
            this.book = res.splice(0,1)[0];
        })
        }
    }
}
</script>
<style lang="less" scoped>
.listLeft {
    width: 100%;
    height: 100%;
    background: #F5F3ED;
    border-top: 1px solid rgba(0, 0, 0, 0);
    position: relative;
    a {
        display: block;
        width: 86px;
        height: 112px;
        margin: 27px auto;
        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
    p, h2 {
        text-align: center;
        font: 16px/1 "微软雅黑";
    }
    h2.name {
        margin-top: 20px;
    }
    p.type {
        font-size: 12px;
        color: red;
        margin-top: 13px;
    }
    p.author {
        font-size: 13px;
        margin-top: 8px;
    }
    p.info {
        font-size: 10px;
        padding: 0 15px 0 20px;
        margin-top: 14px;
        color: #4F5775;
        line-height: 1.7;
        text-align: left;

        color: #000000;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-all;

    }
    button {
        width: 100px;
        height: 30px;
        border-radius: 15px;
        background: #B0231C;
        position: absolute;
        bottom: 20px;
        left: 50%;
        margin-left: -50px;
        color: #fff;
        font-size: 13px;
    }
}
</style>
