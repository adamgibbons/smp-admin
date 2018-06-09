<template>
  <div class="columns">
    <div class="column is-4">
      <div class="box">
        <p>Download all of a user's data in CSV format</p>
        <br>
        <button @click="downloadCsvReport" class="button is-info">Download CSV</button>
      </div>
    </div>
    <div class="column is-4">
      <div class="box">
        <p>Run some other report</p>
        <br>
        <button class="button is-info">Does nothing</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['downloadCsvReport'])
  }
}
</script>
