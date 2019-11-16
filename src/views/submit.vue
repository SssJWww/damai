<template>
  <div class="box">
    <div class="headers">
      <span class="header1">商家报名</span>
      <span class="header2">联系客服</span>
    </div>
    <img src="/img/businessBg1.05401a40.png" alt />
    <img src="/img/businessBg2.d90cd535.png" alt />
    <img src="/img/businessBg3.11585e9d.png" alt />

    <ul>
      <li v-for="data in datalist" :key="data.id">
        <div class="kuang">
          <p class="titles">{{data.title}}</p>
          <p class="content">{{data.content}}</p>
          <p class="apply" @click="applyclick">活动报名</p>
        </div>
      </li>
    </ul>

    <img src="/img/businessBg4.e5a15348.png" alt />
    <img src="/img/businessBg5.2d95fc1b.png" alt />
    <img src="/img/businessBg6.ad611c4a.png" alt />
    <img src="/img/businessBg7.7a8b1dc9.png" alt />
    <img src="img/businessBg8.42eab1d2.png" alt />

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
    Axios.post('/api/merchant/productList').then(res => {
      console.log(res.data.data)
      this.datalist = res.data.data
    })
  },
  methods: {
    applyclick () {
      this.$router.push('/activity')
    }
  }
}
</script>
<style lang="scss" scoped>
.box{
      background: #ff3f40;
}
.headers {
  height: 0.51rem;
  width: 100%;
  background: #fe0036;
  .header1 {
    display: block;
    width: 2.79rem;
    height: 0.51rem;
    position: absolute;
    top: 0rem;
    left: 0.5rem;
    font-size: 0.18rem;
    color: white;
    line-height: 0.51rem;
    text-align: center;
  }
  .header2 {
    display: block;
    position: absolute;
    top: 0.15rem;
    right: 0.15rem;
    color: white;
  }
}
img {
  width: 3.75rem;
}
ul {
  height: auto;
      background: #ff3f40;

  li {
    height: auto;
    width: 100%;
    position: relative;
    background: #ff3f40;
    padding-bottom: 0.2rem;
    .kuang {
      height: 3.27rem;
      width: 3.52rem;
      background: white;
      //   padding: 1rem 0;
      margin-left: 0.1rem;
      .titles {
        width: 100%;
        height: 0.25rem;
        font-size: 0.18rem;
        color: #ff3f40;
        text-align: center;
        line-height: 0.25rem;
        padding-top: 0.2rem;
      }
      .content {
        height: 1.68rem;
        width: 3.2rem;
        color: black;
        padding-top: 0.2rem;
        line-height: 0.4rem;
        font-size: 12px;
        margin-left: 0.2rem;
      }
      .apply {
        height: 0.448rem;
        width: 2.4rem;
        position: absolute;
        bottom: 0.3rem;
        left: 0.7rem;
        background: #ff3f40;
        color: white;
        text-align: center;
        line-height: 0.448rem;
      }
    }
  }
}
</style>
