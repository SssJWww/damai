<template>
  <div class="pic">
    <div>
      <img src="/images/entranceBanner.png" class="damai" />
    </div>
    <div class="super">
      <div>超级入口</div>
      <div>从这里进入,都有返佣</div>
    </div>
    <div class="city">商城返利</div>
    <div class="super-story">
      <ul>
        <li v-for="data in datalist" :key="data.id">
          <a :href="data.url"></a>
          <img :src="data.logo" alt />
          <p>{{data.name}}</p>
          <h3>{{data.describe}}</h3>
        </li>
      </ul>
    </div>
    <div class="rank" @click="handleRank()">
      <img src="/images/bannerRank.jpg" alt />
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    Axios.post('/api/goods/superEntrance', 'type=mobile').then(res => {
      console.log(res.data.data)
      this.datalist = res.data.data
    })
  },
  methods: {
    handleRank () {
      this.$router.push('/hotshop')
    }
  }
}
</script>

<style lang="scss" scoped>
.pic {
  width: 100%;
  .damai {
    width: 100%;
  }
}
.super {
  width: 1.28rem;
  height: .50rem;
  position: absolute;
  top: .03rem;
  left: .10rem;
  :nth-of-type(1) {
    font-size:.17rem;
    letter-spacing: .02rem;
    font-weight: 200;
    height: .32rem;
    line-height: .30rem;
  }
  :nth-of-type(2) {
    height: .17rem;
    font-size: .13rem;
    line-height: .17rem;
  }
}
.city {
  width: 100%;
  height: .51rem;
  text-align: center;
  font-size: .20rem;
  background: white;
  line-height: .51rem;
  margin-top: .20rem;
}
.super-story {
  height: 3.00rem;
  width: 100%;
  background: white;
  ul {
    width: 100%;
    height: 3.00rem;
    li:nth-of-type(4) {
      border-right: 0;
      border-top: .01rem solid #eee;
    }
    li:nth-of-type(8) {
      border-right: 0;
    }
    li:nth-of-type(1) {
      border-top: .01rem solid #eee;
    }
    li:nth-of-type(2) {
      border-top: .01rem solid #eee;
    }
    li:nth-of-type(3) {
      border-top: .01rem solid #eee;
    }
    li {
      text-align: center;
      width: .93rem;
      height: 1.50rem;
      border-right: .01rem solid #eee;
      border-bottom: .01rem solid #eee;
      img {
        position: relative;
        top: .13rem;
        left: .13rem;
        width: .66rem;
        height: .66rem;
        border-radius: 50%;
      }
      p {
        font-size: .16rem;
        color: black;
        position: relative;
        top: .15rem;
      }
      h3 {
        font-size: .13rem;
        position: relative;
        top: .20rem;
        font-weight: 200;
      }
      a {
        display: block;
        width: .93rem;
        height: 1.50rem;
        position: absolute;
      }
    }
  }
}
.rank {
  margin-top: .15rem;
  width: 3.75rem;
  img {
    width: 100%;
  }
}
</style>
