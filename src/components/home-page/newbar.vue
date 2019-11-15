<template>
  <div class="all">
    <img src="/img/fast.png" alt />
    <div class="shu">|</div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      datalist2: []
    }
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.all {
  height: 0.53rem;
  background: white;
  margin-top: 0.01rem;
  position: relative;
  top: 0rem;
  left: 0rem;
  img {
    height: 0.24rem;
    width: 0.48rem;
    position: absolute;
    top: 0.15rem;
    left: 0.2rem;
  }
}
.newoption{
  height: 0.19rem;
}
.shu{
  position: absolute;
  top: 0.17rem;
  left: 0.8rem
}
</style>
