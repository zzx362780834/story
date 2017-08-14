<template>
	<div class="classify-bottom">
		<ul>
			<li v-for="item in obj">
				<img :src="item.bookimg">
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	data() {
		return{
			obj: []
		}
	},
	 mounted() {
            this.init();
        },
        methods: {
            init(){
                $.get(this.$request.list,{static:'scrollAd'},res => {
                    this.obj = res.splice(0,4);
                })
            },
        }
}
</script>

<style lang="less" scoped>
.classify-bottom {
	width: 972px;
	height: 150px;
	float: left;
	margin-left: 10px;
	li{
		float: left;
		width: 25%;
		height: 150px;
		img{
			display: block;
			width: 100%;
			height: 100%;
		}

	}
}
</style>