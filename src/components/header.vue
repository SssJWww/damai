<template>
  <div class="pubhead">
    <div class="tophead">
      <span class="iconfont icon-back left" @click="goHome()"></span>
      <slot></slot>
      <span class="iconfont icon-search right" @click="goSearch()"></span>
    </div>
    <div class="bottomhead">
      <ul>
        <li @click="handleClick(0)" :class="currentIndex===0?'current':''">人气</li>
        <li @click="handleClick(1)" :class="currentIndex===1?'current':''">最新</li>
        <li @click="handleClick(2)" :class="currentIndex===2?'current':''">销量</li>
        <li @click="handleClick6(6)" ref="price">
          价格
          <span class="iconfont icon-less top" ref="top"></span>
          <span class="iconfont icon-moreunfold bottom" ref="bottom"></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      count: 0,
      currentIndex: 0
    }
  },
  methods: {
    goHome () {
      this.$router.push('/main')
    },
    goSearch () {
      this.$router.push('/city')
    },
    handleClick (id) {
      this.$emit('event', id)
      this.currentIndex = id
      // console.log("aaaa")
      this.$refs.price.className = ''
      this.$refs.bottom.style.color = '#000'
      this.$refs.top.style.color = '#000'
    },
    handleClick6 (id) {
      this.count++
      if (this.count % 2 === 0) {
        id = 5
        this.$emit('event', id)
        this.$refs.top.style.color = '#f60'
        this.$refs.bottom.style.color = '#000'
        this.currentIndex = 5
      } else {
        id = 6
        this.$emit('event', id)
        this.$refs.bottom.style.color = '#f60'
        this.$refs.top.style.color = '#000'
        this.currentIndex = 6
      }
      this.$refs.price.className = 'current'
    }
  }
}
</script>
<style lang="scss" scoped>
.pubhead {
  width: 100%;
  height: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 10;
  .tophead {
    height: 0.51rem;
    line-height: 0.51rem;
    text-align: center;
    font-size: 0.2rem;
    border-bottom: 1px solid #eee;
    .left,
    .right {
      position: absolute;
      font-size: 0.25rem;
    }
    .left {
      left: 0.15rem;
    }
    .right {
      right: 0.15rem;
      font-size: 0.18rem;
    }
  }
  .bottomhead {
    height: 0.49rem;
    ul {
      display: flex;
      li {
        flex: 1;
        height: 0.49rem;
        line-height: 0.49rem;
        text-align: center;
        position: relative;
        color: #000;
        font-size: 16px;
        .top {
          position: absolute;
          top: -0.1rem;
          right: 0.1rem;
          font-size: 16px;
          font-weight: 800;
        }
        .bottom {
          position: absolute;
          top: 0.1rem;
          right: 0.1rem;
          font-size: 16px;
          font-weight: 800;
        }
      }
    }
  }
}
.current {
  color: #f60;
  border-bottom: 2px solid #f60;
}
.active {
  color: #f60;
  border-bottom: 2px solid #f60;
}
</style>
