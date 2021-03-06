import axios from "axios"
//import { authStore } from "../store/authStore.js"

axios.defaults.baseURL = "http://localhost:8000/api"

export default class AuthService {
  login(email, password) {
    return axios
      .post("/login", {
        email,
        password
      })
      .then(response => {
        console.log("login", response.data) // eslint-disable-line
        window.localStorage.setItem("loginToken", response.data.token)
        this.setAxiosDefaultAuthorizationHeader()
        //authStore.setIsAuthenticated(true)
      })
  }

  setAxiosDefaultAuthorizationHeader() {
    const TOKEN = window.localStorage.getItem("loginToken")
    axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`
  }

  logout() {
    window.localStorage.removeItem("loginToken")
    delete axios.defaults.headers.common["Authorization"]
  }

  isAuthenticated() {
    return !!window.localStorage.getItem("loginToken")
  }

  register(newUser) {
    return axios.post("/register", newUser)
  }
}

export const authService = new AuthService()
