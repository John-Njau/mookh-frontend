<template>
  <div class="dec">
    <div class="card-deck" v-for="event in events.results" :key="event.id">
      <div class="card">
        <img class="card-img-top" :src="event.event_poster" alt="" />
        <div class="card-body">
          <h6 style="font-size: medium">{{ event.event_name }}</h6>
          <p class="">{{ event.event_venue }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BodyCont",

  data() {
    return {
      // tasks
      events: [],
    };
  },
  methods: {
    getData() {
      axios
        .get("/stores/event/public/")
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
    this.$route;
    this.getData();
  },
};
</script>

<style scoped lang='scss'>
.dec {
  display: flex !important;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    width: 25vw;
    height: 33vw;
    margin-bottom: 30px;
    margin-left: 3vw;
    border-radius: 20px;
    border: 1px solid rgb(189, 186, 186);
    img {
      height: 24vw;
      width: 100%;
      border-radius: 20px 20px 0px 0px;
    }
  }
}
</style>
