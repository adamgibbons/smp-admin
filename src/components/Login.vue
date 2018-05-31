<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">

      <h1 class="title is-3">Login</h1>

      <hr>

      <form @submit="handleLogin">
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" v-model="loginForm.email" required>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" v-model="loginForm.password" required>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button v-show="!authenticating" class="button is-link" type="submit">Sign in</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        email: null,
        password: null
      }
    }
  },
  computed: mapGetters(['authenticating']),
  methods: {
    ...mapActions(['login']),
    handleLogin (e) {
      e.preventDefault()

      this.login(this.loginForm)
    }
  }
}
</script>
