<template>
  <div class="footer">
    <div class="row">
      <div class="col">
        <router-link :to="{name:'StocksNews'}" style="text-decoration: none;">
          <i class="fa fa-newspaper-o fa-2x"></i>
          <p>黑天鹅</p>
        </router-link>
      </div>
      <div class="col">
        <a href="/darklight/stock/list?userId=${sessionScope.user.userId}" style="text-decoration: none;">
          <i class="fa fa-star-o fa-2x"></i>
          <p>朕喜欢</p>
        </a>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "common-footer"
    }
</script>

<style scoped>
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
</style>
