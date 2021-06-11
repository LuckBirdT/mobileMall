<template>
	<topbar>
		<div slot="topbar-left" @click="back()" class="detail-top-bar-part1">&lt; 返回</div>
		<div slot="topbar-center"  class="detail-top-bar-part2">
			<div v-for="(item,index) in list" @click="click(index)" >
				<span :class="{detailtopbaractive:currentIndex==index}">{{item}}</span>
			</div>
		</div>
	</topbar>
</template>

<script>
	import topbar from 'components/topbar/topbar.vue'
	export default{
		data(){
			return{
				list:['商品','店铺','参数','评论','推荐'],
				currentIndex:0
			}
		},
		components:{
			topbar
		},
		methods:{
			back(){
				this.$router.back()
			},
			click(index){
				this.currentIndex=index
				this.$emit('topBarSwitch',index)
			}
		}
	}
</script>

<style>
	.detail-top-bar-part1{
		background-color:lightpink;
		color: white;
	}
	.detail-top-bar-part2{
		display: flex;
	}
	.detail-top-bar-part2 div{
		flex: 1;
	}
	.detailtopbaractive{
		color: chocolate;
	}
</style>
