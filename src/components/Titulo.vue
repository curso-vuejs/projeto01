<template>
  <h1 :style="{color: cor}">{{texto}}</h1>
</template>

<script>
export default {
  name: 'Titulo',
  props: {
    cor: String,
    texto: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
