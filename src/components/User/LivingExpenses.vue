<template>
  <div>
    <ExpenseList title="Living Expenses" :expenses="livingExpenses" />
    <hr>
    <pre>{{livingExpenses}}</pre>
  </div>
</template>

<script>
import ExpenseList from './ExpenseList'

export default {
  props: ['livingExpenses'],
  components: { ExpenseList }
}
</script>
