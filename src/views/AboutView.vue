<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Data from django backend</p>
    <div v-for="item in events" :key="item.id" >
    <h3>{{item.title}}</h3>
    <small><strong>{{item.price}} Ksh.</strong></small>
    
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      events: [],
    }
  },
  mounted() {
        this.getEvents();
        document.title = 'About';
},
methods: {
  getEvents() {
    axios
    .get('/api/events/')
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
}
}

</script>