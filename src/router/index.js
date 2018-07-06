/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import LikeStock from '../components/I like/LikeStock'
import StockDetail from '../components/I like/StockDetail'
import StocksNews from '../components/BlackSwan/StocksNews'
import StocksAnalysesShow from '../components/BlackSwan/StocksAnalysesShow'
import StockDiscuss from '../components/StocksDisscuss/StockDiscuss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta:{
        title:'黑天鹅'
      }
    },
    {
      path:'/stockDetail/:stockId',
      name:'StockDetail',
      component:StockDetail,
      meta:{
        title:'股票详情'
      }
    },
    {
      path:'/stocksNews',
      name:'StocksNews',
      component:StocksNews
    },
    {
      path:'/stocksAnalysesShow',
      name:'StocksAnalysesShow',
      component:StocksAnalysesShow
    },
    {
      path:'/stockDiscuss',
      name:'StockDiscuss',
      component:StockDiscuss
    }
  ]
})
