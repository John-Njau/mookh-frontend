<template>
  <div id="app">
    <nav>
      <router-link to="/" class="">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
    </nav>
    <router-view/>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
@import'~bootstrap/dist/css/bootstrap.css';


@media only screen and (max-width: 991px) {
  #login-card {
    margin-top: 0;
  }

  #digital-content {
    display: none;
  }
}

</style>
<script>
import axios from "axios";

export default {
  data() {
    return {
     
    };
  },
  beforeCreate() {
    this.$store.commit("initializeStore");

    const token = this.$store.state.token;

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Token " + token;

    }
    else {
      axios.defaults.headers.common["Authorization"] = "";
      
    }
  },
  mounted() {
  },
  methods: {
    
    
  },
};

</script>
