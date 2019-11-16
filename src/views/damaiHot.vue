<template>
  <div class="detail">
    <div class="search">
      <i class="iconfont icon-back" @click="handleBack()"></i>
      <div class="time">实时榜单</div>
      <i class="iconfont icon-search"></i>
    </div>
    <img src="/images/rankBanner.png" class="hot" />
    <ul>
      <li v-for="data in $store.state.shoplist" :key="data.id" @click="handleclick(data.item_id)">
        <div></div>
        <img :src="data.pict_url" />
        <div class="content">{{data.title}}</div>
        <div class="sale_money">
          ￥{{data.coupon_after_price}}
          <span>月销量{{data.volume}}</span>
        </div>
        <div class="cat">
          天猫价
          <span>￥{{data.coupon_reach}}</span>
        </div>
        <div class="throw">{{data.coupon_discount}}元券</div>
        <div class="back_money">返{{data.reward_amount}}元</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted () {
    if (this.$store.state.shoplist.length === 0) {
      this.$store.dispatch('getList')
    } else {
      console.log('使用缓存数据')
    }
    this.$store.commit('hideTabbar')
  },
  methods: {
    handleBack () {
      this.$router.back()
    },
    handleclick (id) {
      this.$router.push(`/hotshop/${id}`)
    }
  },
  beforeDestroy () {
    console.log('hot2')
    this.$store.commit('showTabbar')
  }
}
</script>

<style lang="scss" scoped>
.detail {
  overflow: hidden;
}
.search {
  position: relative;
  width: 100%;
  height: .51rem;
  background: white;
  .iconfont {
    display: inline-block;
    width: .51rem;
    height: .51rem;
    font-size: .23rem;
  }
  .icon-back {
    position: absolute;
    top: .12rem;
    left: .10rem;
    font-size: .25rem;
  }
  .icon-search {
    position: absolute;
    top: .13rem;
    left: 3.30rem;
  }
  .time {
    width: 2.00rem;
    height: .51rem;
    position: relative;
    left: 1.45rem;
    font-size: .20rem;
    line-height: .51rem;
    font-weight: lighter;
  }
}
.hot {
  width: 100%;
}
ul {
  height: 5.00rem;
  li {
    background: white;
    margin-left: .07rem;
    width: 1.80rem;
    height: 3.40rem;
    img {
      position: relative;
      top: .10rem;
      left: .05rem;
      width: 1.65rem;
      height: 1.65rem;
    }
    .content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: black;
      font-size: .16rem;
      position: relative;
      top: .20rem;
    }
    .sale_money {
      position: relative;
      top: .30rem;
      font-size: .16rem;
      color: red;
      span {
        position: relative;
        left: .35rem;
        font-size: .13rem;
        color: #999;
      }
    }
    .cat {
      position: relative;
      top: .40rem;
      font-size: .14rem;
      span {
        text-decoration: line-through;
        font-size: .13rem;
        margin-left: .11rem;
      }
    }
    .throw {
      position: relative;
      top: .50rem;
      color: white;
      text-align: center;
      width: .50rem;
      height: .25rem;
      background: #fe0036;
      line-height: .25rem;
      overflow: hidden;
      font-size: .13rem;
      &::before {
        content: "";
        border-radius: 50%;
        position: absolute;
        background: white;
        top: .07rem;
        left: -.06rem;
        width: .10rem;
        height: .10rem;
      }
      &::after {
        content: "";
        border-radius: 50%;
        position: absolute;
        background: white;
        width: .10rem;
        height: .10rem;
        top: .07rem;
        left: .46rem;
      }
    }
    .back_money {
      width: .64rem;
      height: .26rem;
      text-align: center;
      background: #ffeed6;
      font-size: .13rem;
      color: #fe0036;
      position: relative;
      top: .25rem;
      left: .65rem;
      line-height: .26rem;
    }
  }
}
</style>
