<template>
  <div>
    <h4 class="title is-4">{{title}}</h4>
    <div class="columns">
        <div class="column">
          <h5 class="title is-5">Selected by User</h5>
          <ul>
            <li v-for="({ name, amount }, index) in selectedExpenses" :key="index">
              <span v-if="filterType === 'insurance'">{{name | insuranceLabels}}</span>
              <span v-if="filterType === 'livingExpenses'">{{name | livingExpenseLabels}}</span>
              <span v-if="filterType === 'utilities'">{{name | utilitiesLabels}}</span>
              {{amount | dollars}}
            </li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <h5 class="title is-5">Not Selected</h5>
            <li v-for="({ name, amount }, index) in unselectedExpenses" :key="index">
              <span v-if="filterType === 'insurance'">{{name | insuranceLabels}}</span>
              <span v-if="filterType === 'livingExpenses'">{{name | livingExpenseLabels}}</span>
              <span v-if="filterType === 'utilities'">{{name | utilitiesLabels}}</span>
            </li>
          </ul>
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
