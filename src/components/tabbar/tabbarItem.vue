<template>
	<div class="tabbar-item" @click="click()">
		<div class="tabbar-item-part1">
			<slot name="img-active" v-if="isActive">
				<img src="../../assets/img/tabbar/home-2-fill.svg" />
			</slot>
			<slot name="img-deactive" v-else>
				<img src="../../assets/img/tabbar/home-2-line.svg" />
			</slot>
		</div>
		<div class="tabbar-item-part2">
			<slot name="text">
				<p>首页</p>
			</slot>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		props:{
			path:{
				type:String,
				default:''
			}
		},
		computed:{
			isActive(){
				//route表示当前活跃的路由对象
				//indexof 方法
				return !this.$route.path.indexOf(this.path)
			}
		},
		methods:{
			click(){
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tabbar-item{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
