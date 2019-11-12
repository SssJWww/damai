<template>
  <div>
    <ul>
      <li>
        <img src="/img/indexMenu1.0f417fda.png" alt />
        <p>全部分类</p>
      </li>
      <li>
        <img src="/img/indexMenu2.2f012e1c.png" alt />
        <p>限时秒杀</p>
      </li>
      <li>
        <img src="/img/indexMenu3.bdfbc5e8.png" alt />
        <p>实时榜单</p>
      </li>
      <li>
        <img src="/img/indexMenu4.7e088195.png" alt />
        <p>商家报名</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
div{

background-color: white ;
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
