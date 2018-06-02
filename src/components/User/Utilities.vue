<template>
  <ExpenseList title="Utilities" :expenses="utilities" />
</template>

<script>
import ExpenseList from './ExpenseList'

export default {
  props: ['utilities'],
  components: { ExpenseList }
}
</script>
