<template>
  <div class="home">
    <NavBar />
    <SearchBar />
    <BodyCont />
    <FeaturedStaff />
    <FeaturedStafff />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from "@/components/Landing/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import BodyCont from "@/components/BodyCont.vue";
import FeaturedStaff from "@/components/Landing/FeaturedStaff.vue";
import FeaturedStafff from "@/views/landingpage/FeaturedStafff.vue";
import Footer from "@/components/FooterBar.vue";

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBar,
    SearchBar,
    BodyCont,
    FeaturedStaff,
    FeaturedStafff,
<<<<<<< HEAD
    Footer,
    Sidebar,
    
=======
    Footer
>>>>>>> b36b2678a4811e68262bcb69a6231790b55f144f

  }
}
</script>
