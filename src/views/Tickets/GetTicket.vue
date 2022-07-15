<template>
  <div class="ticket-page">
    <Navbar></Navbar>
    <div class="container mt-5" v-if="event">
      <div class="row">
        {{ event.length }}
        <div class="col-md-5">
          <div>
            <p class="event-image">
              <img class="img-fluid" :src="event.event_poster" alt="" />
            </p>

            <p class="h5">ABOUT</p>
            <p v-html="event.event_description"></p>
          </div>
        </div>
        <div class="col-md-7">
          <div class="">
            <div class="row">
              <div
                class="small col-1"
                style="padding-left:5px; padding-left:5px;width:5px padding-top:15px;"
              >
                <h4 style="font-size: medium">{{ event.start_date | date }}</h4>
              </div>
              <div class="col text-center" style="padding-top: 20px">
                <h3>
                  <strong>{{ event.event_name }}</strong>
                </h3>
              </div>
            </div>
            <p class="mt-4">
              <i
                class="fa fa-map-marker"
                style="margin-right: 8px"
                aria-hidden="true"
              ></i>
              <small>
                <strong>{{ event.event_venue }}</strong>
              </small>
            </p>
            <p>
              <i class="fa-solid fa-calendar"></i>
              <small>
                {{ event.start_date | date }}-<span>{{
                  event.end_date | date
                }}</span>
              </small>
            </p>

            <p>
              By <a class="h6">{{ event.store_name }}</a>
            </p>

            <p class="ms-3">Share</p>

            <h6>
              TICKETS AVAILABLE
              <span>
                <i class="fa-solid fa-horizontal-rule"></i>
              </span>
            </h6>

            <div class="row mt-4">
              <div class="d-flex">
                <div class="" v-for="ticket in tickets" :key="ticket.id">
                  <div class="card w-100 m-2">
                    <div class="col m-2">
                      <p>
                        <strong>{{ ticket.ticket_name }}</strong>
                      </p>
                      <!-- ticket_id -->
                      <!-- <p>{{ ticket.id }}</p>  -->
                      <p>{{ ticket.prices }}</p>
                      <p>
                        {{ ticket.price_currency }}
                        {{ ticket.price }}
                      </p>
                      <h6>Valid</h6>
                      <p>
                        {{ ticket.start_at | date }} -
                        {{ ticket.end_at | date }}
                      </p>
                      <p>
                        <span class="h6">Starts at:</span> <br />{{
                          ticket.start_at | date
                        }}
                      </p>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <div class="totals">
                <p>
                  <span class="h6 me-5">SUBTOTAL</span>
                  <span class="h6 ms-5">Currency</span>
                </p>
                <h6></h6>
                <!-- <p>currency {{ ticket.price_currency }}</p> -->
              </div>
            </div>
            <div>
              <div class="control">
                <div class="input-group">
                  <input
                    type="number"
                    min="1"
                    v-model="quantity"
                    class="input"
                  />
                </div>

                <div></div>
              </div>
              <div class="d-flex">
                <div
                  @click="addToCart"
                  class="ticket-btn btn-3"
                  style="margin-top: 25px; font-size: medium"
                >
                  ADD TO CART
                </div>
                <div>
                  <a
                    role="button"
                    href="/checkout"
                    class="ticket-btn btn btn-3"
                    style="margin-top: 25px; font-size: medium; width: 200px"
                  >
                    <span>QUICK BUY</span>
                  </a>
                </div>
                <div>
                  <a
                    role="button"
                    href="https://api.whatsapp.com/send/?phone=%2B14155238886&text=join+surface-send&type=phone_number&app_absent=0"
                    class="ticket-btn btn btn-3"
                    style="margin-top: 25px; font-size: medium; width: 200px"
                  >
                    <span>Buy via Whatsapp</span>
                  </a>
                </div>
              </div>
            </div>
            <!-- <p>
  {{tickets[1].prices.price}}
    {{tickets[1].prices.price_currency}}


</p> -->
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
import { toast } from "bulma-toast";
import Navbar from "@/components/Landingpage/NavBar.vue";

export default {
  components: {
    Navbar,
  },

  props: ["id"],

  data() {
    return {
      // ticket: {},
      quantity: 1,
    };
  },

  mounted() {
    document.title = "Get Ticket";
    // Fetch tasks on page load
    this.$store.dispatch("getTickets", this.id);
    this.$store.dispatch("getEventDetails", this.id);
    // this.getData();
  },

  computed: {
    event() {
      return this.$store.state.event;
    },
    tickets() {
      return this.$store.state.tickets.tickets;
    },
    prices() {
      return this.$store.state.tickets.tickets.prices;
      // ticket.prices
    },
  },

  methods: {
    addToCart() {
      // console.log('this.quantity');
      console.log("add to cart");
      if (isNaN(this.quantity) || this.quantity < 1) {
        this.quantity = 1;
      }
      const item = {
        ticket: this.ticket,
        quantity: this.quantity,
      };

      this.$store.commit("addToCart", item);

      // showing toast image
      toast({
        message: `Ticket added to cart`,
        type: "bg-success",
        duration: 2000,
        position: "bottom-right",
        pauseOnHover: true,
        dismissible: true,
      });
    },
    // getData() {
    //   axios
    //     .get("/stores/event/public/")
    //     .then((response) => {
    //       this.events = response.data;
    //     })
    //     .catch((error) => {
    //       // log the error
    //       console.log(error);
    //     });
    // },
    // getTicket() {
    //   axios
    //     .get("/stores/event/public/")
    //     .then((response) => {
    //       this.tickets = response.data;
    //     })
    //     .catch((error) => {
    //       // log the error
    //       console.log(error);
    //     });
    // },
  },
};
</script>

<style scoped>
.ticket-btn {
  background-color: #ffc107;
  color: #fff;
  border: 2px solid rgb(23, 23, 23, 0.7);
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
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-left: 30px;
  padding-left: 0px;
  padding-right: 0px;
}
.card {
  width: 30vw;
  border-radius: 5px;
  padding: 30px;
}
.fa-horizontal-rule {
  background-color: #ffc107;
}
</style>