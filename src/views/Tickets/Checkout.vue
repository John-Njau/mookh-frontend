<template>
  <div class="checkout-page">
    <Navbar></Navbar>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div>
            <h6>Order Summary</h6>
            <div class="d-flex justify-content-between">
              <div class="div">
                <a href="/" class="text-secondary h-6"> Continue Shopping </a>
              </div>
              <div class="div">
                <a href="" class="text-secondary h-6">Promo Code?</a>
              </div>
            </div>
            <hr />
            <div class="total">
              <span class="h5 me-5">Total</span><span class="h5 ms-5">UGX</span>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="contact-info mt-5">
            <h6>Contact Information</h6>
            <div class="row">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="name*" /> <br />
                <input type="text" class="form-control" placeholder="email" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="+254"/> <br />
                <input type="text" class="form-control" placeholder="confirm email*" />
              </div>
            </div>
          </div>
           <div class="contact-info mt-5">
            <h6>Additional Information required by event organizers *</h6>
            <div class="row">
              <div class="col-md-6">
                <label for="text">Tshirt Size</label>
                <select class="form-control" id="exampleFormControlSelect1">
                    <option>Select</option>
                    <option>SM</option>
                    <option>M</option>
                    <option>X</option>
                  </select>
               
              </div>
              <div class="col-md-6">
    
               
              </div>
            </div>
          </div>
           <div class="contact-info mt-5">
            <h6>Payment Information</h6>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Payment Method</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Mpesa</option>
                    <option>Credit Card</option>
                    <option>Paypal</option>
                  </select>
                </div>
              
              </div>
              <div class="col-md-6">
                <label for="text">Confirm your mobile payment number</label>
                <input type="text" class="form-control" placeholder="+254" /> <br />
              </div>
            </div>
          </div>
          <div class="payment-btn mt-3">
            <button class="btn btn-warning">Complete Payment</button>
          </div>
        </div>
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
  },
};
</script>

<style>
</style>