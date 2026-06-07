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
  <h3>Readme markdown</h3>
    <div>
    <p v-if="md.length===0">Nothing here </p>
  <pre>{{ md }}</pre>

    </div>

</div>
</template>

<style scoped>
div{
  flex:1;

}
pre{
  font-family: var(--font-family-code),serif;
}
</style>