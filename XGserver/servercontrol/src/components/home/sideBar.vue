<template>
    <div class="sideBar">
        <ul>
            <li><router-link to="/home/homelist?static=all">添加目录</router-link></li>
            <li><router-link to="/home/adlist?static=scrollAd">添加广告</router-link></li>
        </ul>
    </div>
</template>
<style scoped>
.sideBar{
    width: 120px;
    height: 100%;
}


.sideBar ul li {
    width: 100%;
    height: 40px;
}

.sideBar a {
    color: #fff;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-indent: 30px;
}
</style>
