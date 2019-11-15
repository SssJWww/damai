<template>
  <div>
    <div class="header">达人圈</div>
    <div
      class="main"
      v-for="data in datalist"
      :key="data.id"
      :myid="data.id"
      @click="handleClick(data.id)"
    >
      <div class="margin">
        <h4>{{data.title}}</h4>
        <p>{{data.profile}}</p>
        <div class="photo">
          <img :src="item" alt v-for="(item,index) in data.quality_images" :key="index" />
        </div>
      </div>
    </div>
    <div class="more">
      <button @click="handleMore()" ref="bottom" v-show="datalist.length">点击加载更多</button>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data () {
    return {
      datalist: [],
      photolist: [],
      num: 1
    }
  },
  mounted () {
    Axios.post('/api/goods/doyen', `page_no=1`).then(res => {
      //   console.log(res.data);
      this.datalist = res.data.data.list
      // console.log(this.datalist)
    })
  },
  methods: {
    handleClick (id) {
      this.$router.push(`/detail/${id}`)
    },
    handleMore () {
      this.num++
      Axios.post('/api/goods/doyen', `page_no=${this.num}`).then(res => {
        // console.log(res.data)
        this.datalist = [...this.datalist, ...res.data.data.list]
        // console.log(res.data.data.cur_page)
        // console.log(res.data.data.page_count)
        // console.log(this.$refs.bottom)
        if (res.data.data.cur_page === res.data.data.page_count) {
          this.$refs.bottom.innerHTML = '到底了'
          this.$refs.bottom.disabled = true
        }
      })
      // 第二种方法
      //     Axios.post('/api/goods/doyen', {
      //   page_no: `${this.num}`
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // 第三种方法
      // Axios({
      //   url:'/api/goods/doyen',
      //   method:'POST',
      //   data:{
      //     page_no:`${this.num}`
      //   }
      // }).then((res)=>{
      //   console.log(res,555555555)
      // })
    }
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
.more {
  height: 1.1rem;
  width: 3.59rem;
  background-color: #f5f5f5;
  position: relative;
  button {
    height: 0.5rem;
    width: 1.81rem;
    text-align: center;
    line-height: 0.5rem;
    display: block;
    background-color: #fff;
    border-radius: 1.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.25rem;
    margin-left: -0.9rem;
    font-size: 16px;
    color: #999;
    outline: none;
  }
}
</style>
