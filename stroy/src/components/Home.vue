<template>
    <div class="home">
        <header-nav></header-nav>
        <div class="home-body">
            <classify></classify>
            <list></list>
            <list></list>
            <list></list>
        </div>
    </div>
</template>
<script>
import HeaderNav from '@/components/home/HeaderNav'
import Classify from '@/components/home/Classify'
import List from '@/components/home/List'
export default {
    name: 'home',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        HeaderNav,
        Classify,
        List
    }
}
</script>
<style scoped>
.home-body {
    width: 1200px;
    margin: 0 auto;
}
</style>
