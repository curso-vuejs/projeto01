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
    
    <strong>Total de salários métodos: </strong> {{calculaSalario()}} <br />    
    <strong>Total de salários computado: </strong> {{calculaSalarioComputado}} <br />
    <input type="text" v-model="nomeDigitado"/> 
    <strong>Total digitado: </strong> {{contDigitado}} <br />

    <router-link to="/">Ir para Home</router-link>  
  </div>
</template> 

<script>
export default {
  name: 'Tabela',
  
  data(){
    return {
      cabecalho: ['Id','Nome', 'Cargo', 'Unidade', 'Salário'],
      items: [
       
      ],     
      contDigitado: 0,
      nomeDigitado: ''
    }
  },

  computed:{
    calculaSalarioComputado(){          
      var total = 0;
      for(var item of this.items){
        total += item.salario;
      }
      return total;
    }
  },

  methods:{
    calculaSalario(){      
      var total = 0;
      for(var item of this.items){
        total += item.salario;
      }
      //alert(total);
      return total;
    },
  },

  watch:{
    nomeDigitado: function(){
      this.contDigitado++;
    }
  },

  mounted(){
    this.axios.get('http://10.0.2.15:3000/registros').then((response) => {
      this.items = response.data;
    })
  }
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
