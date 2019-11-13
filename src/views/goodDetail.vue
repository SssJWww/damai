<template>
  <div class="goodDetail">
    <swiper :options="options" class="lunbo lunbo" :key="photolist.length">
      <div class="swiper-slide" v-for="(data,index) in photolist" :key="index">
        <img :src="data" alt />
      </div>
    </swiper>
    <div class="route">
      <span class="iconfont icon-back" @click="handleBack()"></span>
      <span class="iconfont icon-all" @click="handleHome()"></span>
    </div>
  </div>
</template>
<script>
import swiper from '@/components/swiper'
import Axios from 'axios'
export default {
  data () {
    return {
      photolist: [],
      options: {
        loop: true, // 循环模式选项
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }
      }
    }
  },
  mounted () {
    console.log('goodDetail_mount')
    this.$store.commit('hideTabbar')
    Axios.post('api/goods/goodsDetail', 'num_iid=605364398762').then(res => {
    //   console.log(res.data);
      this.photolist = res.data.data.local_small_images
    //   console.log(this.photolist);
    })
  },
  beforeDestroy () {
    this.$store.commit('showTabbar')
    console.log('goodDetail_destory')
  },
  components: {
    swiper
  },
  methods: {
    handleBack () {
      this.$router.back()
    },
    handleHome () {
      this.$router.push('/main')
    }
  }
}
</script>
<style lang="scss">
.goodDetail {
  .swiper-pagination {
    height: 0.5rem;
    width: 0.5rem;
    background-color: #000;
    color: #ffffff;
    line-height: 0.5rem;
    border-radius: 50%;
    opacity: 0.5;
    left: 3.1rem;
    font-weight: 500;
  }
  .route {
    position: fixed;
    top: -.15rem;
    left: 0;
    z-index: 10;
    .iconfont {
      width: 0.4rem;
      height: 0.4rem;
      line-height: 0.4rem;
      text-align: center;
      background-color: #000;
      color: #fff;
      font-size: 16px;
      position: fixed;
      display: block;
      opacity: .5;
      border-radius: 50%;
    }
    .icon-all {
      left: 3.2rem;
      top: 0.3rem;
    }
    .icon-back {
      top: 0.3rem;
      left: 0.2rem;
    }
  }
}
</style>
