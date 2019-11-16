<template>
  <div>
    <div class="red">
      <div class="back" @click="handleback()">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="east">京东优选</div>
      <div class="search">
        <input type="text" placeholder="请输入关键词/商品/ID/商品链接" v-model="metext"/>
        <i class="iconfont icon-search"></i>
        <button @click="handleText()">搜索</button>
      </div>
      <div class="hot">
        <div class="sss">热门搜索:</div>
        <div class="girl">女装</div>
        <div class="dress">连衣裙</div>
        <div class="mom">母婴</div>
        <div class="play">玩乐</div>
      </div>
    </div>
    <ul>
      <li v-for="data in datalist" :key="data.id" @click="handleclick(data.sku_id)">
        <div></div>
        <img :src="data.img_url" />
        <div class="content">{{data.goods_name}}</div>
        <div class="sale_money">
          ￥{{data.unit_price}}
          <span>月销量{{data.in_order_count}}</span>
        </div>
        <div class="cat">
          天猫价
          <span>￥{{data.wl_unit_price}}</span>
        </div>
        <div class="throw">{{data.user_id}}元券</div>
        <div class="back_money">返{{data.reward_amount}}元</div>
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
      metext: ''
    }
  },
  mounted () {
    Axios.post(
      'http://www.91damai.com/api/jd/goodsList',
      'page_num=1&page_size=100'
    ).then(res => {
      console.log(res.data.data.list)
      this.datalist = res.data.data.list
    })
  },
  methods: {
    handleback () {
      this.$router.back()
    },
    handleText () {
      console.log(this.metext)
      this.$router.push({ path: '/jingdongdong', query: { data: `${this.metext}`, number: '123' } })
    }
  }
}
</script>

<style lang="scss" scoped>
.red {
  position: relative;
  background: red;
  width: 100%;
  height: 1.5rem;
  .back {
    position: absolute;
    top: 0.1rem;
    left: 0;
    width: 0.39rem;
    height: 0.54rem;
    text-align: center;
    font-size: .25rem;
    color: white;
  }
  .east {
    position: absolute;
    top: 0;
    left: .4rem;
    width: 2.8rem;
    height: 0.52rem;
    color: white;
    font-size: .19rem;
    text-align: center;
    line-height: 0.52rem;
  }
  .search {
    position: absolute;
    top: .6rem;
    left: .10rem;
    width: 2.9rem;
    height: 0.38rem;
    input {
      width: 100%;
      height: 100%;
      color: gray;
      font-size: .17rem;
      text-align: center;
      border-radius: .4rem;
      border: 0;
    }
    i {
      position: absolute;
      top: .10rem;
      left: .10rem;
      font-size: .16rem;
    }
    button {
      position: absolute;
      top: 0rem;
      left: 2.95rem;
      background: white;
      width: 0.6rem;
      height: 0.4rem;
      border-radius: .40rem;
      color: red;
      font-size: .16rem;
      border: 0;
    }
  }
  .hot {
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    position: absolute;
    color: white;
    top: 1.1rem;
    .sss {
      position: absolute;
      left: 0.2rem;
    }
    .girl {
      position: absolute;
      left: 0.9rem;
    }
    .dress {
      position: absolute;
      left: 1.4rem;
    }
    .mom {
      position: absolute;
      left: 2rem;
    }
    .play {
      position: absolute;
      left: 2.5rem;
    }
  }
}
ul {
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
</style>
