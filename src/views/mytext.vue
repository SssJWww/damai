<template>
    <div>
        <searchHeader>

        </searchHeader>
        <ul>
            <li v-for="(data,index) in datalist" :key="index">
                      <img :src="data.pict_url" alt />
        <p class="guide">{{data.title}}</p>
        <p class="price">￥{{data.coupon_after_price}}</p>
        <p class="volume">月销 {{data.volume}}</p>
        <p class="taoBao">淘宝价 {{data.reserve_price}}</p>
        <p class="iconfont icon-discount QQ">{{data.coupon_discount}}元券</p>
        <p class="return">返{{data.reward_amount}}元</p>

            </li>
        </ul>
            <div  class="more">
    <p @click="moreclick"> 加载更多</p>
    </div>

    </div>
</template>
<script>
import searchHeader from '@/components/home-page/searchHeader'
import Axios from 'axios'

export default {
  components: {
    searchHeader
  },
  data () {
    return {
      datalist: [],
      total: 0,
      current: 1,
      text: ''

    }
  },
  mounted () {
    this.text = this.$route.query.data
    Axios.post('/api/goods/search', `sort=0&q=${this.text}&page_num=1&page_size=100`).then(res => {
      // console.log(res.data.data.list)
      this.datalist = res.data.data.list
      this.total = res.data.data.page_size
    })
  },
  methods: {
    moreclick () {
      // console.log('点击了')
      this.current++
      if (this.datalist === this.datalist.length) {
        return
      }
      Axios.post('/api/goods/search', `sort=0&q=${this.text}&page_num=${this.current}&page_size=100`).then(res => {
        // console.log(res.data.data.list)
        this.datalist = [...this.datalist, ...res.data.data.list]
      })
    }

  }
}
</script>
<style lang="scss" scoped>
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
  .more{
    height: 0.8rem;
    text-align: center;
    p{
      height: .5rem;
      width: 1.89rem;
      border-radius:1.5rem ;
      border: 0.01rem solid #ccc ;
          line-height: .5rem;
          margin: .4rem auto;

    }
  }
</style>
