<script>
export default {
  name: "ReadmeMarkdown",
  props:{
    md: {type: String},

  }
}


</script>

<template>
    <div>
    <p v-if="md.length===0">Aucun aperçu n'est disponible. </p>

  <pre>{{ md }}</pre>

    </div>

</template>

<style scoped>
div{
  flex:1;

}
pre{
  font-family: var(--font-family-code),monospace;
}
</style>