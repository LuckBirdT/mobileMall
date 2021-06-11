<template>
	<div class="home-recommend">
		<div class="home-recommend-item" v-for="(item,index) in items">
			<div class="home-recommend-item-part1"><img @load="imgLoaded" :src="item.image"/></div>
			<div class="home-recommend-item-part2">{{item.title}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			items:Array,
			default(){return []}
		},
		data(){
			return{
			}
		},
		methods:{
			imgLoaded(){
					this.$emit('recommendImgLoaded')
			}
		}
	}
</script>

<style>
	.home-recommend{
		display: flex;
	}
	.home-recommend-item{
		flex: 1;
		padding: 10px;
		border-bottom: 1px rgba(100,100,100,.1) solid;
	}
	.home-recommend-item-part1 img{
		width: 90%;
	}
</style>
