<template>
  <div class="box">
    <router-link class="iconfont icon-back back" to="/main" tag="span"></router-link>
    <input type="text" class="suoSou" placeholder="输入商品名称或输入宝贝标题" @click="handclick" />
    <!-- <span class="daoHang iconfont icon-viewlist"></span> -->
    <span class="FD iconfont icon-search"></span>
  </div>
</template>
<script>
export default {
  methods: {
    handclick () {
      this.$router.push('/city')
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  height: 0.52rem;
  background: white;
  line-height: 0.49rem;
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0rem;
  left: 0rem;
}
.suoSou {
  height: 0.38rem;
  width: 3.05rem;
  border-radius: 1.2rem;
  outline: none;
  border: 1px solid #eee;
  margin-left: 0.35rem;
  padding-left: 0.4rem;
  font-size: 16px;
  background-color: white;
}
.daoHang {
  font-size: 0.26rem;
  display: block;
  position: absolute;
  top: 0rem;
  right: 0.18rem;
  color: white;
}
.FD {
  position: absolute;
  top: 0rem;
  left: 0.5rem;
  font-size: 0.2rem;
}
.back {
  font-size: 0.26rem;
  display: block;
  position: absolute;
  top: 0rem;
  left: 0.05rem;
  color: #c7c7c7;
}
</style>
