<template>
  <div>
    <swiper :options="option" :key="datalist.length">
      <div class="swiper-slide" v-for="data in datalist" :key="data.id">
        <img :src="data.img_path" alt />
      </div>
    </swiper>
  </div>
</template>

<script>
import Swiper from '@/components/swiper'
import Axios from 'axios'
export default {
  data () {
    return {
      option: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      datalist: []
    }
  },
  components: {
    Swiper
  },
  mounted () {
    Axios.post('/api/index/indexBanner', 'type=2').then(res => {
      console.log(res.data)
      this.datalist = res.data.data
    })
  }
}
</script>
