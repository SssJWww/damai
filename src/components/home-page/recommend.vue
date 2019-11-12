<template>
  <div class="all">
    <div class="header">
      <p class="nine">为您推荐</p>
      <p class="JX">· 超级实惠 实时更新</p>
      <span>更多 ></span>
    </div>
    <ul>
      <li v-for="data in datalist" :key="data.id">
        <img :src="data.pict_url" alt />
        <p class="guide">{{data.title}}</p>
        <p class="price">￥{{data.coupon_after_price}}</p>
        <p class="volume">月销 {{data.volume}}</p>
        <p class="taoBao">淘宝价 {{data.reserve_price}}</p>
        <p class="iconfont icon-discount QQ">{{data.coupon_discount}}元券</p>
        <p class="return">返{{data.reward_amount}}元</p>
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
    Axios.post('/api/goods/goodsList', 'page_num=1&page_size=100').then(res => {
      console.log(res.data.data.list)
      this.datalist = res.data.data.list
    })
  }
}
</script>
<style lang="scss" scoped>
.all {
  height: 3.12rem;
  //   background:white;
  position: relative;
  top: 4.4rem;
  left: 0rem;
  .header {
    height: 0.49rem;
    background: white;
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
      color: black;
      font-size: 0.16rem;
      background: white;
    }
    p {
      float: left;
      height: 0.49rem;
      line-height: 0.49rem;
      background: white;
    }
    .nine {
      font-weight: 700;
      font-size: 0.18rem;
      margin-left: 0.3rem;
    }
    .JX {
      color: #999;
      margin-left: 0.1rem;
    }
  }
  ul {
    // background: white;
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    width: 100%;
    height: auto;
    justify-content: space-between;
    overflow: hidden;
    li {
      //   flex: 1;
      width: 48.5%;
      height: 3.32rem;
      margin-top: 0.1rem;
      background: white;
      position: relative;
      img {
        height: auto;
        width: 1.65rem;
        vertical-align: top;
        border-radius: 0.05rem;
        margin-left: 0.08rem;
      }
      p {
        width: 1.03rem;
        height: 0.28rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        margin-left: 0.1rem;
        background: white;
      }
      .guide {
        margin-top: 0.2rem;
        color: black;
        height: 0.4rem;
        width: 1.65rem;
      }
      .price {
        color: #fd366d;
        font-size: 0.2rem;
      }
       .QQ{
          height: 0.25rem;
          width: 0.54rem;
          background: #fe0036;
          line-height: 0.26rem;
          color: white
      }
      .return{
           height: 0.25rem;
          width: 0.54rem;
          background: #ffeed6;
          line-height: 0.26rem;
          color: #fe0036;
          position: absolute;
          top: 2.82rem;
          left: 0.7rem;

      }
      .volume{
          position: absolute;
          top: 2.3rem;
          left: 1rem;
      }
      .taoBao{
          text-decoration: line-through
      }
    }
  }
}
</style>
