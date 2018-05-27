<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-8">
        <div class="d-flex flex-row flex-wrap justify-content-start">
          <div v-for="movie in movies" :key="movie.id" class="align-self-stretch">
            <movie-row :movie="movie" />
          </div>
        </div>
      </div>
      <div class="col-4">

      </div>
    </div>

  </div>
</template>

<script>
import { MovieService } from "../services/MovieService"
import MovieRow from "../components/MovieRow"
import { mapActions } from "vuex"

export default {
  name: "movies-app",
  components: {
    MovieRow
  },
  data() {
    return {
      movie: {
        id: "",
        title: "",
        director: "",
        releaseDate: "",
        imageUrl: "",
        genre: ""
      },
      movies: []
    }
  },
  methods: {
    ...mapActions(["fetchMovies"]),
    searchMovies(searchTerm) {
      MovieService.getAllMovies(searchTerm).then(({ data }) => {
        this.movies = data
      })
    }
  },
  created() {
    // MovieService.getAllMovies().then(({ data }) => {
    //   this.movies = data
    // })
    this.$eventHub.$on("search-term-updated", searchTerm => {
      this.searchMovies(searchTerm)
    })
  },
  beforeRouteEnter(to, from, next) {
    MovieService.getAllMovies().then(({ data }) => {
      next(context => {
        context.movies = data
      })
    })
    // store.fetchMovies(next)
  }
}
</script>

<style>
</style>
