
<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/Finance"></router-link>
      <router-link to="/Order"></router-link>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/buyerprofile">BProfile</router-link>|
      <router-link to="/contact">Contact</router-link>|
      <router-link to="/login">Login</router-link> | -->
    <!-- </nav> -->
    <router-view />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {};
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
<style >
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons");
@import "~bootstrap/dist/css/bootstrap.css";
</style>
