<template>
  <div>
    <headerbar></headerbar>
    <swiper :options="option" :key="datalist.length" class="option" classname="option">
      <div class="swiper-slide" v-for="data in datalist" :key="data.id">
        <img :src="data.img_path" alt />
      </div>
    </swiper>
    <shopnav></shopnav>
    <newbar>
      <img src="/img/todaynew.png" alt />
      <swiper :options="newoption" :key="datalist2.length" class="newoption" classname="newoption">
        <div class="swiper-slide" v-for="(data,index) in datalist2" :key="index"></div>
      </swiper>
    </newbar>

    <imgbar></imgbar>
    <discounts></discounts>
    <AppId></AppId>
    <hottop></hottop>
    <nicetop></nicetop>
    <recommend></recommend>
  </div>
</template>

<script>
import Swiper from '@/components/swiper'
import Axios from 'axios'
import headerbar from '@/components/home-page/headerbar'
import shopnav from '@/components/home-page/shopnav'
import imgbar from '@/components/home-page/imgbar'
import newbar from '@/components/home-page/newbar'
import discounts from '@/components/home-page/discounts'
import AppId from '@/components/home-page/AppId'
import hottop from '@/components/home-page/hottop'
import nicetop from '@/components/home-page/nicetop'
import recommend from '@/components/home-page/recommend'

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

      newoption: {
        direction: 'vertical',
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        }
      },

      datalist: [],
      datalist2: []
    }
  },
  components: {
    Swiper,
    headerbar,
    shopnav,
    imgbar,
    newbar,
    discounts,
    AppId,
    hottop,
    nicetop,
    recommend
  },
  mounted () {
    Axios.post('/api/index/indexBanner', 'type=2').then(res => {
      // console.log(res.data)
      this.datalist = res.data.data
    })
    Axios.post('/api/index/newsList', 'type=2').then(res => {
      // console.log(res.data)
      this.datalist2 = res.data.data
      // console.log(this.datalist2)
    })
  }
}
</script>
