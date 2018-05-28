import Vue from "vue"
import VueRouter from "vue-router"

import MoviesApp from "../pages/MoviesApp.vue"
import AppLogin from "../pages/AppLogin.vue"
import AddMovie from "../pages/AddMovie.vue"
import AppRegister from "../pages/AppRegister.vue"
import AppMovie from "../pages/AppMovie.vue"

import { requiresAuth, guestOnly } from "./guards"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/movies"
    },
    {
      path: "/movies",
      component: MoviesApp,
      name: "movies",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      component: AppLogin,
      name: "login",
      meta: {
        guestOnly: true
      }
    },
    {
      path: "/add",
      component: AddMovie,
      name: "add-movie",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/register",
      component: AppRegister,
      name: "register",
      meta: {
        guestOnly: true
      }
    },
    {
      path: "/movies/:id",
      component: AppMovie,
      name: "movie",
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  Promise.resolve(to)
    .then(requiresAuth)
    .then(guestOnly)
    .then(() => {
      next()
    })
    .catch(redirect => {
      next(redirect)
    })
})

export default router
