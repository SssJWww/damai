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
  },
  methods: {
    handleBack () {
      this.$router.back()
    },
    handleclick (id) {
      this.$router.push(`/hotshop/${id}`)
    }
  },
  beforeMount () {
    this.$store.commit('hideTabbar')
  },
  beforeDestroy () {
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
  height: 51px;
  background: white;
  .iconfont {
    display: inline-block;
    width: 51px;
    height: 51px;
    font-size: 23px;
  }
  .icon-back {
    position: absolute;
    top: 12px;
    left: 10px;
    font-size: 25px;
  }
  .icon-search {
    position: absolute;
    top: 13px;
    left: 330px;
  }
  .time {
    width: 200px;
    height: 51px;
    position: relative;
    left: 145px;
    font-size: 20px;
    line-height: 51px;
    font-weight: lighter;
  }
}
.hot {
  width: 100%;
}
ul {
  height: 500px;
  li {
    background: white;
    margin-left: 7px;
    width: 180px;
    height: 340px;
    img {
      position: relative;
      top: 10px;
      left: 5px;
      width: 165px;
      height: 165px;
    }
    .content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: black;
      font-size: 16px;
      position: relative;
      top: 20px;
    }
    .sale_money {
      position: relative;
      top: 30px;
      font-size: 16px;
      color: red;
      span {
        position: relative;
        left: 35px;
        font-size: 13px;
        color: #999;
      }
    }
    .cat {
      position: relative;
      top: 40px;
      font-size: 14px;
      span {
        text-decoration: line-through;
        font-size: 13px;
        margin-left: 11px;
      }
    }
    .throw {
      position: relative;
      top: 50px;
      color: white;
      text-align: center;
      width: 50px;
      height: 25px;
      background: #fe0036;
      line-height: 25px;
      overflow: hidden;
      font-size: 13px;
      &::before {
        content: "";
        border-radius: 50%;
        position: absolute;
        background: white;
        top: 7px;
        left: -6px;
        width: 10px;
        height: 10px;
      }
      &::after {
        content: "";
        border-radius: 50%;
        position: absolute;
        background: white;
        width: 10px;
        height: 10px;
        top: 7px;
        left: 46px;
      }
    }
    .back_money {
      width: 64px;
      height: 26px;
      text-align: center;
      background: #ffeed6;
      font-size: 13px;
      color: #fe0036;
      position: relative;
      top: 25px;
      left: 65px;
      line-height: 26px;
    }
  }
}
</style>
