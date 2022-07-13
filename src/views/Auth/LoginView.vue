<template>
  <!-- Section: Design Block -->
  <section class="background-radial-gradient overflow-hidden" id="login-page">
    <div class="container-fluid px-md-5 d-flex text-center text-lg-start my-5">
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
            class="mb-4 opacity-70"
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

        <div class="col-lg-4 mb-5 mb-lg-0">
          <div class="card" id="login-card" style="">
            <div class="card-body py-3 px-5">
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
              <div class="buyer">
                <h4>
                  <strong
                    ><i class="fa-solid fa-user" style="color: black"></i> Buyer
                    Log In</strong
                  >
                </h4>
                <p>
                  Don't have an account?
                  <a href="/signup" style="color: black">sign up</a>
                </p>
              </div>
              <br />
              <hr />

              <form @submit.prevent="SubmitForm">
                <!-- 2 column grid layout with text inputs for the first and last names -->

                <!-- Email input -->
                <div class="form" id="form">
                  <label class="form-label" for="form3Example3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control"
                    v-model="email"
                    placeholder="email"
                  />
                </div>

                <!-- Password input -->
                <div class="form">
                  <label class="form-label" for="form3Example4">Password</label>

                  <input
                    type="password"
                    class="form-control"
                    v-model="password"
                    placeholder="password"
                  />
                </div>
                <div class="notification text-danger" v-if="errors.length">
                  <p>{{ errors }}</p>
                </div>
                <!-- Submit button -->
                <div class="form form-group" id="login">
                  <button
                    class="btn btn-block btn-sm mt-3"
                    style="background-color: #f8fa29; width: 100%; height: 40px"
                  >
                    LOG IN
                  </button>
                </div>
                <!-- Checkbox -->
                <div class="form-check mt-3 p-0">
                  <label class="form-check-label" for="form2Example33">
                    <a href="/reset-password" class="text-secondary">
                      Forgot your password?
                    </a>
                  </label>
                </div>
                <hr />

                <div class="p-0">
                  By login in to your account, you agree to our
                  <a href="" class="text-dark">Terms and Conditions</a>.
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
        .post("/api/v1/token/login", formData)
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
          } else 
          {
            this.errors.push(error.message);

            console.log(JSON.stringify(error));
          }
        });
    },
  },
};
</script>


  <style scoped lang='scss'>
#login {
  border: 1px solid red;
  /* box-shadow: 2px 2px 2px 2px rgba(255, 255, 255); */
}
#login-card {
  background-color: red;
}
#login-page {
  height: 100vh;
}

#login-card {
  background-color: #fff;
  border-radius: 15px;
  width: 30vw !important;
  height: 85vh;

  form {
    #login {
      border: none !important;
    }
  }
}

.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url("../../assets/login-image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
}

@media only screen and (max-width: 991px) {
  #login-card {
    margin-top: 0;
  }

  #digital-content {
    display: none;
  }
}
</style>