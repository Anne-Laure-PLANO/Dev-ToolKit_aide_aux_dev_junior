<script setup>
import "./style.css"
import Navbarre from "@/components/Navbarre.vue";
</script>

<template>
  <div class="container" >
    <Navbarre/>
    <div class="app">
      <router-view/>
    </div>
  </div>
</template>

<style>


@media screen and (min-width : 1200px) {

  .container{
    display: flex;
    min-height:100vh;
    align-items: flex-start;

  }
  .app{
    flex:1;
  }
}
</style>