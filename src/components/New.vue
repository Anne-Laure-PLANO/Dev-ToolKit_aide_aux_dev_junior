<script>
export default {
  name: "New",
  props:{
    title: {type:String, default:"Titre de l'article"},
    lastUpdate: {type: String, default: "date"},
    source: {type: String, default: "source"},
    picture: {type: String, default: "#"}

  }
}
</script>

<template>
  <div class="card">
    <div class="cardTitle">
    <p class="cardDate">📅{{ lastUpdate }}</p>
    <p>Source : {{ source }}</p>

    </div>
    <h3>{{ title }}</h3>
    <img :src="picture" alt="image de l'article">
  </div>
</template>

<style scoped>
.card{
  border: 1px solid #DEE0E8;
  border-radius: 10px;
  width:80%;
  background: #FFFFFF;
  padding: 10px;
  margin: 5px auto;
}
.cardTitle{
  display:flex;
  gap: 20px;
}
.cardDate{
  border-radius: 4px;
  background: #EDF2FC;
  padding:0 5px 5px 0;
}

</style>