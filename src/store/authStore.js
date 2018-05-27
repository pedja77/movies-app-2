import Vue from "vue"
import Vuex from "vuex"
//import MovieService from "../services/MovieService"

Vue.use(Vuex)

export const authStore = new Vuex.Store({
  state: {
    isAuthenticated: false
  },
  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated
    }
  },
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value
    }
  },
  actions: {
    authenticate(store) {
      console.log("authStoreAction") // eslint-disable-line
    }
  }
})
