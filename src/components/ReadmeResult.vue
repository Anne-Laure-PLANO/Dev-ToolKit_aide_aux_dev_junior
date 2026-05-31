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
  <section>
    <div>
      <p v-if="renderedMarkdown.length===0">Nothing here </p>

    </div>
    <div class="content" v-html="renderedMarkdown"></div>
  </section>
</template>

<style scoped>
section{
  display: flex;
  flex-direction: column;
}
.content{
  flex:1;
}
</style>