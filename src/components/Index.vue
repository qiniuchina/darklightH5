<template>
   <like-stock></like-stock>
</template>

<script>
  import LikeStock from '../components/I like/LikeStock'
    export default {
        name: "index",
      components:{
        LikeStock
      },
      data(){
          return{
            msg:'dark light'
          }
      },
      mounted(){
        console.log($('h2').text());
      }
    }
</script>

<style scoped>

</style>
n
