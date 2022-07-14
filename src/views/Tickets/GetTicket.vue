<template>
  <div class="ticket-page">
    <Navbar></Navbar>
    <!-- <p>
      Event Id: <span class="id"></span><span>{{ id }}</span>
    </p> -->

    <div class="container mt-5" v-if="event">
      <div class="row">
        {{ event.length }}
        <div class="col-md-6">
          <div>
            <p class="event-image">
              <img class="img-fluid" :src="event.event_poster" alt="" />
            </p>

            <p class="h5">ABOUT</p>
            <p v-html="event.event_description"></p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="">
            <div class="row">
              <div
                class="small col-1"
                style="padding-left:5px; padding-left:5px;width:5px padding-top:15px;"
              >
                <h5 style="font-size: medium">{{ event.start_date }}</h5>
                <!-- <h3 style="font-weight: 600">{{ event.start_date.date }}</h3>
                <h5 style="font-size: medium">{{ event.start_date.month }}</h5> -->
              </div>
              <div class="col text-center" style="padding-top: 20px">
                <h2>
                  <strong>{{ event.event_name }}</strong>
                </h2>
              </div>
            </div>
            <p>
              <i
                class="fa fa-map-marker"
                style="margin-right: 8px"
                aria-hidden="true"
              ></i>
              <strong>{{ event.event_venue }}</strong>
            </p>
            <p>
              {{ event.tickets.start_at }}-<span>{{ event.end_date }}</span>
            </p>
            <p>
              {{ event.tickets.end_at }}-<span>{{ event.end_date }}</span>
            </p>

            <p>
              By <a class="h6">{{ event.store_name }}</a>
            </p>

            <p class="ms-3">Share</p>

            <h6>TICKETS AVAILABLE</h6>
            <i class="fa-regular fa-chart-line-up"></i>

            <div class="row">
              <div class="" v-for="ticket in event.tickets" :key="ticket.id">
                <div class="card">
                  <div class="col">
                    <p> <strong>{{ ticket.ticket_name }}</strong></p>
                    <p>{{ ticket.ticket_price }}</p>
                    <p>{{ ticket.prices }}</p>
                    <p>
                      {{ ticket.prices.price_currency }}
                      <!-- {{ ticket.prices.price }} -->
                    </p>
                    <h6>Valid from</h6>
                    <p>{{ ticket.start_at }} - {{ ticket.end_at }}</p>
                    <p>Starts at:<br />{{ ticket.start_at }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="totals">
                <h6>SUBTOTAL</h6>
                <p>currency {{ event.tickets.price_currency }}</p>
              </div>

              <button
                class="ticket-btn btn-3"
                style="margin-top: 25px; font-size: medium; width: 200px"
              >
                <span>ADD TO CART</span>
              </button>
              <a
                role="button"
                href="/checkout"
                class="ticket-btn btn-3"
                style="margin-top: 25px; font-size: medium; width: 200px"
              >
                <span>QUICK BUY</span>
              </a>
            </div>

            <!-- {{ event.tickets }} -->
          </div>
        </div>
      </div>
    </div>
    <div class="" v-else>This happens when the event is not found.</div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Landingpage/NavBar.vue";

export default {
  components: {
    Navbar,
  },
  props: ["id"],
  data() {
    return {
      tickets: [],
    };
  },
  mounted() {
    document.title = "Get Ticket";
    // Fetch tasks on page load
    this.$store.dispatch("getTickets", this.id);
    this.$store.dispatch("getEventDetails", this.id);
    this.getData();
  },
  computed: {
    event() {
      return this.$store.state.event;
    },
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
.ticket-btn {
  background-color: #ffc107;
  color: #fff;
  border: 2px solid rgb(23, 23, 23, 0.5);
  border-radius: 1px;
  padding: 5px;
  font-size: medium;
  width: 200px;
  margin: auto 2px;
}
.event-image {
  /* height: 300px; */
  /* width: 200px; */
  /* background-color: #eee; */
  margin: 0 10px;
  /* border-radius: 10px; */
  /* height: 100vh; */
}
/* .ticket-page { */
/* background-color: rgba(8, 8, 8); */
/* color: #fff; */
/* } */

.small {
  /*border: 1px solid black;*/
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-left: 30px;
  padding-left: 0px;
  padding-right: 0px;
}
.card {
  display: flex !important;
  flex-wrap: wrap !important;
  flex-direction: row;
 padding: 5px;
}
</style>