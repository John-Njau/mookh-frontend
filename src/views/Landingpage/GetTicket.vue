<template>
  <div class="ticket-page">
    <Navbar></Navbar>
    <p>Mellow</p>
    <div class="row">
      <div class="" v-if="event">
        <div class="col-md">
          <div>
            <p class="event-image">
              <img :src="event.event_poster" alt="" />
            </p>

            Any way {{ event.id}}
            <p>ABOUT</p>
          </div>
        </div>
        <div class="col-md">
          <div class="text-light">
            <h2>Ticket Details</h2>
            new
          </div>
        </div>
      </div>
      <div class="" v-else>
        This happesms when the event is not found.
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Landingpage/NavBar.vue";

export default {
  components: {
    Navbar,
  },
  props:["id"],
  data() {
    return {
      tickets: [],
    };
  },
  mounted() {
    // Fetch tasks on page load
    this.$store.dispatch("getTickets", this.id);
    this.getData();
  },
  computed: {
    event() {
      return this.$store.state.event;
    }
    // tickets() {
    //   return this.$store.getters.getTickets;
    // },
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
    getTicket() {
      axios
        .get("/stores/event/public/")
        .then((response) => {
          this.tickets = response.data;
        })
        .catch((error) => {
          // log the error
          console.log(error);
        });
    },
  },
};
</script>

<style>
.event-image {
  /* height: 300px; */
  /* width: 500px; */
  background-color: #eee;
  margin: auto auto;
  height: 100vh;
}
.ticket-page {
  /* background-color: rgba(8, 8, 8); */
}
</style>