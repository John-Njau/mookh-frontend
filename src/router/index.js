import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import FinanceView from '../views/reports/FinanceView.vue'
import OrderView from '../views/reports/OrderView.vue'

Vue.use(VueRouter)
Vue.use(Vuex)


const routes = [
  {
    path:'/Order',
    name:'Order',
    component: OrderView
  },
 

  {
    path:'/Finance',
    name:'Finance',
    component: FinanceView
    
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
