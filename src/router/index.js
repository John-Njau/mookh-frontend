import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/Auth/LoginView.vue";
import SignUpView from "../views/Auth/SignUpView.vue";

Vue.use(VueRouter);

const routes = [
  {
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
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
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
    component: () => import("../views/Auth/ResetView.vue"),
  }
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
      query: { to: to.path },
    });
  } else {
    next();
  }
});

export default router;
