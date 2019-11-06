<template>
  <div id="app">
    <titulo cor="red" texto="Tabela de Pessoas"></titulo>
    <!-- <tabela :cabecalho='cabecalho' :items='pessoas'></tabela> -->
    <br/> <br/>
    <!-- <input type="button" value="calcula" @click="calculaSalario"> -->
    <strong>Total de salários métodos: </strong> {{calculaSalario()}} <br />    
    <strong>Total de salários computado: </strong> {{calculaSalarioComputado}} <br />
    <input type="text" v-model="nomeDigitado"/> 
    <strong>Total digitado: </strong> {{contDigitado}} <br />
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
  data(){
    return {
      cabecalho: ['Id','Nome', 'Cargo', 'Unidade', 'Salário'],
      pessoas: [
        {id:1, nome:'Thiago', cargo:'Analista', unidade:'tupis', salario: 1000 },
        {id:2, nome:'Natalia', cargo:'Gerente', unidade:'sede', salario: 2000 },
        {id:3, nome:'Cecilia', cargo:'Estagiario', unidade:'bhtrans', salario: 3000},
      ],     
      contDigitado: 0,
      nomeDigitado: ''
    }
  },
  
  computed:{
    calculaSalarioComputado(){          
      var total = 0;
      for(var pessoa of this.pessoas){
        total += pessoa.salario;
      }
      return total;
    }
  },

  methods:{
    calculaSalario(){      
      var total = 0;
      for(var pessoa of this.pessoas){
        total += pessoa.salario;
      }
      //alert(total);
      return total;
    }
  }, 

  watch:{
    nomeDigitado: function(){
      this.contDigitado++;
    }
  }
}
</script>

<style>

</style>
