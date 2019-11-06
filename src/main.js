import Vue from 'vue'
import VueRouter from 'vue-router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import Tabela from './components/Tabela'

Vue.config.productionTip = false;

Vue.use(VueAxios,Axios);
Vue.use(VueRouter);


const routes = [
  {path: '/', component: App },
  {path: '/tabela', component: Tabela },
]

const router = new VueRouter({
  mode: 'history',
  routes
})
  

new Vue({
  router,
}).$mount('#app')
