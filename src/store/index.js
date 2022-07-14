import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

//
const state = {
  cart: {
    items: [],
  },
  isAuthenticated: false,
  token: '',
  tickets: [],
  event: {},
  isLoading: false,
  
};

const actions = {
  getTickets({ commit }, payload) {
    axios
      .get(`/stores/event/public/${payload}/`)
      .then((response) => {
        commit("SET_TICKETS", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getEventDetails({ commit }, payload) {
    axios
      .get(`/stores/event/public/${payload}/`)
      .then((response) => {
        commit("SET_EVENT_DETAILS", response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  initializeStore(state) {
    if (localStorage.getItem("cart")) {
      state.cart = JSON.parse(localStorage.getItem("cart"));
    } 
    else {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    }
    if (localStorage.getItem("token")) {
      state.token = localStorage.getItem("token");
      state.isAuthenticated = true;
    } else {
      state.token = "";
      state.isAuthenticated = false;
    }
  },

  addToCart(state, item) {
    const exists = state.cart.items.filter(
      (i) => i.ticket.id === item.ticket.id
    );

    if (exists.length > 0) {
      exists[0].quantity =
        parseInt(exists[0].quantity) + parseInt(item.quantity);
    } 
    else {
      state.cart.items.push(item);
    }

    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  // setting a loading bar
  setIsLoading(state, status) {
    state.isLoading = status;
  },

  setToken(state, token) {
    state.token = token;
    state.isAuthenticated = true;
  },

  removeToken(state) {
    state.token = "";
    state.isAuthenticated = false;
  },
  clearCart(state) {
    state.cart = { items: [] };
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  SET_TICKETS(state, tickets) {
    state.tickets = tickets;
    state.isAuthenticated = true;
  },

  SET_EVENT_DETAILS(state, event) {
    state.event = event;
    state.isAuthenticated = true;
  },
};

const getters = {};

const modules = {};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules,
});
