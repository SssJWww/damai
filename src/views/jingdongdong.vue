<template>
  <div>
    <div class="header">
      <i class="iconfont icon-back" @click="handleback()"></i>
      <div class="baby">{{metext}}</div>
      <i class="iconfont icon-search" @click="handlejump()"></i>
    </div>
    <div class="choose">
      <ul>
        <li class="total" :class="{active:current===0}" @click="handleZZZ()">综合</li>
        <li class="new" :class="{active:current===1}" @click="handleNNN()">最新</li>
        <li class="sale" :class="{active:current===2}" @click="handleXXX()">销量</li>
        <li class="price" :class="{active:current===3}" @click="handleJJJ()">价格</li>
      </ul>
    </div>
    <ul class="jingdong" v-if="datalist.length">
      <li v-for="(data,index) in datalist" :key="index">
        <img :src="data.img_url" />
        <div class="content">{{data.goods_name}}</div>
        <div class="sale_money">
          ￥{{data.unit_price}}
          <span>月销量{{data.in_order_count}}</span>
        </div>
        <div class="cat">
          天猫价
          <span>￥{{data.unit_price}}</span>
        </div>
        <div class="throw">{{data.user_id}}元券</div>
        <div class="back_money">返{{data.reward_amount}}元</div>
      </li>
    </ul>
    <div class="cry" v-if="show">
      <img src="/images/cry.png" />
      <div class="title">暂无搜索结果哟~</div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  data () {
    return {
      metext: '',
      datalist: [],
      current: 0,
      show: false
    }
  },
  mounted () {
    this.metext = this.$route.query.data
    Axios.post(
      'http://www.91damai.com/api/jd/search',
      `page_num=1&page_size=100&sort=common&q=${this.metext}`
    ).then(res => {
      console.log(res.data.data)
      if (res.data.data.list.length === 0) {
        this.show = true
      } else {
        this.datalist = res.data.data.list
      }
    })
  },
  methods: {
    handleZZZ () {
      this.current = 0
      console.log('111')
      Axios.post(
        'http://www.91damai.com/api/jd/search',
        `page_num=1&page_size=100&sort=common&q=${this.metext}`
      ).then(res => {
        console.log(res.data.data)
        if (res.data.data.list.length === 0) {
          this.show = true
        } else {
          this.datalist = res.data.data.list
        }
      })
    },
    handleNNN () {
      this.current = 1
      console.log('222')
      Axios.post('http://www.91damai.com/api/jd/search', `page_num=1&page_size=100&sort=new&q=${this.metext}`).then(res => {
        this.datalist = res.data.data.list
      })
    },
    handleXXX () {
      this.current = 2
      console.log('333')
      Axios.post('http://www.91damai.com/api/jd/search', `page_num=1&page_size=100&sort=volume&q=${this.metext}`).then(res => {
        this.datalist = res.data.data.list
      })
    },
    handleJJJ () {
      this.current = 3
      console.log('444')
      Axios.post('http://www.91damai.com/api/jd/search', `page_num=1&page_size=100&sort=price&q=${this.metext}`).then(res => {
        this.datalist = res.data.data.list
      })
    },
    handlejump () {
      this.$router.push('/city')
    },
    handleback () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 0.52rem;
  background: white;
  position: relative;
  border-bottom: .01rem solid gold;
  .baby {
    width: 2.8rem;
    height: 0.52rem;
    line-height: 0.52rem;
    text-align: center;
    position: absolute;
    left: .40rem;
  }
  .icon-search {
    display: inline-block;
    width: 0.52rem;
    height: 0.52rem;
    font-size: .16rem;
    position: absolute;
    left: 3.1rem;
    text-align: center;
  }
  .icon-back {
    text-align: center;
    display: inline-block;
    width: 0.52rem;
    height: 0.52rem;
    font-size: .20rem;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.choose {
  width: 100%;
  height: 0.47rem;
  position: relative;
  top: 0;
  left: 0;
  background: white;
  li {
    width: 25%;
    height: 0.47rem;
    text-align: center;
    font-size: .17rem;
    line-height: 0.47rem;
    color: black;
  }
}

.jingdong {
  height: 5.00rem;
  li {
    background: white;
    margin-left: .07rem;
    width: 1.80rem;
    height: 3.40rem;
    img {
      position: relative;
      top: .10rem;
      left: .05rem;
      width: 1.65rem;
      height: 1.65rem;
    }
    .content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: black;
      font-size: .16rem;
      position: relative;
      top: .20rem;
    }
    .sale_money {
      position: relative;
      top: .30rem;
      font-size: .16rem;
      color: red;
      span {
        position: relative;
        left: .35rem;
        font-size: .13rem;
        color: #999;
      }
    }
    .cat {
      position: relative;
      top: .40rem;
      font-size: .14rem;
      span {
        text-decoration: line-through;
        font-size: .13rem;
        margin-left: .11rem;
      }
    }
    .throw {
      position: relative;
      top: .50rem;
      color: white;
      text-align: center;
      width: .50rem;
      height: .25rem;
      background: #fe0036;
      line-height: .25rem;
      overflow: hidden;
      font-size: .13rem;
      &::before {
        content: "";
        border-radius: 50%;
        position: absolute;
        background: white;
        top: .07rem;
        left: -0.06rem;
        width: .10rem;
        height: .10rem;
      }
      &::after {
        content: "";
        border-radius: 50%;
        position: absolute;
        background: white;
        width: .10rem;
        height: .10rem;
        top: .07rem;
        left: .46rem;
      }
    }
    .back_money {
      width: .64rem;
      height: .26rem;
      text-align: center;
      background: #ffeed6;
      font-size: .13rem;
      color: #fe0036;
      position: relative;
      top: .25rem;
      left: .65rem;
      line-height: .26rem;
    }
  }
}
.active {
  color: red;
  border-bottom: .03rem solid red;
  margin: 0 auto;
  width: 0.1rem;
}
.cry {
  top: 1.8rem;
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: .80rem;
  .title {
    position: absolute;
    top: 2.05rem;
    left: 0.4rem;
    font-size: .17rem;
    color: gray;
  }
}
</style>
