<script>
export default {
  name: "ArticleCard",
  props:{
    title: {type:String, default:"Titre de l'article"},
    lastUpdate: {type: String, default: "date"},
    source: {type: String, default: "source"},
    picture: {type: String, default: "#"}

  }
}
</script>

<template>
  <article class="card">
    <div class="cardTitle">
    <p class="cardDate">📅{{ lastUpdate }}</p>
    <p>Source : {{ source }}</p>

    </div>
    <h3>{{ title }}</h3>
    <img :src="picture" alt="image de l'article">
  </article>
</template>

<style scoped>
.card{
  border: 1px solid var(--border-color);
  border-radius: 10px;
  width:80%;
  background: var(--bg-color-general);
  padding: 10px;
  margin: 5px auto;
}
.cardTitle{
  display:flex;
  gap: 20px;
}
.cardDate{
  border-radius: 4px;
  border: 1px solid var(--border-color);
  background: var(--bg-color-component);
  padding:0 5px 5px 0;
}

</style>