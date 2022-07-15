<template>
  <div class="" id="wrapper"  :style="{ 'margin-left': sidebarWidth }" >
    <!-- Sidebar-->

    <!-- Page content wrapper-->
    <div id="page-content-wrapper">
      <!-- Top navigation-->
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style="background-color: #31383e"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#!">Orders</a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  >User</a
                >
                <div
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item" href="#!">Account</a>
                  <a class="dropdown-item" href="#!">LogOut</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- Page content-->
      <div class="container">
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search for a particluar order by transaction id,date placed or customer"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
    </div>
    <div class="container">
      <form>
        <div class="row">
          <div class="col-6">
            <p>Order date from:</p>
            <input type="text" class="form-control" placeholder="" />
          </div>
          <div class="col-6">
            <p>Order date to:</p>
            <input type="text" class="form-control" placeholder="" />
          </div>
          <div class="col-6">
            <p>Order Status:</p>
            <input type="text" class="form-control" placeholder="" />
          </div>
          <div class="col-6">
            <p>Payment Method:</p>
            <input type="text" class="form-control" placeholder="" />
          </div>
        </div>
      </form>
    </div>
    <div class="container">
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
        />
        <label class="form-check-label" for="inlineCheckbox1"
          >Installments</label
        >
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
        />
        <label class="form-check-label" for="inlineCheckbox2"
          >Promo Applicable</label
        >
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox3"
          value="option3"
          
        />
        <label class="form-check-label" for="inlineCheckbox3">Sponsored</label>
      </div>
    </div>

    <div class="table-responsive-xl">
      <p>Selected Orders</p>
      <table class="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Order</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Method</th>
            <th scope="col">Date</th>
            <th scope="col">Status</th>
            <th scope="col">Channel</th>
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
    <!-- Footer -->
    <footer class="page-footer font-small blue fixed-bottom">
      <!-- Copyright -->
      <div class="footer-copyright text-center py-3">
        © 2022 MOOKH. ALL RIGHTS RESERVED
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
    Reports,Sidebar,
  },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style scoped>

.form-check{
  margin-top: 40px;
  margin-bottom: 20px;

}

.input-group{
  margin-bottom: 40px;
  margin-top: 40px;
}





</style>
