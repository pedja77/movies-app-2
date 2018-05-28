<template>
  <div class="container mt-4">
    <form class="form-signin" @submit.prevent="register">
      <h2 class="form-signin-heading">Please register</h2>
      <input v-model="user.name" type="text" class="form-control" name="name" placeholder="Name" autofocus/>
      <div class="alert alert-danger" v-if="errors.name">
        <p v-for="(err, index) in errors.name" :key="index">{{ err }}</p>
      </div>
      <input v-model="user.email" type="text" class="form-control" name="email" placeholder="Email Address" />
      <div class="alert alert-danger" v-if="errors.email">
        <p v-for="(err, index) in errors.email" :key="index">{{ err }}</p>
      </div>
      <input v-model="user.password" type="password" class="form-control" name="password" placeholder="Password" />
      <div class="alert alert-danger" v-if="errors.password">
        <p v-for="(err, index) in errors.password" :key="index">{{ err }}</p>
      </div>
      <input v-model="user.password_confirmation" type="password" class="form-control" name="password_confirmation" placeholder="Confirm password" />
      <div class="alert alert-danger" v-if="errors.password_confirmation">
        <p v-for="(err, index) in errors.password_confirmation" :key="index">{{ err }}</p>
      </div>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { authService } from "../services/Auth.js"

export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: {}
    }
  },
  methods: {
    register() {
      authService
        .register(this.user)
        .then(() => {
          this.$router.push({ name: "login" })
        })
        .catch(err => {
          console.log(err.response.data)
          this.errors = err.response.data
        })
    }
  }
}
</script>

<style>
</style>
