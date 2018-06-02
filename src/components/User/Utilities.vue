<template>
  <ExpenseList title="Utilities" :expenses="utilities" filterType="utilities" />
</template>

<script>
import ExpenseList from './ExpenseList'

export default {
  props: ['utilities'],
  components: { ExpenseList }
}
</script>
