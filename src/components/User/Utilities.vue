<template>
  <div>
    <h4 class="title is-4">Utilities</h4>
    <div class="columns">
        <div class="column">
          <h5 class="title is-5">Selected by User</h5>
          <ul>
            <li v-for="({ name, amount }, index) in selectedUtilities" :key="index">
              {{name}}:
              {{amount}}
            </li>
          </ul>
          <!-- <pre>{{selectedUtilities}}</pre> -->
        </div>
        <div class="column">
          <ul>
            <h5 class="title is-5">Not Selected</h5>
            <li v-for="({ name, amount }, index) in unselectedUtilities" :key="index">
              {{name}}
            </li>
          </ul>
          <!-- <pre>{{unselectedUtilities}}</pre> -->
        </div>
    </div>
    <!-- <pre>{{utilities}}</pre> -->
  </div>
</template>

<script>
export default {
  props: ['utilities'],
  computed: {
    selectedUtilities () {
      return Object.entries(this.utilities).filter(([utility, { include, amount }]) => {
        return include
      }).map((utility) => {
        return {
          name: utility[0],
          amount: parseInt(utility[1].amount)
        }
      })
    },
    unselectedUtilities () {
      return Object.entries(this.utilities).filter(([utility, { include, amount }]) => {
        return !include
      }).map((utility) => {
        return {
          name: utility[0]
        }
      })
    }
  }
}
</script>
