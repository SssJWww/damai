<template>
    <div>
    <div class="box" >
      <router-link class="iconfont icon-back back"  to="/main" tag="span"></router-link>
      <input type="text" class="suoSou2" placeholder="输入商品名称或输入宝贝标题" v-model="mytext" @input="changeinput" />
      <span class="FD iconfont icon-search"></span>
      <!-- <span class="daoHang iconfont icon-viewlist"></span> -->
      <button @click="buttonclick" class="put" >搜索</button>

      <p class="word">新手小白一点通</p>
      <a @click="handclick">
        <img src="/img/guideTo.ed883d14.png"  />
      </a>

      <ul>
          <li v-for="(data,index) in datalist2" :key="index" >
              {{data}}
          </li>
      </ul>
   </div>
    </div>
</template>
<script>
import Axios from 'axios'
import { Toast } from 'mint-ui'
// import  '@/directive/click'
export default {
  data () {
    return {
    //   datalist: [],
      datalist2: [],
      mytext: ''
    }
  },
  methods: {
    // backclick () {
    //   this.$router.go(-1)
    // },
    handclick () {
      this.$router.push('/rule')
    },
    buttonclick () {
      if (this.mytext === '') {
        Toast('请输入关键搜索字')
      } else {
        this.$router.push({ path: '/mytext', query: { data: `${this.mytext}` } })
      }
    },
    changeinput () {
      // console.log(this.$refs.myinput.value)
      Axios.post('/api/goods/suggest', `q=${this.mytext}`).then(res => {
        this.datalist2 = res.data.data
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .box {
  height: auto;
  background: linear-gradient(0deg, #fd366d, #fd8f6e);
  line-height: 0.49rem;
  // position: fixed;
  // z-index: 999;
  width: 100%;
  top: 0rem;
  left: 0rem;
  margin: auto;
  padding-bottom: 0.3rem;
  .word {
    color: white;
    width: 3.52rem;
    font-size: 0.16rem;
    margin: auto;
  }
  a {
    width: 3.52rem;
    height: 1.48rem;
    display: block;
    margin: auto;
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      margin: auto;
    }
  }
  ul{
      width: 100%;
      height: auto;
      z-index: 100;
      position: absolute;
      top: 0.51rem;
      left: 0rem;
      li{
          height: 0.49rem;
          width: 100%;
          background: white;
           z-index: 100;
           font-size: 0.16rem;
           color:#686868;
           line-height: 0.49rem;
           border-bottom: 1px solid #eee;
           padding-left: 0.1rem
      }
  }
}
.suoSou2 {
  height: 0.38rem;
  width: 2.5rem;
  border-radius: 1.2rem;
  outline: none;
  border: 0;
  margin-left: 0.5rem;
  padding-left: 0.4rem;
  font-size: 12px;
  background-color: white;
}
.back {
  font-size: 0.26rem;
  display: block;
  position: absolute;
  top: 0rem;
  left: 0.05rem;
  color: white;
}
.FD {
  position: absolute;
  top: 0rem;
  left: 0.6rem;
  font-size: 0.2rem;
}
button {
  color: white;
  font-size: 0.18rem;
  position: absolute;
  top: 0.13rem;
  right: 0.1rem;
  z-index: 1000;
  background: transparent;
  border: 0;
  outline: none;
}

</style>
