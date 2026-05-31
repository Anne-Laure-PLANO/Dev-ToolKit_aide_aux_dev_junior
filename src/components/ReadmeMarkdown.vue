<script>
export default {
  name: "Markdown",
  props:{
    md: {type: String},

  }
}


</script>

<template>
<div>
  <h2>Readme markdown</h2>
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
</style>