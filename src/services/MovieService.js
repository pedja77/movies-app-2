import Axios from 'axios'

class MovieService {

  constructor() {
    this.client = new Axios.create({
      baseURL: 'http://localhost:8000/api/'
    })
  }

  getAllMovies() {
    return this.client.get('/movies')
  }
}

const movieService = new MovieService()

export { movieService as MovieService }