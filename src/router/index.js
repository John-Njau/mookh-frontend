import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import storesView from '../views/storesView'
import eventsView from '../views/eventsView'
import newStoreView from '../views/newStoreView'
import newEventView from '../views/newEventView'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/stores',
    name: 'stores',
    component: storesView
  },

  {
    path: '/events',
    name: 'events',
    component:eventsView
  },

  {
    path: '/addstore',
    name: 'addstore',
    component:newStoreView
  },
  {
    path: '/addevent',
    name: 'addevent',
    component:newEventView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
