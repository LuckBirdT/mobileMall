<template>
	<div class="category-left-part">
	<betterscroll class="category-left-part-betterscroll">
			<div @click="click(index,item.maitKey)" v-for="(item,index) in items" class="category-left-part-item">
				<span :class="{categoryLeftActive:currentIndex==index}" >{{item.title}}</span>
			</div>
	</betterscroll>
		</div>
</template>

<script>
	//公共组件
	import betterscroll from 'components/betterscroll/betterscroll.vue'
	//对象
	export default{
		props:{
			items:{
				type:Array,
				default(){return[]}
			}
		},
		data(){
			return{
				currentIndex:0
			}
		},
		components:{
			betterscroll
		},
		methods:{
			click(index,maitKey){
				this.currentIndex=index
				this.$emit("requestCategoryGoods",maitKey)
			}
		}
	}
</script>

<style>
	.category-left-part{
		height: 100vh;
	}
	.category-left-part-betterscroll{
		height: calc(100% - 93px);
		overflow: hidden;
	}
	.category-left-part-item{
		height: 44px;
		line-height: 44px;
		border-bottom: 1px rgba(100,100,100,.1) solid;
	}
	.categoryLeftActive{
		padding: 0 8px 0 8px ;
		color: #FF5777;
		border-bottom: 2px hotpink solid;
	}
</style>
