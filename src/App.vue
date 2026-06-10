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
.container{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height:100vh;
  overflow: hidden;
}
.app{
  flex:1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

@media screen and (min-width : 1200px) {
  .container{
    flex-direction: row;
    align-items: stretch;
    overflow: hidden;
  }
}
</style>