import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 
export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    token: '',
    tickets: {},
    events: {},
  },

  getters: {
  },

  actions: {
    getTickets({commit}, payload) {
      axios
      .get(`/stores/event/public/${payload}/`)
      .then(response => {
        commit('SET_TICKETS', response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
    },
    getEventDetails({commit}, payload) {
      axios
      .get(`/stores/event/public/${payload}/`)
      .then(response => {
        commit('SET_EVENT_DETAILS', response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error)
      })
    }
  },

  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        state.token = localStorage.getItem('token')
        state.isAuthenticated = true
      } 
      else {
        state.token = ''
        state.isAuthenticated = false
      }
    },

    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },

    removeToken(state){
      state.token = ''
      state.isAuthenticated = false
    },

    SET_TICKETS(state, tickets){
      state.tickets = tickets
      state.isAuthenticated = true
    },

    SET_EVENT_DETAILS(state, event){
      state.event = event
      state.isAuthenticated = true
    }
  },


  modules: {
  }
})
