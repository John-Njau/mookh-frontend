<template>
  <div class="stores" :style="{ 'margin-left': sidebarWidth }">
    <section >
      <header class="head">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <a class="navbar-brand text-white"> Stores</a>

            <div
              class="collapse navbar-collapse navbar-right"
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
        <hr />
      </header>
    </section>
    <div class="header">
      <div class="col-md-3 mt-3">
        <button type="button" class="btn">ADD USER</button>
      </div>
      <div class="col-md-3 mt-3">
        <form>
          <input type="search" placeholder="" />
          <button type="submit">Search</button>
        </form>
      </div>
      <div class="col-md-3 mt-3">
        <select v-model="selected">
          <option style="background-color: white" disabled value="">
            LIST STORES BY DATE
          </option>
          <option style="background-color: white">SALES ASCENDING</option>
          <option style="background-color: white">SALES DESCENDING</option>
        </select>
      </div>
      <div class="col-md-3 mt-3">
        <select v-model="selected">
          <option style="background-color: white" disabled value="">
            LIST ALL CATEGORIES
          </option>
          <option style="background-color: white">LIST TICKETS</option>
          <option style="background-color: white">LIST DIGITAL CONTENT</option>
        </select>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-4">
          <div class="card">
            <div class="card-body">
              <div class="wrap mt-5">
                <router-link to="/addstore" class="btn-md">NEW STORE</router-link>
              </div>
              <div class="card-text text-center mt-3">
                <p>
                  A store like a folder where you will be able to create events
                  ,upload digital content or set up a shop to sell your products
                  online.
                </p>
              </div>
            </div>
            </div>
      </div>
      <div class="col-md-4">
        <div class="row">

        <div class="card" v-for="store in stores" :key="store.id"  >
              <img :src="store.storeImage" alt="no image" style="width: auto; height:20rem;">
          <div class="card-text mt-3">
            <p>
             {{store.description}}
            </p>
          </div>
        </div>
       <br>
        </div>


      </div>
    </div>

      <Sidebar />
    <!-- <Footer /> -->


  </div>
</template>

<script>
import Footer from "@/components//Footer";
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from '@/components/sidebar/state'
import axios from 'axios'

export default {
  name: "foot",
  components: { Footer,Sidebar },
  setup() {
    return { sidebarWidth }
  },
  data() {
      return {
        selected: '',
        stores:{
          store_name: '',
          storeImage:'',
          description:'',
          phone_number:'',
          type:'',
          country:'',
          
        }
      };
    },
    methods:{
      get_store(){
          axios.get('/api/stores').then(response =>{this.stores=response.data})
      }
    },
    mounted(){
      this.get_store()
    }
 
};
</script>

<style scoped>
* {
  overflow: hidden;
}


.header {
  background-color: #31383e;
  display: flex;
  justify-content: center;
}
.head {
  background-color: #31383e;
  color: white;
  margin-bottom: 0;
}
option {
  color: black;
  height: 50px;
}
.btn {
  outline: 1px solid yellow;
  color: #f8fa29 !important;
}
.btn:hover {
  background-color: #f8fa29;
  color: black !important;
}
form {
  background-color: rgba(86, 84, 84, 0.665);
  display: flex;
  padding: 2px;
  border: 1px solid currentColor;
  border-radius: 5px;
  margin: 0 0 30px;
  width: 70% !important;
}
form:hover {
  border-color: #f8fa29;
}
input[type="search"] {
  border: none;
  background: transparent;
  margin: 0;
  padding: 7px 8px;
  font-size: 14px;
  color: inherit;
  border: 1px solid transparent;
  border-radius: inherit;
  width: 90%;
}

button[type="submit"] {
  text-indent: -999px;
  overflow: hidden;
  width: 40px;
  padding: 0;
  margin: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat center;
  cursor: pointer;
  opacity: 0.7;
}
select {
  width: 220px;
  height: 40px;
  background-color: #0a1f1f;
  border-radius: 5px;
  border: 1px solid #202b2b !important;
  color: white;
}
select:hover {
  border-color: #f8fa29;
}
.btn-md {
  color: black !important;
  background-color: #f8fa29;
}
.btn-md:hover {
  background-color: #f2f541e0;
  box-shadow: 0px 15px 20px #f6fa29a7;
  transform: translateY(-5px);
}




</style>