<template>
  <div class="container">
    AppMovie {{ movie }}
  </div>
</template>

<script>
import { MovieService } from "../services/MovieService.js"

export default {
  data() {
    return {
      movie: {}
    }
  },
  created() {
    console.log("id", this.$route.params.id)
    MovieService.getMovie(this.$route.params.id)
      .then(({ data }) => {
        console.log("data", data)
        this.movie = data
      })
      .catch(err => {
        console.log("err ", err.response)
      })
  },
  computed: {
    routeId() {
      return this.$route.params.id
    }
  }
}
</script>

<style>
</style>
