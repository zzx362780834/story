<template>
  <div class="readinfo">
    <header-nav></header-nav>
    <div>
      <a class="img" @click="toReadinfo(item)"><img :src='item.bookimg'></a>
      <h2 class="bookname">{{bookinfo.bookname}}</h2>
      <p class="bookinfo">{{item.bookinfo}}</p>
      <p class="tab"><a class="bookauthor">{{item.bookauthor}}</a><span>{{item.booktype}}</span></p>
    </div>
  </div>
</template>
<script>
import HeaderNav from '@/components/home/HeaderNav'
export default {
  data() {
    return {}
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
    console.log(this.bookinfo)
    // $.get(`${this.$request.bookinfo}?address=${this.address}`, res => {

    // })
  }
}

</script>
