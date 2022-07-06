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

import NavBar from "@/components/Landingpage/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import BodyCont from "@/components/Landingpage/MainBody.vue";
import FeaturedStaff from "@/components/Landingpage/FeaturedStaff.vue";
import FeaturedStafff from "@/components/Landingpage/FeaturedStafff.vue";
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
    Footer,

  },
  data() {
    return {
       
    }
  },
  mounted() {
    document.title = "Home - Mookh";
  }
}
</script>
