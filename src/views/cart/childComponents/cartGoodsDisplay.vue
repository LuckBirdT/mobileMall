<template>

		<cart-goods-betterscroll class="cart-goods-betterscroll">
			<div v-for="(item,index) in items" class="cart-goods-display-item">
				<div class="cart-goods-display-part1" >
					<div class="cart-goods-display-part1-selected" @click="updateSelcted(item)" :class="{'goods-selected':item.selected}"> <img src="../../../assets/img/cart/selected.png" /> </div>
					<div class="cart-goods-display-part1-logo"> <img :src="item.shopLogo" /> </div>
					<div class="cart-goods-display-part1-name">{{item.shopName}}</div>
				</div>
				<div class="cart-goods-display-part2">
					<div class="cart-goods-display-part2-img"> <img :src="item.img" /> </div>
					<div class="cart-goods-display-part2-text">
						<div class="cart-goods-display-part2-text-title">{{item.title}}</div>
						<div class="cart-goods-display-part2-text-price">{{'$'+item.price}}</div>
						<div class="cart-goods-display-part2-text-count">
							<div class="part2-text-count-del"  @click="deleteItem(item)">删除</div>
							<div class="part2-text-count-ctr">
								<div class="part2-text-count-DEC" @click="countDEC(item)" >&nbsp;&nbsp;-&nbsp;&nbsp;</div>
								<div class="part2-text-count-num">{{' x '+item.count}}</div>
								<div class="part2-text-count-INC" @click="countINC(item)" >&nbsp;&nbsp;+&nbsp;&nbsp;</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</cart-goods-betterscroll>

</template>

<script>
	//公共组件
	import cartGoodsBetterscroll from 'components/betterscroll/betterscroll.vue'
	
	export default{
		props:{
			items:{
				type:Array,
				default(){return[]}
			}
		},
		components:{
			cartGoodsBetterscroll
		},
		methods:{
			//更新选中状态
			updateSelcted(item){
				this.$store.commit('updateSelected',item)
			},
			//删除商品
			deleteItem(item){
				this.$store.dispatch('deleteAimItem',item)
			},
			//商品数量加一
			countINC(item){
				this.$store.commit('sameGoodsINC',item)
			},
			//商品数量减一
			countDEC(item){
				if(item.count>1){
					this.$store.commit('sameGoodsDEC',item)
				}
			}
		}
	}
</script>

<style>
	.cart-goods-betterscroll{
		height:calc(100% - 93px - 49px);
		overflow: hidden;
	}
	.cart-goods-display-item{
		display: flex;
		flex-direction: column;
		border: 1px rgba(200,100,100,.2) solid;
		border-radius: 20px;
		margin: 10px 0 10px 0;
		background-color: white;
	}
	.cart-goods-display-part1{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center; 
		border-bottom: 1px rgba(254,1,1,.1) solid;
		margin-bottom: 10px;
	}
	.cart-goods-display-part1-selected{
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1px pink solid;
		border-radius: 50px;
	}
	.cart-goods-display-part1-selected img{
		width: 100%;
	}
	.cart-goods-display-part1-logo{
		flex: 2;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cart-goods-display-part1-logo img{
		width: 50%;
		border: 1px pink solid;
		border-radius: 50px;
	}
	.cart-goods-display-part1-name{
		flex: 7;
		font-size: 20px;
		text-align: left;
	}
	.cart-goods-display-part2{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.cart-goods-display-part2-img{
		flex: 1;
	}
	.cart-goods-display-part2-img img{
		width: 90%;
		border: 1px pink solid;
		border-radius: 10px;
	}
	.cart-goods-display-part2-text{
		flex: 3;
	}
	.cart-goods-display-part2-text-title{
		text-align: left;
		color: #800080;
	}
	.cart-goods-display-part2-text-price{
		text-align: right;
		padding-right: 20px;
		color: #FF0000;
	}
	.cart-goods-display-part2-text-count{
		text-align: right;
		padding-right: 20px;
		font-size: 20px;
		color: #008000;
		display: flex;
		align-items: center;
		justify-content: space-around;
		padding: 4px;
	}
	.part2-text-count-del{
		font-size: 16px;
		color: #FF0000;
	}
	.part2-text-count-ctr{
		display: flex;
	}
	.part2-text-count-ctr div{
		margin:0  4px 0 4px;
		border: 1px rgba(100,100,100,.2) solid;
		border-radius: 5px;
	}
	.goods-selected{
		background-color: hotpink;
	}
</style>
