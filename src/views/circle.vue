<template>
  <div>
    <div class="header">达人圈</div>
    <div class="main" v-for="data in datalist" :key="data.id" :myid="data.id">
      <div class="margin">
        <h4>{{data.title}}</h4>
        <p>{{data.profile}}</p>
        <div class="photo">
          <img :src="item" alt v-for="(item,index) in data.quality_images" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      photolist: []
    }
  },
  mounted () {
    Axios.post('/api/goods/doyen', 'page_no: 1').then(res => {
      //   console.log(res.data);
      this.datalist = res.data.data.list
      console.log(this.datalist)
    })
  }
}
</script>
<style lang="scss" scoped>
.header {
  height: 0.51rem;
  background-color: #ff4040;
  text-align: center;
  line-height: 0.51rem;
  font-size: 0.2rem;
  color: #fff;
  overflow: hidden;
}
.main {
  height: 1.93rem;
  margin-top: 0.15rem;
  background-color: #fff;
  .margin {
    margin: 0 16px;
    overflow: hidden;
    h4 {
      height: 0.32rem;
      width: 3.43rem;
      font-size: 17px;
      font-weight: 500;
      background-color: #fff;
      margin-top: 0.12rem;
    }
    p {
      font-size: 13px;
      background-color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 0.51rem;
      width: 3.43rem;
      line-height: 0.25rem;
      color: #999;
    }
    .photo {
      width: 3.43rem;
      height: 0.68rem;
      margin-top: 0.1rem;
      img {
        width: 0.68rem;
        height: 0.68rem;
        float: left;
        margin-right: 0.17rem;
      }
    }
  }
}
</style>
