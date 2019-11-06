<template>
  <div>
    Tabela
    <table>
      <tr>
        <th v-for="texto in cabecalho" :key="texto" v-text="texto"></th>      
      </tr>
      <tr v-for="item in items" :key="item.valor">
        <td v-for="valor in item" :key="valor" v-text="valor"></td>      
      </tr>
    </table>    
  </div>
</template> 

<script>
export default {
  name: 'Tabela',
  props: ['cabecalho','items'],   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

table{
  width:100%;
}
table, th, td {  
  border: 1px solid black;
}

</style>
