<template>
  <div class="container-fluid">
    <ul class="nav nav-fill" >
      <li class="nav-item" >
        <a class="nav-link">
          <div class="tab-p"><span :class="{'text-success':StockExc.ShangHaiStockExc.percent<0,'text-danger':StockExc.ShangHaiStockExc.percent>0}">{{StockExc.ShangHaiStockExc.num}}</span></div>
          <div  class="tab-p">上证：<span :class="{'text-success':StockExc.ShangHaiStockExc.percent<0,'text-danger':StockExc.ShangHaiStockExc.percent>0}">{{StockExc.ShangHaiStockExc.percent}}%</span></div>
        </a>
        <span class="split-border"></span>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <div class="tab-p"><span :class="{'text-success':StockExc.ShenZhenStockExc.percent<0,'text-danger':StockExc.ShenZhenStockExc.percent>0}">{{StockExc.ShenZhenStockExc.num}}</span></div>
          <div  class="tab-p">深成：<span :class="{'text-success':StockExc.ShenZhenStockExc.percent<0,'text-danger':StockExc.ShenZhenStockExc.percent>0}">{{StockExc.ShenZhenStockExc.percent}}%</span></div>
        </a>
        <span class="split-border"></span>
      </li>
      <li class="nav-item">
        <a class="nav-link">
          <div class="tab-p"><span :class="{'text-success':StockExc.ChuanYeStockExc.percent<0,'text-danger':StockExc.ChuanYeStockExc.percent>0}">{{StockExc.ChuanYeStockExc.num}}</span></div>
          <div  class="tab-p">创业：<span :class="{'text-success':StockExc.ChuanYeStockExc.percent<0,'text-danger':StockExc.ChuanYeStockExc.percent>0}">{{StockExc.ChuanYeStockExc.percent}}%</span></div>
        </a>
      </li>
    </ul>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(LikeStockList,index) in MorningStarStockList" :key="index">
            <div class="list-group">
              <router-link v-for="(item,index) in LikeStockList" :to="{name:'StockDetail',params:{stockId:item.stockId}}" class="list-group-item list-group-item-action flex-column align-items-start" :key="index" :class="{'bg-danger':item.TodayPerct>0.0,'bg-success':item.TodayPerct<0.0,'bg-secondary':item.TodayPerct===0.0}" ref="stockList"  @click="openStock(item)">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1"><i class="fa fa-info-circle" aria-hidden="true"></i>{{item.StockName}}</h5>
                  <small><i class="fa fa-star-o" aria-hidden="true"></i></small>
                </div>
                <p class="mb-1 tab-p">今日价格：{{item.TodayPic}}</p>
                <p class="mb-1 tab-p">今日浮动：{{item.TodayPerct}}%</p>
                <p class="mb-1 tab-p">当前阶段：{{item.CurrentInfo}}</p>
              </router-link>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
        <!-- Add Arrows -->
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>

 </div>
</template>

<script>
  import axios from 'axios'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  // import {getTestList} from '../../assets/js/api'
    export default {
        name: "morning-star-list",
      data(){
        return{
          StockExc:{
            ShangHaiStockExc:{num:0, percent:0},
            ShenZhenStockExc:{num:0, percent:0},
            ChuanYeStockExc:{num:0, percent:0}
          },
          MorningStarStockList:[
            //  {StockName:'', TodayPic:'', TodayPerct:'', CurrentInfo:''}
          ]
        }
      },
      mounted(){
        let self=this;
        //大盘数据
        axios.get('http://hq.sinajs.cn/list=s_sh000001,s_sz399001,s_sz399006').then(res => {
          let elements=res.data.toString().split("\n");
          let ShangHaiStockExc=elements[0].split(",");
          self.StockExc.ShangHaiStockExc.num=ShangHaiStockExc[1];
          self.StockExc.ShangHaiStockExc.percent=ShangHaiStockExc[3];
          let ShenZhenStockExc=elements[1].split(",");
          self.StockExc.ShenZhenStockExc.num=ShenZhenStockExc[1];
          self.StockExc.ShenZhenStockExc.percent=ShenZhenStockExc[3];
          let ChuanYeStockExc=elements[2].split(",");
          self.StockExc.ChuanYeStockExc.num=ChuanYeStockExc[1];
          self.StockExc.ChuanYeStockExc.percent=ChuanYeStockExc[3];
        }).catch(err => {
          console.log(err);
        })
        //获取股票数据
        axios.get('static/test.json').then(res => {
          if(res.data.code===1){
               self.MorningStarStockList=res.data.data;
                console.log(res);
              }
        }).catch(err => {
          console.log(err);
        })
        // getTestList({userId: "oxw8iwZIfeoCKJhlV3M34xZ0GUTA"}, (res) => {
        //   if(res.code===1){
        //     self.LikeStockList=res.data;
        //     console.log(this.LikeStockList);
        //   }
        // })
        setTimeout(function () {
          let swiper = new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            initialSlide:self.MorningStarStockList.length-1,
            observer:true,
            observeParents:true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          });
        })

      }
    }
</script>

<style scoped>
   .list-group{
    overflow-y: scroll;
  }
  .nav{
    border-bottom: darkgray solid 1px;
  }
  .swiper-container {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    margin-bottom:32px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .split-border{
    border-right: darkgray solid 1px;
    position: absolute;
    top: 6px;
    height: 34px;
    transform: translateX(50px);

  }
  .nav-link{
    padding: 0.5rem 0.7rem;
  }
  .list-group-item{
    margin-top:20px;
    color:white;
    border-radius: 10px;
  }
  .tab-p {

    font-size: 12px;

  }
  /* iphone5/5s（平板，大于等于768px） */
  @media (max-width: 320px) {
    .split-border {
      transform: translateX(40px);
    }

  }
  /* 小屏幕（平板，大于等于768px） */

  @media (min-width: 768px) {

    .tab-p {

      font-size: 12px;

    }
    .split-border{
      height:40px;
      transform: translateX(100px);
    }

  }
  /* 中等屏幕（桌面显示器，大于等于992px） */
  @media (min-width: 992px) {

    .tab-p {

      font-size: 17px;

    }
    .split-border{
      height:50px;
      transform: translateX(135px);
    }
    .swiper-container .list-group{
      height: 1300px;
    }
  }
  @media (min-height: 568px) {
    .swiper-container .list-group{
      height: 465px;
    }
  }
  @media (min-height: 667px) {
    .swiper-container .list-group{
      height: 570px;
    }
  }
  @media (min-height: 736px) {
    .swiper-container .list-group{
      height: 630px;
    }
  }
  @media (min-height: 1024px) {
    .swiper-container .list-group{
      height: 900px;
    }
  }

</style>
