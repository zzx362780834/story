<template>
    <div class="listRight">
        <ul>
            <li v-for="(item, index) in list" @mouseover="count=index">
                <div class="unfold" v-if="count == index">
                    <a class="img"><img :src="item.bookimg"></a>
                    <h2 class="num">NO.{{index+1}}</h2>
                    <h2 class="bookname">{{item.bookname}}</h2>
                    <p class="td">123123潜力值</p>
                    <p class="type"><a>{{item.bookType}}</a><a>{{item.bookAuthor}}</a></p>
                </div>
                <div class="close" v-else>
                    <a class="num">{{index+1}}</a>
                    <a class="bookname">{{item.bookname}}</a>
                    <a class="td">123123</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            count: 0,
            list: [],
        }
    },
    mounted() {
        $.get(this.$request.list,{static:'all'},res => {
            this.list = res.splice(0,10);
        })
    },

}
</script>
<style lang="less" scoped>
.listRight {
    width: 100%;
    height: 100%;
    li {
        border-bottom: 1px solid #ccc;
        width: 100%;
        div.unfold {
            width: 100%;
            height: 91px;
            padding: 8px 0;
            h2.num {
                display: inline-block;
                padding: 0 3px;
                height: 18px;
                font-size: 16px;
                line-height: 18px;
                background: red;
                color: #fff;
            }
            h2.bookname {
                font-size: 16px;
                margin-top: 8px;
                width: 145px;
                display:inline-block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
            }
            p.td {
                font-size: 14px;
                color: red;
                margin-top: 12px;
            }
            p.type {
                margin-top: 10px;
                a {
                    color: #ccc;
                }
            }
            a.img {
                display: inline-block;
                width: 60px;
                height: 90px;
                float: right;
                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
        div.close {
            height: 31px;
            a {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                color: #535353;
            }
            a.num {
                width: 15px;
                height: 15px;
                line-height: 17px;
                background: #ccc;
                float: left;
                margin-top: 8px;
            }
            a.bookname {
                text-indent: 5px;
                width: 145px;
                text-align: left;
                display:inline-block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
            }
            a.td {
                color: #ccc;
                overflow:hidden;
            }
        }
    }
}
</style>
