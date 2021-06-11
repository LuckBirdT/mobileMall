<template>
  <div id="app">
		<!-- keepalive状态保活,为解决详情页的轮播图片不切换的问题,增加exclude属性,排除详情页的保活 -->
		<!-- exclude里放的是name值,因此被放进去的vue组件必须有name属性 -->
		<keep-alive exclude="detail">
			<router-view/>
		</keep-alive>
		<usetabbar class="app-usetabbar"></usetabbar>
  </div>
</template>
<script>
	//组件
	import usetabbar from 'components/tabbar/usetabbar.vue'
	
	
	//对象
	export default{
		components:{
			usetabbar
		}
	}
</script>
<style>
	@import url("./assets/css/base.css");
	.app-usetabbar{
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
	}
</style>
