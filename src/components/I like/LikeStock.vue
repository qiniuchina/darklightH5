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
          <span class="split-border"></span>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <div class="tab-p"><i class="fa fa-bell-slash-o" aria-hidden="true"></i></div>
            <div  class="tab-p">预警</div>
          </a>
        </li>

      </ul>

  <div class="container">
      <transition-group name="fadeLeft" class="list-group" tag="div">
        <router-link v-for="(item,index) in LikeStockList" :to="{name:'StockDetail',params:{stockId:item.stockId}}" class="list-group-item list-group-item-action flex-column align-items-start" :key="index" :class="{'bg-danger':item.TodayPerct>0.0,'bg-success':item.TodayPerct<0.0,'bg-secondary':item.TodayPerct===0.0}" ref="stockList"  @click="openStock(item)">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1"><i class="fa fa-info-circle" aria-hidden="true"></i>{{item.StockName}}</h5>
            <small @click="deleteStock(index)"><i class="fa fa-trash-o" aria-hidden="true"></i></small>
          </div>
          <p class="mb-1 tab-p">今日价格：{{item.TodayPic}}</p>
          <p class="mb-1 tab-p">今日浮动：{{item.TodayPerct}}%</p>
          <p class="mb-1 tab-p">当前阶段：{{item.CurrentInfo}}</p>
        </router-link>
      </transition-group>
    </div>
      <div class="footer">
        <div class="row">
          <div style="width: 20%">
            <router-link :to="{name:'StocksNews'}" style="text-decoration: none;">
              <i class="fa fa-newspaper-o fa-2x"></i>
              <p>黑天鹅</p>
            </router-link>
          </div>
          <div style="width: 60%">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="输入股票代码（600616）" aria-label="" aria-describedby="basic-addon1">
            </div>
          </div>
          <div style="width: 20%">
            <a href="/darklight/stock/list?userId=${sessionScope.user.userId}" style="text-decoration: none;">
              <i class="fa fa-star-o fa-2x"></i>
              <p>朕喜欢</p>
            </a>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
  import {getDataByAjax, getTestList} from '../../assets/js/api'
    export default {
        name: "like-stock",
      data(){
          return{
            StockExc:{
              ShangHaiStockExc:{num:0, percent:0},
              ShenZhenStockExc:{num:0, percent:0},
              ChuanYeStockExc:{num:0, percent:0}
            },
            LikeStockList:[
            //  {StockName:'', TodayPic:'', TodayPerct:'', CurrentInfo:''}
            ]
          }
      },
      methods:{
        openStock(item){
          console.log(item)
        },
        deleteStock(index){
          let self=this
          console.log(self.$refs.stockList[index].className)
          // self.$refs.stockList[index].className="animated fadeOut"
          // setTimeout(function () {
            self.LikeStockList.splice(index, 1);
          //   console.log(self.LikeStockList)
          // })


        }
      },
      mounted(){
          let self=this;
          //大盘数据
        getDataByAjax( "/stock/stock_list", null, (res) => {
          if(res.code===1) {
            self.StockExc.ShangHaiStockExc.num = res.shPrice.stockPrice;
            self.StockExc.ShangHaiStockExc.percent = res.shPrice.stockUpdownPercent;
            self.StockExc.ShenZhenStockExc.num = res.szPrice.stockPrice;
            self.StockExc.ShenZhenStockExc.percent = res.szPrice.stockUpdownPercent;
            self.StockExc.ChuanYeStockExc.num = res.cyPrice.stockPrice;
            self.StockExc.ChuanYeStockExc.percent = res.cyPrice.stockUpdownPercent;
          }
          }, null, "GET"
        );

          //获取股票数据
        getTestList({userId: "oxw8iwZIfeoCKJhlV3M34xZ0GUTA"}, (res) => {
          if(res.code===1){
            self.LikeStockList=res.data;
            console.log(this.LikeStockList);
          }
        })
      }
    }
</script>

<style scoped>
  .container .list-group{
    overflow-y: scroll;
  }
  .nav{
    border-bottom: darkgray solid 1px;
  }
  .footer{
    position: fixed;
    bottom: 0;
    border: darkgray solid 1px;
    height: 50px;
    width: 100%;
    left: 0;
    display: block;
    font-size: 12px;
    text-align: center;
  }
  .footer a{
    color: inherit;
    text-decoration: none;
  }
  .input-group{
    margin-top: 5px;
  }
  .row{
    margin-left: 0;
    margin-right: 0;
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
      .container .list-group{
        height: 1300px;
      }
    }
  @media (min-height: 568px) {
    .container .list-group{
      height: 465px;
    }
  }
  @media (min-height: 667px) {
    .container .list-group{
      height: 520px;
    }
  }
  @media (min-height: 736px) {
    .container .list-group{
      height: 630px;
    }
  }
  @media (min-height: 1024px) {
    .container .list-group{
      height: 900px;
    }
  }

</style>
