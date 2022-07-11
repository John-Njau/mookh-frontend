<template>
  <div id="BodyCont">
    <agile @after-change="(e) => (currentSlide = e.currentSlide)">
      <div class="slide" v-for="event in events" :key="event.id">
        <h3>slide {{ event.id }}</h3>
        <h2>
          <strong>{{ event.event_name }}</strong>
        </h2>
      </div>
      <template slot="caption">slide number {{ currentSlide }}</template>
    </agile>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "BodyCont",
  data() {
    return {
      events: [],
      currentSlide: 0,
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/events/")
        .then((response) => {
          this.events = response.data;
        })
        .catch((error) => {
          // log the error
          console.log(error);
        });
    },
  },
  mounted() {
    // Fetch tasks on page load
    this.getData();
  },
};
</script>
