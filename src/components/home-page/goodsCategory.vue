<template>
  <div>
    <ul>
      <li v-for="data in datalist" :key="data.id">
        {{data.name}}
        <ul>
          <li>
            <span v-for="(item,index) in data.children" :key="index">
                  <img :src="item.img_path" alt="">
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
      aaa: null
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
  ul {
    height: auto;
    width: 0.97rem;
    li {
      height: 0.49rem;
      width: 0.97rem;
      text-align: center;
      line-height: 0.49rem;
      border-right: 1px solid #c7c7c7;
      border-top: 1px solid #c7c7c7;

      ul{
          height: 6.14rem;
          width: 2.7rem;
          position: relative;
          top: 0rem;
          right: -1rem;
          li{
              width: 0.89rem;
              height: 1.1rem;
                        overflow: hidden;

              img{
                  height: 0.72rem;
                  width: 0.72rem
              }
          }
      }
    }
  }
}
</style>
