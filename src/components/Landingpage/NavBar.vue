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
                aria-expanded="false"
                style="color: black"
                >LEARN MORE
              </a>

              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
                style="
                  width: 300px;
                  height: 150px;
                  padding-top: 0px;
                  padding-left: 10px;
                  padding-right: 10px;
                  padding-bottom: 10px;
                "
              >
                <i class="fa-regular fa-chart-line-up"></i>
                <p style="font-size: 20px">Start selling with us</p>
                <p style="font-size: 15px">
                  Begin your e-commerce journey with our simple to use,
                  feature-packed dashboard and marketplace.
                </p>
              </ul>
            </li>
            <!-- <li v-if="$store.state.isAuthenticated">
              <router-link to="/" class="button is-light">LOGOUT</router-link>
            </li>
            <li v-else>
              <router-link to="/" class="button is-light">LOGIN</router-link>
            </li> -->

            <li class="nav-item dropdown" style="margin-left: 40px">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style="color: black"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"
                  />
                </svg>
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li><a class="dropdown-item" href="#">PROFILE</a></li>
                <li v-if="$store.state.isAuthenticated">
                  <router-link to="/login" class="dropdown-item"
                    >LOGOUT</router-link
                  >
                </li>
                <li v-else>
                  <router-link to="/" class="button is-light"
                    >Log In</router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
          <i class="fa-solid fa-cart-shopping" style="margin-left: 15px"></i>
          <a
            name=""
            id="whatsapp"
            class="btn btn-primary"
            href="https://api.whatsapp.com/send/?phone=%2B14155238886&text=join+surface-send&type=phone_number&app_absent=0"
            target="_blank"
            role="button"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              class="btn-svg"
              width="0.99em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 256 259"
            >
              <path
                fill="#00E676"
                d="m67.663 221.823l4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346c61.385 0 111.609-50.224 111.609-111.609c0-29.297-11.859-57.897-32.785-78.824c-20.927-20.927-48.83-32.785-78.824-32.785c-61.385 0-111.61 50.224-110.912 112.307c0 20.926 6.278 41.156 16.741 58.594l2.79 4.186l-11.16 41.156l41.853-10.464Z"
              />
              <path
                fill="#FFF"
                d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0C57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347c70.453 0 127.653-57.898 127.653-128.35c0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093l-40.458 10.463l10.463-39.76l-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181c30.692 50.224 16.043 115.097-34.18 145.79c-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428l-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698c-2.093 0-3.488.698-4.883 1.396c0 0-.697.697-10.463 11.858c-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254c-1.395-1.395-3.488-2.79-4.883-4.185c-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79c0-1.395 0-2.79.698-3.488c0 0 2.79-3.488 4.882-5.58c1.396-1.396 2.093-3.488 3.488-4.883c1.395-2.093 2.093-4.883 1.395-6.976c-.697-3.488-9.068-22.322-11.16-26.507c-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79c-1.395 1.396-2.093 2.79-3.488 4.186c-4.883 6.278-7.673 13.951-7.673 21.624c0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58c14.649 12.557 31.39 21.625 50.224 26.508c2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79c2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487c1.395-1.395 2.79-2.79 3.488-4.186c1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z"
              /></svg
          ></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped lang='scss'>
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
#whatsapp {
  background-color: #fff;
  border: none;
  padding-left: 1.1vw;

  :hover {
    background-color: #f1c40f !important;
    width: 2.4vw;
    height: 2.4vw;
    border-radius: 50%;
  }
  svg {
    width: 2vw;
    height: 2vw;
    :hover {
      width: 2.4vw;
      height: 2.4vw;
    }
  }
}
</style>

<script>
export default {
  name: "NavBar",
  components: {},
};
</script>




