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
<div class="content">
    <p v-if="renderedMarkdown.length===0"> Aucun aperçu n'est disponible </p>
    <output v-else v-html="renderedMarkdown"></output>
</div>
</template>

<style scoped>

</style>