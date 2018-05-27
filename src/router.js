import Vue from "vue"
import VueRouter from "vue-router"

import MoviesApp from "./pages/MoviesApp.vue"
import AppLogin from "./pages/AppLogin.vue"
import AddMovie from "./pages/AddMovie.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/movies" },
    { path: "/movies", component: MoviesApp, name: "movies" },
    { path: "/login", component: AppLogin, name: "login" },
    { path: "/add", component: AddMovie, name: "add-movie" }
  ]
})
