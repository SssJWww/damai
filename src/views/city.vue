<template>
  <div>

    <keep-alive >
      <make></make>
    </keep-alive>

    <div class="hotSearchs">
      <p class="hotSearch">热门搜索</p>
      <img src="/img/hot.png" alt />
      <ul>
        <router-link
          v-for="(data,index) in datalist"
          :key="index"
          :class="index===0?'active':'active2'"
          tag="li"
          to="/main"
        >{{data}}</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import make from '@/components/home-page/make'
import Axios from 'axios'

export default {
  data () {
    return {
      datalist: []
      // datalist2: [],
      // mytext: ''
    }
  },
  components: {
    make
  },
  mounted () {
    Axios.post('/api/goods/hotKeyword').then(res => {
      this.datalist = res.data.data
    })
  }

}
</script>
<style lang="scss" scoped>

.hotSearch {
  height: 0.46rem;
  width: 3.52rem;
  line-height: 0.46rem;
  font-size: 0.17rem;
  margin: auto;
}
.hotSearchs {
  height: 1.73rem;
  background: white;
  position: relative;
  ul {
    width: 3.43rem;
    height: 1.11rem;
    margin: auto;
    //  display: flex;
    li {
      width: 0.91rem;
      height: 0.43rem;
      border-radius: 1.3rem;
      border: 0.01rem solid #ccc;
      text-align: center;
      line-height: 0.43rem;
      margin-right: 0.2rem;
      margin-top: 0.1rem;
    }
    .active {
      background: #ffe4ea;
    }
    .active2 {
      background: #eeeeee;
    }
  }
  img {
    position: absolute;
    top: 0.5rem;
    left: 0.6rem;
  }
}
</style>
