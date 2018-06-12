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
        <router-link :to="{name:'StockDetail',params:{stockId:'sh600106'}}" href="#" class="list-group-item list-group-item-action flex-column align-items-start bg-danger">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">金龙机电</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1 tab-p">今日价格：11</p>
          <p class="mb-1 tab-p">今日浮动：1%</p>
          <p class="mb-1 tab-p">当前阶段：非黑天鹅股票</p>
          <p class="mb-1 tab-p">90天内跌幅：-30%</p>
          <small>利空新闻(条):2</small>
        </router-link>
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
       <ul class="list-group" @click="openModal">
         <li class="list-group-item">
           <div class="row">
             <div class="col-3 newsitem">
               <a>顺鑫农业</a>
               <small style="display: block">2345次</small>
             </div>
             <div class="col-9 newsitem"><a href="http://www.baidu.com" @click.stop>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
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
      <common-footer></common-footer>
      <!-- Modal -->
      <div v-show="isModalShow" class="modal fade" :class="{'show':isModalShow}" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">您要关注此股票？</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click.stop="closeModal">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>1.该公司未来是否还会有更坏的消息</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal" @click.stop="closeModal">取消</button>
              <button type="button" class="btn btn-primary" @click.stop="closeModal">关注</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isModalShow" class="modal-backdrop fade show"></div>
      </div>
</template>

<script>
  import CommonFooter from '../CommonFooter'
    export default {
        name: "stocks-news",
      components:{
        CommonFooter
      },
      data(){
        return{
          navTab:[
            {isShow:true},
            {isShow:false}
          ],
          isModalShow:false
        }
      },
      methods:{
        changeTab(index){
          this.navTab.forEach(e => {
            e.isShow=false
          })
          this.navTab[index].isShow=true;
        },
        openModal(e){
          console.log( e.target.innerText)
          this.isModalShow=true

        },
        closeModal(){
          this.isModalShow=false
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
  .modal{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: block;
    overflow: hidden;
    outline: 0;
  }
</style>
