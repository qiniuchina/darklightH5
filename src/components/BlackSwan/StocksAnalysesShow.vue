<template>
  <div class="container-fluid">
    <h3 class="page-title text-center" style="padding: 20px">股票行情大数据分析</h3>
  <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="/static/img/sentiments.png" alt="舆情分析">
    <div class="card-body">
      <p class="badge badge-primary">舆情分析</p>
      <p class="card-text">对大盘情绪看涨</p>
    </div>
  </div>n
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="/static/img/heart.png" alt="股票词云">
      <div class="card-body">
        <p class="badge badge-primary">股票词云</p>
        <p class="card-text">大数据词云显示</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "stocks-analyses-show"
    }
</script>

<style scoped>
.card{
  margin: 0 auto;
  margin-top: 1rem;
}
</style>
