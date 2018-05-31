<template>
    <div class="container-fluid">
      <ul class="nav nav-tabs nav-fill" style="margin-top: 2px">
        <li class="nav-item">
          <a class="nav-link" :class="{'active':navTab[0].isShow}" @click="changeTab(0)">黑天鹅池</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{'active':navTab[1].isShow}" @click="changeTab(1)">热点新闻</a>
        </li>
      </ul>
      <div id="stocks"  class="container" v-show="navTab[0].isShow">
      <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start bg-danger">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">金龙机电</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1 tab-p">今日价格：11</p>
          <p class="mb-1 tab-p">今日浮动：1%</p>
          <p class="mb-1 tab-p">当前阶段：非黑天鹅股票</p>
          <p class="mb-1 tab-p">90天内跌幅：-30%</p>
          <small>利空新闻(条):2</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start bg-success">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">金龙机电</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1 tab-p">今日价格：11</p>
          <p class="mb-1 tab-p">今日浮动：1%</p>
          <p class="mb-1 tab-p">当前阶段：非黑天鹅股票</p>
          <p class="mb-1 tab-p">90天内跌幅：-30%</p>
          <small>利空新闻(条):2</small>
        </a>
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start bg-secondary">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">金龙机电</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1 tab-p">今日价格：11</p>
          <p class="mb-1 tab-p">今日浮动：1%</p>
          <p class="mb-1 tab-p">当前阶段：非黑天鹅股票</p>
          <p class="mb-1 tab-p">90天内跌幅：-30%</p>
          <small>利空新闻(条):2</small>
        </a>
      </div>
      </div>
     <div id="stocksNews" v-show="navTab[1].isShow">
       <ul class="list-group">
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
           </div>
         </li>
       </ul>
     </div>
      </div>
</template>

<script>
    export default {
        name: "stocks-news",
      data(){
        return{
          navTab:[
            {isShow:true},
            {isShow:false}
          ]
        }
      },
      methods:{
        changeTab(index){
          this.navTab.forEach(e => {
            e.isShow=false
          })
          this.navTab[index].isShow=true;
        }
      }
    }
</script>

<style scoped>
  #stocks .list-group-item{
    margin-top:20px;
    color:white;
    border-radius: 10px;
  }
  #stocks{
    max-height: 550px;
    overflow-y: scroll;
  }
  .tab-p {

    font-size: 12px;

  }
  #stocksNews{
    max-height: 550px;
    overflow-y: scroll;
    font-size: 0.8rem;
  }
  #stocksNews .list-group-item{
    margin-top:-1px;
    border-left: 0px;
    border-right: 0px;
  }
  #stocksNews a{
    color: #007bff;
    text-decoration: none;
  }
  .newsitem{
    padding-left: 2px;
    padding-right: 2px;
  }
  .active{
    background-color: rgba(0, 0, 0, 0.125) !important;
    color:white !important;
  }
</style>
