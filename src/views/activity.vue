<template>
  <div>
    <div class="headers">
      <p>商家活动报名</p>
      <span class="iconfont icon-back back" @click="backclick"></span>
    </div>

    <div class="content">
      <div>
        <p>购买类型</p>
        <input type="radio" class="yuan" v-model="which" value="新购买" />
        <span>新购买</span>
        <input type="radio" class="newshop yuan" v-model="which" value="续费" />
        <span>续费</span>
        <p>宝贝链接</p>
        <input
          type="text"
          placeholder="标准格式为：http://item.taobao.com/item.htm?id=22453800680 "
          class="shuru"
        />
        <p>购买套餐</p>

        <ul>
          <li v-for="(data,index) in datalist" :key="index" >
            <input type="radio" class="yuan"  v-model="there" :value='data.originalDays'/>
            {{data.dayText}}
            {{data.originalDays}}
          </li>
        </ul>

        <p>商品类型</p>
        <ul class="shopL1">
          <li v-for="(data,index) in datalist2" :key="index" class="shopL">
            <input type="checkbox" class="yuan" v-model="here" :value='data'/>
            {{data}}
          </li>
        </ul>
        <p>旺旺号</p>
        <input type="text" placeholder="请输入您的旺旺号 " class="shuru" />
        <p>手机/维系你</p>
        <input type="text" placeholder="请输入您的手机号/微信号 " class="shuru" />
      </div>
    </div>
    <div class="BT">
      <button @click="buttonclick">确认提交</button>
      <!-- <mt-spinner color="#26a2ff"></mt-spinner>
      <mt-spinner :size="60"></mt-spinner>-->
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      datalist: [],
      which: '新购买',
      datalist2: [],
      there: '15',
      here: '淘宝商品'
    }
  },
  mounted () {
    Axios.post('/api/merchant/getActivity', 'id=1&code=0').then(res => {
      console.log(res.data.data.meal)
      this.datalist2 = res.data.data.typeList
      this.datalist = res.data.data.meal
    })
  },
  methods: {
    buttonclick () {
      MessageBox.alert('操作成功').then(action => {
        // this.$router.push('/subscrible')
      })
    },
    backclick () {
      this.$router.push('/submit')
    }
  }
}
</script>
<style lang="scss" scoped>
.headers {
  height: 0.51rem;
  width: 100%;
  background: white;
  p {
    text-align: center;
    line-height: 0.51rem;
    font-size: 0.2rem;
  }
  span {
    position: absolute;
    top: 0.15rem;
    left: 0.1rem;
    font-size: 0.21rem;
    color: #bababa;
  }
}
.content {
  height: auto;
  width: 3.5rem;
  background: white;
  margin-left: 0.13rem;
  margin-top: 0.1rem;
  div {
    height: auto;
    width: 3.2rem;
    margin-left: 0.15rem;
    p {
      height: 0.32rem;
      line-height: 0.32rem;
      font-weight: 700;
      font-size: 0.16rem;
    }
    span {
      font-size: 0.16rem;
      margin-left: 0.08rem;
    }
    .newshop {
      margin-left: 0.1rem;
    }
    .shuru {
      height: 0.46rem;
      width: 3.22rem;
      border-radius: 10px;
      outline: none;
      border: 1px solid #eee;
      padding-left: 0.2rem;
    }
    .yuan:checked {
      background: #fe0036;
    }
    .yuan {
      width: 25px;
      height: 25px;
      background-color: #ffffff;
      border: solid 1px #dddddd;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      font-size: 0.8rem;
      margin: 0;
      padding: 0;
      position: relative;
      display: inline-block;
      vertical-align: top;
      cursor: default;
      -webkit-appearance: none;
      -webkit-user-select: none;
      user-select: none;
      -webkit-transition: background-color ease 0.1s;
      transition: background-color ease 0.1s;
    }
    .yuan:checked::after {
      content: "";
      top: 5px;
      left: 5px;
      position: absolute;
      background: transparent;
      border: #fff solid 2px;
      border-top: none;
      border-right: none;
      height: 6px;
      width: 10px;
      -moz-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    ul {
      height: 4.3rem;
      width: 100%;
    }
    .shopL {
      width: 3.2rem;
    }
    .shopL1 {
      height: 1.3rem;
    }
  }
}
.BT {
  width: 100%;
  height: 1.2rem;
}
button {
  width: 3.5rem;
  height: 0.51rem;
  background: #fe0036;
  color: white;
  border: 0;
  outline: none;
  position: relative;
  top: 0.4rem;
  left: 0.14rem;
}
</style>
