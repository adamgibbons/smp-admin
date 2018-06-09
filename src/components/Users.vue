<template>
  <div class="content">
    <h3 class="title is-3">Users</h3>

    <table class="table is-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Created</th>
          <th>Email</th>
          <th>ID</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="({name, email, created, _id}, index) in users" :key="index">
          <td><router-link :to="{name: 'UserProfile', params: { id: _id }}">{{name}}</router-link></td>
          <td>{{created | date}}</td>
          <td><a :href="'mailto:' + email">{{email}}</a></td>
          <td><code>{{_id}}</code></td>
          <td>
            <router-link class="button is-small is-link is-outlined" :to="{name: 'UserProfile', params: { id: _id }}">Details</router-link>
            &nbsp;
            <router-link class="button is-small is-link is-outlined" :to="{name: 'UserProfile', params: { id: _id }}">Notes</router-link>
          </td>
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
  },
  filters: {
    date: (date) => {
      if (date) return new Date(date).toLocaleString()

      return '-'
    }
  }
}
</script>

<style scoped>
  code {
    color: #666;
  }
</style>
