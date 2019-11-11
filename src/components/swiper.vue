<template>
  <div class="swiper-container shijiawei">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper(
      this.classname ? '.' + this.classname : '.shijiawei',
      this.options
    )
    // console.log(this.options,this.classname)
  },
  props: ['options', 'classname']
}
</script>

<style lang="scss" scoped>
.swiper-pagination {
  text-align: center;
}
img {
  width: 100%;
}
</style>
