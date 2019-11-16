<template>
  <div id="detail">
    <swiper :options="option" :key="piclist.length">
      <div class="swiper-slide" v-for="(data,index) in piclist" :key="index">
        <img :src="data" />
      </div>
    </swiper>
    <div class="back" @click="handleClick()">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="home" @click="handleHome()">
      <i class="iconfont icon-rfq1"></i>
    </div>
    <div class="price">
      <div class="jia" v-if="isMout">
        <span>￥</span>
        {{datalist.data.coupon_after_price}}
      </div>
      <div class="fan" v-if="isMout">返{{datalist.data.reward_amount}}元</div>
      <div class="zhe" v-if="isMout">￥{{datalist.data.zk_final_price}}</div>
      <div class="sale" v-if="isMout">月销量{{datalist.data.volume}}</div>
      <div class="title" v-if="isMout">{{datalist.data.title}}</div>
      <div class="cheap" v-if="isMout">
        <span>{{datalist.data.coupon_discount}}</span>元优惠券
      </div>
      <img
        class="yellow"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAsYAAACMCAYAAAB/NG+WAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY0ODhFMkI0Q0ZBMjExRTk5RjNFRDE0NkYzQ0E4ODA5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY0ODhFMkI1Q0ZBMjExRTk5RjNFRDE0NkYzQ0E4ODA5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjQ4OEUyQjJDRkEyMTFFOTlGM0VEMTQ2RjNDQTg4MDkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ4OEUyQjNDRkEyMTFFOTlGM0VEMTQ2RjNDQTg4MDkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz60jZIbAAAJDUlEQVR42uzdT2hlVx3A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"
        alt
      />
      <div
        class="vaild"
        v-if="isMout"
      >有效期限:{{datalist.data.coupon_start_time_str.slice(5)}}至{{datalist.data.coupon_end_time_str.slice(5)}}</div>
      <div class="have" v-if="isMout" @click="handleJump(datalist.data.num_iid)">立即领卷</div>
    </div>
    <div class="story" v-if="isMout">
      <div class="shop">{{datalist.data.shop_title}}</div>
      <div class="mark">宝贝描述:4.8</div>
      <div class="sell">卖家服务:4.8</div>
      <div class="ser">物流服务:4.8</div>
    </div>
    <div class="picture" v-for="(pic,index) in piclist" :key="index">
      <img :src="pic" alt />
    </div>
    <div class="di" v-if="isMout">
      <i class="iconfont icon-color-filling"></i>
      <div class="coll">收藏</div>
      <div class="share">分享赚</div>
      <div class="waste">领劵省</div>
      <div class="share_money">￥{{datalist.data.reward_amount}}</div>
      <div class="waste_money">￥{{datalist.data.coupon_discount}}</div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import swiper from '@/components/swiper'
