<template>
  <div v-if="shopInfo">
      <div class="shopTitle">
        <img :src="shopInfo.logo" />
        <div>{{shopInfo.name}}</div>
      </div>
      <div class="shopScore">
        <div class="shopScore-part1">
          <div class="shopScore-part1-item">
            <div>{{shopInfo.fans}}</div>
            <div>粉丝数</div>
          </div>
          <div class="shopScore-part1-item">
            <div>{{shopInfo.sells}}</div>
            <div>总销量</div>
          </div>
        </div>
        <div class="shopScore-part2">
          <div class="shopScore-part2-item" v-for="item in shopInfo.score">
            <div class="shopScore-part2-item-name">{{item.name}}</div>
            <div class="shopScore-part2-item-score">{{ item.score|controlLength}}</div>
            <div class="shopScore-part2-item-evaluate-high" v-if="item.isBetter">高</div>
            <div class="shopScore-part2-item-evaluate-low" v-else>低</div>
          </div>
        </div>
      </div>
      <div class="enterShop"><div>进店逛逛</div></div>

 </div>
</template>


<script>
  export default{
    props:{
      shopInfo:{type:Object,default(){return {}}}
    },
    filters:{
      controlLength(num){  //使用过滤器控制字符长度
        let str=String(num);
        if(str.length<3){
          return String(num)+".00"
        }
        else if (str.length==3){
          return String(num)+"0"
        }
        else{
          return String(num)
        }
      }
    },
  }
</script>

<style>
  .shopTitle{
    display: flex;
    text-align: center;
    align-items: center;
    padding: 20px 20px 10px 20px;
    border-bottom: rgba(100,100,100,.05) 1px solid;
  }
  .shopTitle img{
    width: 10%;
    border:1px  rgba(100,100,100,.5) solid;
    border-radius: 50px;
  }
  .shopTitle div{
    font-size: 18px;
    margin: 0 10px 0 20px;
  }

  .shopScore{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .shopScore-part1{
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
  }
  .shopScore-part1-item{
    padding: 0 10px 0 10px;
    font-size: 18px;
    border-right:1px  rgba(100,100,100,.5) solid;
  }

  .shopScore-part2{
    display: flex;
    flex-direction: column;
  }
  .shopScore-part2-item{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
 .shopScore-part2-item div:last-child {
   margin-left: 10px;
 }
 .shopScore-part2-item-evaluate-high{
   background-color: red;
   color: white;
   border-radius: 5px;
 }
 .shopScore-part2-item-evaluate-low{
   background-color: green;
   color: white;
   border-radius: 5px;
 }
 .shopScore-part2-item-score{
   padding: 0 2px 0 6px;
   color: red;
 }
 .enterShop{
   border-bottom: 1px  rgba(100,100,100,.1) solid;
   padding: 10px 0 10px 0;
   margin-bottom: 10px;
 }
 .enterShop div{
    display: inline;
    font-size: 18px;
    border: 1px #CCCCCC solid;
    border-radius: 5px;
    background-color:hotpink;
    color: white;
 }
</style>

