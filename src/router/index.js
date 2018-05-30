/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import LikeStock from '../components/I like/LikeStock'
import StockDetail from '../components/I like/StockDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/stockDetail/:stockId',
      name:'StockDetail',
      component:StockDetail
    }
  ]
})
