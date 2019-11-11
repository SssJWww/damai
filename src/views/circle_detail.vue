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
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      title: null,
      time: null,
      conent: null
    }
  },
  mounted () {
    Axios.post('/api/goods/doyenDetail', 'id=929').then(res => {
      console.log(res.data)
      this.title = res.data.data.title
      this.time = res.data.data.created_at_str
      this.conent = res.data.data.content
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
  position: relative;
  overflow: hidden;
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
    margin-top: 0.18rem;
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
      }
    }
  }
}
</style>
