<script>
export default {
  name: "Markdown",
  props:{
    md: {type: String},

  }
}


</script>

<template>
<section>
  <h2>Readme markdown</h2>
    <div>
    <p v-if="md === null">Nothing here </p>
  <pre>{{ md }}</pre>

    </div>

</section>
</template>

<style scoped>
section{
  height: 100vh;

}
</style>