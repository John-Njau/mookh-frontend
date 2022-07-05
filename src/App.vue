<template>
  <div id="app">
    <nav>
      <router-link to="/Finance"></router-link>
      <router-link to="/Order"></router-link>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/buyerprofile">BProfile</router-link>|
      <router-link to="/contact">Contact</router-link>|
      <router-link to="/login">Login</router-link> |
    </nav>
    <div :style="{ 'margin-left': sidebarWidth }">
      <Sidebar />
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    
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
<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>