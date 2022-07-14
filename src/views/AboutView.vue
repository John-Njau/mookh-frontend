<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Data from django backend</p>
    <br>
    <div v-for="item in events.results" :key="item.id">
      <h3>{{ item.start_date }}</h3>
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
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
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
        .get("/stores/event/public/")
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