<template>
<<<<<<< HEAD
  <div class="hello">
    <div class="logout">
      <button class="btn-sm" @click="logout()">Log out</button>
    </div>
  </div>
=======

>>>>>>> a404c9b993ed4b70c3065ee327ccbd7ed232e946
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    logout() {
      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("userId");

      this.$store.commit('removeToken');

      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>
