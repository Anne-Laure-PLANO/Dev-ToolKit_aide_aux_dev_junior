<script>
import { marked } from "marked";

export default {
  name: "ReadmeResult",
  props:{
    mdFinal: {type: String}
  },
  computed:{
    renderedMarkdown(){
      return marked(this.mdFinal);
    }
  }
}
</script>

<template>
  <main>
    <h2>Readme result</h2>
    <div v-html="renderedMarkdown"></div>
  </main>
</template>

<style scoped>

</style>