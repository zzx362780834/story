<template>
    <div class="homeList">
        <div class="tab-pane fade in active" id="addList">
            <div style="text-align: right;padding: 8px;">
                <a @click="traverse" type="button" class="btn btn-success ">遍历{{static}}</a>
                <a @click="addBook" type="button" class="btn btn-success ">添加</a>
            </div>
            <table class="addList" @click="operations"></table>
        </div>
    </div>
</template>
<script>
export default {
    props:['static'],
    name: "id",
    mounted() {
        this.init();
    },
    methods: {
        traverse(){

            $.get(`/index/traverse?static=${this.static}`, res => {
                console.log(res)
            })
        },
        addBook(){
            var _this = this;
            this.$router.push(`/home/addBook?static=${_this.static}`)
        },
        init() {
            $('.addList').bootstrapTable({
                url: `${this.$request.list}?static=${this.static}`,
                method: 'get',
                dataType: "json",
                pagination: true,
                pageSize: 20,
                uniqueId: '_id',
                responseHandler: function(res) {
                    console.log(res)
                    return res;
                },
                columns: [{
                    title: '书号',
                    formatter: function(value, row, index) {
                        return index + 1;
                    },
                    align: 'left',
                }, {
                    align: 'left',
                    title: '书名',
                    field: 'bookname'
                },{
                    align: 'left',
                    title: '更新时间',
                    field: 'time'
                },{
                    align: 'left',
                    title: '作者',
                    field: 'bookauthor'
                }, {
                    align: 'left',
                    title: '分类',
                    field: 'booktype'
                }, {
                    align: 'left',
                    title: '简介',
                    field: 'bookinfo',
                    formatter: function(value, row, index) {
                        return value.substring(0,20)+"···";
                    }
                }, {
                    align: 'left',
                    title: '操作',
                    field: '',
                    formatter: function(value, row, index) {
                        var btn = `
                                <a class="change">修改</a>&nbsp;&nbsp;
                                <a class="delete">删除</a>&nbsp;&nbsp;
                                `;

                        return btn;
                    }
                }]
            });
        },
        operations(e) {
            var _this = this;
            var e = e || window.event,
                target = e.target || e.srcElement;
            var className = target.className;
            var id = target.parentNode.parentNode.getAttribute('data-uniqueid');
            if (className == "delete") {
                $.get(this.$request.del,{
                    id: id,
                    static: this.static
                },res => {
                    $('.addList').bootstrapTable('removeByUniqueId', id); 
                })
            } else if (className == "change") {
                this.$router.push(`/home/addBook?id=${id}&static=${_this.static}`);
            }         
        }
    }
}
</script>
<style scoped>
</style>
