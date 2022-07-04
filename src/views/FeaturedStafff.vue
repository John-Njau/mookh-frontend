<template>
  <div>
    <div class="card" style="width: 18rem" v-for="event in events" :key="event.id">
      <img src="" class="card-img-top" alt="..." />
      <div class="card-body">
        <div>
          <div v-if="event.staff_favourite">
            <p style="margin-bottom: 30px">{{ event.event_name }}</p>
            <p>{{ event.day }},{{ event.month }}{{ event.date }}</p>
            <p>{{ event.location }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="card" style="width: 18rem">
      <img src="" class="card-img-top" alt="..." />
      <div class="card-body">
        <div class="”active-users”" v-for="event in events" :key="event.country">
          <div v-if="event.country == 'Uganda' && event.staff_favourite">
            <p style="margin-bottom: 30px">{{ event.event_name }}</p>
            <p>{{ event.day }},{{ event.month }}{{ event.date }}</p>
            <p>{{ event.location }}</p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "FeaturedStafff",
  components: {},
  data() {
    return {
      // tasks
      events: [""],
    };
  },
  methods: {
    async getData() {
      try {
        // fetch tasks
        const response = await this.$http.get(
          "http://localhost:8000/api/events/"
        );
        // set the data returned as tasks
        this.events = response.data;
      } catch (error) {
        // log the error
        console.log(error);
      }
    },
  },
  created() {
    // Fetch tasks on page load
    this.getData();
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 30px;
  margin-left: 100px;
  border-radius: 20px 20px 0px 0px;
  border: 2px solid black;
}
</style>
