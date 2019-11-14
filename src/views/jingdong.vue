<template>
  <div>
    <div class="red">
      <div class="back">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="east">京东优选</div>
      <div class="search">
        <input type="text" placeholder="请输入关键词/商品/ID/商品链接"/>
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
      datalist: []
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
    handleText () {
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
    top: 10px;
    left: 0;
    width: 0.39rem;
    height: 0.54rem;
    text-align: center;
    font-size: 25px;
    color: white;
  }
  .east {
    position: absolute;
    top: 0;
    left: 40px;
    width: 2.8rem;
    height: 0.52rem;
    color: white;
    font-size: 19px;
    text-align: center;
    line-height: 0.52rem;
  }
  .search {
    position: absolute;
    top: 60px;
    left: 10px;
    width: 2.9rem;
    height: 0.38rem;
    input {
      width: 100%;
      height: 100%;
      color: gray;
      font-size: 17px;
      text-align: center;
      border-radius: 40px;
      border: 0;
    }
    i {
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 16px;
    }
    button {
      position: absolute;
      top: 0px;
      left: 295px;
      background: white;
      width: 0.6rem;
      height: 0.4rem;
      border-radius: 40px;
      color: red;
      font-size: 16px;
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
  height: 500px;
  li {
    background: white;
    margin-left: 7px;
    width: 180px;
    height: 340px;
    img {
      position: relative;
      top: 10px;
      left: 5px;
      width: 165px;
      height: 165px;
    }
    .content {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      color: black;
      font-size: 16px;
      position: relative;
      top: 20px;
    }
    .sale_money {
      position: relative;
      top: 30px;
      font-size: 16px;
      color: red;
      span {
        position: relative;
        left: 35px;
        font-size: 13px;
        color: #999;
      }
    }
    .cat {
      position: relative;
      top: 40px;
      font-size: 14px;
      span {
        text-decoration: line-through;
        font-size: 13px;
        margin-left: 11px;
      }
    }
    .throw {
      position: relative;
      top: 50px;
      color: white;
      text-align: center;
      width: 50px;
      height: 25px;
      background: #fe0036;
      line-height: 25px;
      overflow: hidden;
      font-size: 13px;
      &::before {
        content: "";
        border-radius: 50%;
        position: absolute;
        background: white;
        top: 7px;
        left: -6px;
        width: 10px;
        height: 10px;
      }
      &::after {
        content: "";
        border-radius: 50%;
        position: absolute;
        background: white;
        width: 10px;
        height: 10px;
        top: 7px;
        left: 46px;
      }
    }
    .back_money {
      width: 64px;
      height: 26px;
      text-align: center;
      background: #ffeed6;
      font-size: 13px;
      color: #fe0036;
      position: relative;
      top: 25px;
      left: 65px;
      line-height: 26px;
    }
  }
}
</style>
