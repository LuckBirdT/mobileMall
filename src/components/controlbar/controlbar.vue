<template>
	<div class="controlbar">
		<div class="controlbar-item" @click="click(index)" v-for="(item,index) in controlbarItem ">
			<div :class="{controlbarActive:currentIndex==index}">{{item}}</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				controlbarItem:['流行','新款','精选'],
				currentIndex:0
			}
		},
		methods:{
			//点击修改currentindex
			click(index){
				this.currentIndex=index;
				this.$emit('controlbarChange',index)
			},
		},
		computed:{
		}
	}
</script>

<style>
	.controlbar{
		display: flex;
		flex-direction: row;
		height: 44px;
		line-height: 44px;
		/* border-bottom: 1px rgba(100,100,100,.1) solid; */
	}
	.controlbar-item{
		flex: 1;
		padding: 0 20px 0 20px;
	}
	.controlbarActive{
		border-bottom: 1px pink solid;
		color: hotpink;
	}
</style>
