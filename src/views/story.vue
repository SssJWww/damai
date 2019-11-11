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
          <img :src="data.logo" alt />
          <p>{{data.name}}</p>
          <h3>{{data.describe}}</h3>
        </li>
      </ul>
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
  width: 128px;
  height: 50px;
  position: absolute;
  top: 3px;
  left: 10px;
  :nth-of-type(1) {
    font-size: 17px;
    letter-spacing: 2px;
    font-weight: 200;
    height: 32px;
    line-height: 30px;
  }
  :nth-of-type(2) {
    height: 17px;
    font-size: 13px;
    line-height: 17px;
  }
}
.city {
  width: 100%;
  height: 51px;
  text-align: center;
  font-size: 20px;
  background: white;
  line-height: 51px;
  margin-top: 20px;
}
.super-story {
  height: 300px;
  width: 100%;
  background: white;
  ul {
    width: 100%;
    height: 300px;
    li:nth-of-type(4) {
      border-right: 0;
      border-top: 1px solid #eee;
    }
    li:nth-of-type(8) {
      border-right: 0;
    }
    li:nth-of-type(1) {
      border-top: 1px solid #eee;
    }
    li:nth-of-type(2) {
      border-top: 1px solid #eee;
    }
    li:nth-of-type(3) {
      border-top: 1px solid #eee;
    }
    li {
      text-align: center;
      width: 93px;
      height: 148px;
      border-right: 1px solid #eee;
      border-bottom: 1px solid #eee;
      background: white;
      img {
        width: 66px;
        height: 66px;
        border-radius: 50%;
      }
    }
    p {
      background: white;
    }
    h3{
      background:white;
    }
  }
}
</style>
