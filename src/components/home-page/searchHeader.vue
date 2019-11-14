<template>
  <div>
    <router-link class="iconfont icon-back back" to="/main" tag="span"></router-link>
    <div class="hangtitle">{{text}}</div>
    <router-link class="FD iconfont icon-search" to="/city" tag="span"></router-link>
  </div>
</template>
<style lang="scss" scoped>
div {
  height: 0.51rem;
  background: white;
  .back {
    font-size: 0.26rem;
    display: block;
    position: absolute;
    top: 0rem;
    left: 0.05rem;
    color: #c1c1c1;
    line-height: 0.51rem;
  }
  .FD {
    position: absolute;
    top: 0rem;
    right: 0.1rem;
    line-height: 0.51rem;
    font-size: 0.16rem;
  }
  .hangtitle{
    text-align: center;
    line-height: 0.51rem;
    font-size: 0.20rem
  }
}
</style>
<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    this.text = this.$route.query.data
  }
}
</script>
