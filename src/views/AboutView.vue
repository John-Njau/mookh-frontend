<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Data from django backend</p>
    <br>
    <div v-for="item in events" :key="item.id">
      <h3>{{ item.title }}</h3>
      <small
        ><strong>{{ item.price }} Ksh.</strong></small
      >
    </div>
    <br><br>
    <div v-for="user in users" :key="user.id" class="mb-3">
      <h4>name: {{ user.firstname }} {{ user.lastname }}</h4>
      <p>email: {{ user.email }}</p>
      <p>phone no.: {{ user.phonenumber }}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      events: [],
      users: [],
    };
  },
  mounted() {
    this.getEvents();
    this.getUsers();
    document.title = "About";
  },
  methods: {
    getEvents() {
      axios
        .get("/api/events/")
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getUsers() {
      axios
        .get("/api/users/")
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>