<template>
  <tr>
    <td>
      <router-link to="/">{{
        event.event_name
      }}</router-link>
    </td>
    <td>${{ item.product.price }}</td>
    <td>
      {{ item.quantity }}
      <a class="button is-small is-light" @click="incrementQuantity(item)">+</a>
      <a class="button is-small is-light" @click="decrementQuantity(item)">-</a>
    </td>
    <td>${{ getItemTotal(item).toFixed(2) }}</td>
    <td><button class="delete" @click="removeFromCart(item)"></button></td>
  </tr>
</template>
<script>
export default {
  name: "CartItem",
  props: {
    initialItem: Object,
  },
  data() {
    return {
      item: this.initialItem,
    };
  },
  methods: {
    getItemTotal(item) {
      return item.quantity * item.product.price;
    },
    // incrementing and decrementing cart quantity
    // incrementQuantity(item) {
    //   item.quantity++;
    // },
    // decrementQuantity(item) {
    //   if (item.quantity > 1) {
    //     item.quantity--;
    //   }
    // removing item from cart
    //   else {
    //     this.removeItem(item);
    //   }
    // },
    decrementQuantity(item) {
      item.quantity -= 1;
      if (item.quantity === 0) {
        this.$emit("removeFromCart", item);
      }
      this.updateCart();
    },
    incrementQuantity(item) {
      item.quantity += 1;
      this.updateCart();
    },
    updateCart() {
      localStorage.setItem("cart", JSON.stringify(this.$store.state.cart));
    },
    removeFromCart(item) {
      this.$emit("removeFromCart", item);
      this.updateCart();
    },
  },
};
</script>
<style>
</style>