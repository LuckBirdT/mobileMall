<template>
	<div  class="goodsdisplay-wrapper">
		<div class="goodsdisplay-wrapper-item" v-for="(item,index) in items"> 
			<goods-dsiplay-item :goods="item"></goods-dsiplay-item>
		</div>
	</div>
</template>

<script>
	import goodsDsiplayItem from './goodsDisplayItem.vue'
	export default{
		props:{
			items:{
				type:Array,
				default(){return []}
			}
		},
		components:{
			goodsDsiplayItem
		}
	}
</script>

<style>
	.goodsdisplay-wrapper{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.goodsdisplay-wrapper-item{
		width: 50%;
		box-sizing: border-box;
		padding: 10px;
	}
</style>
