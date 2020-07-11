import Vue from 'vue'
import VueRouter from 'vue-router'; Vue.use(VueRouter)

import Index from '@/pages/Index'


const routes = [
  {
    path: '/',
    alias: 'index',
    name: 'index',
    component: Index
  },
  {
    path: '/login',
    alias: 'login',
    name: 'login'
  },
  {
    path: '/test',
    component: () => import('@/pages/Test')
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})