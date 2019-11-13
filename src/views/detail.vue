<template>
  <div>
    <swiper :options="option" :key="piclist.length">
      <div class="swiper-slide" v-for="(data,index) in piclist" :key="index">
        <img :src="data">
      </div>
    </swiper>
  </div>
</template>

<script>
import Axios from 'axios'
import swiper from '@/components/swiper'
export default {
  data () {
    return {
      datalist: [],
      piclist: [],
      option: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components: {
    swiper
  },
  mounted () {
    console.log(this.$route.params.myid)

    Axios.post(
      '/api/goods/goodsdetail',
      `num_iid=${this.$route.params.myid}`
    ).then(res => {
      console.log(res.data.data.local_small_images)
      this.datalist = res.data
      this.piclist = res.data.data.local_small_images
    })
  },
  beforeMount () {
    this.$store.commit('hideTabbar')
  },
  beforeDestroy () {
    this.$store.commit('showTabbar')
  }
}
</script>

<style lang="scss" scoped>
</style>
