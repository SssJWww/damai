<template>
  <div>
    <pubhead @event="handleEvent">品牌清仓</pubhead>
    <!-- <router-view></router-view> -->
    <conent :datalist="datalist"></conent>
    <div class="more">
      <button @click="handleMore()" v-show="datalist.length">点击加载更多</button>
    </div>
  </div>
</template>
<script>
import conent from './super/conent'
import pubhead from '@/components/header'
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  methods: {
    handleEvent (id) {
      // console.log(id)
      // 请求数据
      this.getData(id)
    },
    getData (id) {
      Axios.post(
        '/api/goods/explodeGoodsList',
        `page_num=1&page_size=20&sort=${id}`
      ).then(res => {
        // console.log(res.data.data.list)
        this.datalist = res.data.data.list
      })
    }
  },
  mounted () {
    this.$store.commit('hideTabbar')
    this.getData(0)
  },
  beforeDestroy () {
    this.$store.commit('showTabbar')
  },
  components: {
    pubhead,
    conent
  }
}
</script>
<style lang="scss" scoped>
.more {
  position: relative;
  height: 0.95rem;
  button {
    height: 0.5rem;
    width: 1.81rem;
    text-align: center;
    line-height: 0.5rem;
    display: block;
    background-color: #fff;
    border-radius: 1.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.25rem;
    margin-left: -0.9rem;
    font-size: 16px;
    color: #999;
    outline: none;
  }
}
</style>
