import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// 数据存储
	state: {
		userInfo: {},
		lotteries: {},
	},
	// computed
	getters: {
		
	},
	// 静态方法  修改state
	mutations: {
		setValue(state, value) {
			for(let key in value) {
				state[key] = value[key];
			}
		},
	},
	// 动态方法	 请求数据
	actions: {
		
	},
	// 模块化
	modules: {

	}
})