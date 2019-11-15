<template>
  <div class="list">
    <div class="this" v-for="data in datalist" :key="data.id" @click="handleClick(data.num_iid)">
      <div class="margin">
        <img :src="data.pict_url" alt />
        <p class="title">{{data.title}}</p>
        <div class="price">
          <em>￥{{data.coupon_after_price}}</em>
          <div class="count">月销量{{data.volume}}</div>
        </div>
        <div class="tbprice">
          <p>淘宝价</p>
          <i>￥{{data.zk_final_price}}</i>
        </div>
        <div class="colorbox">
          <div class="quan">{{data.coupon_discount}}元券</div>
          <div class="fan">返{{data.reward_amount}}元</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    //   datalist: []
    }
  },
  props: ['datalist'],
  methods: {
    handleClick (id) {
      this.$router.push(`/hotshop/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.list {
  width: 100%;
  display: flex;
  margin-top: 1.1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  .this {
    height: auto;
    padding: 0.08rem;
    background-color: #fff;
    width: 1.82rem;
    margin-top: 0.08rem;
    .margin {
      margin-left: 0.08rem;
      margin-right: 0.08rem;
      img {
        border-radius: 5px;
        height: auto;
        max-width: 100%;
      }
      .title {
        font-size: 0.16rem;
        margin-top: 0.08rem;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        word-break: break-all;
        width: 1.66rem;
        height: 0.41rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      .price {
        height: 0.4rem;
        width: 0.166rem;
        position: relative;
        line-height: 0.4rem;
        em {
          float: left;
          display: block;
          height: 0.4rem;
          color: #ff4400;
          font-style: normal;
          font-size: 0.18rem;
        }
        .count {
          position: absolute;
          width: 0.8rem;
          left: 0.8rem;
          height: 0.4rem;
          font-size: 0.14rem;
          color: #999;
        }
      }
      .tbprice {
        height: 0.16rem;
        width: 1.66rem;
        position: relative;
        color: #999;
        p {
          font-size: 0.12rem;
        }
        i {
          font-style: normal;
          position: absolute;
          top: 0;
          left: 0.45rem;
          text-decoration: line-through;
        }
      }
      .colorbox {
        height: 0.26rem;
        width: 0.166rem;
        position: relative;
        margin: 11.2px 0 8px;
        .quan {
          width: 0.53rem;
          height: 0.26rem;
          text-align: center;
          line-height: 0.26rem;
          background-color: #fe0036;
          color: #fff;
          font-size: 14px;
        }
        .fan {
          width: 0.8rem;
          height: 0.26rem;
          position: absolute;
          left: 0.65rem;
          line-height: 0.26rem;
          text-align: center;
          background-color: #ffeed6;
          color: #fe0036;
          top: 0;
        }
      }
    }
  }
}
</style>
