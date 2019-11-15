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
      <div class="have" v-if="isMout">立即领卷</div>
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
    }
  }
}
</script>

<style lang="scss" scoped>
#detail {
  overflow: hidden;
  position: relative;
  height: 1800px;
  .back {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #778788;
    color: white;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    font-size: 22px;
    top: 20px;
    left: 20px;
    z-index: 10;
  }
  .home {
    position: absolute;
    width: 40px;
    height: 40px;
    background: #778788;
    color: white;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    font-size: 22px;
    top: 20px;
    left: 315px;
    z-index: 10;
  }
  .price {
    position: relative;
    width: 100%;
    height: 240px;
    background: white;
    .jia {
      position: absolute;
      top: 14px;
      left: 10px;
      font-weight: bold;
      height: 30px;
      font-size: 24px;
      color: red;
      span {
        font-size: 12px;
      }
    }
    .fan {
      line-height: 26px;
      position: absolute;
      top: 15px;
      left: 110px;
      width: 72px;
      height: 26px;
      background: #ffeed6;
      color: #fe0036;
    }
    .zhe {
      width: 60px;
      height: 32px;
      font-size: 14px;
      line-height: 32px;
      color: #999;
      position: absolute;
      top: 45px;
      left: 10px;
      text-decoration: line-through;
    }
    .sale {
      width: 75px;
      height: 35px;
      color: #999;
      position: absolute;
      top: 45px;
      left: 290px;
      line-height: 35px;
      font-size: 14px;
    }
    .cheap {
      width: 230px;
      height: 28px;
      position: absolute;
      top: 167px;
      left: 95px;
      font-size: 18px;
      z-index: 11;
      span {
        font-weight: bold;
      }
    }

    .title {
      width: 359px;
      height: 64px;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      font-size: 16px;
      position: absolute;
      left: 10px;
      top: 85px;
      line-height: 25px;
      font-weight: bold;
    }
    .yellow {
      width: 360px;
      height: 71px;
      position: absolute;
      top: 155px;
      left: 5px;
    }
    .vaild {
      width: 227px;
      height: 17px;
      font-size: 15px;
      position: absolute;
      top: 195px;
      left: 72px;
      z-index: 11;
    }
    .have {
      width: 100px;
      height: 21px;
      line-height: 21px;
      color: white;
      position: absolute;
      z-index: 11;
      left: 280px;
      top: 181px;
      font-size: 16px;
      font-weight: bold;
    }
  }
  .story {
    width: 360px;
    height: 90px;
    background: white;
    position: absolute;
    top: 630px;
    left: 8px;
    z-index: 10px;
    border-radius: 10px;
    .shop {
      width:100%;
      height: 15px;
      line-height: 20px;
      position: relative;
      top: 12px;
      left: 30px;
      font-size: 16px;
      color: black;
    }
    .mark {
      width: 100px;
      height: 38px;
      background: #68e5c7;
      color: white;
      position: absolute;
      top: 40px;
      left: 20px;
      line-height: 38px;
      border-radius: 10px;
      text-align: center;
    }
    .sell {
      width: 100px;
      height: 38px;
      background: #68e5c7;
      color: white;
      position: absolute;
      top: 40px;
      left: 130px;
      line-height: 38px;
      border-radius: 10px;
      text-align: center;
    }
    .ser {
      width: 100px;
      height: 38px;
      background: #68e5c7;
      color: white;
      position: absolute;
      top: 40px;
      left: 240px;
      line-height: 38px;
      border-radius: 10px;
      text-align: center;
    }
  }
  .picture {
    width: 100%;
    position: relative;
    top: 100px;
    img {
      width: 100%;
    }
  }
  .di {
    width: 100%;
    height: 61px;
    background: white;
    position: fixed;
    bottom: 0;
    .coll {
      position: absolute;
      top: 35px;
      left: 40px;
    }
    i {
      font-size: 20px;
      position: absolute;
      top: 10px;
      left: 44px;
    }
    .share {
      border-radius: 10px 0px 0px 10px;
      width: 130px;
      height: 50px;
      text-align: center;
      background: #333333;
      position: absolute;
      left: 100px;
      top: 5px;
      color: white;
      font-size: 16px;
    }
    .waste {
      border-radius: 0px 10px 10px 0px;
      width: 130px;
      height: 50px;
      text-align: center;
      background: #fe0036;
      position: absolute;
      left: 230px;
      top: 5px;
      color: white;
      font-size: 16px;
    }
    .share_money {
      font-size: 16px;
      position: absolute;
      top: 27px;
      left: 134px;
      color: white;
    }
    .waste_money {
      font-size: 16px;
      position: absolute;
      top: 27px;
      left: 270px;
      color: white;
    }
  }
}
</style>
