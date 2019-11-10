<template>
  <nav>
    <ul>
      <router-link to="/" tag="li">首页</router-link>
      <router-link to="/story" tag="li">商城返利</router-link>
      <router-link to="/circle" tag="li">达人圈</router-link>
      <router-link to="/myself" tag="li">我的</router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width:100%;
  font-weight: bold;
  height:50px;
  background: white;
  z-index:10;
  ul {
    display: flex;
    border-top: 1px solid #ccc;
    li {
      flex: 1;
      text-align: center;
      height: 50px;
      line-height: 50px;
    }
  }
}
</style>
