<template>
  <div class="home">
    <NavBar />
    <SearchBar />
    <BodyCont />
    <div class="whatsapp"></div>
    <FeaturedStaff />
    <FeaturedStafff />
    <Footer />
  </div>
</template>

<script>
// $(function () {
//   $(".whatsapp").venomButton({
//     phone: "5521990000000",
//     message: "I'd like to order a pizza",
//     chatMessage: "Hi there 👋<br><br>How can I help you?",
//     showPopup: true,
//     // avatar: "./assets/avatar.jpg",
//     position: "right",
//     headerColor: "#033E8C",
//     buttonColor: "#033E8C",
//     linkButton: false,
//     showOnIE: false,
//     nameClient: "Joe Dutra",
//     headerTitle: "Commercial Sales",
//   });
// });

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

import NavBar from "@/components/Landingpage/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
import BodyCont from "@/components/Landingpage/MainBody.vue";
import FeaturedStaff from "@/components/Landingpage/FeaturedStaff.vue";
import FeaturedStafff from "@/components/Landingpage/FeaturedStafff.vue";
import Footer from "@/components/FooterBar.vue";

export default {
  name: "HomeView",
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
    return {};
  },
  mounted() {
    document.title = "Home - Mookh";
  },
};
</script>
