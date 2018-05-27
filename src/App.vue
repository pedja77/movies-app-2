<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue"
//import MoviesApp from "./pages/MoviesApp.vue"

export default {
  name: "app",
  components: {
    NavBar
  }
}
</script>


