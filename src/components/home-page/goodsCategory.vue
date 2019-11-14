<template>
  <div>
    <ul class="dd1">
      <li v-for="data in datalist" :key="data.id" class="dd2">
          <span  @click="picclick(data)">{{data.name}}</span>
        <ul class="daohang1" v-show="hidden">
          <li class="daohang2" v-for="(item,index) in data.children" :key="index" @click.stop>
            <span>
              <img :src="item.img_path" alt />
              {{item.name}}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      hidden: false
    }
  },
  mounted () {
    Axios.post('/api/goods/goodsCategory').then(res => {
      console.log(res.data.data.content['15'])
      //   for(var i in res.data.data.content){
      //       console.log(res.data.data.content[i].children)
      //   }
      this.datalist = res.data.data.content
      // this.aaa=res.data.data.content.children
      // console.log(this.aaa)
    })
  },
  methods: {
    picclick (data) {
      this.hidden = !this.hidden
    }
  }
}
</script>
<style lang="scss" scoped>
div {
  height: auto;
  width: 0.97rem;
  position: absolute;
  left: 0rem;
  top: 0.54rem;
  background: white;
  .dd1 {
    height: auto;
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
        //   img {
        //     height: 0.72rem;
        //     width: 0.72rem;
        //   }
        }
      .daohang1 {
        height: 6.14rem;
        width: 2.7rem;
        margin-left: 0.97rem;
        margin-top: -0.5rem;
        background: pink;
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
            }
          }
        }
      }
    }
  }
}
</style>
