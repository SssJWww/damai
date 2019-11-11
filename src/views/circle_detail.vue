<template>
  <div class="detail">
    <div class="header">
      <span class="iconfont icon-back"></span>
      达人圈详情
    </div>
    <div class="white">
      <div class="box">
        <div class="title">
          <h5>{{this.title}}</h5>
          <p class="time">{{this.time}}</p>
          <p class="border"></p>
          <div v-html="this.conent" class="conent"></div>
        </div>
      </div>
    </div>
    <div class="list">
      <h3>达人清单</h3>
      <div class="setion">
        <div class="sample" v-for="data in datalist" :key="data.id">
          <img :src="data.pict_url" class="list_img" />
          <p class="list_title">{{data.title}}</p>
          <p class="price">
            <span class="s1">
              <em>卷后</em>
              <br />
              <em class="ff4040">{{data.coupon_after_price}}</em>
            </span>
            <span class="s2">
              <em>佣金</em>
              <br />
              <em class="ff4040">{{data.reward_amount}}</em>
            </span>
            <span class="s3">
              <em>营销</em>
              <br />
              <em class="ff4040">{{data.commission_rate}}%</em>
            </span>
          </p>
          <div class="quan">
            <i class="i1">券</i>
            <i class="i2">￥{{data.coupon_discount}}</i>
            <i class="i3">已售 {{data.volume}}</i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      title: null,
      time: null,
      conent: null,
      datalist: []
    }
  },
  mounted () {
    Axios.post('/api/goods/doyenDetail', 'id=929').then(res => {
      console.log(res.data)
      this.title = res.data.data.title
      this.time = res.data.data.created_at_str
      this.conent = res.data.data.content
      this.datalist = res.data.data.user_badge_list
      console.log(this.datalist)
    })
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 0.52rem;
  line-height: 0.52rem;
  text-align: center;
  font-size: 0.2rem;
  background-color: #fff;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  .iconfont {
    font-size: 30px;
    position: absolute;
    left: 0.2rem;
  }
}
.white {
  background-color: #fff;
  .box {
    background-color: #fff;
    overflow: hidden;
    margin: 0 16px;
    margin-top: 0.7rem;
    .title {
      background-color: #fff;
      overflow: hidden;
      h5 {
        width: 3.43rem;
        height: 0.46rem;
        background-color: #fff;
        font-size: 16px;
        line-height: 0.46rem;
      }
      .time {
        width: 3.43rem;
        height: 0.16rem;
        background-color: #fff;
        font-size: 14px;
        color: #999;
      }
      .border {
        width: 3.43rem;
        background-color: #fff;
        height: 0.12rem;
        border-bottom: 1px dashed #ccc;
      }
      .conent {
        background-color: #fff;
        img {
          width: 3.43rem !important;
        }
      }
    }
  }
}
.list {
  height: 1.89rem;
  margin-top: 0.15rem;
  h3 {
    height: 0.46rem;
    line-height: 0.46rem;
    color: #ff4040;
    padding-left: 0.2rem;
    background-color: #fff;
    font-weight: 100;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
  }
  .setion {
    height: 1.42rem;
    position: relative;
    background-color: #fff;
    padding: 0.15rem;
    .sample {
      height: 1.1rem;
      background-color: #fff;
      border: 1px solid #eee;
      position: relative;
      .list_img {
        width: 0.89rem;
        height: 0.89rem;
        position: absolute;
        top: 50%;
        margin-top: -0.44rem;
        margin-left: 0.06rem;
      }
      .list_title {
        position: absolute;
        top: 0.05rem;
        left: 1.2rem;
        font-size: 0.16rem;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 2.26rem;
      }
      .price {
        position: absolute;
        top: 0.3rem;
        left: 1.1rem;
        .s1,
        .s2,
        .s3 {
          position: absolute;
          display: block;
          float: left;
          width: 0.68rem;
          height: 0.44rem;
          text-align: center;
          em {
            font-size: 12px;
            color: #999;
            font-style: normal;
          }
          .ff4040 {
            color: #ff4040;
          }
        }
        .s1 {
          top: 0;
          left: 0;
        }
        .s2 {
          top: 0;
          left: 0.75rem;
          border-left: 1px solid #eee;
          border-right: 1px solid #eee;
        }
        .s3 {
          top: 0;
          left: 1.43rem;
        }
      }
      .quan {
        position: absolute;
        left: 1.2rem;
        top: 0.75rem;
        i {
          font-style: normal;
          display: inline-block;
        }
        .i1 {
          width: 0.22rem;
          height: 0.22rem;
          background-color: #ff4040;
          color: white;
          text-align: center;
          line-height: 0.22rem;
        }
        .i2 {
          width: 0.69rem;
          height: 0.22rem;
          text-align: center;
          background-color: #fff;
          border: 1px solid #ff4040;
          line-height: 0.2rem;
          color: #ff4040;
          font-weight: 500;
        }
        .i3{
            margin-left: .75rem;
            font-size: 12px;
            color: #999
        }
      }
    }
  }
}
</style>
