<template>
	<div class="home-wrapper">
		<home-topbar></home-topbar>
		<controlbar ref="topControlbar" :class="{fixedLayout:isShow}" v-show="isShow"  @controlbarChange="switchControlbar"></controlbar>
		<!-- 在组件上加事件监听需要，使用nactive -->
		<back-to-top @click.native="toTop()"  v-if="isShow"></back-to-top>
		<!-- 对于这里的pullUpLoadValue属性值，如果不加：，那么会被当成字符 -->
		<betterscroll ref="homebetterscroll" class="home-betterscroll-height"
		 :proBeValue="3"  @scrollPosition="betterScrollLocaton"
		 :pullUpLoadValue="true" @betterScrollPullingUp="betterScrollPullingUp">
			<home-carousels :items="bannerData"></home-carousels>
			<home-recommend @recommendImgLoaded="refresh" :items='homeRecommend'></home-recommend>
			<controlbar v-show="!isShow"  ref="BottomControlbar" @controlbarChange="switchControlbar"></controlbar>
			<goods-display :items='getCurrentTypeGoods'></goods-display>
		</betterscroll>
	</div>
</template>

<script>
	//子组件
	import homeTopbar from 'views/home/childComponents/homeTopbar.vue'
	import homeRecommend from 'views/home/childComponents/homeRecommend.vue'
	
	//公共组件
	import homeCarousels from 'components/carousels/carousels.vue'
	import controlbar  from 'components/controlbar/controlbar.vue'
	import betterscroll from 'components/betterscroll/betterscroll.vue'
	import goodsDisplay from 'components/goodsDisplay/goodsDisplay.vue'
	import backToTop from 'components/backToTop/backToTop.vue'
	
	//数据、方法
	import {getHomeData,getHomeGoodsList} from 'network/home/home.js'
	import {debounce}  from '@/common/debounce.js'
	
	//对象
	export default{
		components:{
			homeTopbar,
			homeCarousels,
			homeRecommend,
			controlbar,
			betterscroll,
			goodsDisplay,
			backToTop
		},
		data(){
			return {
				bannerData:null,
				homeRecommend:null,
				homeGoodsList:null,
				currentType:'pop',
				goodsList:{
				  'pop':{page:0,list:[]},
				  'new':{page:0,list:[]},
				  'sell':{page:0,list:[]}
				},
				isShow:false,
				controlBarOffsettop:1000,
				once:true,
				lastLocation:0
			}
		},
		created(){
			//向服务器请求数据，获取banner及recomend数据
			getHomeData().then(res=>{
				//获取banner数据
				this.bannerData=res&&res.data.data.banner.list
				//获取推荐数据
				this.homeRecommend=res&&res.data.data.recommend.list
				//console.log(this.homeRecommend)
			})
			
			//请求数据，获取展示商品数据,new,pop,sell
			this.getGoods('pop')
			this.getGoods('new')
			this.getGoods('sell')
		},
		methods:{
			//刷新betterscroll可滑动高度
			refresh(){
				this.$refs&&this.$refs.homebetterscroll.refresh() 
			},
			//controlbar改变时
			switchControlbar(index){
				switch(index){
					case 0 :this.currentType='pop'  ;break;
					case 1 :this.currentType='new'  ;break;
					case 2 :this.currentType='sell' ;break;
				}
				//改变两个controlbar的currentindex，使其保持一致
				this.$refs.topControlbar.currentIndex=index
				this.$refs.BottomControlbar.currentIndex=index
			},
			//封装展示商品请求
			getGoods(type){
				this.goodsList[type].page+=1;
				getHomeGoodsList(type,this.goodsList[type].page).then(res=>{
					//将新数组加入到原来的数组之中
					this.goodsList[type].list=this.goodsList[type].list.concat(res.data.data.list)
					// console.log(this.goodsList)
				})
			},
			//betterscroll底部上拉，加载数据
			betterScrollPullingUp(){
				//加载数据
				this.getGoods(this.currentType)
				//完成底部上拉
				this.$refs&&this.$refs.homebetterscroll.finishPull()
			},
			//监听betterscroll位置,控制baacktotop的显示
			betterScrollLocaton(y){
				//获取controlbar的offsetTop
				if(this.once&&-y<30){
					this.$options.methods.getOffsetTop(this)
					this.once=false
				}
				//监控属性isshow
				this.isShow= (-y>=this.controlBarOffsettop)?true:false;
			},
			//backtotop组件返回顶部
			toTop(){
				this.$refs&&this.$refs.homebetterscroll.backToTop()
			},
			//获取controlbar的、offsettop值
			//由于这个函数又在methods里面的函数调用，因此它本身的this已不是指向组件对象，因此需要传入
			getOffsetTop(obj){
				obj.controlBarOffsettop=obj.$refs.BottomControlbar.$el.offsetTop
				// console.log(obj.$refs.BottomControlbar.$el.offsetTop)
			}
		},
		mounted(){
			//使用防抖函数处理商品图片的加载
			let debounceRefresh=debounce(this.$refs.homebetterscroll.refresh,500)
			this.$bus.$on('goodsDisplayImgLoaded',()=>{
				debounceRefresh()
			})
		},
		computed:{
			//将当前类型的商品返回
			getCurrentTypeGoods(){
				return this.goodsList[this.currentType].list
			}
		},
		activated(){
			//路由活跃时触发,恢复到上一次离开时的位置x,y,时间
			this.$refs.homebetterscroll.refresh()
			this.$refs.homebetterscroll.scroll.scrollTo(0,this.lastLocation,0)
			// console.log(this.lastLocation)
		},
		deactivated(){
			//路由失活时触发,保存离开时的位置
			this.lastLocation=this.$refs.homebetterscroll.scroll.y
			// console.log(this.lastLocation)
		}
	}
</script>

<style>
	.home-wrapper{
		height: 100vh;
	}
	.home-betterscroll-height{
		height: calc(100% - 93px);
		overflow: hidden;
	}
	.fixedLayout{
		position: fixed;
		top: 43px;
		left: 0px;
		right: 0px;
		z-index: 2;
		background-color: white;
	}
</style>
