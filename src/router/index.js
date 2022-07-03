import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UpdateBuyerView from '../views/Profile/UpdateBuyerView.vue'
import BuyerProfile from '../views/Profile/BuyerProfileView.vue'
import Contact from '../views/ContactView.vue'



Vue.use(VueRouter)

const routes = [{
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
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/buyerprofile',
        name: 'buyerprofile',
        component: BuyerProfile,

    }, {
        path: '/update/buyerprofile',
        name: 'updatebuyerprofile',
        component: UpdateBuyerView,

    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router