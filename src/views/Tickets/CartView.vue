<template>
  <div class="page-cart">
    <Navbar />
    <h1 class="title">Cart</h1>
    <div class="columns is-multitline">
      <!-- <div class="column is-9">
                
            </div> -->
      <div class="column is-12 box">
        <table class="table is-fullwidth" v-if="cartTotalLength">
          <thead>
            <tr>
              <th>Event</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CartItem
              v-for="item in cart.items"
              :key="item.event.id"
              :initialItem="item"
              v-on:removeFromCart="removeFromCart"
            >
            </CartItem>
          </tbody>
        </table>
        <p v-else>Your cart is empty</p>
      </div>
    </div>
    <div class="columns is-multitline">
      <div class="column is-12">
        <h2 class="subtitle">Summary</h2>
        <strong>${{ cartTotalPrice.toFixed(2) }}</strong
        >, {{ cartTotalLength }} items
        <hr />
        <router-link to="/checkout" id="proceed" class="btn btn-sm btn-dark">
          Proceed to Checkout
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Landingpage/NavBar.vue";
import axios from "axios";
import CartItem from "@/components/CartItem.vue";
export default {
  name: "Cart",
  components: {
    CartItem,
    Navbar,
  },
  data() {
    return {
      cart: {
        items: [],
      },
    };
  },
  mounted() {
    this.cart = this.$store.state.cart;
    // page title
    document.title = "My Cart" + " | Mookh";
  },
  methods: {
    //   this method removes cart items on click or when the value falls to 0
    removeFromCart(item) {
      this.cart.items = this.cart.items.filter(
        (i) => i.event.id !== item.event.id
      );
    },
  },
  // Adding content to the cart view
  computed: {
    cartTotalLength() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.quantity);
      }, 0);
    },
    cartTotalPrice() {
      return this.cart.items.reduce((acc, curVal) => {
        return (acc += curVal.event.price * curVal.quantity);
      }, 0);
    },
  },
};
</script>
<style scoped>
#proceed { 
/* background: #ff5a5f; */
text-decoration: none;
/* color: black;
 */
 color: #dbca12;

}

</style>