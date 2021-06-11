<template>
	<div class="category-wrapper">
		<category-tobar></category-tobar>
		<!-- 分类内容区 -->
		<div class="category-content-wrapper">
			<!-- 左边部分 -->
			<category-left-part @requestCategoryGoods="requestCategoryGoods"
			 class="category-content-left-item"
			 :items='categoryList'></category-left-part>
			 <!-- 右边部分 -->
			<category-right-part  :items="categoryGoodsList"
			class="category-content-right-item"></category-right-part>
		</div>
	</div>
</template>

<script>
	//子组件
	import categoryTobar from 'views/category/childComponents/categoryTopbar.vue'
	import categoryLeftPart from 'views/category/childComponents/categoryContent/categoryLeftPart.vue'
	import categoryRightPart from 'views/category/childComponents/categoryContent/categoryRightPart.vue'
	//公共组件
	
	//数据,方法
	import {getCategory,getSubCategory} from 'network/category/category.js'
	
	export default{
		data(){
			return{
				categoryList:null,
				categoryGoodsList:null
			}
		},
		components:{
			categoryTobar,
			categoryLeftPart,
			categoryRightPart
		},
		created(){
			//获取具体的商品种类
			getCategory().then(res=>{
				this.categoryList=res.data.data.category.list
				// console.log(this.categoryList)
			})
			//获取某一类的代表商品，第一次获取
			getSubCategory(3627).then(res=>{
				this.categoryGoodsList=res.data.data.list
			})
		},
		methods:{
			requestCategoryGoods(maitKey){
				//获取某一类的代表商品
				getSubCategory(maitKey).then(res=>{
					this.categoryGoodsList=res.data.data.list
				})
			}
		}
	}
</script>

<style>
	.category-content-wrapper{
		display: flex;
		flex-direction: row;
	}
	.category-content-left-item{
		flex: 1;
	}
	.category-content-right-item{
		flex: 3;
	}
</style>
