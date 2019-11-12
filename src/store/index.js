import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    shoplist: [],
    istabbarshow: true,
    isTabbarShow: true
  },
  mutations: {
    showTabbar (state) {
      state.isTabbarShow = true
    },
    hideTabbar (state) {
      state.isTabbarShow = false
    },
    getShopList (state, data) {
      state.shoplist = data
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
export default store
