<template>
	<div class="read">
		<div id="prev" onclick="Book.prevPage();" class="arrow">‹</div>
    <div id="area"></div>
    <div id="next" onclick="Book.nextPage();" class="arrow">›</div>
	</div>
</template>

<script>
export default{
  props: ['id'],
	data(){
		return{
			
		}
	},
	mounted(){ 
    $.get(`${this.$request.content}?id=${this.id}`, res => {

    })
	}
}
</script>
<style>
body {
  overflow: hidden;
}

#main {
  position: absolute;
  width: 100%;
  height: 100%;
}

#area {
  width: 80%;
  height: 80%;
  margin: 5% auto;
  max-width: 1250px;
}

#area iframe {
  border: none;
}

#prev {
  left: 40px;
}

#next {  
  right: 40px;
}

.arrow {
  position: absolute;
  top: 50%;
  margin-top: -32px;
  font-size: 64px;
  color: #E2E2E2;
  font-family: arial, sans-serif;
  font-weight: bold;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.arrow:hover {
  color: #777;
}
 
.arrow:active {
  color: #000;
}

#loader {
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 50%;
  margin: -33px 0 0 -33px;
}

#toc {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
<style lang="less" scoped>













          body {
            overflow: hidden;
          }

          #main {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          #area {
            width: 80%;
            height: 80%;
            margin: 5% auto;
            max-width: 1250px;
          }

          #area iframe {
            border: none;
          }

          #prev {
            left: 40px;
          }

          #next {
            right: 40px;
          }

          .arrow {
            position: absolute;
            top: 50%;
            margin-top: -32px;
            font-size: 64px;
            color: #E2E2E2;
            font-family: arial, sans-serif;
            font-weight: bold;
            cursor: pointer;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
          }

          .arrow:hover {
            color: #777;
          }

          .arrow:active {
            color: #000;
          }

</style>