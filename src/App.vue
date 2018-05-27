<template>
  <div id="app">
    <nav-bar :is-logged="isLogged" />
    <router-view @user-logged-in="logged" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
//import MoviesApp from "./pages/MoviesApp.vue"

export default {
  name: "app",
  components: {
    NavBar
  },
  data() {
    isLogged: false
  },
  methods: {
    logged() {
      this.isLogged = true
      console.log("Logged: ", this.isLogged)
    }
  }
}
</script>


