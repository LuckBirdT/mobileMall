<template>
  <div class="comment-wrapper">
    <div class="comment-topic">
      <div>用户评论</div>
      <div class="comment-topic-more"><i class="gg-arrows-shrink-h"></i>更多</div>
    </div>
    <div v-for="item in commentList">
      <div class="comment-userInfo">
        <img :src="item.user.avatar" />
        <div>{{item.user.uname}}</div>
        <div><sup> {{item.rateId}} </sup></div>
      </div>
      <div class="comment-content">
        <div class="comment-content-part1">{{item.content}}</div>
        <div class="comment-content-part2" >
          <div v-for="imges in item.images">
            <img  :src="imges" />
          </div>
        </div>
      </div>
      <div class="comment-style">
        {{item.created|getTime}}
        {{item.style}}
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      commentList:{
        type:Array,
        default(){return []}
      },
    },
    filters:{
      getTime(min){
        let time=new Date(min*1000);
        return time.toLocaleString();
      }
    }
  }
</script>

<style>
  .comment-topic{
    display: flex;
    flex-direction: row;
    margin: 0 10px 10px 10px;
    padding-bottom: 10px;
    border-bottom: 1px rgba(10,10,10,.5) solid;
   }
   .comment-topic div{
     flex: 1;
    }
		.comment-topic div:first-child{
			text-align: left;
			padding-left: 10px;
		}
    .comment-topic div:last-child{
      text-align: right;
     }
  .comment-wrapper{
    padding: 10px 0 10px 0;
    margin: 10px 0 10px 0;
/*    border-top: 1px rgba(100,100,100,.15) solid; */
    border-bottom: 1px rgba(100,100,100,.15) solid;
  }
  .comment-userInfo{
    display: flex;
    align-items: center;
    padding-left: 5%;
  }
  .comment-userInfo sup{
    color: red;
  }
  .comment-userInfo img{
    width: 11%;
    border: 1px #CCCCCC solid;
    border-radius: 100px;
    margin-right: 10px;
  }
  .comment-content{
    text-align: left;
    padding: 2px  10px 2px 10px;
    border-bottom: 1px rgba(100,100,100,.1) solid;
  }
  .comment-content-part2{
    display: flex;
    flex-direction: row;
  }
  .comment-content-part2 div{
    flex:1;
  }
  .comment-content-part2 div img{
    width: 100%;
  }
  .comment-style{
    text-align: left;
    padding: 2px  10px 2px 10px;
    font-size: 14px;
    color: hotpink;
  }
  .comment-topic-more{
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    color: hotpink;
  }
</style>
