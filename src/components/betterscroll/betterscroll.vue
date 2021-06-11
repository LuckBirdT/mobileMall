<template>
	<div class="warpper" ref="betterscrollwrapper">
	 <!-- ref如果绑定的是组件，那么this.$refs.refname获取的就是一个组件对象，
	 ref如果绑定的是普通元素，那么this.$refs.refname获取的就是一个元素对象 -->
	  <div class="content">
	    <slot></slot>
	  </div>
	</div>
</template>

<script>
	import betterscroll from 'better-scroll'
	export default{
		props:{
			proBeValue:{
				type:Number,
				default:0
			},
			pullUpLoadValue:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				scroll:''
			}
		},
		mounted(){
			//betterscroll对象有俩个参数
			this.scroll=new betterscroll(this.$refs.betterscrollwrapper,{
				//如果这里不设置true，那么betterscroll中的div的点击事件就无法触发
				click:true,
				//probeType属性有三个值  0,1 表示不监听 ，2表示监听，但不监听惯性滑动  3表示实时监听，也会监听惯性滑动
				probeType:this.proBeValue, 
				//监听底部上拉，传入布尔值
				pullUpLoad:this.pullUpLoadValue
			})
			 //只有当这里设置为true才会监听
			if(this.pullUpLoadValue){
				//监听底部上拉
			  this.scroll.on('pullingUp',()=>{ 
			  this.$emit("betterScrollPullingUp");
			})
			}
			//只有当这里设置的值大于1才会监听位置
			if(this.proBeValue>1){
				this.scroll.on('scroll',(position)=>{ //监听位置
				  this.$emit('scrollPosition',position.y);
				})
			}
			
		},
		methods:{
			refresh(){
				//重新刷新可滑动高度
				this.scroll&&this.scroll.refresh()
			},
			finishPull(){
				//完成底部上拉
			  this.scroll&&this.scroll.finishPullUp();
			},
			backToTop(){
				//返回顶部
				this.scroll&&this.scroll.scrollTo(0,0,1000)
			}
		}
	}
</script>

<style>
</style>
