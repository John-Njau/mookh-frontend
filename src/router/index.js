import Vue from "vue";
import VueRouter from "vue-router";

import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeView from '../views/HomeView.vue'
import storesView from '../views/storesView'
import eventsView from '../views/eventsView'
import newStoreView from '../views/newStoreView'
import newEventView from '../views/newEventView'



import HomeView from "../views/landingpage/HomeView.vue";
import UpdateBuyerView from "../views/Profile/UpdateBuyerView.vue";
import BuyerProfile from "../views/Profile/BuyerProfileView.vue";
import Contact from "../views/ContactView.vue";
import LoginView from "../views/Auth/LoginView.vue";
import SignUpView from "../views/Auth/SignUpView.vue";

import storesView from "../views/events/storesView";
import eventsView from "../views/events/eventsView";
import newStoreView from "../views/events/newStoreView";
import newEventView from "../views/events/newEventView";
import FinanceView from "../views/reports/FinanceView";
import OrderView from "../views/reports/OrderView"


Vue.use(VueRouter);









const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },
    {
        path: "/signup",
        name: "signup",
        component: SignUpView,
    },
    {
        path: "/reset-password",
        name: "reset-password",
        component: () =>
            import ("../views/Auth/ResetView.vue"),
    },
    {
        path: "/buyerprofile",
        name: "buyerprofile",
        component: BuyerProfile,
    },
    {
        path: "/update/buyerprofile",
        name: "updatebuyerprofile",
        component: UpdateBuyerView,
    },
    {
        path: "/contact",
        name: "contact",
        component: Contact,
    },


    {
        path: '/Finance',
        name: 'Finance',
        component: FinanceView

    },

    {
        path: '/Order',
        name: 'Order',
        component: OrderView

    },

    {
        path: "/stores",
        name: "stores",
        component: storesView,
    },

    {
        path: "/events",
        name: "events",
        component: eventsView,
    },

    {
        path: "/addstore",
        name: "addstore",
        component: newStoreView,
    },
    {
        path: "/addevent",
        name: "addevent",
        component: newEventView,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (
        to.matched.some((record) => record.meta.requiresAuth) &&
        !store.state.isAuthenticated
    ) {
        next({
            name: "login",
            path: "/login",
            query: {
                to: to.path
            },
        });
    } else {
        next();
    }
});
export default router;