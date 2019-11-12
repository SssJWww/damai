<template>
  <div class="peak">
    <router-view></router-view>
    <tabbar v-if="isShow"></tabbar>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
export default {
  components: {
    tabbar
  },
  computed: {
    isShow () {
      return this.$store.state.isTabbarShow
    }
  }
}
</script>

<style lang="scss">
body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
li,
ol,
dl,
dt,
dd,
input,
p,
figure {
  padding: 0;
  margin: 0;
}
body {
  background: #f5f5f5;
}
ul,
ol {
  list-style: none;
}
input {
  outline: none;
}
img {
  display: block;
}
html,
body {
  height: 100%;
}
a {
  text-decoration: none;
  color: #fff;
}
* {
  box-sizing: border-box;
}
body {
  font-family: "微软雅黑";
  font-size: 14px;
  color: #333;
}
html {
  font-size: 13.33vw;
}
ul {
  list-style: none;
  li {
    float: left;
    color: #999;
  }
}
.tab-color {
  color: #ff4040;
}
.peak {
  margin-bottom: 60px;
}
</style>
