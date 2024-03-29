import Vue from "vue";
import VueRouter from "vue-router";

import HomeView from "../views/Landingpage/HomeView.vue";

import UpdateBuyerView from "../views/Profile/UpdateBuyerView.vue";
import BuyerProfile from "../views/Profile/BuyerProfileView.vue";

import Checkout from "../views/Tickets/Checkout.vue";
import CartView from "../views/Tickets/CartView.vue";

import Slider from "../views/Profile/slider.vue";

import Contact from "../views/ContactView.vue";
import LoginView from "../views/Auth/LoginView.vue";
import SignUpView from "../views/Auth/SignUpView.vue";
import ErrorPage from "../views/ErrorPageView";
import storesView from "../views/events/storesView";
import eventsView from "../views/events/eventsView";
import newStoreView from "../views/events/newStoreView";
import newEventView from "../views/events/newEventView";
import FinanceView from "../views/reports/FinanceView";
import OrderView from "../views/reports/OrderView";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: HomeView,
    },

    {
        path: "/about",
        name: "about",
        component: () =>
            import ("../views/AboutView.vue"),
    },
    {
        path: "/event/tickets/:id",
        name: "tickets",
        component: () =>
            import ("../views/Tickets/GetTicket.vue"),
        props: true,
        meta: {
            requireLogin: true,
        },
    },
    {
        path: "/cart",
        name: "cart",
        component: CartView,
    },
    {
        path: "/checkout",
        name: "checkout",
        component: Checkout,
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
    },

    {
        path: "/slider",
        name: "slider",
        component: Slider,
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
        meta: {
            requireLogin: true,
        },
    },
    {
        path: "/Finance",
        name: "Finance",
        component: FinanceView,
    },
    {
        path: "/Order",
        name: "Order",
        component: OrderView,
    },
    //  catchall, 404 page
    {
        path: "/:catchAll(.*)",
        name: "NotFound",
        component: ErrorPage,
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (
        to.matched.some((record) => record.meta.requireLogin) &&
        // !store.state.isAuthenticated
        localStorage.getItem("token") === undefined
    ) {
        next({
            name: "login",

            query: {
                to: to.path,
            },
        });
    } else {
        next();
    }
});
export default router;