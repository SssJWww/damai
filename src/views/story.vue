<template>
  <div class="d1">
    <div>
      <p class="f1">
        超市入口
      </p>
      <p class="f2">从这里进入，都有返佣</p>
    </div>
    <img src="../img/logo.png" alt />
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  mounted () {
    Axios({
      url: '/api/index/indexBanner',
      methods: 'post'
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss" scoped>
div{
  position: relative;

}
p{
  z-index: 100
}

.f1{
  position: absolute;
  left: 0;
  top:0;
}
.f2{
  position: absolute;
  left: 0;
  top:20px;
}
img {
  z-index: 1;
  width: 360px;
  height: 182px;
  max-width: 100%;
  position: absolute;

}
</style>
