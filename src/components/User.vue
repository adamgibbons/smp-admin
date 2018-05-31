<template>
  <div class="content">
    <h3 class="title is-3">User</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['fetchUser'])
  },
  mounted () {
    this.fetchUser({ id: this.$route.params.id })
  }
}
</script>
