import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoplist: []
  },
  mutations: {
    getShopList (state, data) {
      state.shoplist = data
    }
  },
  actions: {
    getList (store) {
      Axios.post('/api/goods/goodsReal', 'page_size: 36').then(res => {
        console.log(res.data.data)
        store.commit('getShopList', res.data.data)
      })
    }

  },
  modules: {
  }
})
