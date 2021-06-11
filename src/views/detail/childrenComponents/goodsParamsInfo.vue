<template>
  <div v-if="paramsInfo" class="paramsInfo">
    <div class="paramsInfo-part1" v-if="paramsInfo.image!==''">

    </div>

    <div class="paramsInfo-part2">
      <div class="paramsInfo-part2-item params-border" v-for="(item,index) in paramsInfo.infos">
        <div class="paramsInfo-part2-item-first">{{item.key}}</div>
        <div class="paramsInfo-part2-item-last">{{item.value}}</div>
      </div>
    </div>

    <div class="paramsInfo-part3" v-if="paramsInfo.sizes">  <!-- 这里还是因为异步获取数据的原因 -->
      <div class="paramsInfo-part3-item params-border" v-for="(item,index) in paramsInfo.sizes[0]">
        <div v-for="sizeItem in item">{{sizeItem}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  export default{
    props:{
      paramsInfo:{
        type:Object,
        default(){return {}}
      }
    }
  }
</script>

<style>
  .paramsInfo{
    padding-left: 10px;
  }
  .paramsInfo-part2{
    display: flex;
    flex-direction: column;
  }
  .paramsInfo-part2-item{
    display: flex;
    text-align: left;
  }
.paramsInfo-part2-item-first{
  flex:1;
}
.paramsInfo-part2-item-last{
  flex:2;
}
  .paramsInfo-part3{
    display: flex;
    flex-direction: column;
  }
  .paramsInfo-part3-item{
    display: flex;
  }
  .paramsInfo-part3-item div{
    flex:1;
    text-align: left;
  }
  .params-border{
    border-top: 1px rgba(100,100,100,.15) solid;
    border-bottom: 1px rgba(100,100,100,.15) solid;
    padding: 10px 0 10px 0;
  }
</style>

