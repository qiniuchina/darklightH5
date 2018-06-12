<template>
   <morning-star-list></morning-star-list>
</template>

<script>
  import MorningStarList from '../components/BlackSwan/MorningStarList'
    export default {
        name: "index",
      components:{
        MorningStarList
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
