import Vue from 'vue'
import VueRouter from 'vue-router'
import damai91 from '@/views/damai91'
import story from '@/views/story'
import circle from '@/views/circle'
import myself from '@/views/myself'
import circleDetail from '@/views/circle_detail'

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
  }, {
    path: '/detail/:myid',
    component: circleDetail
  }

]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
