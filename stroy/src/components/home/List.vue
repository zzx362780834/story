<template>
    <div class="list clearfix">
        <h2 class="h2-1">新书推荐<a>上周入库1231本</a></h2>
        <h2 class="h2-2">新人新签约书榜</h2>
        <list-left  class="list-left"></list-left>
        <list-center class="list-center"></list-center>
        <list-right class="list-right"></list-right>
    </div>
</template>
<script>
import ListLeft from '@/components/ListBox/ListLeft'
import ListCenter from '@/components/ListBox/ListCenter'
import ListRight from '@/components/ListBox/ListRight'
export default {
    components: {
        ListLeft, ListCenter, ListRight
    }
}
</script>
<style lang="less" scoped>
@leftWidth: 214px;
@centerWidth: 740px;
@rightWidth: 216px;
@height: 396px;
.list {
    margin-top: 30px;
    font-weight: 600;
    .list-left {
    	width: @leftWidth;
    	height: @height;
    	float: left;
        border-top: 1px solid #515151;
    }
    .list-center {
    	float: left;
    	width: @centerWidth;
    	height: @height;
        border-top: 1px solid #515151;
    }
    .list-right {
        float: left;
        width: @rightWidth;
        height: @height;
        border-top: 1px solid #515151;
        margin-left: 30px;
    }
    h2 {
        float: left;
        height: 20px;
        font: 20px/20px '微软雅黑';
        margin-bottom: 5px;
        a {
            font: 12px/20px '微软雅黑';
        }
    }
    h2.h2-1{
        width: @leftWidth + @centerWidth
    }
    h2.h2-2{
        width: @rightWidth;
        margin-left: 30px;
    }

}
</style>
