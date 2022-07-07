<template>
  <div class="" id="wrapper" :style="{ 'margin-left': sidebarWidth }">
    <!-- Page content wrapper-->
    <div id="page-content-wrapper">
      <!-- Top navigation-->
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style="background-color: #31383e"
      >
        <a class="navbar-brand" href="#"></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#"
                >Finance <span class="sr-only"></span
              ></a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                User</a
              >
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">Acount</a>
                <a class="dropdown-item" href="#">LogOut</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <!-- Page content-->
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#"></a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#"
                  >Summary <span class="sr-only"></span
                ></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Withdrawal History</a>
              </li>
            </ul>
          </div>
          <button type="button" class="btn btn-light">RELOAD</button>
        </nav>
      </div>
      <div class="card-group">
        <div class="card">
          <div class="card-body">
            <!-- <h5 class="card-title">Card title</h5> -->
            <p class="card-text text-center">Net Earnings 0.00</p>
            <p class="card-text">
              <!-- <small class="text-muted">Last updated 3 mins ago</small> -->
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <!-- <h5 class="card-title">Card title</h5> -->
            <p class="card-text text-center">Amount Withdrawn 0.00</p>
            <p class="card-text">
              <!-- <small class="text-muted">Last updated 3 mins ago</small> -->
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <!-- <h5 class="card-title">Card title</h5> -->
            <p class="card-text">Current Balance 0.00</p>
            <p class="card-text">
              <!-- <small class="text-muted">Last updated 3 mins ago</small> -->
            </p>
          </div>
        </div>
      </div>

      <div class="table-responsive-xl">
        <p>Earnings Breakdown</p>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Currency</th>
              <th scope="col">Total Earnings</th>
              <th scope="col">Net Earnings</th>
              <th scope="col">Commission</th>
              <th scope="col">Transferred</th>
              <th scope="col">Transferrable</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Footer -->
    <footer class="page-footer font-small blue fixed-bottom">
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2018 MOOKH. ALL RIGHTS RESERVED
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar/Sidebar";
import { sidebarWidth } from "@/components/sidebar/state";

import Reports from "@/components/Reports.vue";
export default {
  components: {
    Reports,
    Sidebar,
  },
  setup() {
    return { sidebarWidth };
  },
  data() {
    return {
      selected: ''
    };
  }
};

</script>

<style scoped>
.card-group {
  margin-top: 30px;
  margin-bottom: 40px;
}
</style>
