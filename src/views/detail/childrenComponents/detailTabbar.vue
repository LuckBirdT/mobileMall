<template>
  <div class="detail-tabbar">
    <div class="detail-tabbar-part1">
      <div>
        <img :src="kefuImg" />
        <div>客服</div>
      </div>
      <div>
        <img :src="shopImg" />
        <div>店铺</div>
      </div>
      <div>
        <img :src="shoucangImg" />
        <div>收藏</div>
      </div>
    </div>
    <div class="detail-tabbar-part2">
      <div class="detail-tabbar-part2-cart" @click="addToCart()">加入购物车</div>
      <div class="detail-tabbar-part2-buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
        kefuImg:require('@/assets/img/detail/kefu.jpg'),
        shopImg:require('@/assets/img/detail/dianpu.jpg'),
        shoucangImg:require('@/assets/img/detail/shoucang.jpg')
    }
  },
	methods:{
		addToCart(){
			this.$emit('addToCart')
			// console.log(' 点击加入')
		}
	}
}
</script>

<style>
  .detail-tabbar{
    height: 49px;
    background-color:white;
    display: flex;
    flex-direction: row;
  }
  .detail-tabbar div{
    flex: 1;

  }
  .detail-tabbar-part1{
    display: flex;
    flex-direction: row;
  }
  .detail-tabbar-part1 div{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .detail-tabbar-part1 div img{
    width: 40%;
  }
  .detail-tabbar-part2{
    display: flex;
  }
  .detail-tabbar-part2 div{
    flex:1;
    line-height: 49px;
  }
  .detail-tabbar-part2-cart{
    background-color: #FFC700;
    height: 100%;
    color: purple;
  }
  .detail-tabbar-part2-buy{
    background-color: #FF789C;
    height: 100%;
    color: white;
  }
</style>
