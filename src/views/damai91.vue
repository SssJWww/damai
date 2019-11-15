<template>
  <div>
    <headerbar></headerbar>
    <div class="bac">
      <div class="red">
        <swiper :options="option" :key="datalist.length" class="option " classname="option" keepAlive>
          <div class="swiper-slide" v-for="(data,index) in datalist" :key="index">
            <img :src="data.img_path" class="LB" />
          </div>
        </swiper>
        <!-- <div class="red"></div> -->
      </div>
    </div>
    <shopnav></shopnav>

    <swiper :options="newoption" class="newoption " :key="datalist2.length" classname="newoption">
      <div class="swiper-slide" v-for="(data,index) in datalist2" :key="index">
        <div>{{data.title}}</div>
      </div>
    </swiper>

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
// import discounts from '@/components/home-page/discounts'
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
          // clickable: true
        }
      },

      newoption: {
        loop: true,
        direction: 'vertical',
        autoplay: {
          delay: 2500,
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
    // discounts,
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
.newoption {
  height: 0.19rem;
  position: absolute;
  top: 5.75rem;
  left: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 2.69rem;
}
.red {
  height: 1.4rem;
  background: #fe0036;
  border-radius: 0 0 10% 10%;
  // position: absolute;
  // top: 2rem;
  // left: 0rem;
  width: 100%;
}
.bac {
  background: white;
  height: 1.8rem;
}
</style>
