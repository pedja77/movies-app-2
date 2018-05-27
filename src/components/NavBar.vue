<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link class="navbar-brand" to="/">MoviesApp2</router-link>
      <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <!-- <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> -->
      <div class="navbar-nav">
        <router-link class="nav-item nav-link" to="/movies">Movies</router-link>
        <router-link v-if="!isLogged" class="nav-item nav-link" to="/login">Login</router-link>
        <a v-else class="nav-item nav-link" href="#" @click="logout">Logout</a>

      </div>
      <movie-search />
      <!-- </div> -->
    </nav>
  </div>
</template>

<script>
import MovieSearch from "./MovieSearch"
import { authService } from "../services/Auth.js"
//import { mapGetters } from "vuex"

export default {
  name: "nav-bar",
  components: {
    MovieSearch
  },
  props: ["isLogged"],
  // computed: {
  //   ...mapGetters({
  //     isAuthenticated: "getIsAuthenticated"
  //   })
  // },
  methods: {
    logout() {
      console.log("out", this.isAuthenticated)
      authService.logout()
      console.log("out2", this.isAuthenticated)
    }
  }
}
</script>


