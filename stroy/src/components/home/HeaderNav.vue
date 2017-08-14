<template>
    <header id='header-nav'>
        <div class="nav">
            <div class="header-left">
            <i class="iconfont icon-sandaogangwutianchong" style="float:left;font-size: 22px;padding:0 18px;"></i>
                作品分类
            </div>
            <div class="header-center">
                <a v-for="item in headerList">{{item}}</a>
            </div>
            <div class="header-right">
            	sdfsdf
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: "header-nav",
    data() {
        return {
            headerList: ['全部作品', '排行', '完本', '免费']
        }
    }
}
</script>
<style lang="less" scoped>
@white: rgba(255, 255, 255, 0.95);
@leftWidth: 216px;
#header-nav {
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, 0.75);
    color: @white;
    font: 18px/40px '微软雅黑', arial;
    div.nav{
        width: 1200px;
        margin: 0 auto;
        div.header-left {
            display: inline-block;
            width: @leftWidth;
            background: rgba(0, 0, 0, 0.4);
        }
        div.header-center {
        	display: inline-block;
        	width: 750px;
        	a {
        		color: @white;
        		padding-left: 50px;
        	}
        }
        div.header-right {
        	display: inline-block;
        	width: 50px;
        }
    }
}
</style>
