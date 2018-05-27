<template>
  <div>
    <div class="card" style="width: 18rem;" :class="{ 'bg-dark text-white': isSelected }">
      <img class="card-img-top" :src="movie.imageUrl" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <ul class="list-unstyled">
          <li class="unstyled-list-item">Director: {{ movie.director }}</li>
          <li class="unstyled-list-item">Genre: {{ movie.genre }}</li>
          <li class="unstyled-list-item">Release date: {{ movie.releaseDate }}</li>
          <li class="unstyled-list-item">Duration: {{ movie.duration }} min</li>
        </ul>
        <button href="#" class="btn btn-primary" @click="selectMovie">Select</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "movie-row",
  props: {
    movie: {
      type: Object,
      required: true
    },
    selectedMoviesIds: {
      type: Array,
      required: true
    }
  },
  methods: {
    selectMovie() {
      this.$emit("movie-selected", this.movie.id)
    }
  },
  computed: {
    isSelected() {
      return this.selectedMoviesIds.indexOf(this.movie.id) > -1
    }
  }
}
</script>

<style>
</style>
