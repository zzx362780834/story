<template>
    <div id="home">
        <header-nav></header-nav>
        <div class="container-fluid" id="container-fluid">
            <div class="row" style="position: relative;">
                <div id="sideBar"><side-bar></side-bar></div>
                <div id="homeList"><router-view :static='$route.query.static'></router-view></div>
            </div>
        </div>
    </div>
</template>
<script>
import headerNav from "@/components/home/headerNav"
import sideBar from "@/components/home/sideBar"
export default {
    components: {
        headerNav, sideBar
    },
    mounted() {
        // console.log(this.$route.query.static)
    }
}
</script>
<style scoped>
#home{
	/*position: relative;*/
}
#container-fluid{
	position: absolute;
	top: 50px;
	left: 0;
}
#sideBar {
    width: 100px;
    height: calc(100vh - 50px);
    background: #ccc;
    overflow-x: hidden;
}
#homeList {
    position: absolute;
    top: 0;
    left: 100px;
    width: calc(100vw - 100px);
    height: calc(100vh - 50px);
    overflow-x:hidden; 
}
</style>