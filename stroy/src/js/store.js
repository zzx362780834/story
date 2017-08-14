import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	bookinfo: {}//书籍信息
}

const mutations = {
	changeBookinfo(state, data) {
		state.bookinfo = data;
	}
}

const actions = {
	changeBookinfo(context, data) {
		context.commit('changeBookinfo', data);
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})