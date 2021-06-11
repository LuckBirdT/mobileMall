<template>
  <div class="cartSumBar">
    <div class="cartSumBar-part1">
      <div class="cartSumBar-part1-select" @click="allSelected()">
				<img v-if="isAllChecked" src="../../../assets/img/cart/checkbox-circle-line.svg" />
				<img v-else src="../../../assets/img/cart/checkbox-blank-circle-line.svg" />
			</div>
      <div  @click="allSelected()" class="cartSumBar-part1-text">全选</div>
    </div>
    <div class="cartSumBar-part2">
      <div class="cartSumBar-part2-sum">合计:{{"$"+sumPrice}}</div>
      <div class="cartSumBar-part2-take" @click="toStatement()" >结算</div>
    </div>
  </div>
</template>

<script>
	//数据
  import {mapGetters} from 'vuex'
	//对象
  export default{
    data(){
      return{
      }
    },
    methods:{
			//全选商品,或者全不选
      allSelected(){
				this.$store.dispatch('selectedAllGoods')
			},
			//结算
			toStatement(){
				this.$emit('statement')
			}
    },
    computed:{
      ...mapGetters(['isAllChecked','sumPrice'])
    }
  }
</script>

<style>
  .cartSumBar{
    height: 49px;
    display: flex;
    flex-direction: row;
  }
  .cartSumBar-part1{
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .cartSumBar-part2{
    flex: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .cartSumBar-part1-select{
    flex:1;
  }
  .cartSumBar-part1-select img{
		width: 100%;
	}
  .cartSumBar-part1-text{
    flex: 3;
    text-align: left;
  }
  .cartSumBar-part2-sum{
    flex: 1;
    color: red;
  }
  .cartSumBar-part2-take{
    flex: 1;
    background-color: red;
    color: white;
    padding: 10px 0 10px 0;
    border-radius: 10px;
  }
  .notAllChecked{
    color: white;
  }
</style>
