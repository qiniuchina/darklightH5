<template>
  <div class="container-fluid">
    <ul class="list-group" @click="openModal">
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a href="http://www.baidu.com" @click.stop>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
      <li class="list-group-item">
        <div class="row">
          <div class="col-3 disitem">
            <a>顺鑫农业</a>
            <small style="display: block">2345次</small>
          </div>
          <div class="col-9 disitem"><a>新闻标题新闻标题新闻标题新闻标题新闻标题</a>(新闻日期2018-04-03 03:54)</div>
        </div>
      </li>
    </ul>
    <common-footer></common-footer>
  </div>
</template>

<script>
  import CommonFooter from '../CommonFooter'
    export default {
        name: "stock-discuss",
      components:{
        CommonFooter
      }
    }
</script>

<style scoped>
  ul{
    max-height: 600px;
    overflow-y: scroll;
  }
  .list-group .list-group-item{
    margin-top:-1px;
    border-left: 0px;
    border-right: 0px;
  }
  .list-group a{
    color: #007bff;
    text-decoration: none;
  }
  .disitem{
    padding-left: 2px;
    padding-right: 2px;
  }
</style>
