<template>
	<div id="classify" class="clearfix">
		<classify-left></classify-left>	
		<classify-top></classify-top>	
		<classify-bottom></classify-bottom>
	</div>
</template>

<script>
import ClassifyLeft from '@/components/classify/ClassifyLeft'
import ClassifyTop from '@/components/classify/ClassifyTop'
import ClassifyBottom from '@/components/classify/ClassifyBottom'
export default{
	name: 'classify',
	components: {
		ClassifyLeft, ClassifyTop, ClassifyBottom
	}
}
</script>

<style lang="less" scoped>

	// .clearfix:after{content:"";clear:both;display:block;}

</style>

