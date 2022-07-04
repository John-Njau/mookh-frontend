<template>
  <div>
    <nav
      class="navbar navbar-expand-lg"
      style="
        background-color: white;
        border-bottom: 3px solid #ffff00;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-left: 50px;
      "
    >
      <div class="container-fluid">
        <button
          class="logo"
          style="
            background-color: #f8fa29;
            border: 0px;
            border-radius: 20px;
            padding-left: 35px;
            padding-right: 25px;
          "
        >
          <a class="navbar-brand" href="#">mookh.</a>
        </button>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <input
            type="checkbox"
            class="checkbox justify-content-end"
            id="chk"
            style="margin-left: 650px"
          />
          <!-- <label class="label" for="chk">
            <i class="fas fa-moon" style="color: black; padding-left: 2px"></i>
            <i class="fas fa-sun" style="color: black; padding-right: 3px"></i>
            <div class="ball"></div>
          </label> -->

          

          <ul class="navbar-nav justify-content-end" style="margin-left: 0px">
            <li class="nav-item dropdown" style="margin-left: 35px">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" style="color:black"
                >LEARN MORE
              </a>
   
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink" style="width:300px;height:150px;padding-top:0px;padding-left:10px;padding-right:10px;padding-bottom:10px;"
              >
               <i class="fa-regular fa-chart-line-up"></i>
               <p style="font-size:20px">Start selling with us</p>
               <p style="font-size:15px">Begin your e-commerce journey with our simple to use, feature-packed dashboard and marketplace.</p>
              </ul>
            </li>
            <li class="nav-item dropdown" style="margin-left: 40px">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false" style="color:black"
                >LOGIN
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">Buyer Log In</a></li>
                <li><a class="dropdown-item" href="#">Seller Log In</a></li>
                
              </ul>
            </li>
          </ul>
          <i class="fa-solid fa-cart-shopping" style="margin-left: 15px"></i>
        </div>
      </div>
    </nav>


    


    
  </div>
</template>

<style scoped>
.checkbox {
  opacity: 0;
}

.label {
  background-color: #d3d3d3;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 20px;
  width: 40px;
  transform: scale(1.5);
}

.label .ball {
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  left: 2px;
  height: 20px;
  width: 20px;
  transform: translateX(0px);
  transition: transform 0.2s linear;
}

.checkbox:checked + .label .ball {
  transform: translateX(18px);
}

.fa-moon {
  color: #f1c40f;
}

.fa-sun {
  color: #f39c12;
}
</style>

<script>
export default {
  name: "NavBar",
  components: {
    popper: Popper,
  },
};
</script>




