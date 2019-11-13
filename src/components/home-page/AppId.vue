<template>
    <div>
        <ul>
            <li v-for="data in datalist" :key="data.id">
                <img :src="data.img_path" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    Axios.post('/api/index/indexAdInfo', 'cid=29').then(res => {
      // console.log(res.data)
      this.datalist = res.data.data
    })
  }
}
</script>
<style lang="scss" scoped>
div{
  height: 2.52rem;
    margin-top: 0.01rem;

}
ul{
    position: relative;
    top: 0rem;
    left: 0rem;
    margin-top:1px
}
    img{
        height: 1.25rem;
        width: 1.87rem;

    }
</style>
