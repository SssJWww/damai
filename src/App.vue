<template>
  <div class="peak">
    <router-view></router-view>
    <tabbar v-if="isShow"></tabbar>
    <div
      class="go-to-top"
      v-scroll="{
      $refs:$refs,
      handleScroll:handleScroll
    }"
      v-show="isFixed"
      @click="handleClick()"
      ref="top"
    >
      <img
        src="data:image/png;base64,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"
        alt
      />
    </div>
  </div>
</template>

<script>
import tabbar from '@/components/tabbar'
import '@/directive/scroll'
export default {
  data () {
    return {
      isFixed: false
    }
  },
  components: {
    tabbar
  },
  computed: {
    isShow () {
      return this.$store.state.isTabbarShow
    }
  },
  methods: {
    handleScroll (isFixed) {
      this.isFixed = isFixed
    },
    handleClick () {
      document.documentElement.scrollTop = document.body.scrollTop = 0
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
.go-to-top {
  position: fixed;
  top: 5.55rem;
  right: 0.1rem;
}
</style>
