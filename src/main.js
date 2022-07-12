import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap'
import VueAgile from "vue-agile";
Vue.use(VueAgile);


// import '@fortawesome/fontawesome-free/js/all'
import './assets/css/main.css';

Vue.config.productionTip = false


axios.defaults.baseURL = 'https://mookh-africa.herokuapp.com/'

new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app')