import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isTabbarShow: true
  },
  mutations: {
    showTabbar (state) {
      state.isTabbarShow = true
    },
    hideTabbar (state) {
      state.isTabbarShow = false
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store
