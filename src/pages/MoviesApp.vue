<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-4">
        Currently selected movies: {{ numberOfSelectedMovies }}<br />
        <button class="btn btn-primary" @click="selectAllMovies">Select All</button>
        <button class="btn btn-primary" @click="deselectAllMovies">Deselect All</button>
      </div>
      <div class="col-8">
        Sort search results:
        <button class="btn btn-primary" @click="fetchSortedMovies({column: 'title', direction: 'asc'})">By title asc</button>
        <button class="btn btn-primary" @click="fetchSortedMovies({column: 'title', direction: 'desc'})">By title desc</button>
        <button class="btn btn-primary" @click="fetchSortedMovies({column: 'duration', direction: 'asc'})">By duration asc</button>
        <button class="btn btn-primary" @click="fetchSortedMovies({column: 'duration', direction: 'desc'})">By duration desc</button>
      </div>
    </div>
    <div class="alert alert-danger" role="alert" v-if="noMoviesFound">
      <p>No movies match search criteria</p>
    </div>
    <div class="row mb-6" v-else>
      <div class="col">
        <div class="d-flex flex-row flex-wrap justify-content-start">
          <div v-for="movie in movies" :key="movie.id" class="align-self-stretch">
            <movie-row :movie="movie" @movie-selected="selectMovie" :selected-movies-ids="selectedMoviesIds" />
          </div>
        </div>
      </div>
    </div>
    <pagination class="mt-6" :pagination-data="paginationData" @go-to-prev-page="goToPage" @go-to-next-page="goToPage" />
  </div>
</template>

<script>
import { MovieService } from "../services/MovieService"
import MovieRow from "../components/MovieRow"
import Pagination from "../components/Pagination.vue"
import { mapActions } from "vuex"

export default {
  name: "movies-app",
  components: {
    MovieRow,
    Pagination
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
      // requestParams: {
      //   term: "",
      //   skip: null,
      //   take: null,
      //   column: null,
      //   direction: null
      // },
      movies: [],
      noMoviesFound: false,
      selectedMoviesIds: [],
      paginationData: {}
    }
  },
  computed: {
    numberOfSelectedMovies() {
      return this.selectedMoviesIds.length
    }
  },
  methods: {
    ...mapActions(["fetchMovies"]),
    searchMovies(searchTerm) {
      MovieService.getAllMovies({ term: searchTerm }).then(({ data }) => {
        this.movies = data
        if (!this.movies.length) {
          this.noMoviesFound = true
        } else {
          this.noMoviesFound = false
        }
      })
    },
    selectMovie(id) {
      let idIndex = this.selectedMoviesIds.indexOf(id)
      if (idIndex > -1) {
        this.selectedMoviesIds.splice(idIndex, 1)
      } else {
        this.selectedMoviesIds.push(id)
      }
    },
    selectAllMovies() {
      this.selectedMoviesIds = this.movies.map(movie => movie.id)
    },
    deselectAllMovies() {
      this.selectedMoviesIds = []
    },
    fetchSortedMovies(params) {
      console.log("fetchSorted ", "entered")
      MovieService.getAllMovies(params).then(({ data }) => {
        //console.log("fetchSorted ", this.movies === data)
        this.movies = data.data
      })
    },
    goToPage(direction) {
      MovieService.getAllMovies({
        take: this.paginationData.per_page,
        page: this.paginationData.current_page + direction
      }).then(({ data }) => {
        this.paginationData = {
          current_page: data.current_page,
          first_page_url: data.first_page_url,
          from: data.from,
          last_page: data.last_page,
          last_page_url: data.last_page_url,
          next_page_url: data.next_page_url,
          path: data.path,
          per_page: data.per_page,
          prev_page_url: data.prev_page_url,
          to: data.to,
          total: data.total
        }
        this.movies = data.data
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
    MovieService.getAllMovies({ take: 5 }).then(({ data }) => {
      next(context => {
        console.log("DataWithTake ", data)
        context.paginationData = {
          current_page: data.current_page,
          first_page_url: data.first_page_url,
          from: data.from,
          last_page: data.last_page,
          last_page_url: data.last_page_url,
          next_page_url: data.next_page_url,
          path: data.path,
          per_page: data.per_page,
          prev_page_url: data.prev_page_url,
          to: data.to,
          total: data.total
        }
        context.movies = data.data
      })
    })
    // store.fetchMovies(next)
  }
}
</script>

<style>
</style>
