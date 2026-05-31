<script setup>
import "./style.css"
import Navbarre from "@/components/Navbarre.vue";
</script>

<template>
  <div class="container" >
    <div>
      <Navbarre/>
    </div>
    <div class="app">
      <router-view/>
    </div>
  </div>
</template>

<style>
.container{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height:100vh;
}
.app{
  flex:1;
}

@media screen and (min-width : 1200px) {

  .container{
    flex-direction: row;
    height: 100vh;
    align-items: flex-start;

  }
}
</style>