<template>
  <section :style="{ 'margin-left': sidebarWidth }">
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-white"> Stores</a>

        <div
          class="collapse navbar-collapse nav-justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Username
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Account</a></li>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
      <form>
        <header>
          <div class="col-md-2 mt-3">
            <h5><b>Create Store</b></h5>
            <p>store information</p>
          </div>
          <div class="col-md-7"></div>
          <div class="col-md-3 mt-3">
            <button class="btn store-btn" href="/stores">SAVE</button>
          </div>
        </header>
        <div class="row mt-3">
          <div class="col-md-9">
            <h6>General Information(* Indicates required fields)</h6>
            <div class="data">
              <div class="col-md-9">
                <hr />
                <div class="row">
                  <div class="col">
                    <label class="lab">Store name *</label> <br />
                    <input type="text" />
                  </div>
                  <div class="col">
                    <label class="lab">Store type *</label> <br />
                    <input type="text" />
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label>Store Country *</label> <br />
                    <select v-model="selected">
                      <option style="background-color: white" disabled>
                        Kenya
                      </option>
                      <option style="background-color: white">Kenya</option>
                      <option style="background-color: white">Uganda</option>
                      <option style="background-color: white">Rwanda</option>
                      <option style="background-color: white">Other</option>
                    </select>
                  </div>
                  <div class="col">
                    <label>Store Currency *</label> <br />
                    <select v-model="selected">
                      <option style="background-color: white" disabled value="">
                        What is your currency?
                      </option>
                      <option style="background-color: white">KES</option>
                      <option style="background-color: white">UGX</option>
                      <option style="background-color: white">RWF</option>
                      <option style="background-color: white">USD</option>
                    </select>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <label>Email </label> <br />
                    <input type="email" placeholder="Add store email" />
                  </div>
                  <div class="col">
                    <label>Phone number </label> <br />
                    <input
                      v-model.number="phone"
                      placeholder="phone number (245704155513)"
                    />
                  </div>
                </div>
                <div class="mt-3">
                  <label>Store Description * </label> <br />
                  <textEditor />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3 photo">
            <h6>Upload Store Photo</h6>
            <div class="card mt-3">
              <div class="text">
                <svg width="60px" height="60px" viewBox="0 0 548.165 548.165">
                  <path
                    d="M526.76 131.04c-14.277-14.274-31.498-21.413-51.675-21.413h-63.953l-14.558-38.826c-3.618-9.325-10.229-17.368-19.846-24.128-9.613-6.757-19.462-10.138-29.551-10.138h-146.18c-10.088 0-19.939 3.381-29.552 10.138-9.613 6.76-16.225 14.803-19.842 24.128l-14.56 38.826H73.09c-20.179 0-37.401 7.139-51.678 21.413C7.138 145.315.001 162.539.001 182.716v255.81c0 20.178 7.137 37.404 21.411 51.675 14.277 14.277 31.5 21.416 51.678 21.416h401.99c20.177 0 37.397-7.139 51.675-21.416 14.273-14.271 21.412-31.497 21.412-51.675v-255.81c.004-20.177-7.135-37.401-21.405-51.676zM364.45 400.99c-25.029 25.03-55.147 37.548-90.362 37.548s-65.331-12.518-90.362-37.548c-25.031-25.026-37.544-55.151-37.544-90.358 0-35.218 12.517-65.333 37.544-90.364 25.028-25.031 55.148-37.544 90.362-37.544s65.333 12.516 90.362 37.544c25.03 25.028 37.545 55.146 37.545 90.364 0 35.207-12.514 65.329-37.545 90.358z"
                    fill="#D9DDD9"
                  ></path>
                  <path
                    d="M274.08 228.4c-22.651 0-42.018 8.042-58.102 24.128-16.084 16.084-24.126 35.448-24.126 58.104 0 22.647 8.042 42.014 24.126 58.098 16.084 16.081 35.45 24.123 58.102 24.123 22.648 0 42.017-8.042 58.101-24.123 16.084-16.084 24.127-35.45 24.127-58.098 0-22.655-8.043-42.019-24.127-58.104-16.083-16.085-35.453-24.128-58.101-24.128z"
                    fill="#D9DDD9"
                  ></path>
                </svg>
                <p>click or drop an image to upload</p>
              </div>
            </div>
            <p>Upload an image at least 1000 x 1000 pixels</p>
          </div>
        </div>
      </form>
    </div>
    <Footer />
  </section>
</template>







<script>
import TextEditor from "@/components/textEditor.vue";
// import Footer from '@/components//Footer'
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";

export default {
  components: { TextEditor, Sidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>
<style scoped>
* {
  overflow-x: hidden;
}

input {
  width: 100%;
  border-radius: 5px;
  height: 35px;
}
header {
  background-color: #dddd;
  display: flex;
}
.store-btn {
  width: 90px;
  height: 45px;
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: bold;
  color: #000;
  background-color: #f8fa29;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.store-btn:hover {
  background-color: #f8fa29;
  box-shadow: 0px 15px 20px #f6fa29a7;
  color: #000;
  transform: translateY(-7px);
}
.row {
  display: flex;
  padding-left: 2%;
}

h6 {
  text-align: left;
  color: rgba(123, 120, 120, 0.867);
  font-weight: bold;
}
.card {
  width: 90%;
  height: 80%;
  padding: 10px 10px;
}

option {
  color: black;
  height: 45px;
}
select {
  width: 100%;
  background-color: transparent;
  height: 35px;
  border-radius: 5px;
  border: 1px solid #202b2b !important;
  color: black;
}
</style>
