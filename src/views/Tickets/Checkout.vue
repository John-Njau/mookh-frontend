<template>
  <div class="checkout-page">
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <div>
                <h6>Order Summary</h6>
            </div>
          
        </div>
        <div class="col-md-6"></div>
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
  props: ["id"],
  data() {
    return {
      tickets: [],
    };
  }
};
</script>

<style>
</style>