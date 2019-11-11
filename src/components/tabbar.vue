<template>
  <nav>
    <ul>
      <router-link to="/main" tag="li" active-class="tab-color">
        <span class="iconfont icon-all"></span>首页
      </router-link>
      <router-link to="/story" tag="li" active-class="tab-color">
        <span class="iconfont icon-bags"></span>商城返利
      </router-link>
      <router-link to="/circle" tag="li" active-class="tab-color">
        <span class="iconfont icon-creditlevelfilling"></span>达人圈
      </router-link>
      <router-link to="/myself" tag="li" active-class="tab-color">
        <span class="iconfont icon-bussinessman"></span>我的
      </router-link>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  font-weight: bold;
  height: 60px;
  background: white;
  z-index: 10;
  ul {
    display: flex;
    border-top: 1px solid #ccc;
    height: 60px;
    li {
      flex: 1;
      text-align: center;
      height: 60px;
      line-height: 35px;
      display: flex;
      flex-direction: column;
      align-content: center;
      font-size: 18px;
      font-weight: 200;
      span {
        font-size: 18px;
        height: 25px;
      }
    }
  }
}
</style>