export default {
  data () {
    return {
      datalist: [],
      piclist: [],
      isMout: false,
      option: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  components: {
    swiper
  },
  mounted () {
    console.log(this.$route.params.myid)
    Axios.post(
      '/api/goods/goodsdetail',
      `num_iid=${this.$route.params.myid}`
    ).then(res => {
      console.log(res.data.data.local_small_images)
      console.log(res.data)
      this.datalist = res.data
      this.piclist = res.data.data.small_images
      this.isMout = true
    })
    this.$store.commit('hideTabbar')
  },
  beforeDestroy () {
    console.log('detail2')
    this.$store.commit('showTabbar')
  },
  methods: {
    handleClick () {
      this.$router.back()
    },
    handleHome () {
      this.$router.push('/main')
    },
    handleJump (id) {
      location.href = `https://item.taobao.com/item.htm?id=${id}`
    }
  }
}
</script>

<style lang="scss" scoped>
#detail {
  overflow: hidden;
  position: relative;
  height: 18.00rem;
  .back {
    position: absolute;
    width: .40rem;
    height: .40rem;
    background: #778788;
    color: white;
    text-align: center;
    line-height: .40rem;
    border-radius: 50%;
    font-size: .22rem;
    top: .20rem;
    left: .20rem;
    z-index: 10;
  }
  .home {
    position: absolute;
    width: .40rem;
    height: .40rem;
    background: #778788;
    color: white;
    text-align: center;
    line-height: .40rem;
    border-radius: 50%;
    font-size: .22rem;
    top: .20rem;
    left: 3.15rem;
    z-index: 10;
  }
  .price {
    position: relative;
    width: 100%;
    height: 2.40rem;
    background: white;
    .jia {
      position: absolute;
      top: .14rem;
      left: .10rem;
      font-weight: bold;
      height: .30rem;
      font-size: .24rem;
      color: red;
      span {
        font-size: .12rem;
      }
    }
    .fan {
      line-height: .26rem;
      position: absolute;
      top: .15rem;
      left: 1.10rem;
      width: .72rem;
      height: .26rem;
      background: #ffeed6;
      color: #fe0036;
    }
    .zhe {
      width: .60rem;
      height: .32rem;
      font-size: .14rem;
      line-height: .32rem;
      color: #999;
      position: absolute;
      top: .45rem;
      left: .10rem;
      text-decoration: line-through;
    }
    .sale {
      width: .75rem;
      height: .35rem;
      color: #999;
      position: absolute;
      top: .45rem;
      left: 2.90rem;
      line-height: .35rem;
      font-size: .14rem;
    }
    .cheap {
      width: 2.30rem;
      height: .28rem;
      position: absolute;
      top: 1.67rem;
      left: .95rem;
      font-size: .18rem;
      z-index: 11;
      span {
        font-weight: bold;
      }
    }

    .title {
      width: 3.59rem;
      height: .64rem;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      font-size: .16rem;
      position: absolute;
      left: .10rem;
      top: .85rem;
      line-height: .25rem;
      font-weight: bold;
    }
    .yellow {
      width: 3.60rem;
      height: .71rem;
      position: absolute;
      top: 1.55rem;
      left: .05rem;
    }
    .vaild {
      width: 2.27rem;
      height: .17rem;
      font-size: .15rem;
      position: absolute;
      top: 1.95rem;
      left: .72rem;
      z-index: 11;
    }
    .have {
      width: 1.00rem;
      height: .21rem;
      line-height: .21rem;
      color: white;
      position: absolute;
      z-index: 11;
      left: 2.80rem;
      top: 1.81rem;
      font-size: .16rem;
      font-weight: bold;
    }
  }
  .story {
    width: 3.60rem;
    height: .90rem;
    background: white;
    position: absolute;
    top: 6.30rem;
    left: .08rem;
    z-index: .10rem;
    border-radius: .10rem;
    .shop {
      width:100%;
      height: .15rem;
      line-height: .20rem;
      position: relative;
      top: .12rem;
      left: .30rem;
      font-size: .16rem;
      color: black;
    }
    .mark {
      width: 1.00rem;
      height: .38rem;
      background: #68e5c7;
      color: white;
      position: absolute;
      top: .40rem;
      left: .20rem;
      line-height: .38rem;
      border-radius: .10rem;
      text-align: center;
    }
    .sell {
      width: 1.00rem;
      height: .38rem;
      background: #68e5c7;
      color: white;
      position: absolute;
      top: .40rem;
      left: 1.30rem;
      line-height: .38rem;
      border-radius: .10rem;
      text-align: center;
    }
    .ser {
      width: 1.00rem;
      height: .38rem;
      background: #68e5c7;
      color: white;
      position: absolute;
      top: .40rem;
      left: 2.40rem;
      line-height: .38rem;
      border-radius: .10rem;
      text-align: center;
    }
  }
  .picture {
    width: 100%;
    position: relative;
    top: 1.00rem;
    img {
      width: 100%;
    }
  }
  .di {
    width: 100%;
    height: .61rem;
    background: white;
    position: fixed;
    bottom: 0;
    .coll {
      position: absolute;
      top: .35rem;
      left: .40rem;
    }
    i {
      font-size: .20rem;
      position: absolute;
      top: .10rem;
      left: .44rem;
    }
    .share {
      border-radius: .10rem 0px 0px .10rem;
      width: 1.30rem;
      height: .50rem;
      text-align: center;
      background: #333333;
      position: absolute;
      left: 1.00rem;
      top: .05rem;
      color: white;
      font-size: .16rem;
    }
    .waste {
      border-radius: 0rem .10rem .10rem 0px;
      width: 1.30rem;
      height: .50rem;
      text-align: center;
      background: #fe0036;
      position: absolute;
      left: 2.30rem;
      top: .05rem;
      color: white;
      font-size: .16rem;
    }
    .share_money {
      font-size: .16rem;
      position: absolute;
      top: .27rem;
      left: 1.34rem;
      color: white;
    }
    .waste_money {
      font-size: .16rem;
      position: absolute;
      top: .27rem;
      left: 2.70rem;
      color: white;
    }
  }
}
</style>
