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
  width:50px;
  height:50px;
  line-height: 50px;
  font-size: 18px;
  // background:#333;
  opacity: .6;
  position: absolute;
  color:white;
  border-radius: 50%;
  top:300px;
  left:300px;
}
img {
  width: 100%;
}
</style>
