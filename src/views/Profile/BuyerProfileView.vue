<template>
  <div>
    <div class="row">
      <div class="col-lg-3 side-nav">
        <div class="side-prof"></div>
        <ul>
          <li>
            <a href="">Streams</a>
          </li>
          <li>
            <a href="">Tickets</a>
          </li>
          <li>
            <a href="">Library</a>
          </li>
          <li>
            <a href="">Profile </a>
          </li>
        </ul>
      </div>
      <div class="col-lg-9" id="profile">
        <div class="profile">
          <div class="prof-pic">
            <img src="@/assets/images/prof.jpg" alt="hehe" />
          </div>
          <div class="all-infor">
            <p id="topic">PROFILE INFOR</p>
            <div class="prof-infor">
              <p>will be here</p>
            </div>
            <div class="prof-infor">
              <p>will be here</p>
            </div>
            <div class="prof-infor">
              <p>will be here</p>
            </div>
            <div class="prof-infor">
              <p>will be here</p>
            </div>
          </div>
        </div>
        <router-link class="btn" to="/update/buyerprofile">UPDATE</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: {
        backgroundImage: "url(https://unsplash.com/photos/VURwPtZqyF4)",
      },
    };
  },
};
// import ".assets/css/profile.scss"
</script>

<style lang='scss'>
.side-nav {
  background-color: #31383e;
  height: 100vh;
  padding-top: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .side-prof {
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    border: 1px white solid;
  }
  ul {
    padding-top: 3vw;
    li {
      list-style: none;
      padding-top: 1.2vw;

      a {
        text-decoration: none;
        color: white;
      }
    }
  }
}
#profile {
  background-color: #f6f6f6;
  .profile {
    padding-top: 3vw;
    display: flex;
    .prof-pic {
      padding-right: 2vw;
      img {
        width: 25vw;
        height: 25vw;
        object-fit: cover;
        border-radius: 10%;
      }
    }
    .all-infor {
      width: 40vw;
      #topic {
        color: black;
        font-weight: bold;
      }
    }
    .prof-infor {
      width: 40vw;
      margin: 0 auto;
      height: 4vw;
      background-color: white;
      margin-bottom: 1.3vw;
      border-radius: 2%;
    }
  }
  .btn {
    background-color: #f8fa29 !important;
    color: white;
    font-weight: 900;
    margin-left: 57vw;
    width: 10vw;
    border: none;
    border-radius: 8%;
  }
}
</style>