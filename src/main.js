import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap'
import VueAgile from "vue-agile";
import './assets/css/main.css';
import DateFilter from './filters/date'


Vue.use(VueAgile);

Vue.filter('date', DateFilter)


Vue.config.productionTip = false


axios.defaults.baseURL = 'https://api.mookh.com/'

new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app')