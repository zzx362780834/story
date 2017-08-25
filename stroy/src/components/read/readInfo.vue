<template>
    <div class="readinfo">
        <header-nav></header-nav>
        <div>
            <a class="img"><img :src='bookinfo.bookimg'></a>
            <h2 class="bookname">{{bookinfo.bookname}}</h2>
            <p class="tab"><a class="bookauthor">{{bookinfo.bookauthor}}</a><span>{{bookinfo.booktype}}</span></p>
            <div>
                <a @click="readme">立即阅读</a>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderNav from '@/components/home/HeaderNav'
export default {
    data() {
        return {
            address: ""
        }
    },
    components: {
        HeaderNav
    },
    computed: {
        bookinfo() {
            return this.$store.state.bookinfo;
        }
    },
    mounted() {
        // this.address = this.$route.query.address
        // this.address = this.$router.query.address;

        // $.get(`${this.$request.bookinfo}?address=${this.address}`, res => {

        // })
    },
    methods: {
        readme() {
            var id = 'id289352';
            console.log(this.bookinfo.bookAddress)
            this.$router.push(`/home/read?address=${this.bookinfo.bookAddress}&id=${this.bookinfo.bookList[0].id}`);
        }

    }
}

</script>

<style lang="less" scoped>
.readinfo{
    // width: 1000px;
    margin: 10px auto;
}
</style>
