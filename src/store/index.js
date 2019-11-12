import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shoplist: [],
    istabbarshow: true
  },
  mutations: {
    getShopList (state, data) {
      state.shoplist = data
    },
    show (state) {
      state.istabbarshow = true
    },
    hide (state) {
      state.istabbarshow = false
    }
  },
  actions: {
    getList (store) {
      Axios.post('/api/goods/goodsReal', 'page_size: 100').then(res => {
        console.log(res.data.data)
        console.log(res.data)
        store.commit('getShopList', res.data.data.list)
      })
    }

  },
  modules: {
  }
})
