import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

//
const state = {
  isAuthenticated: false,
  token: "",
  tickets: [],
  event: {},
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
    if (localStorage.getItem("token")) {
      state.token = localStorage.getItem("token");
      state.isAuthenticated = true;
    } else {
      state.token = "";
      state.isAuthenticated = false;
    }
  },

  setToken(state, token) {
    state.token = token;
    state.isAuthenticated = true;
  },

  removeToken(state) {
    state.token = "";
    state.isAuthenticated = false;
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
