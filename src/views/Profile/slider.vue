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
          <carousel
            v-if="
              detIncidente && detIncidente.fotos && detIncidente.fotos.length
            "
            :autoplay="true"
            :loop="true"
            :center="true"
            :nav="false"
            :margin="5"
          >
            <img
              v-for="item in detIncidente.fotos"
              :key="item.fecha"
              :src="item.path"
              width="446"
              height="446"
              @click="showSingle(item.path)"
            />
          </carousel>
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
        .get("/api/events/")
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