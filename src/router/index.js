/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import LikeStock from '../components/I like/LikeStock'
import StockDetail from '../components/I like/StockDetail'
import StocksNews from '../components/BlackSwan/StocksNews'

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
    },
    {
      path:'/stocksNews',
      name:'StocksNews',
      component:StocksNews
    }
  ]
})
