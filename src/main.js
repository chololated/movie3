import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'

Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.filter('setWH',function(url){
  return url.replace(/\/w\.h\//,'/');
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
