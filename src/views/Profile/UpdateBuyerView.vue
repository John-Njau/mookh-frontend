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
      <div class="col-lg-9">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">First Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Second Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Number</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Confirm Password</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <button type="submit" class="btn btn-primary">SAVE CHANGE</button>
        </form>
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
  background-color: #f6f6f6;
  height: 100vh;
  padding-top: 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  .side-prof {
    width: 10vw;
    height: 10vw;
    border-radius: 50%;
    border: 1px black solid;
  }
  ul {
    padding-top: 3vw;
    li {
      list-style: none;
      padding-top: 1.2vw;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}
form {
  // background-color: red ;

  width: 40vw !important;
  margin: 0 auto;
  box-shadow: 1px 1px 5px grey;
  border-radius: 5px;
  padding: 2vw;
  .form-group {
  }

  label {
    // padding-right: 30vw !important;
    color: black;
  }
  .btn {
    width: 100% !important;
    background-color: #f8fa29;
    color: black;
  }
}
</style>