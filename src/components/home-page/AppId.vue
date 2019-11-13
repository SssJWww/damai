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
      console.log(res.data)
      this.datalist = res.data.data
    })
  }
}
</script>
<style lang="scss" scoped>
ul{
    position: relative;
    top: 1.3rem;
    left: 0rem;
}
    img{
        height: 1.25rem;
        width: 1.87rem;

    }
</style>
