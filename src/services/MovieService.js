import Axios from "axios"

class MovieService {
  constructor() {
    this.client = new Axios.create({
      baseURL: "http://localhost:8000/api/"
    })
  }

  getAllMovies(term = "", take = null, skip = null) {
    return this.client.get("/movies", {
      params: {
        term,
        take,
        skip
      }
    })
  }

  addMovie(movie) {
    return this.client.post("/movies", movie)
  }
}

const movieService = new MovieService()

export { movieService as MovieService }
