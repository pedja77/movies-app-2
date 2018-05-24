<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="movie.imageUrl" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <ul class="list-unstyled">
          <li class="unstyled-list-item">Director: {{ movie.director }}</li>
          <li class="unstyled-list-item">Genre: {{ movie.genre }}</li>
          <li class="unstyled-list-item">Release date: {{ movie.releaseDate }}</li>
          <li class="unstyled-list-item">Duration: {{ movie.duration }} min</li>
        </ul>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "movie-row",
  props: {
    movie: Object,
    required: true
  }
}
</script>

<style>
</style>
