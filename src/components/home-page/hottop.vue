<template>
  <div class="all">
    <div class="headers">
      <img src="/img/brandTitleTxt.fb9ffa1b.png" alt />
      <span>更多 ></span>
    </div>
    <ul>
      <li v-for="data in datalist" :key="data.id">
        <img :src="data.pict_url" alt />
        <p class="guide">{{data.title}}</p>
        <p class="price">￥{{data.coupon_after_price}}</p>
        <p class="volume">月销 {{data.volume}}</p>
        <p class="iconfont icon-discount QQ">{{data.coupon_discount}}元券</p>

      </li>
    </ul>
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
    Axios.post('/api/goods/indexGoodsTop', 'limit=3').then(res => {
      console.log(res.data.data.hot)
      this.datalist = res.data.data.hot
    })
  }
}
</script>
<style lang="scss" scoped>
.all {
  height: 3.12rem;
  background: linear-gradient(0deg, #fd366d, #fd8f6e);
  position: relative;
  top: 4rem;
  left: 0rem;
  .headers {
    height: 0.49rem;
    img {
      position: absolute;
      top: 0.1rem;
      left: 0.1rem;
    }
    span {
      display: block;
      position: absolute;
      top: 0.15rem;
      right: 0.2rem;
      color: white;
      font-size: 0.16rem;
    }
  }
  ul {
    height: 2.47rem;
    background: white;
    display: flex;
    width: 3.59rem;
    position: absolute;
    top: 0.5rem;
    left: 0.08rem;
    border-radius: 0.1rem;
    overflow: hidden;
    li {
      flex: 1;
      height: 2.47rem;
      width: 33.33%;
      img {
        height: 1.03rem;
        width: 1.03rem;
        margin-left: 0.1rem;
        margin-top: 0.1rem;
      }
      p{
        width: 1.03rem;
        height: 0.28rem;
        overflow: hidden;
        margin-left: 0.1rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;

      }
      .guide{
        margin-top: 0.2rem;
        color: black
      }
      .price{
        color: #fd366d;
        font-size: .2rem
      }
       .QQ{
          height: 0.25rem;
          width: 0.6rem;
          background: #fe0036;
                    line-height: 0.26rem;
          color: white

      }
    }
  }
}
</style>
