<template>
  <div>
    <keep-alive >
      <make></make>
    </keep-alive>

    <div class="hotSearchs">
      <p class="hotSearch">热门搜索</p>
      <img src="/img/hot.png" alt />
      <ul>
        <router-link
          v-for="(data,index) in datalist"
          :key="index"
          :class="index===0?'active':'active2'"
          tag="li"
          to="/main"
        >{{data}}</router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import make from '@/components/home-page/make'
import Axios from 'axios'

export default {
  data () {
    return {
      datalist: []
      // datalist2: [],
      // mytext: ''
    }
  },
  components: {
    make
  },
  mounted () {
    Axios.post('/api/goods/hotKeyword').then(res => {
      this.datalist = res.data.data
    })
  }
  // methods: {
  //   backclick () {
  //     this.$router.go(-1)
  //   },
  //   changeinput () {
  //     Axios.post('/api/goods/suggest', `q=${this.mytext}`).then(res => {
  //       this.datalist2 = res.data.data
  //     })
  //   }
  // }
}
</script>
<style lang="scss" scoped>
// button {
//   color: white;
//   font-size: 0.18rem;
//   position: absolute;
//   top: 0.13rem;
//   right: 0.1rem;
//   z-index: 1000;
//   background: transparent;
//   border: 0;
//   outline: none;
// }
// .box {
//   height: auto;
//   background: linear-gradient(0deg, #fd366d, #fd8f6e);
//   line-height: 0.49rem;
//   // position: fixed;
//   // z-index: 999;
//   width: 100%;
//   top: 0rem;
//   left: 0rem;
//   margin: auto;
//   padding-bottom: 0.3rem;
//   .word {
//     color: white;
//     width: 3.52rem;
//     font-size: 0.16rem;
//     margin: auto;
//   }
//   a {
//     width: 3.52rem;
//     height: 1.48rem;
//     display: block;
//     margin: auto;
//     img {
//       width: auto;
//       height: auto;
//       max-width: 100%;
//       max-height: 100%;
//       margin: auto;
//     }
//   }
//   ul{
//       width: 100%;
//       height: auto;
//       z-index: 100;
//       position: absolute;
//       top: 0.51rem;
//       left: 0rem;
//       li{
//           height: 0.49rem;
//           width: 100%;
//           background: white;
//            z-index: 100;
//            font-size: 0.16rem;
//            color:#686868;
//            line-height: 0.49rem;
//            border-bottom: 1px solid #eee;
//            padding-left: 0.1rem
//       }
//   }
// }
// .suoSou {
//   height: 0.38rem;
//   width: 2.5rem;
//   border-radius: 1.2rem;
//   outline: none;
//   border: 0;
//   margin-left: 0.5rem;
//   padding-left: 0.4rem;
//   font-size: 12px;
//   background-color: white;
// }
// .back {
//   font-size: 0.26rem;
//   display: block;
//   position: absolute;
//   top: 0rem;
//   left: 0.05rem;
//   color: white;
// }
// .FD {
//   position: absolute;
//   top: 0rem;
//   left: 0.6rem;
//   font-size: 0.2rem;
// }
.hotSearch {
  height: 0.46rem;
  width: 3.52rem;
  line-height: 0.46rem;
  font-size: 0.17rem;
  margin: auto;
}
.hotSearchs {
  height: 1.73rem;
  background: white;
  position: relative;
  ul {
    width: 3.43rem;
    height: 1.11rem;
    margin: auto;
    //  display: flex;
    li {
      width: 0.91rem;
      height: 0.43rem;
      border-radius: 1.3rem;
      border: 0.01rem solid #ccc;
      text-align: center;
      line-height: 0.43rem;
      margin-right: 0.2rem;
      margin-top: 0.1rem;
    }
    .active {
      background: #ffe4ea;
    }
    .active2 {
      background: #eeeeee;
    }
  }
  img {
    position: absolute;
    top: 0.5rem;
    left: 0.6rem;
  }
}
</style>
