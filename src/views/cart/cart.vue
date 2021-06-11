<template>
	<div class="cart-wrapper">
		<cart-topbar></cart-topbar>
		<cart-goods-display :items="getCartList"></cart-goods-display>
		<cart-sum-bar @statement="toStatement()"></cart-sum-bar>
	</div>
</template>

<script>
	//子组件
	import cartTopbar from 'views/cart/childComponents/cartTopbar.vue'
	import cartGoodsDisplay from 'views/cart/childComponents/cartGoodsDisplay.vue'
	import cartSumBar from 'views/cart/childComponents/cartSumBar.vue'
	
	//数据
	import {mapGetters} from 'vuex'
	
	//对象
	export default{
		components:{
			cartTopbar,
			cartGoodsDisplay,
			cartSumBar
		},
		computed:{
			...mapGetters(['getCartList'])
		},
		methods:{
			toStatement(){
				//当没有商品时
				if(this.getCartList.length<=0){
					this.$toast.dispalyToast('还没有商品哦!',1000)
				}
				else{
					this.$toast.dispalyToast('结算成功,马上到家!',1000)
					//清空购物车
					this.$store.commit('clearCartList')
				}
			}
		}
	}
</script>

<style>
	.cart-wrapper{
		height: 100vh;
	}
</style>
