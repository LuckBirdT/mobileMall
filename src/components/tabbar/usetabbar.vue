<template>
	<tabbar>
		<tabbar-item path="/home">
			<img slot="img-active" src="../../assets/img/tabbar/home-2-fill.svg"/>
			<img slot="img-deactive" src="../../assets/img/tabbar/home-2-line.svg" />
			<p slot="text">首页</p>
		</tabbar-item>
		<tabbar-item path="/category">
			<img slot="img-active" src="../../assets/img/tabbar/file-list-fill.svg"/>
			<img slot="img-deactive" src="../../assets/img/tabbar/file-list-line.svg" />
			<p slot="text">分类</p>
		</tabbar-item>
		<tabbar-item path="/cart">
			<img slot="img-active" src="../../assets/img/tabbar/shopping-cart-2-fill.svg"/>
			<img slot="img-deactive" src="../../assets/img/tabbar/shopping-cart-2-line.svg" />
			<p slot="text">购物车</p>
		</tabbar-item>
		<tabbar-item path="/profile">
			<img slot="img-active" src="../../assets/img/tabbar/profile-fill.svg"/>
			<img slot="img-deactive" src="../../assets/img/tabbar/profile-line.svg" />
			<p slot="text">我的</p>
		</tabbar-item>
	</tabbar>
</template>

<script>
	import tabbar from './tabbar.vue'
	import tabbarItem from './tabbarItem.vue'
	export default{
		components:{
			tabbar,
			tabbarItem
		}
	}
</script>

<style>
</style>
