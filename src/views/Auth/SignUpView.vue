
<template>
  <!-- Section: Design Block -->
  <section class="background-radial-gradient overflow-hidden" id="signup-page">
    <div
      class="container-fluid px-4 py-5 px-md-5 text-center text-lg-start my-5"
    >
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" id="digital-content" style="z-index: 10">
          <h1
            class="my-5 display-5 fw-bold ls-tight"
            style="color: hsl(218, 81%, 95%)"
          >
            The best offer <br />
            <span>for your business</span>
          </h1>
          <p
            class="mb-4 opacity-70"
            style="color: hsl(218, 81%, 95%); font-size: 20px"
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

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div class="card bg-glass">
            <div class="row">
              <div class="col-md-5">
                <div class="brand m-4 ml-5">
                  <a
                    type="button"
                    class="btn btn-rounded"
                    style="
                      background-color: #f8fa29;
                      border-radius: 20px;
                      width: 70%;
                    "
                  >
                    <strong>mookh.</strong>
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="buyer mt-4 text-left">
                  <h4>
                    <strong
                      ><i class="fa-solid fa-user"></i> Buyer Sign Up</strong
                    >
                  </h4>
                  <p>Already have an account? <a href="/login">Log In</a></p>
                </div>
                <br />
              </div>
            </div>
            <div class="hr"></div>
            <div class="card-body px-4 py-5 px-md-5">
              <form @submit.prevent="Signup">
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label>First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                        v-model="firstName"
                      />
                    </div>
                    <div class="form-outline">
                      <label class="form-label" for="">Phone number</label>
                      <input
                        type="number"
                        class="form-control"
                        placeholder="+254"
                        v-model="phoneNumber"
                      />
                    </div>
                    <!-- Password input -->
                    <div class="form-outline">
                      <label class="form-label" for="">Password</label>
                      <input
                        type="password"
                        id=""
                        class="form-control"
                        placeholder="Password"
                        v-model="password1"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="form-outline">
                      <label class="form-label" for="">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="last Name"
                        v-model="lastName"
                      />
                    </div>
                    <!-- Email input -->
                    <div class="form-outline">
                      <label class="form-label" for="">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="email"
                        v-model="email"
                      />
                    </div>
                    <div class="form-outline">
                      <label class="form-label" for="">Confirm Password</label>
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Confirm Password"
                        v-model="password2"
                      />
                    </div>
                  </div>
                </div>
                <div class="notification text-danger" v-if="errors.length">
                  <p v-for="error in errors" :key="error">{{ error }}</p>
                </div>

                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-center mb-4">
                  <input
                    class="form-check-input mt-2 p-2"
                    style="color: #000"
                    type="checkbox"
                    value=""
                    checked
                  />
                  <label
                    class="form-check-label mx-2 text-secondary"
                    for="form2Example33"
                  >
                    By signing up you agree to our
                    <a href="#" class="text-white">Terms of Service</a> and
                    <a href="#" class="text-white">Privacy Policy</a>. You also
                    agree to receive occasional emails in the form of our
                    newsletter.(You can unsubscribe at any moment.)
                  </label>
                </div>
                <div class="row">
                  <div class="col-md"></div>
                  <div class="col-md">
                    <div class="">
                      <!-- Submit button -->
                      <button
                        class="btn btn-block btn-sm mt-4 mb-4"
                        style="
                          width: 100%;
                          height: 40%;
                          background-color: #f8fa29;
                        "
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Register buttons -->
                <!-- <div class="text-center">
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-dark btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>

                  <button type="button" class="btn btn-dark btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>

                  <button type="button" class="btn btn-dark btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>

                  <button type="button" class="btn btn-dark btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div> -->
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
import { toast } from "bulma-toast";

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password1: "",
      password2: "",
      errors: [],
    };
  },
  methods: {
    Signup() {
      this.errors = [];

      if (this.firstName === "") {
        this.errors.push("Name is required");
      }
      if (this.lastName === "") {
        this.errors.push("field is required");
      }
      if (this.email === "") {
        this.errors.push("Email is required");
      }
      if (this.phoneNumber === "") {
        this.errors.push("Phone Number is required");
      }
      if (this.password1 === "") {
        this.errors.push("Password is required");
      }

      if (this.password1 !== this.password2) {
        this.errors.push("Password does not match");
      }


      if (!this.errors.length) {
        axios
          .post("/api/v1/users/", {
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.email,
            phonenumber: this.phoneNumber,
            password: this.password1,
          })
          .then((response) => {
            toast({
              message: "Account created successfully",
              type: "success",
              dismissable: true,
              duration: 2000,
              position: "bottom-right",
            });

            this.$router.push("/login");
          })

          .catch((error) => {
            if (error.response) {
              toast({
                message: "error.response.data.messag",
                type: "error",
                dismissable: true,
                duration: 2000,
                position: "bottom-right",
              });
              for (const property in error.response.data) {
                this.errors.push(
                  `${property}: ${error.response.data[property]}`
                );
              }
              console.log(JSON.stringify(error.response.data));
            } else if (error.message) {
              this.errors.push("Something went wrong");
              console.log(JSON.stringify(error));
            }
          });
      }
    },
  },
};
</script>
  <style scoped>
.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url("../../assets/login-image.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
}

.bg-glass {
  background-color: #0d0d0c !important;
  border-radius: 15px;
  backdrop-filter: saturate(200%) blur(25px);
  color: #fff;
}

.hr {
  border: 1px solid #fff;
  width: 100%;
  margin-top: -10px;
}

#signup-page {
  height: 100vh;
}
</style>