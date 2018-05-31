<template>
  <div class="content">
    <h3 class="title is-3">Users</h3>

    <table class="table is-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Created</th>
          <th>Updated</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({name, email}, index) in users" :key="index">
          <td>{{name}}</td>
          <td>{{email}}</td>
          <td>timestamp</td>
          <td>timestamp</td>
          <td>actions</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['users'])
  },
  methods: {
    ...mapActions(['fetchUsers'])
  },
  mounted () {
    this.$store.dispatch('fetchUsers')
  }
}
</script>
