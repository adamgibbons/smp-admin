<template>
  <div class="content">
    <h3 class="title is-3">Users</h3>
    <ol>
      <li v-for="({ name, email }, index) in users" :key="index">
        {{name}} / {{email}}
      </li>
    </ol>
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
