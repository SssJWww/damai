import Vue from 'vue'
import VueRouter from 'vue-router'
import damai91 from '@/components/damai91'
import story from '@/views/story'
import circle from '@/views/circle'
import myself from '@/views/myself'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
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
  }

]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
