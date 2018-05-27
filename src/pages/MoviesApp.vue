<template>
  <div class="container mt-4">
    <div class="alert alert-danger" role="alert" v-if="noMoviesFound">
      <p>No movies match search criteria</p>
    </div>
    <div class="row" v-else>
      <div class="col">
        <div class="d-flex flex-row flex-wrap justify-content-start">
          <div v-for="movie in movies" :key="movie.id" class="align-self-stretch">
            <movie-row :movie="movie" />
          </div>
        </div>
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
      movies: [],
      noMoviesFound: false
    }
  },
  methods: {
    ...mapActions(["fetchMovies"]),
    searchMovies(searchTerm) {
      MovieService.getAllMovies(searchTerm).then(({ data }) => {
        this.movies = data
        if (!this.movies.length) {
          this.noMoviesFound = true
        } else {
          this.noMoviesFound = false
        }
      })
    }
  },
  created() {
    // MovieService.getAllMovies().then(({ data }) => {
    //   this.movies = data
    // })
    this.$eventHub.$on("search-term-updated", this.searchMovies)
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
