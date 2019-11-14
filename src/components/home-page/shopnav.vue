<template>
  <div>
    <ul>
      <router-link tag="li" to="/juan">
        <img src="/img/nav01.6003df15.png" alt />
        <p>超级返</p>
      </router-link>
      <router-link tag="li" to="/super">
        <img src="/img/nav02.a7c14261.png" alt />
        <p>超级券</p>

      </router-link>
      <router-link tag="li" to="/jingdong">

        <img src="/img/nav03.fc7854a9.png" alt />
        <p>京东</p>
      </router-link>
      <router-link tag="li" to="/pinduo">
        <img src="/img/nav04.82f6dbf0.png" alt />
        <p>拼多多</p>
      </router-link>
            <router-link tag="li" to="/you">
        <img src="/img/nav05.b6a13cb4.png" alt />
        <p>9.9包邮</p>
      </router-link>
      <router-link tag="li" to="/hotshop">
        <img src="/img/nav06.591657df.png" alt />
        <p>实时榜单</p>
      </router-link>
      <router-link tag="li" to="/cang">
        <img src="/img/nav07.fe7d3530.png" alt />
        <p>品牌清仓</p>
      </router-link>
      <router-link tag="li" to="/all">
        <img src="/img/nav08.6682c3cb.png" alt />
        <p>全部分类</p>
      </router-link>

    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    handleClick () {
      this.$router.push('/jingdong')
    }
  }
}
</script>
<style lang="scss" scoped>
div{

background-color: white ;
height: 2rem;
}
ul {
  height: 0.94rem;
  width: 3.75rem;
  background-color: white ;
  li {
    width: 0.93rem;
    height: 0.93rem;
    float: left;
    text-align: center;
    background-color: white ;
    img {
      height: 0.52rem;
      position: relative;
      top: 0.15rem;
      left: 0.2rem;
    }
    p{
        position: relative;
        top: .2rem;
        left: 0rem;
        color: black;
        background-color: white ;
    }
  }
}
</style>
