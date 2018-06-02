<template>
  <ExpenseList title="Living Expenses" :expenses="livingExpenses" filterType="livingExpenses"/>
</template>

<script>
import ExpenseList from './ExpenseList'

export default {
  props: ['livingExpenses'],
  components: { ExpenseList }
}
</script>
