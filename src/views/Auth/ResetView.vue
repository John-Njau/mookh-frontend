<template>
  <!-- Section: Design Block -->
  <section class="background-radial-gradient overflow-hidden" id="login-page">
    <div
      class="container-fluid py-5 px-md-5 d-flex text-center text-lg-start my-5"
    >
      <div class="row gx-lg-5 align-items-center justify-content-center mb-5">
        <div
          class="col-lg-7 mb-5 mb-lg-0"
          style="z-index: 10"
          id="digital-content"
        >
          <h1
            class="my-5 display-5 fw-bold ls-tight"
            style="color: hsl(218, 81%, 95%)"
          >
            <h3>
              <strong style="font-size: 40px">Digital Gallery:</strong>
            </h3>
            The best offer <br />
            <span>for your business</span>
          </h1>
          <p
            class="mb-4 opacity-70 text-white"
            style="color: hsl(218, 81%, 85%); font-size: 20px"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
            ipsum nisi dolorem modi. Quos?
          </p>
          <button
            class="btn btn-block btn-sm outline-2"
            style="background-color: #f8fa29; width: 30%; height: 40px"
          >
            READ MORE
          </button>
        </div>

        <div class="col-lg-4 mb-3 mb-lg-0 position-relative">
          <div class="card" id="login-card" style="">
            <div class="card-body py-5 px-md-5">
              <div class="brand">
                <a
                  type="button"
                  class="btn btn-rounded text-left"
                  style="
                    background-color: #f8fa29;
                    border-radius: 20px;
                    width: 40%;
                  "
                >
                  <strong>mookh.</strong>
                </a>
              </div>
              <br />
              <div class="buyer text-white">
                <h4>
                  <strong>Reset Password</strong>
                </h4>
                <p>Enter your registered email. We'll send you password reset instructions.</p>
              </div>
              <br /><br />
              <form @submit.prevent="SubmitForm">
                <!-- 2 column grid layout with text inputs for the first and last names -->

                <!-- Email input -->
                <div class="form-outline mb-4">
                  <label class="form-label text-white" for="form3Example3">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    v-model="email"
                    placeholder="xyz@gmail.com"
                  />
                </div>
                <!-- Submit button -->
                <div class="form-outline mb-4 form-group" id="login">
                  <button
                    class="btn btn-block btn-sm outline-2"
                    style="background-color: #f8fa29; width: 100%; height: 40px"
                  >
                    RESET MY PASSWORD
                  </button>
                </div>
                <!-- Checkbox -->
                <div class="text-white p-0">
                  Back to
                  <a href="/login" class="text-secondary"> Login </a>
                </div>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  mounted() {
    document.title = "Login";
  },

  methods: {
    async SubmitForm() {
      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");

      const formData = {
        email: this.email,
        password: this.password,
      };

      await axios
        .post("/api/v1/token/login/", formData)
        .then((response) => {
          const token = response.data.auth_token;

          this.$store.commit("setToken", token);

          axios.defaults.headers.common["Authorization"] = "Token" + token;

          localStorage.setItem("token", token);

          const toPath = this.$route.query.to || "/";

          this.$router.push(toPath);
        })

        .catch((error) => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            this.errors.push(error.message);

            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script>


  <style scoped>
#login {
  border: 1px solid #ffffff;
  /* box-shadow: 2px 2px 2px 2px rgba(255, 255, 255); */
}

#login-page {
  height: 100vh;
}

#login-card {
  background-color: #000101;
  border-radius: 15px;
}

.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url("../../assets/login-image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  /* background-image: radial-gradient(
      650px circle at 0% 0%,
      hsl(218, 41%, 35%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%
    ),
    radial-gradient(
      1250px circle at 100% 100%,
      hsl(218, 41%, 45%) 15%,
      hsl(218, 41%, 30%) 35%,
      hsl(218, 41%, 20%) 75%,
      hsl(218, 41%, 19%) 80%,
      transparent 100%
    ); */
}
/* 
#radius-shape-1 {
  height: 220px;
  width: 220px;
  top: -60px;
  left: -130px; */
/* background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

#radius-shape-2 {
  border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
  bottom: -60px;
  right: -110px;
  width: 300px;
  height: 300px;
  background: radial-gradient(#44006b, #ad1fff);
  overflow: hidden;
}

.bg-glass {
  background-color: hsla(0, 0%, 100%, 0.9) !important;
  backdrop-filter: saturate(200%) blur(25px);
} */

@media only screen and (max-width: 991px) {
  #login-card {
    margin-top: 0;
  }

  #digital-content {
    display: none;
  }
}
</style>