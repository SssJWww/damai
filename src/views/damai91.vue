<template>
  <div>
    <headerbar ></headerbar>
    <div class="red"></div>
    <swiper :options="option" :key="datalist.length" class="option" classname="option" keepAlive>
      <div class="swiper-slide" v-for="(data,index) in datalist" :key="index">

        <img :src="data.img_path" class="LB" />
      </div>
    </swiper>
    <shopnav></shopnav>
    <!-- <swiper :options="newoption" class="newoption" :if="datalist2.length" classanme="newoption">
      <div class="swiper-slide" v-for="(data,index) in datalist2" :key="index">
        {{data.title}}
      </div>
    </swiper> -->

    <imgbar></imgbar>
    <newbar></newbar>
    <!-- <discounts></discounts> -->
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
<style lang="scss" scoped>
.option {
  margin-top: 0.53rem;
  width: 3.59rem;
  height: 1.76rem;
  overflow: hidden;
  border-radius: 0.1rem;
  margin-left: 0.08rem;
  background: transparent;
}
// .LB {
//     background: red;

// }
// .newoption {
//   height: 0.19rem;
//   position: absolute;
//   top: 3.41rem;
//   left: 1.4rem;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// }
.red{
  height: 0.16rem;
  background: #fe0036;
  border-radius: 0 0 100% 100%;
  position: absolute;
  top: 2rem;
  left: 0rem;
  width: 100%;
  z-index:999;
}
</style>
