<template>
  <div v-if="goodsInfo">
    <div class="goodsTitle">{{goodsInfo.title}}</div>
    <div class="goodsPrice">
      <div v-if="true" class="mainPrice">{{goodsInfo.newPrice}}</div>
      <div v-else class="mainPrice">{{"￥"+goodsInfo.realPrice}}</div>
      <div  class="oldPrice"><s>{{goodsInfo.oldPrice}}</s></div>
      <div v-if="goodsInfo.discount" ><span class="discount">{{goodsInfo.discount}}</span></div>
    </div>
    <div class="goodsColumns">
      <div v-for="item in goodsInfo.columns">{{item}}</div>
    </div>
    <div class="goodsServices">
      <div v-for="item in goodsInfo.services">
        <img :src="item.icon" >
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      goodsInfo:{
        type:Object,
        default(){return {}}
      }
    }
  }
</script>

<style scoped="scoped">
  .goodsTitle{
    text-align: left;
    color: black;
    margin-bottom: 4px;
  }
  .goodsColumns{
    display: flex;
    height: 30px;
    line-height: 30px;
    border-bottom: rgba(100,100,100,0.05) 1px solid;
  }
  .goodsColumns div{
    flex: 1;
  }
  .goodsColumns div:first-child{
    text-align: left;
    margin-left: 10px;
  }
  .goodsColumns div:last-child{
    text-align: right;
    margin-right: 10px;
  }

  .goodsServices{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: rgba(100,100,100,0.05) 1px solid;
  }
  .goodsServices div{
    margin: 0 10px 0 10px;
    height: 26px;
    line-height: 26px;
    display: flex;
    flex-direction: row;
  }

  .goodsServices img{
    height: 80%;
  }

  .goodsPrice{
    display: flex;
    height: 40px;
    line-height: 40px;
    border-top: rgba(100,100,100,0.05) 1px solid;
    border-bottom: rgba(100,100,100,0.05) 1px solid;
  }
  .discount{
    background-color:red;
    color: white;
    border-radius: 50px;
    padding: 0 4px 0 4px;
    position: relative;
    top: -5px;
  }
  .oldPrice{
    font-size: 14px;
    line-height: 44px;
  }
.mainPrice{
  font-size: 20px;
  color: red;
}
</style>
