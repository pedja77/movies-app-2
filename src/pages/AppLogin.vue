<template>
  <div class="container mt-4">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please login</h2>
      <input v-model="email" type="text" class="form-control" name="email" placeholder="Email Address" autofocus />
      <input v-model="password" type="password" class="form-control" name="password" placeholder="Password" />
      <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
    </form>
    <div v-if="errMessage" class="alert alert-danger" role="alert">
      {{ errMessage }}
    </div>
  </div>
</template>

<script>
import { authService } from "../services/Auth"
//import { globalEventBus } from "../services/GlobalEventBus.js"
export default {
  data() {
    return {
      email: "",
      password: "",
      errMessage: ""
    }
  },
  methods: {
    login() {
      authService
        .login(this.email, this.password)
        .then(() => {
          this.errMessage = ""
          //console.log("before push")
          this.$router.push({ name: "movies" })
          this.$eventHub.$emit("user-loged-in", authService.isAuthenticated())
          //console.log("after push")
        })
        .catch(err => {
          let error = err.response.data.error.split("_").join(" ")
          this.errMessage = error
          //console.log("EE", err.response.data.error)
        })
    }
  }
}
</script>