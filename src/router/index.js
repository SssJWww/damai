import Vue from 'vue'
import VueRouter from 'vue-router'
import damai91 from '@/views/damai91'
import story from '@/views/story'
import circle from '@/views/circle'
import myself from '@/views/myself'
import circleDetail from '@/views/circle_detail'
import damaiHot from '@/views/damaiHot'
import damaiLight from '@/views/damailight'
import detail from '@/views/detail'
import goodDetail from '@/views/goodDetail'
import City from '@/views/city'
import Super from '@/views/super'
import All from '@/views/all'
import Rule from '@/views/rule'
import jingdong from '@/views/jingdong'
import Mytext from '@/views/mytext'
import juan from '@/views/juan'
import you from '@/views/you'
import cang from '@/views/cang'
import jingdongdong from '@/views/jingdongdong'
import pinduo from '@/views/pinduo'
Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name: 'damai91',
    component: damai91
  },
  {
    path: '/story',
    component: story
  },
  {
    path: '/circle',
    component: circle
  },
  {
    path: '/myself',
    component: myself
  },
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/detail/:myid',
    component: circleDetail
  },
  {
    path: '/hotshop',
    component: damaiHot
  },
  {
    path: '/lightshop',
    component: damaiLight
  },
  {
    path: '/hotshop/:myid',
    component: detail
  },
  {
    path: '/goodDetail/:myid',
    component: goodDetail
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/super',
    component: Super
  },
  {
    path: '/all',
    component: All
  },
  {
    path: '/rule',
    component: Rule
  },
  {
    path: '/jingdong',
    component: jingdong
  },
  {
    path: '/mytext',
    component: Mytext
  },
  {
    path: '/juan',
    component: juan
  },
  {
    path: '/you',
    component: you
  },
  {
    path: '/cang',
    component: cang
  },
  {
    path: '/jingdongdong',
    component: jingdongdong
  },
  {
    path: '/pinduo',
    component: pinduo
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
