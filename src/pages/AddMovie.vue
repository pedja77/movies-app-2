<template>
  <div class="container">
    <h3>Add new movie</h3>
    <form @submit.prevent="addMovie">
      <div class="form-group">
        <label for="title">Movie title</label>
        <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="movie.title">
        <div class="alert alert-danger" role="alert" v-if="errors.title">
          {{ errors.title[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="director">Director</label>
        <input type="text" class="form-control" id="director" placeholder="Enter directors name" v-model="movie.director">
        <div class="alert alert-danger" role="alert" v-if="errors.director">
          {{ errors.director[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="imageUrl">Cover image url</label>
        <input type="text" class="form-control" id="imageUrl" placeholder="Enter cover image url" v-model="movie.imageUrl">
        <div class="alert alert-danger" role="alert" v-if="errors.imageUrl">
          {{ errors.imageUrl[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="duration">Duration</label>
        <input type="text" class="form-control" id="duration" placeholder="Enter duration" v-model="movie.duration">
        <div class="alert alert-danger" role="alert" v-if="errors.duration">
          {{ errors.duration[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="releaseDate">Release date</label>
        <input type="text" class="form-control" id="releaseDate" placeholder="Enter release date" v-model="movie.releaseDate">
        <div class="alert alert-danger" role="alert" v-if="errors.releaseDate">
          {{ errors.releaseDate[0] }}
        </div>
      </div>
      <div class="form-group">
        <label for="genre">Genre</label>
        <input type="text" class="form-control" id="genre" placeholder="Enter genre" v-model="movie.genre">
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { MovieService } from "../services/MovieService.js"

export default {
  data() {
    return {
      movie: {
        title: "",
        director: "",
        imageUrl: "",
        duration: "",
        releaseDate: "",
        genre: ""
      },
      errors: {}
    }
  },
  methods: {
    addMovie(movie) {
      console.log("service ", MovieService)
      MovieService.addMovie(this.movie)
        .then(() => {
          this.errors = {}
          this.$router.push("/movies")
        })
        .catch(err => {
          //console.log("err ", err.response.data)
          this.errors = err.response.data
        })
    }
  }
}
</script>

<style>
</style>
