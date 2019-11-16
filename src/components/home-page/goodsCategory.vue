<template>
  <div class="all wapper" ref='wapper'>
    <div class="Lscroll">
      <ul class="dd1" >
        <li v-for="data in datalist" :key="data.id" class="dd2 ">
          <span @click="picclick(data)">{{data.name}}</span>
        </li>
      </ul>
    </div>
    <!-- <div class="shopall"> -->
      <ul class="daohang1" v-show="newdatalist.length">
        <li class="daohang2" v-for="(item,index) in newdatalist" :key="index" @click.stop>
          <span style="height:40px" @click="PPclick(item.name)">
            <img :src="item.img_path" alt />
            {{item.name}}
          </span>
        </li>
      </ul>
    <!-- </div> -->
  </div>
</template>
<script>
import Axios from 'axios'
import BScroll from '@better-scroll/core'
export default {
  data () {
    return {
      datalist: [],
      current: '',
      newdatalist: []
    }
  },

  mounted () {
    Axios.post('/api/goods/goodsCategory').then(res => {
      console.log(res.data.data.content['15'])
      /* eslint-disable no-new */
      new BScroll('.Lscroll')
      this.datalist = res.data.data.content
    })
    const options = {
      click: true,
      tap: true
    }
    this.scroll = new BScroll(this.$refs.wapper, options)
  },
  methods: {
    PPclick (item) {
      this.$router.push({ path: '/super', query: { data: item } })
    },
    picclick (data) {
      var arr = []
      console.log(data.children)
      for (let i in data.children) {
        arr.push(data.children[i]) // 属性
      }
      this.current = data.id
      this.newdatalist = arr
      console.log(this.newdatalist)
    },
    handleClick (item) {
      console.log(item)
    }
  }
}
</script>
<style lang="scss" scoped>
.all{
  height: auto;
  width: 0.97rem;
}
.Lscroll {
  height: 10.29rem;
  width: 0.97rem;
  position: absolute;
  left: 0rem;
  top: 0.47rem;
  background: white;
  overflow:hidden;
  .dd1 {
    height: 13.29rem;
    width: 0.97rem;
    .dd2 {
      height: 0.49rem;
      width: 0.97rem;
      text-align: center;
      line-height: 0.49rem;
      border-right: 1px solid #c7c7c7;
      border-top: 1px solid #c7c7c7;
      span {
        display: block;
      }
    }
  }
}
.shopall {
  height: 10.29rem;
  width: 2.7rem;
  margin-left: 0.97rem;
  margin-top: -0.5rem;
  background: white;
}
.daohang1 {
  height: 6.14rem;
  width: 2.7rem;
  margin-left: 0.97rem;
  margin-top: -0.5rem;
  background: white;
  position: absolute;
  top: 1rem;
  right: 0.07rem;
  text-align: center;
  .daohang2 {
    width: 0.89rem;
    height: 1.1rem;
    overflow: hidden;
    float: left;
    span {
      height: 1.09rem;
      width: 0.89rem;
      img {
        height: 0.72rem;
        width: 0.72rem;
        margin-left: 0.1rem;
      }
    }
  }
}
</style>
