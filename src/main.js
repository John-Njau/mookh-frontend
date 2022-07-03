import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
<<<<<<< HEAD
import 'bootstrap'
=======

import 'bootstrap'

>>>>>>> 3b997d93257276a6e0bfde75b02ef3fd5a8e9597
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://127.0.0.1:8000'

new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app')