import Vue from "vue"
import VueRouter from "vue-router"

import MoviesApp from "./pages/MoviesApp.vue"

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/movies" },
    { path: "/movies", component: MoviesApp, name: "movies" }
  ]
})
