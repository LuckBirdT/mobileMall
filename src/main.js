import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify.js'
import toast from 'components/toast' 
import lazyLoad from 'vue-lazyload'
import fastClick from 'fastclick'

//安装插件,安装完之后 使用v-lazy去替换 :src
Vue.use(lazyLoad,{//配置变量
  // loading:require('') //这个设置未加载完成时显示的图片
})
//注册插件
Vue.use(toast)
//解决移动端300ms延迟
fastClick.attach(document.body)

Vue.config.productionTip = false
//创建事件总线
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
	vuetify,
  render: h => h(App)
}).$mount('#app')
