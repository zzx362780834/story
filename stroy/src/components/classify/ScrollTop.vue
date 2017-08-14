<template>
    <div class="scroll-top">
        <ul id="scroll-ul" style="left: 0">
            <li v-for="item in obj">
                <img :src="item.bookimg">
            </li>
        </ul>
        <div class="scroll-a">
            <a v-for="(item,index) in obj" :class="{active: index == count,last: index == 4}"  @click="changeImg(index)">{{item.bookname}}</a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                count: 0,
                timer: null,
                obj: []
            }
        },
        mounted() {
            this.init();
            this.scroll();
        },
        methods: {
            init(){
                $.get(this.$request.list,{static:'scrollAd'},res => {
                    this.obj = res;
                })
            },
            changeImg(index) {
                clearInterval(this.timer);
                this.count = index;
                var scrollDom = document.getElementById('scroll-ul');
                scrollDom.style.left = -740 * this.count + "px";
                this.scroll();
            },
            scroll() {
                var _this = this;
                var scrollDom = document.getElementById('scroll-ul');
                this.timer = setInterval(function() {
					if (_this.count >= 4) {
                        _this.count = 0;
                    }else {
                    	_this.count++;
                    }
                    scrollDom.style.left = -740 * _this.count + "px";   
                }, 2000)
            }
        }
}
</script>
<style lang="less" scoped>
@scrollw: 740px;
@scrollh: 250px;
.scroll-top {
    width: @scrollw;
    height: @scrollh;
    margin: 10px;
    float: left;
    position: relative;
    overflow: hidden;
    font-size: 16px;
    ul {
        position: absolute;
        top: 0;
        left: 0;
        width: 3700px;
        li {
            width: @scrollw;
            height: @scrollh;
            float: left;
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
        }
    }
    div.scroll-a {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 36px;
        background: rgba(0, 0, 0, 0.6);
        a {
            float: left;
            display: inline-block;
            width: 20%;
            border-right: 2px solid gray;
            box-sizing: border-box;
            line-height: 36px;
            color: #fff;
            cursor: pointer;
        }
        a.last {
            border-right: none;
        }
        a.active {
        	background: red;
        }
    }
}
</style>
