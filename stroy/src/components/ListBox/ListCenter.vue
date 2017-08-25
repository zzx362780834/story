<template>
    <div class="listCenter">
        <ul>
            <li v-for="(item,index) in list" :class="{right:index%2!=0,last:index==4||index==5}">
                <div>
                    <a class="img" @click="toReadinfo(item)"><img :src='item.bookimg'></a>
                    <h2 class="bookname">{{item.bookname}}</h2>
                    <!-- <p class="bookinfo">{{item.bookinfo}}</p> -->
                    <p class="tab"><a class="bookauthor">{{item.bookauthor}}</a><span>{{item.booktype}}</span></p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    mounted() {
        $.get(this.$request.list,{static:'sixiang'},res => {
            this.list = res.splice(0,6);
        })
    },
    data() {
        return {
            list: []
        }
    },
    methods:{
        toReadinfo(val){
            this.$store.dispatch('changeBookinfo', val);

            this.$router.push(`/home/readinfo`);
            
        }
    }
}
</script>
<style lang="less" scoped>
@imgwidth: 98px;
.listCenter {
    width: 100%;
    height: 100%;
    ul {
        padding-left: 30px;
        li {
            width: 340px;
            float: left;
            border-bottom: 1px solid #ccc;
            padding: 20px 0;
            div {
                height: @imgwidth;
                
                line-height: 1;
                a.img {
                    display: block;
                    width: 72px;
                    height: @imgwidth;
                    float: left;
                    padding-right: 10px;
                    img {
                        display: block;
                        width: 100%;
                        height: 100%;
                    }
                }
                h2.bookname {
                    font-size: 15px;
                }
                p.bookinfo {
                    font-size: 10px;
                    color: gray;
                    text-align: left;
                    height: 51px;
                    line-height: 25px;
                    padding-top: 10px;

                    color: #000000;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    word-break: break-all;
                }
                p.tab {
                    height: 20px;
                    line-height: 20px;
                    color: #ccc;
                    font-size: 12px;
                    a.bookauthor {
                        color: #ccc;
                    }
                    span {
                        border: 1px solid #ccc;
                        float: right;
                        display: block;
                        width: 56px;
                        text-align: center;
                    }
                }
            }
        }
        li.right {
            padding-left: 30px;
        }
        li.last {
            border-bottom: none;
            padding-bottom: 0;
        }
    }
}
</style>
