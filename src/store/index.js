import Vue from "vue"
import Vuex from "vuex"
import MovieService from "../services/MovieService"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    searchTerm: "",
    movies: []
  },
  getters: {
    getSearchTerm(state) {
      return state.searchTerm
    },
    getMovies(state) {
      return state.movies
    }
  },
  mutations: {
    setSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm
    },
    setMovies(state, movies) {
      state.movies = movies
    }
  },
  actions: {
    fetchMovies(store, next) {
      console.log("fetchMovies")
      // MovieService.getAllMovies().then(response => {
      //   let movies = response.data.map(movie => {
      //     movie.duration = Number(movie.duration)
      //     return movie
      //   })
      MovieService.getAllMovies().then(({ data }) => {
        next(context => {
          context.movies = data
          store.commit("setMovies", context.movies)
        })
        // store.commit("setMovies", movies)
      })
    }
  }
})
