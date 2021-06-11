<template>
	<div class="detail-wrapper">
		<detail-topbar ref="detailTopbar"  @topBarSwitch="topBarSwitch"></detail-topbar>
		<detail-betterscroll :proBeValue="2" ref="detailBetterscroll" 
		class="detail-betterscroll" @scrollPosition="getDetailLocation">
			<detail-carousel :items="carouselImgList" ></detail-carousel>
			<goods-detail-info :goodsInfo="goodsInfo"></goods-detail-info>
			<shop-info ref="shopInfoPart" :shopInfo="shopInfo"></shop-info>
			<goods-param-info ref="goodsParamInfoPart" :paramsInfo="paramsInfo"></goods-param-info>
			<goods-detail-img :goodsDetailImgList="detailImgList" 
			:goodsDetailDesc="detailDesc" @goodsDetailImgLoad="refresh"></goods-detail-img>
			<comment ref="commentPart" :commentList="goodsComment"></comment>
			<goods-display ref="recommendPart"splayImgLoaded="refresh" :items="recommendList" ></goods-display>
		</detail-betterscroll>
		<detail-tabbar @addToCart="addToCart" class="detail-tabbar"></detail-tabbar>
	</div>
</template>

<script>
	//子组件
	import detailTopbar from 'views/detail/childrenComponents/detailTopbar.vue'
	import goodsDetailInfo from 'views/detail/childrenComponents/goodsDetailInfo.vue'
	import shopInfo from 'views/detail/childrenComponents/shopInfo.vue'
	import goodsParamInfo from 'views/detail/childrenComponents/goodsParamsInfo.vue'
	import goodsDetailImg from 'views/detail/childrenComponents/goodsDetailImg.vue'
	import comment from 'views/detail/childrenComponents/goodsComment.vue'
	import goodsDisplay from 'views/detail/childrenComponents/recommendGoodsDisplay/goodsDisplay.vue'
	import detailTabbar from 'views/detail/childrenComponents/detailTabbar.vue'
	
	//公共组件
	import detailCarousel from 'components/carousels/detailCarousels.vue'
	import detailBetterscroll from 'components/betterscroll/betterscroll.vue'
	
	//数据
	import {getDetail,getRecommend,Goods,shop,GoodsParam} from 'network/detail/detail.js'
	
	//对象
	export default{
		name:'detail',
		data(){
			return{
				id:null,
				carouselImgList:null,
				goodsInfo:null,
				shopInfo:null,
				paramsInfo:null,
				detailImgList:null,
				detailDesc:null,
				refreshCount:0,
				goodsComment:null,
				recommendList:null,
				shopInfoPartOffsetTop:0,
				paramsPartOffsetTop:0,
				commentPartOffsetTop:0,
				recommendPartOffsetTop:0,
				getOffsetTopTag:true
			}
		},
		components:{
			detailTopbar,
			detailCarousel,
			goodsDetailInfo,
			detailBetterscroll,
			shopInfo,
			goodsParamInfo,
			goodsDetailImg,
			comment,
			goodsDisplay,
			detailTabbar
		},
		created(){
			//存放id
			this.id=this.$route.params.id
			//获取详情页数据
			getDetail(this.id).then(res=>{
				const data=res.data.result
				// console.log(res)
				//获取详情页轮播图
				this.carouselImgList=data.itemInfo.topImages
				//获取商品信息
				this.goodsInfo=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
				//获取商店信息
				this.shopInfo=new shop(data.shopInfo)
				//获取商品参数
				this.paramsInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
				//获取更多的商品展示图片和详细描述
				this.detailImgList=data.detailInfo.detailImage[0].list
				this.detailDesc=data.detailInfo.desc
				//获取评论
				this.goodsComment=data.rate.list
			})
			//获取推荐数据
			getRecommend().then(res=>{
			  this.recommendList=res.data.data.list
			})
		},
		mounted(){
			
		},
		methods:{
			//刷新betterscroll的可滑动高度,取余是减少刷新次数,
			refresh(){
				this.refreshCount++
				//但是为了消除加载bug,我们对1取余,实际上取余已没有意义
				// if(this.refreshCount%1==0){
					this.$refs.detailBetterscroll.refresh()
					
					//获取offsettop值
					if(this.getOffsetTopTag){
						this.shopInfoPartOffsetTop=this.$refs.shopInfoPart.$el.offsetTop
						this.paramsPartOffsetTop=this.$refs.goodsParamInfoPart.$el.offsetTop
						this.commentPartOffsetTop=this.$refs.commentPart.$el.offsetTop
						this.recommendPartOffsetTop=this.$refs.recommendPart.$el.offsetTop
						console.log(this.shopInfoPartOffsetTop,this.paramsPartOffsetTop,this.commentPartOffsetTop)
					}
				// }
			},
			//监听betterscroll的位置
			getDetailLocation(value){
				
				if(-value>=this.recommendPartOffsetTop){
					this.$refs.detailTopbar.currentIndex=4
				}
				else if(-value>=this.commentPartOffsetTop){
					this.$refs.detailTopbar.currentIndex=3
				}
				else if(-value>=this.paramsPartOffsetTop){
					this.$refs.detailTopbar.currentIndex=2
				}
				else if(-value>=this.shopInfoPartOffsetTop){
					this.$refs.detailTopbar.currentIndex=1
				}
				else{
					this.$refs.detailTopbar.currentIndex=0
				}
			},
				//导航栏切换
				topBarSwitch(value){
					switch(value){
						case 0 :this.$refs.detailBetterscroll.scroll.scrollTo(0,0,1000) ;break;
						case 1 :this.$refs.detailBetterscroll.scroll.scrollTo(0,-this.shopInfoPartOffsetTop,500) ;break;
						case 2 :this.$refs.detailBetterscroll.scroll.scrollTo(0,-this.paramsPartOffsetTop,500) ;break;
						case 3 :this.$refs.detailBetterscroll.scroll.scrollTo(0,-this.commentPartOffsetTop,500) ;break;
						case 4 :this.$refs.detailBetterscroll.scroll.scrollTo(0,-this.recommendPartOffsetTop,600) ;break;
					}
				},
				//加入购物车
				addToCart(){
					//创建购物车商品对象
					const goods={}
					goods.id=this.id;
					goods.img=this.detailImgList&&this.detailImgList[0]
					goods.title=this.goodsInfo.title
					goods.shopName=this.shopInfo.name
					goods.shopLogo=this.shopInfo.logo
					goods.price=this.goodsInfo.realPrice
					goods.count=1;
					this.$store.dispatch('beforeAddedCheckGoods',goods).then((res)=>{
						this.$toast.dispalyToast(res,1000)
					})
					
				}
		},
		destroyed(){
		}
	}
</script>

<style>
	.detail-wrapper{
		height: 100vh;
	}
	.detail-betterscroll{
		height: calc(100% - 93px);
		overflow: hidden;
	}
	.detail-tabbar{
		position: relative;
		z-index: 3;
	}
</style>
