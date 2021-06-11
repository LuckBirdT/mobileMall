<template>
	<div class="category-right-part">
		<betterscroll class="category-right-part-betterscroll" ref="categoryRightBetterscroll">
			<div class="category-right-part-item-wrapper">
				<div v-for="(item,index) in items" :key="item.title+index" class="category-right-part-item">
					<div > <img @load="categoryImgLoad()" :src="item.image"/> </div>
					<div>{{item.title}}</div>
				</div>
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
				refreshCount:0
			}
		},
		components:{
			betterscroll
		},
		methods:{
			//图片加载完成刷新betterscroll
			categoryImgLoad(){
				//控制刷新次数
				this.refreshCount++
				if(this.refreshCount%5==0){
					this.$refs&&this.$refs.categoryRightBetterscroll.refresh()
				}
			}
		}
	}
</script>

<style>
	.category-right-part{
		height: 100vh;
	}
	.category-right-part-item-wrapper{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.category-right-part-item{
		width: 50%;
	}
	.category-right-part-item img{
		width: 70%;
	}
	.category-right-part-betterscroll{
		height: calc(100% - 93px);
		overflow: hidden;
	}
</style>
