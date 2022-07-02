<template>
  <!-- Section: Design Block -->
  <section class="background-radial-gradient overflow-hidden" id="login-page">
    <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
      <div class="row gx-lg-5 align-items-center mb-5">
        <div class="col-lg-6 mb-5 mb-lg-0" style="z-index: 10">
          <h1
            class="my-5 display-5 fw-bold ls-tight"
            style="color: hsl(218, 81%, 95%)"
          >
            <h3>
              <strong><small>Digital Gallery:</small></strong>
            </h3>
            The best offer <br />
            <span style="color: hsl(218, 81%, 75%)">for your business</span>
          </h1>
          <p class="mb-4 opacity-70" style="color: hsl(218, 81%, 85%)">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Temporibus, expedita iusto veniam atque, magni tempora mollitia
            dolorum consequatur nulla, neque debitis eos reprehenderit quasi ab
            ipsum nisi dolorem modi. Quos?
          </p>
        </div>

        <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
          <div
            id="radius-shape-1"
            class="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            class="position-absolute shadow-5-strong"
          ></div>

          <div class="card bg-glass">
            <div class="card-body px-4 py-5 px-md-5">
                <div class="brand">
                    <a type="button" class="btn btn-rounded" style="background-color:#F8FA29; border-radius:10px "> <strong>mookh.</strong> </a>
                </div>
                <br>
                <div class="buyer">
                    <h4><strong><i class="fa-solid fa-user"></i> Buyer Log In</strong></h4>
                    <p>Don't have an account? <a href="/signup">sign up</a></p>
                </div>
                <br><br>
              <form>
                <!-- 2 column grid layout with text inputs for the first and last names -->

                <!-- Email input -->
                <div class="form-outline mb-4">
                    <label class="form-label" for="form3Example3"
                    >Email address</label
                  >
                  <input type="email" id="form3Example3" class="form-control" />
                  
                </div>

                <!-- Password input -->
                <div class="form-outline mb-4">
                <label class="form-label" for="form3Example4">Password</label>

                  <input
                    type="password"
                    id="form3Example4"
                    class="form-control"
                  />
                </div>

                

                <!-- Submit button -->
                <div class="form-outline mb-4 form-group">
                <button
                  type="submit"
                  class="btn btn-block mb-4 btn-sm outline-2"
                  style="background-color:#F8FA29;"
                >
                  Log In
                </button>
                </div>
                <!-- Checkbox -->
                <div class="form-check mb-5">
                  <label class="form-check-label" for="form2Example33">
                    <a href="">
                        Forgot your password?
                    </a>
                  </label>
                </div>

                <!-- Register buttons -->
                <div class="text-center">
                  By login in to your account, you agree to our
                  <a href="">Terms and Conditions</a>.
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
export default {
  data() {},
};
</script>
  <style scoped>
.background-radial-gradient {
  background-color: hsl(218, 41%, 15%);
  background-image: radial-gradient(
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
    );
}

#radius-shape-1 {
  height: 220px;
  width: 220px;
  top: -60px;
  left: -130px;
  background: radial-gradient(#44006b, #ad1fff);
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
}
</style>