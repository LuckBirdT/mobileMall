module.exports={
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth:375,//视口宽度，对应的是我们设计稿的宽度 大部分智能手机retina 1点两个像素
      viewportHeight:667,//视窗高度，对应的是我们设计稿的高度
      unitPrecision:5, //指定px转换为视窗单位值得小数位数
      viewportUnit:'vw',//指定要转换得视窗单位，建议使用vw
      selectorBlackList:['ignore','tab-bar','tab-bar-item'],//指定不需要转换得类
      minPixelValue:1,//小于等于1px不转换为视窗单位
      mediaQuery:false,//允许在媒体查询中转换px
      // exclude:[/tabbar.vue$/]//不做转化
    },
  }
}
