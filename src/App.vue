<template>
  <div id="app">
    <NavBar />
    <SearchBar />
    <BodyCont />
    <FeaturedStaff />
     <FeaturedStafff />
    <Footer />
   

    <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav> -->
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SearchBar from "./components/SearchBar.vue";
import BodyCont from "./components/BodyCont.vue";
import FeaturedStaff from "./components/FeaturedStaff.vue";
import FeaturedStafff from "./views/FeaturedStafff.vue";
import Footer from "./components/FooterBar.vue";


export default {
  name: "App",
  components: {
    NavBar,
    SearchBar,
    BodyCont,
    FeaturedStaff,
    FeaturedStafff,
    Footer,
  

  },
    data(){
    return{
      tasks: []
    }
  },
};
</script>


<style>
@import'~bootstrap/dist/css/bootstrap.css';


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

template {
  background-color: #f8f8ff;
}
@import'~bootstrap/dist/css/bootstrap.css';
</style>
