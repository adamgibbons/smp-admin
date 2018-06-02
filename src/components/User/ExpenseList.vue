<template>
  <div>
    <h4 class="title is-4">{{title}}</h4>
    <div class="columns">
        <div class="column">
          <table class="table is-striped">
            <thead>
              <tr>
                <th colspan="2">Selected by User</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ name, amount }, index) in selectedExpenses" :key="index">
                <td>
                  <span v-if="filterType === 'insurance'">{{name | insuranceLabels}}</span>
                  <span v-if="filterType === 'livingExpenses'">{{name | livingExpenseLabels}}</span>
                  <span v-if="filterType === 'utilities'">{{name | utilitiesLabels}}</span>
                </td>
                <td>{{amount | dollars}}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="column">
          <table class="table is-striped">
            <thead>
              <tr>
                <th colspan="2">Not Selected</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="({ name, amount }, index) in unselectedExpenses" :key="index">
                <td>
                  <span v-if="filterType === 'insurance'">{{name | insuranceLabels}}</span>
                  <span v-if="filterType === 'livingExpenses'">{{name | livingExpenseLabels}}</span>
                  <span v-if="filterType === 'utilities'">{{name | utilitiesLabels}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  </div>
</template>

<script>
import livingExpenseLabels from '@/filters/living-expense-labels'
import insuranceLabels from '@/filters/insurance-labels'
import utilitiesLabels from '@/filters/utilities-labels'

export default {
  props: ['title', 'expenses', 'filterType'],
  filters: { livingExpenseLabels, insuranceLabels, utilitiesLabels },
  computed: {
    selectedExpenses () {
      return Object.entries(this.expenses).filter(([expense, { include, amount }]) => {
        return include
      }).map((expense) => {
        return {
          name: expense[0],
          amount: parseInt(expense[1].amount)
        }
      })
    },
    unselectedExpenses () {
      return Object.entries(this.expenses).filter(([expense, { include, amount }]) => {
        return !include
      }).map((expense) => {
        return {
          name: expense[0]
        }
      })
    }
  }
}
</script>
