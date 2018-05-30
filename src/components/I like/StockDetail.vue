<template>
  <div class="container-fluid">
    <header>
    <div class="row">
      <div class="col text-center">重庆路桥(sh{{stockId}})</div>
      <div class="col text-center">非黑天鹅股票</div>
    </div>
    <div class="row">
      <div class="col text-right">当前价格:</div>
      <div class="col text-left">122</div>
      <div class="col text-right">涨跌幅：</div>
      <div class="col text-left">32%</div>
    </div>
    </header>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" :class="{'tab-active':kTab[0].isShow}"  @click="changeTab(0)">分时线</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{'tab-active':kTab[1].isShow}" @click="changeTab(1)">日k线</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{'tab-active':kTab[2].isShow}" @click="changeTab(2)">周k线</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" :class="{'tab-active':kTab[3].isShow}" @click="changeTab(3)">月k线</a>
      </li>
    </ul>
    <div class="k-chat">
      <img v-show="kTab[0].isShow" src="http://image.sinajs.cn/newchart/min/n/sh600106.gif" class="img-fluid" alt="Responsive image">
      <img v-show="kTab[1].isShow" src="http://image.sinajs.cn/newchart/daily/n/sh600106.gif" class="img-fluid" alt="Responsive image">
      <img v-show="kTab[2].isShow" src="http://image.sinajs.cn/newchart/weekly/n/sh600106.gif" class="img-fluid" alt="Responsive image">
      <img v-show="kTab[3].isShow" src="http://image.sinajs.cn/newchart/monthly/n/sh600106.gif" class="img-fluid" alt="Responsive image">
    </div>
    <div class="newsList">
      <h5>相关新闻：</h5>
      <ul class="list-group">
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
        <li class="list-group-item"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "stock-detail",
      data(){
          return{
            stockId:this.$route.params.stockId,
            kTab:[
              {isShow:true},
              {isShow:false},
              {isShow:false},
              {isShow:false}
            ]
          }
      },
      methods:{
        changeTab(index){
          this.kTab.forEach(e => {
           e.isShow=false
          })
          this.kTab[index].isShow=true;
        }
      },
      mounted(){
          // console.log(this.$route.params.stockId)
      }
    }
</script>

<style scoped>
  header{
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: solid 1px red;
    font-size: 0.9rem;
  }
  .col{
    padding: 0;
  }
  .nav{
    font-size: 0.7rem;
  }
  .tab-active{
    color: #ffffff!important;
    background-color: #007bff;
  }
  .k-chat{
    margin-top: 10px;
  }
  .newsList{
    margin-top: 20px;
    font-size: 0.7rem;
  }
  .list-group{
    max-height:300px;
    overflow-y: scroll;
  }
  .newsList a{
    color: #007bff;
    text-decoration: none;
  }
</style>
