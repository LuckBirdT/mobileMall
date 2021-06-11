<template>
  <div v-if="goodsDetailImgList" class="goodsDetailInfo">
    <div class="goodsDetailInfo-part1">{{goodsDetailDesc}}</div>
    <div  class="goodsDetailInfo-part2" >
      <div v-for="item in goodsDetailImgList">
        <img v-lazy="item" @load="goodsDetailImgLoad()" />
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      goodsDetailImgList:{
        type:Array,
        default(){return []}
      },
      goodsDetailDesc:{
        type:String,
        default:''
      }
    },
    data(){
     return{  }
    },
    methods:{
			//图片加载完刷新
      goodsDetailImgLoad(){
        this.$emit("goodsDetailImgLoad")
      }
    }
  }
</script>

<style>
  .goodsDetailInfo-part2 img{
    width: 100%;
  }
</style>
