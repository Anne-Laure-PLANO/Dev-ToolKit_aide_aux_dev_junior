<script>
import { marked } from "marked";
import DOMPurify from "dompurify";

export default {
  name: "ReadmeResult",
  props:{
    mdFinal: {type: String}
  },
  computed:{
    renderedMarkdown(){
      const html = marked(this.mdFinal);
      return DOMPurify.sanitize(html);
    }
  }
}
</script>

<template>
    <p v-if="renderedMarkdown.length===0">Aucun aperçu n'est disponible.</p>
    <output v-else v-html="renderedMarkdown"></output>
</template>

<style scoped>

</style>