<template>
  <div id="app">
    <div class="primary-navigation">
      <div class="container-fluid">
        <div class="columns">
          <div class="column">
            SocialMoneyProject
          </div>
          <div class="column has-text-right">
            Login
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
export default {
  name: 'App'
}
</script>

<style>
.primary-navigation {
  background: #ddd;
  padding: 1em 2em;
  margin-bottom: 3em;
}
</style>
