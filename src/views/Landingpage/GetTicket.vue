<template>
  <h1>
    hui
  </h1>
</template>

<script>
export default {
  data() {
    return {
      // tasks
      events: [],
      tickets: [],
    
    }
  },
  mounted() {
    // Fetch tasks on page load
    this.$route;
    this.getData();
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
    getTicket() {
      axios
        .get("/api/events/{{$route.params.id}}/tickets/")
        .then((response) => {
          this.tickets = response.data;
        })
        .catch((error) => {
          // log the error
          console.log(error);
        });
    
    }
  },

}
</script>

<style>

</style>