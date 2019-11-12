<template>
  <div>
    <swiper :options="option" :key="datalist.length">
      <div class="swiper-slide" v-for="data in datalist" :key="data.id">
          <div>

          </div>
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
      'http://www.91damai.com/api/goods/goodsDetail',
      `num_iid=${this.$route.params.myid}`
    ).then(res => {
      console.log(res.data.data)
      this.datalist = res.data
      this.piclist = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
