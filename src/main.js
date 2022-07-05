import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:8000'

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
