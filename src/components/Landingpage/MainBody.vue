<template>
  <div>
    <div class="container my-5">
      <div
        id="multi-item-example"
        class="carousel slide carousel-multi-item"
        data-bs-ride="carousel"
      >
        <!--Slides-->

        <div>
          <div
            class="carousel-inner"
            role="listbox"
            v-for="event in events"
            :key="event.id"
          >
            <!--First slide-->
            <p>{{ event.id}}</p>
            <div
              class="carousel-item active"
              data-bs-interval="10000"
              style="margin-bottom: 30px"
            >
              <div class="row">
                <div class="col-md-8">
                  <div class="row">
                    <div
                      class="small col-1"
                      style="padding-left:5px; padding-left:5px;width:5px padding-top:15px;"
                    >
                      <h5 style="font-size: medium">{{ event.day }}</h5>
                      <h3 style="font-weight: 600">{{ event.date }}</h3>
                      <h5 style="font-size: medium">{{ event.month }}</h5>
                    </div>
                    <div class="col text-center" style="padding-top: 20px">
                      <h2>
                        <strong>{{ event.event_name }}</strong>
                      </h2>
                    </div>
                  </div>

                  <div style="padding-bottom: 28px">
                    <div class="row">
                      <div class="col-7">
                        <h5
                          style="
                            font-size: 15px;
                            padding-top: 30px;
                            margin-left: 0px;
                            padding-right: 150px;
                          "
                        >
                          <i
                            class="fa fa-map-marker"
                            style="margin-right: 8px"
                            aria-hidden="true"
                          ></i
                          >{{ event.event_venue}}
                        </h5>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-7">
                        <h5
                          style="
                            font-size: 15px;
                            margin-left: 0px;
                            padding-right: 220px;
                          "
                        >
                          <i class="far fa-clock" style="margin-right: 8px"></i
                          >{{ event.time }}
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col">
                      {{ event.event_decription }}
                    </div>
                  </div>

                  <div class="row frame">
                    <div class="col">
                      <router-link
                        :to="{ name: 'tickets', params: { id: event.id } }"
                        id="link"
                       
                      >
                      <!-- <p> to='event/tickets/:id=event.id'</p> -->
                        <button
                          class="custom-btn btn-3"
                          style="
                            margin-top: 25px;
                            font-size: medium;
                            width: 200px;
                          "
                        >
                          <span>GET TICKETS</span>
                        </button>
                      </router-link>
                      <router-view></router-view>

                      <button
                        class="custom-btn btn-3"
                        style="
                          margin-left: 20px;
                          margin-top: 25px;
                          margin-right: 300px;
                          width: 200px;
                          font-size: medium;
                        "
                      >
                        <span>ADD TO CALENDER</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      style="height: 380px"
                      :src="event.event_poster"
                      alt="Card image cap"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!--/.First slide-->
          </div>
        </div>
        <!--/.Slides-->
      </div>
      <!--/.Carousel Wrapper-->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "BodyCont",

  data() {
    return {
      // tasks
      events: [],
    };
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
  },
  mounted() {
    // Fetch tasks on page load
    this.$route;
    this.getData();
  },
};
</script>

<style scoped>
.custom-btn {
  width: 200px;
  height: 40px;
  color: black;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

/* 3 */
.btn-3 {
  background: #ffff00;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 0, 1) 0%,
    rgba(255, 255, 0) 100%
  );
  width: 130px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-3 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-3:before,
.btn-3:after {
  position: absolute;
  content: "";
  right: 0;
  top: 0;
  background: rgba(255, 255, 0, 1);
  transition: all 0.3s ease;
}
.btn-3:before {
  height: 0%;
  width: 2px;
}
.btn-3:after {
  width: 0%;
  height: 2px;
}
.btn-3:hover {
  background: transparent;
  box-shadow: none;
}
.btn-3:hover:before {
  height: 100%;
}
.btn-3:hover:after {
  width: 100%;
}
.btn-3 span:hover {
  color: black;
}
.btn-3 span:before,
.btn-3 span:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  background: black;
  transition: all 0.3s ease;
}
.btn-3 span:before {
  width: 2px;
  height: 0%;
}
.btn-3 span:after {
  width: 0%;
  height: 2px;
}
.btn-3 span:hover:before {
  height: 100%;
}
.btn-3 span:hover:after {
  width: 100%;
}

.small {
  /*border: 1px solid black;*/
  box-shadow: 2px 1px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-left: 30px;
  padding-left: 0px;
  padding-right: 0px;
}

body {
  background-color: #f8f8ff;
}

.container {
  color: black;
}

.btn {
  border: 1px solid black;
  border-radius: 0px;
  width: 200px;
  background-color: #ffff00;
}
</style>