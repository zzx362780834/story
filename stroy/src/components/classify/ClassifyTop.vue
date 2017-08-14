<template>
	<div class="classify-top">
		<scroll-top></scroll-top>
		<div class="top-new">
			<h3>上山打老虎额新书强</h3>
			<a >[咨询] 大神宅猪新作发布</a>
			<a >[咨询] 大神宅猪新作发布</a>
			<a >[咨询] 大神宅猪新作发布</a>
			<a >[咨询] 大神宅猪新作发布</a>
			<a >[咨询] 大神宅猪新作发布</a>
		</div>
	</div>
</template>

<script>
import ScrollTop from '@/components/classify/ScrollTop'
export default {
	name: 'classify-top',
	components :{
		ScrollTop
	}
}
</script>

<style lang="less" scoped>
.classify-top {
	float: left;
	height: 270px;
	width: 984px;
	div.top-new {
		float: left;
		width: 200px;
		height: 228px;
		margin: 10px 0;
		border: 1px solid #ccc;
		padding: 10px;
		h3 {
			font-size: 16px;
			padding-bottom: 10px;
			text-align: center;
		}
		a {
			font-size: 15px;
			line-height: 30px;
		}
	}
}
</style>
