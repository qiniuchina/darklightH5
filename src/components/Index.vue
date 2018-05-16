<template>
    <h1 class="text-danger text-center">{{msg}}</h1>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "index",
      data(){
          return{
            msg:'dark light'
          }
      },
      mounted(){
        console.log($('h2').text());
        axios.get('/static/test.json')
          .then(res => {
            console.log(res.data);
          });
      }
    }
</script>

<style scoped>

</style>
