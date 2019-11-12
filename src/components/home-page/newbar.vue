<template>
  <div class="all">

  </div>
</template>
<script>

export default {
  data () {
    return {
      datalist2: [],
      // components: {
      //   Swiper
      // },
      newoption: {
        direction: 'vertical',
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        }
      }
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
  img {
    height: 0.24rem;
    width: 0.7rem;
    position: absolute;
    top: 0.15rem;
    left: 0.2rem;
  }
}
</style>
