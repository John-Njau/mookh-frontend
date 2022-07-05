<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/buyerprofile">BProfile</router-link>|
      <router-link to="/contact">Contact</router-link>|
      <router-link to="/login">Login</router-link> |
    </nav>
    <div :style="{ 'margin-left': sidebarWidth }">
      <Sidebar />
    </div>
    <NavBar />
    <SearchBar />
    <BodyCont />
    <FeaturedStaff />
    <FeaturedStafff />
    <Footer />

    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav> -->
    <router-view />
  </div>
</template>






<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
<script>
import axios from "axios";
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";

import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
import BodyCont from "./components/BodyCont.vue";
import FeaturedStaff from "./components/FeaturedStaff.vue";
import FeaturedStafff from "./views/FeaturedStafff.vue";
import Footer from "./components/FooterBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    SearchBar,
    BodyCont,
    FeaturedStaff,
    FeaturedStafff,
    Footer,
    Sidebar,
    Navigation,
  },

  setup() {
    return { sidebarWidth };
  },
  data() {
    return {
      tasks: [],
    };
  },
  beforeCreate() {
    this.$store.commit("initializeStore");

    const token = this.$store.state.token;

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;
    } else {
      axios.defaults.headers.common["Authorization"] = "";
    }
  },
  mounted() {},
  methods: {},
};
</script>
