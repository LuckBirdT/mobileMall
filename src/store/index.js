import Vue from 'vue'
import Vuex from 'vuex'

//导入对象
import {actions} from './actions.js'
import {getters} from './getters.js'
import {mutations} from './mutations.js'

Vue.use(Vuex)

export default new Vuex.Store({
  //数据
	state: {
		cartList:[]
  },
	//简单的修改数据
  mutations,
	//异步,判断
  actions,
	//计算属性
	getters
})
