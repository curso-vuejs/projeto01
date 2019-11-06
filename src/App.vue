<template>
  <div id="app">
    <titulo cor="red" texto="Tabela de Pessoas"></titulo>
    <!-- <tabela ></tabela> -->    
    <br/> <br/>
   


    <input type="button" value="Vai Tabela" @click="vaiTabela">
  </div>
</template>

<script>

import Titulo from './components/Titulo'

export default {
  name: 'app',
  components: {
    'titulo': Titulo,
    //'tabela': Tabela
  },

  


  methods:{

    vaiTabela(){
      this.$router.push("/tabela");
    }
  }, 


}
</script>

<style>

</style>
