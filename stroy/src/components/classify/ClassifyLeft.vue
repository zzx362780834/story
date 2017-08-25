<template>
    <div id="classify-left">
        <ul>
            <li v-for="item in classify" @click="typeClick(item)">
                <i class="iconfont icon-tiyu" style="float:left;font-size: 26px;padding:15px 8px 8px 17px;"></i>
                <a class="classify-name">{{item.name}}</a>
                <a class="classify-length">{{item.length}}</a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'classify-left',
    data() {
        return {
            classify: [{
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            },{
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }, {
                'name': '玄幻',
                'length': 1231
            }]
        }
    },
    methods:{
        typeClick(val){
            this.$router.push(`/home/pageType?static='sixiang'`);
        }
    }
}
</script>

<style lang="less" scoped>
@leftWidth: 214px;
#classify-left {
    float: left;
    border: 1px solid #ccc;
    width: @leftWidth;
    height: 420px;
    font: 18px/1.2 '微软雅黑', arial;
    li {
        width: 50%;
        height: 60px;
        a {
            font-size: 13px;
            display: block;
            width: 50px;
            text-align: left;
            float: left;
        }
        a.classify-name {
            margin-top: 16px;
        }
    }
}
</style>
