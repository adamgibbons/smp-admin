<template>
  <div class="content">
    <h3 class="title is-3">User</h3>
    <pre>{{selectedUser}}</pre>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['selectedUser'])
  },
  methods: {
    ...mapActions(['fetchUser'])
  },
  mounted () {
    this.fetchUser({ id: this.$route.params.id })
  }
}
</script>
