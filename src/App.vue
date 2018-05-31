<template>
  <div id="app">
    <div class="primary-navigation">
      <div class="container-fluid">
        <div class="columns">
          <div class="column">
            <router-link to="/">SocialMoneyProject</router-link>
          </div>
          <div class="column has-text-right">
            <router-link to="/login" v-show="!authenticated">Login</router-link>
            <span @click="logoutUser" v-show="authenticated">Logout</span>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  methods: {
    ...mapActions(['logout']),
    logoutUser () {
      this.logout()
      this.$router.replace({ name: 'Login' })
    }
  },
  computed: {
    ...mapGetters(['authenticated'])
  }
}
</script>

<style>
.primary-navigation {
  background: #ddd;
  padding: 1em 2em;
  margin-bottom: 3em;
}
</style>
