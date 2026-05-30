<script>
import {fetchNews} from "@/services/fetchNews.js";
import New from "@/components/New.vue";

export default {
  name: "accueil",
  data(){
    return {
      loading: false,
      error: null,
      news: []
    }

  },
  methods:{

  },
  components:{
    New,
  },
  async mounted(){
    this.loading = true;
    this.error = null;

    try{
      this.news = await fetchNews();
      this.loading=false;
    } catch (e){
      this.error=true;
      this.loading = false;
    }

  }

}

</script>

<template>
  <header class="titleBlock">
      <h1>Dev-ToolKit</h1>
      <p>L'outil d'assistance au développement</p>
  </header>
  <main>
    <div class="coloredBlock">
      <p>Bienvenue sur votre outil d'aide au développement</p>
    </div>

  <h2>Restez informés</h2>
  <p v-if="loading">Chargement en cours</p>
  <p v-if="error">Erreur de chargement : {{ error.message }}</p>
  <div class="cardContainer" id="cardContainer">

    <New
      v-for = "article in news"
      :key = "article.id"
      :title ="article.title"
      :lastUpdate = "article.pubDate"
      :source = "article.guid"
      :picture = "article.enclosure.link"

      />

  </div>
</main>

</template>

<style scoped>
h2{
text-align: center;
}

</style>