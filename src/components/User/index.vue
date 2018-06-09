<template>
  <div>
    <h3 class="title is-3">User: {{selectedUser.name}}</h3>

    <div class="tabs">
      <ul>
        <li class="is-active"><a>Details</a></li>
        <li><a>Queries</a></li>
      </ul>
    </div>

    <router-view></router-view>
    <!-- <pre>{{selectedUser}}</pre> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  methods: {
    ...mapActions(['fetchUser'])
  },
  computed: {
    ...mapGetters(['selectedUser'])
  },
  mounted () {
    this.fetchUser({ id: this.$route.params.id })
  }
}
</script>

<style>
  .menu {
    font-weight: 500;
  }
  .admin-field {
    margin: 1em 0;
  }
  .admin-field .label,
  .admin-field .label:not(:last-child) {
    margin-bottom: 0;
    font-size: 1em;
    font-weight: 400;
  }
  .admin-field .value {
    font-size: 1.33em;
    font-weight: 600;
  }
  h4.title.is-4 {
    background-color: #ddd;
    padding: 0.5em 1em;
    margin: 0.5em 0;
  }
</style>
